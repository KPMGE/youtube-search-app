import axios from "axios";

const ACCESS_KEY = "Put your access key here";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: ACCESS_KEY,
  },
});
