import React from "react";
import HeaderInfo from "./HeaderInfo";
import HeaderInput from "./HeaderInput";

const Header = (props) => {
  return (
    <header className="p-4 bg-slate-100 border-b-2 md:py-8 lg:py-10">
      <div className="container mx-auto">
        <HeaderInfo />
        <HeaderInput onFormSubmit={props.onFormSubmit} />
      </div>
    </header>
  );
};

export default Header;
