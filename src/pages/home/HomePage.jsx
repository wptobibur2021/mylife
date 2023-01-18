import React from "react";
import ServicesSection from "../../components/frontend/section/home/services/ServicesSection";
import SavingSections from "../../components/frontend/section/home/savings/SavingSections";
import Subscribe from "../../components/frontend/section/home/subscribe/Subscribe";
import Inspiration from "../../components/frontend/section/home/Inspiration/Inspiration";
import Remunerative from "../../components/frontend/section/home/Remunerative/Remunerative";

const HomePage = () => {
  return (
    <div>
      <div className="bg-[url('/src/assets/img/bg/hero_bg.png')] bg-no-repeat bg-top bg-contain">
        <div className="container m-auto px-5 md:px-24">
          <ServicesSection />
          <SavingSections />
        </div>
      </div>
      <Subscribe />
      <div className="bg-[url('/src/assets/img/bg/travel_bg1.png')] bg-cover bg-bottom bg-no-repeat">
        <div className="container m-auto px-5 md:px-24 lg:px-24">
          <Inspiration />
        </div>
      </div>
      <div className="bg-footerTopBg">
        <div className="container m-auto px-5 md:px-24 lg:px-24">
          <Remunerative />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
