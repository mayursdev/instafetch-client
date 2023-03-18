import React from "react";
import PostItems from "./PostItems";
import Loader from "../Loader";

const DownloadSection = (props) => {
  const { postDetails, isLoading, error } = props;

  return (
    <section className="px-4 min-h-screen relative">
      {isLoading && <Loader />}
      <PostItems postDetails={postDetails} error={error} />
    </section>
  );
};

export default DownloadSection;
