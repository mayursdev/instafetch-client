import React from "react";
import ImagePost from "./ImagePost";
import VideoPost from "./VideoPost";

const PostItems = (props) => {
  const { postDetails } = props;

  const { user } = postDetails;

  const renderPostItem = (postDetails) => {
    const isImagePost = postDetails.media_type === 1;

    if (isImagePost) {
      return (
        <ImagePost key={postDetails.pk} postDetails={postDetails} user={user} />
      );
    } else {
      return (
        <VideoPost key={postDetails.pk} postDetails={postDetails} user={user} />
      );
    }
  };

  const renderPostItems = (children) => {
    return children.map((child) => renderPostItem(child));
  };

  const renderPost = (postDetails) => {
    if (postDetails.children_count !== undefined)
      return renderPostItems(postDetails.children);
    else return renderPostItem(postDetails);
  };

  return (
    <div className="posts-list container mx-auto py-4 md:py-6 sm:flex sm:flex-wrap sm:gap-0 sm:justify-center">
      {renderPost(postDetails)}
    </div>
  );
};

export default PostItems;
