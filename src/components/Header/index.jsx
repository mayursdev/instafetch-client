import React from "react";
import HeaderInfo from "./HeaderInfo";
import HeaderInput from "./HeaderInput";

const Header = () => {
  return (
    <header class="p-4 bg-slate-100 border-b-2 md:py-8 lg:py-10">
      <div class="container mx-auto">
        <HeaderInfo />
        <HeaderInput />
      </div>
    </header>
  );
};

export default Header;
