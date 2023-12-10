import React from "react";
import CustomButton from "./CustomButton";

function Show3dModel() {
  return (
    <div className="bg-honeycomb bg-cover ">
      <div className="shows  bg-darken z-0 ">
        <div className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-none w-3/4 m-auto my-8">
          <div className="text-white text-center font-jost flex flex-col m-8 px-[2px]">
            <img
              src="/icons1.svg"
              alt="Icon"
              className="h-[80px] m-3 mb-8 hover:scale-[1.15] transition-all duration-200 cursor-pointer"
            />
            <h1 className="font-bold text-[18px]">Official dealer</h1>
            <p className="text-[#bbbbbb] text-[17px] my-6 ">
              Similique minima magni quidem aliquid illo sequi corporis fugiat
              type and llo similique magnisimilique minimamagniquidem
            </p>
            <CustomButton
              title="read more"
              btnType="button"
              containerStyles="m-auto rounded-full  text-bold text-white font-bold bg-primary-blue/90 w-[150px] "
            />
          </div>

          <div className="text-white text-center font-jost flex flex-col m-8 px-[2px]">
            <img
              src="/icons2.svg"
              alt="Icon"
              className="h-[80px] m-3 mb-8 hover:scale-[1.15] transition-all duration-200 cursor-pointer"
            />
            <h1 className="font-bold text-[18px]">Official dealer</h1>
            <p className="text-[#bbbbbb] text-[17px] my-6 ">
              Similique minima magni quidem aliquid illo sequi corporis fugiat
              type and llo similique magnisimilique minimamagniquidem
            </p>
            <CustomButton
              title="read more"
              btnType="button"
              containerStyles="m-auto rounded-full  text-bold text-white font-bold bg-primary-blue/90 w-[150px] "
            />
          </div>

          <div className="text-white text-center font-jost flex flex-col m-8 px-[2px]">
            <img
              src="/icons3.svg"
              alt="Icon"
              className="h-[80px] m-3 mb-8 hover:scale-[1.15] transition-all duration-200 cursor-pointer"
            />
            <h1 className="font-bold text-[18px]">Official dealer</h1>
            <p className="text-[#bbbbbb] text-[17px] my-6 ">
              Similique minima magni quidem aliquid illo sequi corporis fugiat
              type and llo similique magnisimilique minimamagniquidem
            </p>
            <CustomButton
              title="read more"
              btnType="button"
              containerStyles="m-auto rounded-full  text-bold text-white font-bold bg-primary-blue/90 w-[150px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Show3dModel;
