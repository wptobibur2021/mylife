import React from "react";
import img1 from "../../../../../../assets/img/service/banking.png";
import bankIcon from "../../../../../../assets/img/icon/add_account.png";
import saveIcon from "../../../../../../assets/img/icon/savings.png";
import cardIcon from "../../../../../../assets/img/icon/add_cards.png";
const Banking = () => {
  return (
    <div className="shadow-lg rounded-lg">
      <div className="w-full">
        <img className="w-full" src={img1} alt="" />
      </div>
      <div className="px-5 py-10">
        <div className="mb-5">
          <h3 className="text-cardHead text-lg tracking-[0.4em]">BANKING</h3>
        </div>
        <div className="space-y-8 pl-3">
          <div className="flex items-start">
            <div className="w-10 mr-5">
              <img src={bankIcon} alt="" />
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
              <img src={saveIcon} alt="" />
            </div>
            <div>
              <h4 className="text-cardListT text-base">Savings</h4>
              <p className="text-cardListP text-xs">Explore saving plans</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-10 mr-5">
              <img src={cardIcon} alt="" />
            </div>
            <div>
              <h4 className="text-cardListT text-base">Add Cards</h4>
              <p className="text-cardListP text-xs">Personalize your cards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banking;
