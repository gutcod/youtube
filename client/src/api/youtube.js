import axios from "axios";

const KEY = "AIzaSyBv2NV3ymhEIs1WVwLH6Phqb46iI_uCsXc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 12,
    key: KEY,
  },
});
