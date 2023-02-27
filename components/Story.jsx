import React from "react";

const Story = () => {
  return (
    <div className="w-full p-10 h-full bg-secondary-blue md:flex-row flex flex-col justify-around items-center">
      <div className="sm:w-[50%] flex flex-col p-5">
        <h1 className="text-4xl mb-10">My Story</h1>
        <p className="w-[90%] text-center md:text-left">
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus. Vivamus elementum '
        </p>
      </div>
      <div className="bg-fixed bg-story bg-cover sm:h-[500px] h-[300px] w-[90%] sm:w-[500px] border-primary-black border-[10px]" />
    </div>
  );
};

export default Story;
