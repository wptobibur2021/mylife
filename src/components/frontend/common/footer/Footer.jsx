import React from "react";
import logo from "../../../../assets/img/Logo.png";
import playStor from "../../../../assets/img/icon/playStore.png";
import faceBook from "../../../../assets/img/icon/facebook.png";
import linkined from "../../../../assets/img/icon/linkined.png";
import instragram from "../../../../assets/img/icon/instragram.png";
import youTube from "../../../../assets/img/icon/youtube.png";
const Footer = () => {
  return (
    <div className="bg-footerBg py-10 px-5 md:px-0 lg:px-0 md:py-28 lg:py-28">
      <div className="container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 md:gap-10 lg:gap-10">
          <div className="col-span-2 mb-5 md:mb-0">
            <div className=" mb-3 md:mb-10">
              <h2 className="text-xl md:text-3xl mb-2 md:mb-5 font-semibold text-grayTink">
                Need Help With <br></br>
                <span className="text-border">Anything?</span>
              </h2>
              <p className="text-grayTink font-medium text-lg">
                We are here to support you!{" "}
              </p>
            </div>
            <div>
              <button className="bg-subscribeBtn text-white rounded-full text-base py-2 px-10">
                Contact
              </button>
            </div>
          </div>
          <div className="col-span-4">
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 md:gap-10 lg:gap-10">
              <div className="col-span-1">
                <h2 className="text-footerMenuTitle border-footerMenuTitle border-b pb-1 text-lg mb-10">
                  Banking
                </h2>
                <div>
                  <ul className="space-y-4">
                    <li className="text-sm cursor-pointer font-medium text-footerMenu">
                      Add new account
                    </li>
                    <li className="text-sm cursor-pointer font-medium text-footerMenu">
                      My account
                    </li>
                    <li className="text-sm cursor-pointer font-medium text-footerMenu">
                      My savings
                    </li>
                    <li className="text-sm cursor-pointer font-medium text-footerMenu">
                      Add new cards
                    </li>
                    <li className="text-sm cursor-pointer font-medium text-footerMenu">
                      My cards
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-span-1">
                <h2 className="text-footerMenuTitle border-footerMenuTitle border-b pb-1 text-lg mb-10">
                  Insurance
                </h2>
                <div>
                  <ul className="space-y-4">
                    <li className="text-sm cursor-pointer font-medium text-footerMenu">
                      Home insuraces
                    </li>
                    <li className="text-sm cursor-pointer font-medium text-footerMenu">
                      Mobility insurances
                    </li>
                    <li className="text-sm cursor-pointer font-medium text-footerMenu">
                      Travel insurances
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-span-1">
                <h2 className="text-footerMenuTitle border-footerMenuTitle border-b pb-1 text-lg mb-10">
                  Traveling
                </h2>
                <div>
                  <ul className="space-y-4">
                    <li className="text-sm cursor-pointer font-medium text-footerMenu">
                      Add new booking
                    </li>
                    <li className="text-sm cursor-pointer font-medium text-footerMenu">
                      My booking
                    </li>
                    <li className="text-sm cursor-pointer font-medium text-footerMenu">
                      Plan & roots
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-span-1">
                <h2 className="text-footerMenuTitle border-footerMenuTitle border-b pb-1 text-lg mb-10">
                  More
                </h2>
                <div>
                  <ul className="space-y-4">
                    <li className="text-sm cursor-pointer font-medium text-footerMenu">
                      About us
                    </li>
                    <li className="text-sm cursor-pointer font-medium text-footerMenu">
                      Send email
                    </li>
                    <li className="text-sm cursor-pointer font-medium text-footerMenu">
                      Blog
                    </li>
                    <li className="text-sm cursor-pointer font-medium text-footerMenu">
                      FAQ
                    </li>
                    <li className="text-sm cursor-pointer font-medium text-footerMenu">
                      Service policy
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 pt-10 md:grid-cols-6 lg:grid-cols-6 md:gap-10 lg:gap-10">
          <div className="col-span-2 mb-5 md:mb-0">
            <img src={logo} alt="" />
          </div>
          <div className="col-span-2">
            <div className="flex gap-5 items-center">
              <div>
                <img src={playStor} />
              </div>
              <div>
                <ul className="flex gap-5">
                  <li>
                    <img className="cursor-pointer" src={faceBook} />
                  </li>
                  <li>
                    <img className="cursor-pointer" src={instragram} />
                  </li>
                  <li>
                    <img className="cursor-pointer" src={linkined} />
                  </li>
                  <li>
                    <img className="cursor-pointer" src={youTube} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-2 md:text-right text-white">
            <p className="mt-5">
              Design & Development by{" "}
              <a target="_blank" href="https:\\tobibur.me">
                Tobibur
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
