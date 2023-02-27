import React from "react";
import img1 from "../public/assets/9.jpg";
import img2 from "../public/assets/2.jpg";
import img3 from "../public/assets/3.jpg";
import img4 from "../public/assets/4.jpg";
import img5 from "../public/assets/5.jpg";
import img6 from "../public/assets/6.jpg";
import img7 from "../public/assets/7.jpg";
import img8 from "../public/assets/8.jpg";
import img9 from "../public/assets/9.jpg";
import img10 from "../public/assets/10.jpg";

<Image src={img1} height={1000} width={1000} alt="image" className="" />;

import Image from "next/image";

const Gallery = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center p-10 bg-secondary-blue">
      <h1 className="text-4xl mb-10">#MYBLOG ON INSTA</h1>
      <div className="grid sm:grid-cols-4 grid-cols-1  gap-2 h-full w-full">
        <div className=" bg-primary-blue sm:col-span-2 sm:row-span-2 ">
          <Image
            src={img1}
            height={1000}
            width={1000}
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="bg-rimary-blue">
          <Image
            src={img2}
            height={1000}
            width={1000}
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="bg-rimary-blue">
          <Image
            src={img3}
            height={1000}
            width={1000}
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="bg-rimary-blue">
          <Image
            src={img4}
            height={1000}
            width={1000}
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="bg-rimary-blue">
          <Image
            src={img5}
            height={1000}
            width={1000}
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="bg-rimary-blue">
          <Image
            src={img6}
            height={1000}
            width={1000}
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="bg-rimary-blue">
          <Image
            src={img7}
            height={1000}
            width={1000}
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="bg-rimary-blue sm:col-span-2 sm:row-span-2">
          <Image
            src={img8}
            height={1000}
            width={1000}
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="bg-rimary-blue">
          <Image
            src={img9}
            height={1000}
            width={1000}
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="bg-rimary-blue">
          <Image
            src={img10}
            height={1000}
            width={1000}
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
