import React from "react";
import PostItems from "./PostItems";
import Loader from "../Loader";

const DownloadSection = (props) => {
  const { postDetails, isLoading } = props;

  const isPostDetailsEmpty = Object.keys(postDetails).length === 0;

  return (
    <section className="px-4 min-h-screen relative">
      {isLoading === true ? <Loader /> : null}
      {!isPostDetailsEmpty ? <PostItems postDetails={postDetails} /> : null}
    </section>
  );
};

export default DownloadSection;
