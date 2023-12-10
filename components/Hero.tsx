"use client";

import Image from "next/image";

import { CustomButton } from "@components";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className=" bg-smbg bg-cover bg-center w-full h-[100vh] flex items-center coverss">
      <div className=" padding-x text-white ">
        <h1 className="hero__title">
          Purchase motor vehicle at a competitive price!
        </h1>

        <p className="hero__subtitle">
          Streamline your car purchase experience with our effortless process.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
    </div>
  );
};

export default Hero;
