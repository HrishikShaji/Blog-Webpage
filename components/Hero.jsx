import React from "react";

const Hero = () => {
  return (
    <div className="bg-hero bg-fixed flex flex-col p-5 justify-center items-center bg-cover h-screen w-full ">
      <div className="w-[300px] h-[300px] flex flex-col justify-center items-center rounded-full bg-primary-blue">
        <h1 className="text-primary-black  text-6xl">MyBlog</h1>
      </div>
      <p className="text-2xl text-center w-[90%] sm:w-[50%] mt-10">
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
        commodo l nascetur ridiculus mus. Donec quam felis,
      </p>
    </div>
  );
};

export default Hero;
