import React from "react";

import SearchBar from "./SearchBar";
import youtubeApi from "../api/youtube-api";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

export default class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onFomtSubmitHandler = async (text) => {
    try {
      const responseData = await youtubeApi.get("/search", {
        params: {
          q: text,
        },
      });

      this.setState({ videos: responseData.data.items });
    } catch (err) {
      console.log(err);
    }
  };

  onVideoSelectHandler = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: 20 }}>
        <SearchBar onFormSubmit={this.onFomtSubmitHandler} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={this.onVideoSelectHandler}
          videos={this.state.videos}
        />
      </div>
    );
  }
}
