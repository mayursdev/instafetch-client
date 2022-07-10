import React from "react";
import MoreDownloadOptions from "./MoreDownloadOptions";
import PostHeader from "./PostHeader";
import PostMedia from "./PostMedia";

const ImagePost = (props) => {
  const { postDetails, user } = props;

  const imgSources = postDetails.image_versions;

  const renderDefaultDownloadBtn = () => {
    return (
      <a
        target="_blank"
        rel="noreferrer"
        href={`${imgSources[0].url}&dl=1`}
        className="default-button block text-center w-full font-semibold mt-1 bg-slate-700 hover:bg-slate-800 text-white rounded p-2"
      >
        Download Full HD Image
      </a>
    );
  };
  const renderOtherDownloadOptions = () => {
    return (
      <div className="more-download-options rounded mt-1">
        {imgSources.map((src, idx) => {
          if (idx === 0 || idx > 5) return null;
          return (
            <a
              key={idx}
              target="_blank"
              rel="noreferrer"
              href={`${src.url}&dl=1`}
              className="block text-center w-full font-semibold mb-1 border border-slate-800 rounded p-1"
            >
              Download {src.width}px
            </a>
          );
        })}
      </div>
    );
  };

  return (
    <div className="post-card-wrapper image mb-3 sm:w-1/2 sm:pr-3 lg:w-1/3">
      <div className="post-card border flex flex-col border-slate-400 p-5 rounded">
        <PostHeader user={user} iconName="image" />
        <PostMedia postDetails={postDetails} />
        <div className="download-buttons mt-1">
          {renderDefaultDownloadBtn()}
          <MoreDownloadOptions>
            {renderOtherDownloadOptions()}
          </MoreDownloadOptions>
        </div>
      </div>
    </div>
  );
};

export default ImagePost;
