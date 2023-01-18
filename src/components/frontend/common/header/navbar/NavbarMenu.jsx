import { Button, Navbar } from "flowbite-react";
import React, { useState } from "react";
import logo from "../../../../../assets/img/Logo.png";
import searchIcon from "../../../../../assets/img/icon/searchIcon.png";
import icon1 from "../../../../../assets/img/icon/MenuIcon.png";
import icon2 from "../../../../../assets/img/icon/user.png";
import icon3 from "../../../../../assets/img/icon/check.png";
const NavbarMenu = () => {
  const [searchOption, setSearchOption] = useState(false);
  const handleChange = () => {
    setSearchOption(!searchOption);
  };
  console.log("searchOption: ", searchOption);
  return (
    <div>
      <div className="container m-auto py-3">
        <Navbar>
          <Navbar.Brand href="#">
            <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
          </Navbar.Brand>
          <div className="flex md:order-2">
            <div onClick={handleChange} className="relative">
              <img className="cursor-pointer" src={searchIcon} />
            </div>
            {searchOption === true && (
              <div className="absolute right-20 md:right-28 md:top-5">
                <input className="p-1 md:py-2 md:px-5 border border-gray-100 rounded-md" />
              </div>
            )}
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <ul className="md:flex md:gap-6 space-y-3 md:space-y-0">
              <li className="flex gap-2 items-center cursor-pointer">
                <img src={icon1} /> <p>Banking</p>
              </li>
              <li className="flex gap-2 items-center cursor-pointer">
                <img src={icon2} /> <p>Insurance</p>
              </li>
              <li className="flex gap-2 items-center cursor-pointer">
                <img src={icon3} /> <p>Travel</p>
              </li>
              <li className="flex gap-2 items-center cursor-pointer">
                <img src={icon2} /> <p>My Profile</p>
              </li>
            </ul>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default NavbarMenu;
