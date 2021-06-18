import React from "react";

import VideoItem from "./VideoItem";

export default class VideoList extends React.Component {
  render() {
    const renderedList = this.props.videos.map((video) => {
      return (
        <VideoItem onVideoSelect={this.props.onVideoSelect} video={video} />
      );
    });

    return <div className="ui relaxed divided list">{renderedList}</div>;
  }
}
