import React from "react";
import SearchBar from "./SearchBar";
import youtubeApi from "../api/youtube-api";

export default class App extends React.Component {
  onFomtSubmitHandler = async (text) => {
    try {
      const responseData = await youtubeApi.get("/search", {
        params: {
          q: text,
        },
      });

      console.log(responseData);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: 20 }}>
        <SearchBar onFormSubmit={this.onFomtSubmitHandler} />
      </div>
    );
  }
}
