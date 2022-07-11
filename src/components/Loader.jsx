import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-full bg-black absolute top-0 left-0 text-center opacity-70">
      <i className="bx bx-loader-alt animate-spin text-4xl mt-16 md:mt-32 text-white"></i>
    </div>
  );
};

export default Loader;
