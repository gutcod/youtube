import React from "react";
import { Card, Col } from "antd";
import Meta from "antd/lib/card/Meta";
import "./VideoItem.css";

export const VideoItem = ({ video, handleVideoSelect }) => {
  return (
    <Col span={6}>
      <Card
        style={{ width: 300, height: 400 }}
        cover={
          <img
            alt={video.snippet.description}
            src={video.snippet.thumbnails.medium.url}
            className="img"
          />
        }
      >
        <Meta
          title={video.snippet.title}
          description={video.snippet.description}
        />
      </Card>
    </Col>
  );
};
