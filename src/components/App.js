import React from "react";

import SearchBar from "./SearchBar";
import youtubeApi from "../api/youtube-api";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

export default class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onFomtSubmitHandler("cute cats");
  }

  onFomtSubmitHandler = async (text) => {
    try {
      const responseData = await youtubeApi.get("/search", {
        params: {
          q: text,
        },
      });

      this.setState({
        videos: responseData.data.items,
        selectedVideo: responseData.data.items[0],
      });
    } catch (err) {
      console.log(err);
    }
  };

  onVideoSelectHandler = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onFomtSubmitHandler} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelectHandler}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
