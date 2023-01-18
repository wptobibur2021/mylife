import React from "react";
import { AiOutlineCreditCard } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import userImg from "../../../../assets/img/user.png";
import dashImg from "../../../../assets/img/icon/DashIcon.png";
const Leftsidebar = () => {
  return (
    <div className="col-span-1 bg-white rounded-lg shadow-lg">
      <div className="bg-userBg p-5">
        <div className="grid grid-cols-3 gap-2">
          <div className=" col-span-1">
            <img
              className="rounded-full border border-border p-1"
              src={userImg}
            />
          </div>
          <div className=" col-span-2">
            <h3 className="text-userName text-base font-medium">
              Martha Uilson
            </h3>
            <h6 className="text-xs text-userEmail">uilson@email.com</h6>
          </div>
        </div>
      </div>
      <div className="px-5 py-10">
        <div>
          <ul>
            <li className="flex items-center cursor-pointer">
              <img className="mr-3" src={dashImg} />
              <h3>Dashboard</h3>
            </li>
          </ul>
        </div>
        <div className="py-5">
          <h2 className="text-footerMenu mb-5">BANKING</h2>
          <ul className="space-y-5">
            <li className="flex items-center text-cardListP cursor-pointer">
              <FiUser className="text-lg mr-3" />
              <h3 className="text-base">My Accounts</h3>
            </li>
            <li className="flex items-center text-cardListP cursor-pointer">
              <FiUser className="text-lg mr-3" />
              <h3 className="text-base">My Savings</h3>
            </li>
            <li className="flex items-center cursor-pointer text-cardListP">
              <AiOutlineCreditCard className="text-lg mr-3" />
              <h3 className="text-base">My Cards</h3>
            </li>
          </ul>
        </div>
        <div className="py-5">
          <h2 className="text-footerMenu mb-5">INSURANCE</h2>
          <ul className="space-y-5">
            <li className="flex items-center text-cardListP cursor-pointer">
              <FiUser className="text-lg mr-3" />
              <h3 className="text-base">My Home</h3>
            </li>
            <li className="flex items-center text-cardListP cursor-pointer">
              <FiUser className="text-lg mr-3" />
              <h3 className="text-base">My Mobility</h3>
            </li>
            <li className="flex items-center cursor-pointer text-cardListP">
              <AiOutlineCreditCard className="text-lg mr-3" />
              <h3 className="text-base">My Traveling</h3>
            </li>
          </ul>
        </div>
        <div className="py-5">
          <h2 className="text-footerMenu mb-5">TRAVEL</h2>
          <ul className="space-y-5">
            <li className="flex items-center text-cardListP cursor-pointer">
              <FiUser className="text-lg mr-3" />
              <h3 className="text-base">My Accounts</h3>
            </li>
            <li className="flex items-center text-cardListP cursor-pointer">
              <FiUser className="text-lg mr-3" />
              <h3 className="text-base">My Savings</h3>
            </li>
            <li className="flex items-center cursor-pointer text-cardListP">
              <AiOutlineCreditCard className="text-lg mr-3" />
              <h3 className="text-base">My Cards</h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Leftsidebar;
