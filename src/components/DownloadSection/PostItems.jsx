import React from "react";
import ImagePost from "./ImagePost";
import VideoPost from "./VideoPost";

const PostItems = () => {
  return (
    <div className="posts-list container mx-auto sm:flex sm:flex-wrap sm:gap-0 sm:justify-center">
      <ImagePost />
      <VideoPost />
    </div>
  );
};

export default PostItems;
