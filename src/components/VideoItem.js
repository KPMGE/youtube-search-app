import React from "react";
import "./VideoItem.css";

export default class VideoItem extends React.Component {
  render() {
    const videoThumbnail = this.props.video.snippet.thumbnails.medium.url;
    const videoTitle = this.props.video.snippet.title;

    return (
      <div
        onClick={() => this.props.onVideoSelect(this.props.video)}
        className="video-item item"
      >
        <img className="ui image" src={videoThumbnail} alt="thumb" />

        <div className="content">
          <div className="header">{videoTitle}</div>
        </div>
      </div>
    );
  }
}
