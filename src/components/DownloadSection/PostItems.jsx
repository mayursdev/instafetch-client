import React from "react";
import ImagePost from "./ImagePost";
import VideoPost from "./VideoPost";

const PostItems = (props) => {
  const { postDetails } = props;

  const renderPost = (postDetails) => {
    const isImagePost = postDetails.media_type === 1;

    if (isImagePost) {
      return <ImagePost postDetails={postDetails} />;
    } else {
      return <VideoPost postDetails={postDetails} />;
    }
  };

  return (
    <div className="posts-list container mx-auto sm:flex sm:flex-wrap sm:gap-0 sm:justify-center">
      {renderPost(postDetails)}
    </div>
  );
};

export default PostItems;
