import React from "react";

const Contact = () => {
  return (
    <div className="p-10 h-full w-full bg-secondary-blue flex flex-col justify-around items-center md:flex-row">
      <div className="flex flex-col justify-around text-center md:text-left">
        <h1 className="text-3xl">I'D LOVE TO HEAR FROM YOU</h1>
        <h1 className="text-2xl my-5">For PR and MANAGEMENT</h1>
        <p>myblog@gmail.com</p>
        <h1 className="text-2xl my-5">For Enquiries</h1>
        <p>myblog@gmail.com</p>
        <p className="hidden md:flex mt-10">
          © 2020 by myblog. Powered and secured by myblog
        </p>
      </div>
      <div className="items-center flex my-10">
        <form className="">
          <ul>
            <li className="flex flex-col justify-center items-center ">
              <h1>Name</h1>
              <input className="w-full border-4 border-primary-black" />
            </li>
            <li className="flex flex-col justify-center items-center">
              <h1>Email</h1>
              <input className="sm:w-[500px] border-4 border-primary-black" />
            </li>
            <li className="flex flex-col justify-center items-center">
              <h1>Message</h1>
              <textarea className="w-full border-4 border-primary-black" />
            </li>
            <li className="flex flex-row-reverse my-5">
              <button className="py-2 px-3 border-4 border-primary-black">
                Submit
              </button>
            </li>
          </ul>
        </form>
      </div>
      <p className="md:hidden">
        © 2020 by myblog. Powered and secured by myblog
      </p>
    </div>
  );
};

export default Contact;
