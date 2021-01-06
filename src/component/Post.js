import React, { Component } from 'react';
import "./Post.css";

class Post extends Component {
    constructor(props) {
        super();
        this.state = {
            show: false,
        }
    };

    moreComment = () => {
        this.setState({
            show: true
        })
    };


    render() {
        const comments = this.props.comments
        console.log(comments);
        let button = null;
        
        if (this.state.show) {
            button = null;
        }
        else {
            button = <button onClick={this.moreComment}>{"more"}</button>
        }

        return (
            <div className="Post">
                <header>
                    <div className="HeaderUserImg">
                        <img alt="" class="_6q-tv" width="32" height="32" data-testid="user-avatar" draggable="false" src={this.props.userImg}/>
                    </div>                        
                    <div className="HeaderUserID">{this.props.username}</div>
                    <div className="HeaderIcon">
                        <svg aria-label="More options" class="_8-yf5 " fill="#262626" height="16" viewBox="0 0 48 48" width="16"><circle clipRule="evenodd" cx="8" cy="24" fillRule="evenodd" r="4.5"></circle><circle clipRule="evenodd" cx="24" cy="24" fillRule="evenodd" r="4.5"></circle><circle clipRule="evenodd" cx="40" cy="24" fillRule="evenodd" r="4.5"></circle></svg>
                    </div>
                </header>

                <div className="PostImg">
                    <img alt="" class="FFVAD" decoding="auto" sizes="614px" draggable="false" src={this.props.postImg} />                
                </div>
                
                <div className="Info">
                    <div className="Like">
                        <svg aria-label="Like" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                    </div>
                    <div className="SeeComment">
                        <svg aria-label="Comment" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clipRule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fillRule="evenodd"></path></svg>
                    </div>
                    <div className="Share">
                        <svg aria-label="Share Post" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
                    </div>

                    <div className="Save">
                        <svg aria-label="Save" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg>
                    </div>
                </div>

                <div className="Liked">
                    <div className="LikedBy">Liked by </div>
                    <div className="LikedUser"> asddasd and others</div>
                </div>

                <div className="UserBoard">
                    <div className="UserID">
                        {this.props.username}
                    </div>
                    <div className="Comment">
                        {
                        this.state.show 
                        ? <div className="UserComment">{this.props.caption}</div> 
                        : <div className="UserCommentHide">{this.props.caption}</div>
                        }
                        {button}
                    </div>
                </div>

                <div className="GuestSection">
                    {comments.map(comment => (
                        <div className="GuestPartition">
                            <div className="GuestInfo">
                                <div className="GuestId">
                                    {comment.user}
                                </div>
                                <div className="GuestComment">
                                    {comment.comment}
                                </div>
                            </div>
                            <div className="CommentLike">
                                <svg aria-label="Like" class="_8-yf5 " fill="#262626" height="12" viewBox="0 0 48 48" width="12"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                            </div>
                        </div>
                    ))}
        
                    
                </div>

                <div className="Time">
                    <div className="TimePass">
                        {this.props.curTime}
                    </div>
                </div>

                <div className="AddComment">
                    <input className="CommentInput" placeholder="Add a comment..."/>
                    <button>Post</button>
                </div>


            </div>
        );
    }
}

export default Post;