import React from "react";

const Subscribe = () => {
  return (
    <div className="bg-subscribeBg text-white">
      <div className="container m-auto px-5 md:px-24">
        <div className="flex flex-col items-center py-10 md:py-32">
          <div className="space-y-2 text-center">
            <h1 className="text-2xl md:text-4xl font-semibold">Get In Touch</h1>
            <p className=" text-base md:text-xl font-medium">
              Subscribe us for new offerings and travle packages.
            </p>
          </div>
          <div className="flex justify-center mt-5">
            <div className="flex w-80 md:w-96">
              <input
                className="rounded-l-full w-full text-grayDark py-2 md:py-4 px-5"
                placeholder="Your email"
              />
              <button className="bg-subscribeBtn text-white py-2 md:py-4 px-5 rounded-r-full">
                Subscripe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
