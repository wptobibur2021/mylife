import React from "react";
import Banking from "./Items/Banking";
import Insurance from "./Items/Insurance";
import Travel from "./Items/Travel";

const ServicesSection = () => {
  return (
    <div className="py-10 md:py-20 z-50">
      <div className="grid bg-white grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
        <Banking />
        <Insurance />
        <Travel />
      </div>
    </div>
  );
};

export default ServicesSection;
