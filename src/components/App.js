import React from "react";

import SearchBar from "./SearchBar";
import youtubeApi from "../api/youtube-api";
import VideoList from "./VideoList";

export default class App extends React.Component {
  state = { videos: [] };

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

  render() {
    return (
      <div className="ui container" style={{ marginTop: 20 }}>
        <SearchBar onFormSubmit={this.onFomtSubmitHandler} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}
