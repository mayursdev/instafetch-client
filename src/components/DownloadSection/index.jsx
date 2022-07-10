import React from "react";
import PostItems from "./PostItems";

const DownloadSection = (props) => {
  const { postDetails } = props;

  const isPostDetailsEmpty = Object.keys(postDetails).length === 0;

  return (
    <section className="px-4 my-4 min-h-screen md:mt-6">
      {isPostDetailsEmpty ? null : <PostItems postDetails={postDetails} />}
    </section>
  );
};

export default DownloadSection;
