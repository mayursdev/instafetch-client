import React from "react";

const ImagePost = () => {
  return (
    <div className="post-card-wrapper image mb-3 sm:w-1/2 sm:pr-3 lg:w-1/3">
      <div className="post-card border flex flex-col border-slate-400 p-5 rounded">
        <div className="post-header mb-2 flex justify-between">
          <div className="post-uploader-details flex gap-1 items-center">
            <img
              src="https://via.placeholder.com/350x350"
              className="rounded-full w-7 h-7"
              alt=""
            />
            <h3 className="font-semibold text-slate-800">9gag</h3>
          </div>
          <div className="post-type">
            <i className="bx bx-image text-2xl" />
          </div>
        </div>
        <div className="post-media p-1">
          <img
            src="https://via.placeholder.com/350x450"
            className="sm:h-72 w-full sm:object-contain"
            alt=""
          />
        </div>
        <div className="download-buttons mt-1">
          <a
            href="#"
            className="default-button block text-center w-full font-semibold mt-1 bg-slate-700 hover:bg-slate-800 text-white rounded p-2"
          >
            Download Full HD Image
          </a>
          <button className="w-full font-semibold bg-orange-200 border border-slate-800 cursor-pointer mt-1 p-1 rounded">
            More download options
            <i className="bx bxs-down-arrow text-sm" />
          </button>
          <div className="more-download-options rounded mt-1 hidden">
            <a
              href="#"
              className="block text-center w-full font-semibold mb-1 border border-slate-800 rounded p-1"
            >
              Download 750px
            </a>
            <a
              href="#"
              className="block text-center w-full font-semibold mb-1 border border-slate-800 rounded p-1"
            >
              Download 640px
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePost;
