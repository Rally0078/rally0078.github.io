import React from "react";
import '../css/App.css'
import YoutubeIframe from './YoutubeIframe.tsx'

const PostText = (props) => {
    const {postTitle, postDescription} = props;
    return (
        <div>
            <hr class='spacing'></hr>
            <h3>{postTitle}</h3>

            <div>{postDescription.map((line) => { return <p>{line}</p> })}</div>
        </div>
    );
}

const PostImage = (props) => {
    const {postTitle, postDescription, imageName} = props;
    return (
        <div>
            <hr class='spacing'></hr>
            <h3>{postTitle}</h3>
            <img src={imageName} alt="missingimage"></img>
            <div>{postDescription.map((line) => { return <p>{line}</p> })}</div>
        </div>
    );
}

const PostYoutube = (props) => {
    const {postTitle, postDescription, videoId} = props;
    return (
        <div>
            <hr class='spacing'></hr>
            <h3>{postTitle}</h3>
            <YoutubeIframe videoId={videoId} videoTitle={postTitle} />
            <div>{postDescription.map((line) => { return <p>{line}</p> })}</div>
        </div>
    );
}
const PostTypes = {
    PostText,
    PostYoutube,
    PostImage
};
export default PostTypes;