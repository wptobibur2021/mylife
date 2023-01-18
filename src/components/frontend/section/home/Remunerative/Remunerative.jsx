import React from "react";
import img1 from "../../../../../assets/img/bank/bank-logo1.png";
import img2 from "../../../../../assets/img/bank/bank-logo2.png";
import img3 from "../../../../../assets/img/bank/bank-logo3.png";
import img4 from "../../../../../assets/img/bank/bank-logo4.png";
import img5 from "../../../../../assets/img/bank/bank-logo5.png";
const Remunerative = () => {
  return (
    <div className="py-10 md:py-28 lg:py-28">
      <div>
        <div className="mb-5 md:mb-10">
          <h2 className="md:text-4xl text-2xl font-semibold text-border text-center">
            Our Remunerative <span className="text-cardHead">Banks</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 md:gap-10 lg:gap-10">
          <div className="flex justify-center">
            <img src={img1} alt="" />
          </div>
          <div className="flex justify-center">
            <img src={img2} alt="" />
          </div>
          <div className="flex justify-center">
            <img src={img3} alt="" />
          </div>
          <div className="flex justify-center">
            <img src={img4} alt="" />
          </div>
          <div className="flex justify-center">
            <img src={img5} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Remunerative;
