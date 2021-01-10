import React, { useState } from 'react';
import { Button } from '@material-ui/core/'
import { db, storage } from '../firebase'
import firebase from "firebase/app";
import "./ImageUpload.css"

function ImageUpload({ username, userImgUrl }){
    const [caption, setCaption] = useState('');
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);

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
                        userImgUrl: userImgUrl,
                        username: username,
                        postImg: url,
                        likes: [],
                        likeNum: 0,
                        caption: caption,
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    });
                    setProgress(0);
                    setCaption("");
                    setImage(null);
                })
            }
        )
    }


    return (
        <div className="UploadModule">
            <div className="UploadSection">                
                <input className="Caption" type="text" placeholder="Enter a caption..." onChange={event => setCaption(event.target.value)} value={caption}></input>
                <br/>
                <progress className="ProgressBar" value={progress} max="100"></progress>
                <br/>
                <input className="FilePicker" type="file" onChange={handleChange}></input>
                
                <small>{progress}%</small>
                
            </div>

            <div>
                {image && caption 
                ? <div><Button onClick={handleUpload}>POST✅</Button></div>
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