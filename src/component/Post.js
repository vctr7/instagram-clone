import React, { Component } from 'react';
import "./Post.css";


// const Search = () => {
    
//     const onClick = () => setShowResults(true)
//     return (
//       <div>
//         <input type="submit" value="Search" onClick={onClick} />
//         { showResults ? <Show /> : <Hide /> }
//       </div>
//     )
// };



class Post extends Component {
    constructor() {
        // super(props);
        super();
        this.state = {
            show: false,
        }
    }
    handleClick = () => {
        // console.log("click");
        this.setState({
            show: true
        })
    };

    render() {
        let button = null;
        
        if (this.state.show) {
            button = null;
        }
        else {
            button = <button onClick={this.handleClick}>{"more"}</button>
        }

        return (
            <div className="Post">
                <header>
                    <div className="HeaderUserImg">
                        <img alt="" class="_6q-tv" width="32" height="32" data-testid="user-avatar" draggable="false" src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/69320658_499968874134656_3492344513760854016_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=UELlE86fzV8AX_nMguH&amp;tp=1&amp;oh=1f5452e2c1dca76f8064089d3a9c1905&amp;oe=601BBEA8"/>
                    </div>                        
                    <div className="HeaderUserID">vctr</div>
                    <div className="HeaderIcon">
                        <svg aria-label="More options" class="_8-yf5 " fill="#262626" height="16" viewBox="0 0 48 48" width="16"><circle clip-rule="evenodd" cx="8" cy="24" fill-rule="evenodd" r="4.5"></circle><circle clip-rule="evenodd" cx="24" cy="24" fill-rule="evenodd" r="4.5"></circle><circle clip-rule="evenodd" cx="40" cy="24" fill-rule="evenodd" r="4.5"></circle></svg>
                    </div>
                </header>
                <div className="PostImg">
                    <img class="FFVAD" decoding="auto" sizes="614px" draggable="false" srcset="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/134280846_757482665145849_5099090728139419421_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_cat=109&amp;_nc_ohc=Sw9Ys2BwqvgAX9XKlNq&amp;tp=1&amp;oh=802ec975a8003c045551ded80c081cdd&amp;oe=601DA3E4 640w,https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/134280846_757482665145849_5099090728139419421_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_cat=109&amp;_nc_ohc=Sw9Ys2BwqvgAX9XKlNq&amp;tp=1&amp;oh=ad3fd11490e4bffdd41b87aade7098f1&amp;oe=601C42A8 750w,https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/134280846_757482665145849_5099090728139419421_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_cat=109&amp;_nc_ohc=Sw9Ys2BwqvgAX9XKlNq&amp;tp=1&amp;oh=7bd57766f8120a5765d3ae173b9f5588&amp;oe=601F43A8 1080w" src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/134280846_757482665145849_5099090728139419421_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_cat=109&amp;_nc_ohc=Sw9Ys2BwqvgAX9XKlNq&amp;tp=1&amp;oh=7bd57766f8120a5765d3ae173b9f5588&amp;oe=601F43A8" />                
                </div>
                <div className="Info">
                    <div className="Like">
                        <svg aria-label="Like" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                    </div>
                    <div className="SeeComment">
                        <svg aria-label="Comment" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path></svg>
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
                        vctr
                    </div>
                    <div className="Comment">
                        {
                        this.state.show 
                        ? <div className="UserComment">show 새해 복 많이 받으세요~마바사ㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷ
                        sㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷ</div> 
                        : <div className="UserCommentHide">hide 새해 복 많이 받으세요~마바사ㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷ</div>
                        }
                        {button}
                    </div>
                </div>

                <div className="GuestSection">
                    <div className="GuestId">
                        daniel_likees
                    </div>
                    <div className="GuestComment">
                        가나다라 마바사ㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷ
                   </div>
                    <div className="CommentLike">
                        <svg aria-label="Like" class="_8-yf5 " fill="#262626" height="12" viewBox="0 0 48 48" width="12"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                    </div>
                </div>
                <div className="Time">
                    <div className="TimePass">
                        3 DAYS AGO
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