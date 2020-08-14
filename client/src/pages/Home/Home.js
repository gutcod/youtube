import React, { Component } from "react";
import youtube from "../../api/youtube";
import { Layout } from "antd";
import SeachBar from "../../components/Searchbar/SeachBar";
import { VideoList } from "../../components/VideoList/VideoList";
const { Content, Footer } = Layout;

export default class Home extends Component {
  state = {
    videos: [],
    videoSelect: null,
    input: "",
  };
  handleChange = (event) => {
    this.setState({ input: event.target.value });
  };
  handleSubmit = async () => {
    const response = await youtube.get("/search", {
      params: {
        q: this.state.input,
      },
    });
    this.setState({
      videos: response.data.items,
    });
    console.log(this.state.videos);
  };
  handleVideoSelect = (video) => {
    this.setState({ videoSelect: video });
  };
  render() {
    return (
      <Layout>
        <Content style={{ padding: "0 50px", marginTop: 64 }}>
          <SeachBar
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            input={this.state.input}
          />
          <VideoList
            handleVideoSelect={this.handleVideoSelect}
            video={this.state.videos}
          />
        </Content>
        <Footer
          style={{
            textAlign: "center",
            position: "fixed",
            left: 0,
            bottom: 0,
            width: "100%",
          }}
        >
          Andrei Gutan
        </Footer>
      </Layout>
    );
  }
}
