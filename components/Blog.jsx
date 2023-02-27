import React from "react";
import img1 from "../public/assets/4.jpg";
import img2 from "../public/assets/5.jpg";
import img3 from "../public/assets/6.jpg";
import img4 from "../public/assets/7.jpg";
import Image from "next/image";

const Blog = () => {
  return (
    <div className="h-full p-10 flex flex-col justify-center items-center w-full bg-secondary-blue relative">
      <h1 className="text-4xl mb-[100px] sm:mb-[300px]">My Blog</h1>
      <div className="bg-blog bg-cover absolute top-[15%] sm:h-[50%] h-[40%] w-[50%] border-primary-black border-[10px]"></div>
      <div className="w-[90%] flex flex-col justify-between items-center h-[500px] bg-primary-blue border-primary-black border-[10px]">
        <div />
        <div className="pb-10 md:flex grid grid-cols-2">
          <Image
            src={img1}
            height={1000}
            width={1000}
            alt="image"
            className="md:h-[200px] h-[100px] w-[100px] md:w-[200px] object-cover mx-4  border-primary-black border-[10px]"
          />
          <Image
            src={img2}
            height={1000}
            width={1000}
            alt="image"
            className="md:h-[200px] h-[100px] w-[100px] md:w-[200px] object-cover mx-4  border-primary-black border-[10px]"
          />
          <Image
            src={img3}
            height={1000}
            width={1000}
            alt="image"
            className="md:h-[200px] h-[100px] w-[100px] md:w-[200px] object-cover mx-4  border-primary-black border-[10px]"
          />
          <Image
            src={img4}
            height={1000}
            width={1000}
            alt="image"
            className="md:h-[200px] h-[100px] w-[100px] md:w-[200px] object-cover mx-4  border-primary-black border-[10px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
