import React from "react";

const PostMedia = (props) => {
  const { postDetails } = props;
  const base64ImgPreview = postDetails.base64EncodedPreview;

  return (
    <div className="post-media p-1">
      <img
        src={`data:image/jpg;base64, ${base64ImgPreview}`}
        className="sm:h-72 w-full sm:object-cover sm:hover:object-contain transition-all"
        alt={`post thumbnail`}
        title={`post thumbnail`}
      />
    </div>
  );
};

export default PostMedia;
