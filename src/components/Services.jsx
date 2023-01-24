import React from "react";
import ServicesCard from "./ServicesCard";
import ServicesSidebar from "./ServicesSidebar";

const ServicesPage = () => {
  return (
    <div className=" relative flex mx-auto justify-center items-center h-screen w-full">
      <ServicesSidebar />
      <div className="relative p-6">
        <ServicesCard />
      </div>
    </div>
  );
};

export default ServicesPage;
