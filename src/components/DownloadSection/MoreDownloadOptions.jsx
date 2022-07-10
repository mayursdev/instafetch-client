import React from "react";

const MoreDownloadOptions = (props) => {
  const { children } = props;
  return (
    <>
      <button className="w-full font-semibold bg-orange-200 border border-slate-800 cursor-pointer mt-1 p-1 rounded">
        More download options
        <i className="bx bxs-down-arrow text-sm" />
      </button>
      {children}
    </>
  );
};

export default MoreDownloadOptions;
