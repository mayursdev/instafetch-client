import React from "react";

const ImagePost = (props) => {
  const { postDetails } = props;

  const postCode = postDetails.code
  const userFullName = postDetails.user.full_name;
  const username = postDetails.user.username;
  const base64userPP = postDetails.user.base64EncodedPP;
  const imgSources = postDetails.image_versions;
  const base64ImgPreview = postDetails.base64EncodedPreview;

  const renderDefaultDownloadBtn = () => {
    return (
      <a
        target="_blank"
        rel="noreferrer"
        href={imgSources[0].url}
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
              href={src.url}
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
        <div className="post-header mb-2 flex justify-between items-center">
          <img
            src={`data:image/jpg; base64, ${base64userPP}`}
            className="rounded-full w-8 h-8"
            alt={userFullName}
            title={userFullName}

          />
          <a href={`https://instagram.com/${username}`} className="font-semibold text-slate-800">@{username}</a>
          <div className="post-type">
            <i className="bx bx-image text-2xl" />
          </div>
        </div>
        <div className="post-media p-1">
          <img
            src={`data:image/jpg;base64, ${base64ImgPreview}`}
            className="sm:h-80 w-full sm:object-contain"
            alt={`https://instagram.com/p/${postCode}/`}
            title={`https://instagram.com/p/${postCode}/`}
          />
        </div>
        <div className="download-buttons mt-1">
          {renderDefaultDownloadBtn()}
          <button className="w-full font-semibold bg-orange-200 border border-slate-800 cursor-pointer mt-1 p-1 rounded">
            More download options
            <i className="bx bxs-down-arrow text-sm" />
          </button>
          {renderOtherDownloadOptions()}
        </div>
      </div>
    </div>
  );
};

export default ImagePost;
