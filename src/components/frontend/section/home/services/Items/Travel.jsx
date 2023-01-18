import React from "react";
import travelImg from "../../../../../../assets/img/service/travel.png";
import bookIng from "../../../../../../assets/img/icon/new_booking.png";
import plan from "../../../../../../assets/img/icon/plan.png";
const Travel = () => {
  return (
    <div className="shadow-lg rounded-lg">
      <div className="w-full">
        <img className="w-full" src={travelImg} alt="" />
      </div>
      <div className="px-5 py-10">
        <div className="mb-5">
          <h3 className="text-cardHead text-lg tracking-[0.4em]">BANKING</h3>
        </div>
        <div className="space-y-8 pl-3">
          <div className="flex items-start">
            <div className="w-10 mr-5">
              <img src={bookIng} alt="" />
            </div>
            <div>
              <h4 className="text-cardListT text-base">Add Account</h4>
              <p className="text-cardListP text-xs">
                Your multiple bank account
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-10 mr-5">
              <img src={plan} alt="" />
            </div>
            <div>
              <h4 className="text-cardListT text-base">Savings</h4>
              <p className="text-cardListP text-xs">Explore saving plans</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travel;
