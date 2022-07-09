import React from "react";

const HeaderInput = () => {
  return (
    <form class="header-input mt-5 md:flex md:gap-1">
      <input
        type="search"
        class="border border-slate-800 rounded w-full p-3"
        placeholder="Paste the link here"
      />
      <button class="bg-slate-700 text-white p-2 px-5 rounded mt-2 w-full font-semibold hover:bg-slate-800 md:mt-0 md:w-1/4">
        Download
      </button>
    </form>
  );
};

export default HeaderInput;
