import React, { useState } from 'react';
import { Button } from '@material-ui/core/'
import { db, storage } from '../firebase'
import firebase from "firebase";
import "./ImageUpload.css"

function ImageUpload({ username, userImg }){
    const [caption, setCaption] = useState('');
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    let postCheck = false;
    const handleChange = (e) => {
        if (e.target.files[0]){
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state changed",
            (snapshot) => {
                const ratio = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(ratio);
            },
            (error) => {
                console.log(error);
                alert(error.message);
            },
            () => {
                storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                    db.collection("posts").add({
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        caption: caption,
                        postImg: url,
                        username: username,
                        comments:[],
                        userImg: userImg
                    });
                    setProgress(0);
                    setCaption("");
                    setImage(null);
                
                })
            }
        )
    }

    
    if (image && caption) {
        postCheck = true;
    }


    return (
        <div className="UploadModule">
            <div className="UploadSection">                
                <input className="Caption" type="text" placeholder="Enter a caption..." onChange={event => setCaption(event.target.value)} value={caption}></input>
                <input className="FilePicker" type="file" onChange={handleChange}></input>
                <small>{progress}%</small>
                <progress className="ProgressBar" value={progress} max="100"></progress>
            </div>

            <div className="BooleanCheck">
                {postCheck 
                ? <div><Button className="UploadButton" onClick={handleUpload}>POST</Button></div>
                : <div><Button>POST🚫</Button></div>
                }
                <div className="UploadChecker">
                    <div>
                        {caption ? "Caption ✅" : <div className="Checker">Caption<div className="RequiredColor" >Required</div></div>}
                    </div>
                    <div>
                        {image ? "Image ✅" : <div className="Checker">Image<div className="RequiredColor" >Required</div></div>}
                    </div>
                </div>    
            </div>
            
        </div>
    )
}

export default ImageUpload;