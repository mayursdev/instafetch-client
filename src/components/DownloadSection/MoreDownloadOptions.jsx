import React, { useState } from "react";

const MoreDownloadOptions = (props) => {
  const [showMoreDownloadButtons, setShowMoreDownloadButtons] = useState(false);

  const { children } = props;
  return (
    <>
      <button
        className="w-full font-semibold bg-orange-200 border border-slate-800 cursor-pointer mt-1 p-1 rounded"
        onClick={() => setShowMoreDownloadButtons((prev) => !prev)}
      >
        More download options
        <i className="bx bxs-down-arrow text-sm" />
      </button>
      {showMoreDownloadButtons ? children : null}
    </>
  );
};

export default MoreDownloadOptions;
