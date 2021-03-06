import React from "react";

export default class VideoDetail extends React.Component {
  render() {
    if (!this.props.video) {
      return (
        <div>
          <h2>Loading...</h2>
        </div>
      );
    }

    const videoTitle = this.props.video.snippet.title;
    const videoDescription = this.props.video.snippet.description;
    const videosSourde = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;

    return (
      <div>
        <div className="ui embed">
          <iframe title="video player" src={videosSourde} />
        </div>
        <div className="ui segment">
          <h4 className="ui header">{videoTitle}</h4>
          <p>{videoDescription}</p>
        </div>
      </div>
    );
  }
}
