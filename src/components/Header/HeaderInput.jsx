import React, { useState } from "react";

const HeaderInput = (props) => {
  const { onFormSubmit } = props;

  const [link, setLink] = useState("");

  return (
    <form
      className="header-input mt-5 md:flex md:gap-1"
      onSubmit={(e) => {
        e.preventDefault();
        onFormSubmit(link);
      }}
    >
      <input
        type="search"
        className="border border-slate-800 rounded w-full p-3"
        placeholder="Paste the link here"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <button className="bg-slate-700 text-white p-2 px-5 rounded mt-2 w-full font-semibold hover:bg-slate-800 md:mt-0 md:w-1/4">
        Download
      </button>
    </form>
  );
};

export default HeaderInput;
