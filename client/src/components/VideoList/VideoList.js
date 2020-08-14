import React from "react";
import { VideoItem } from "./VideoItem";
import { Row } from "antd";

export const VideoList = ({ video, handleVideoSelect }) => {
  const renderedVideos = video.map((video, index) => {
    return (
      <VideoItem
        key={index}
        video={video}
        handleVideoSelect={handleVideoSelect}
      />
    );
  });
  return (
    <Row gutter={[16, 16]} justify="center" flex={4}>
      {renderedVideos}
    </Row>
  );
};
