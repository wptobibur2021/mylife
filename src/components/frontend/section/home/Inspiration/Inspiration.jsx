import React from "react";
import germany from "../../../../../assets/img/travel/travel_1.png";
import norway from "../../../../../assets/img/travel/travel_2.png";
import us from "../../../../../assets/img/travel/travel_3.png";
const Inspiration = () => {
  return (
    <div className="py-10 md:py-36">
      <div className="flex justify-between mb-10">
        <div>
          <h2 className="font-medium text-grayDark text-2xl">
            Inspiration for your next trip
          </h2>
        </div>
        <div>
          <p className="underline underline-offset-1 text-grayDark font-medium">
            Show all
          </p>
          <div>
            <></>
          </div>
        </div>
      </div>
      <div className="grid bg-white md:grid-cols-3 lg:grid-cols-3 grid-cols-1 gap-8">
        <div className="shadow-lg rounded-lg">
          <div>
            <img className="w-full rounded-t-lg" src={germany} alt="" />
          </div>
          <div className="space-y-1 p-5">
            <h5 className="text-xl text-border font-medium">Germany</h5>
            <p className=" text-sm text-grayDark">15 days</p>
          </div>
        </div>
        <div className="shadow-lg rounded-lg">
          <div>
            <img className="w-full rounded-t-lg" src={norway} alt="" />
          </div>
          <div className="space-y-1 p-5">
            <h5 className="text-xl text-border font-medium">Norway</h5>
            <p className=" text-sm text-grayDark">1 months</p>
          </div>
        </div>
        <div className="shadow-lg rounded-lg">
          <div>
            <img className="w-full rounded-t-lg" src={us} alt="" />
          </div>
          <div className="space-y-1 p-5">
            <h5 className="text-xl text-border font-medium">United States</h5>
            <p className=" text-sm text-grayDark">10 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inspiration;
