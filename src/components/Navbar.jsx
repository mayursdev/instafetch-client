import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 p-4 shadow-xl">
      <div className="container mx-auto">
        <h1 className="text-xl font-semibold text-white flex items-center">
          <i className="bx bxs-bolt text-orange-400 text-3xl" />
          <span>InstaFetch</span>
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
