import React from "react";
import inImg from "../../../../../../assets/img/service/insurance.png";
import home from "../../../../../../assets/img/icon/home.png";
import mobility from "../../../../../../assets/img/icon/mobility.png";
import travel from "../../../../../../assets/img/icon/traveling.png";
const Insurance = () => {
  return (
    <div className="shadow-lg rounded-lg">
      <div className="w-full">
        <img className="w-full" src={inImg} alt="" />
      </div>
      <div className="px-5 py-10">
        <div className="mb-5">
          <h3 className="text-cardHead text-lg tracking-[0.4em]">INSURANCE</h3>
        </div>
        <div className="space-y-8 pl-3">
          <div className="flex items-start">
            <div className="w-10 mr-5">
              <img src={home} alt="" />
            </div>
            <div>
              <h4 className="text-cardListT text-base">Home</h4>
              <p className="text-cardListP text-xs">1 year - 25 years</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-10 mr-5">
              <img src={mobility} alt="" />
            </div>
            <div>
              <h4 className="text-cardListT text-base">Mobility</h4>
              <p className="text-cardListP text-xs">3 months - 10 years</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-10 mr-5">
              <img src={travel} alt="" />
            </div>
            <div>
              <h4 className="text-cardListT text-base">Traveling</h4>
              <p className="text-cardListP text-xs">Day long - 6 months</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insurance;
