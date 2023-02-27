import React, { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div
      className={
        toggle
          ? "w-full md:hidden h-screen  bg-secondary-blue fixed p-10 z-40 flex flex-col justify-around items-center"
          : "w-full h-[80px] bg-secondary-blue fixed p-10 z-40 flex justify-between items-center"
      }
    >
      <h1 className="text-2xl">MyBlog</h1>
      <ul className="md:flex hidden">
        <li className="mx-2 my-2 text-xl">Home</li>
        <li className="mx-2 my-2 text-xl">Blog</li>
        <li className="mx-2 my-2 text-xl">Story</li>
        <li className="mx-2 my-2 text-xl">Contact</li>
        <li className="mx-2 my-2 text-xl">Create</li>
        <li className="mx-2 my-2 text-xl">Account</li>
      </ul>
      <button
        onClick={handleToggle}
        className="md:hidden px-3 py-2 text-xl cursor-pointer"
      >
        Menu
      </button>
    </div>
  );
};

export default Navbar;
