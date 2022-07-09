import React from "react";

const Navbar = () => {
  return (
    <nav class="bg-slate-800 p-4 shadow-xl">
      <div class="container mx-auto">
        <h1 class="text-xl font-semibold text-white flex items-center">
          <i class="bx bxs-bolt text-orange-400 text-3xl"></i>
          <span>InstaFetch</span>
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
