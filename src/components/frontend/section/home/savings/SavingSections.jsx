import React from "react";
import ubs from "../../../../../assets/img/bank/ubs.png";
import pictet from "../../../../../assets/img/bank/pictet.png";
import mirbaud from "../../../../../assets/img/bank/mirbaud.png";
const SavingSections = () => {
  return (
    <div className="pt-20 pb-36">
      <div className="flex justify-between mb-10">
        <div>
          <h2 className="font-medium text-grayDark text-2xl">
            Our Savings Deal
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
        <div className="p-10 shadow-lg rounded-md bg-[url('/src/assets/img/bg/saving_card_bg.png')] bg-no-repeat bg-right-bottom">
          <div className="mb-10">
            <img src={ubs} alt="" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <div className="w-40">
                <p>Instalment amount:</p>
              </div>
              <div>
                <p>50 - 250 F</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-40">
                <p>Duration period:</p>
              </div>
              <div>
                <p>1 - 10 years</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-40">
                <p>Interest rate:</p>
              </div>
              <div>
                <p>3.5 - 10 %</p>
              </div>
            </div>
          </div>
          <div className="mt-7">
            <button className="py-2 px-8 text-border rounded-full border-border border">
              Explore
            </button>
          </div>
        </div>
        <div className="p-10 shadow-lg rounded-md bg-[url('/src/assets/img/bg/saving_card_bg.png')] bg-no-repeat bg-right-bottom">
          <div className="mb-10">
            <img src={pictet} alt="" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <div className="w-40">
                <p>Instalment amount:</p>
              </div>
              <div>
                <p>50 - 250 F</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-40">
                <p>Duration period:</p>
              </div>
              <div>
                <p>1 - 10 years</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-40">
                <p>Interest rate:</p>
              </div>
              <div>
                <p>3.5 - 10 %</p>
              </div>
            </div>
          </div>
          <div className="mt-7">
            <button className="py-2 px-8 text-border rounded-full border-border border">
              Explore
            </button>
          </div>
        </div>
        <div className="p-10 shadow-lg rounded-md bg-[url('/src/assets/img/bg/saving_card_bg.png')] bg-no-repeat bg-right-bottom">
          <div className="mb-10">
            <img src={mirbaud} alt="" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <div className="w-40">
                <p>Instalment amount:</p>
              </div>
              <div>
                <p>50 - 250 F</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-40">
                <p>Duration period:</p>
              </div>
              <div>
                <p>1 - 10 years</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-40">
                <p>Interest rate:</p>
              </div>
              <div>
                <p>3.5 - 10 %</p>
              </div>
            </div>
          </div>
          <div className="mt-7">
            <button className="py-2 px-8 text-border rounded-full border-border border">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingSections;
