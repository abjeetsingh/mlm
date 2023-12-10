import React from "react";
import { FaRegBookmark } from "react-icons/fa";
import { MdPinDrop } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

interface LocationProps {
  name: string;
  add: string;
  phone: string;
}

function LocationCard({ name, add, phone }: LocationProps) {
  return (
    <div className=" px-10 mx-5 pt-32 hover:skew-x-3 transition-all duration-500 ease-in-out  lg:w-[400px] lg:h-[660px]  w-[350px] h-[615px] relative bg-card bg-no-repeat bg-bottom bg-contain">
      <div className="absolute text-white lg:w-28  w-20 shadow-2xl aspect-square bg-primary-blue flex justify-center items-center rounded-full left-1/2 -translate-y-2/3 -translate-x-1/2 overflow-visible">
        <FaRegBookmark className="z-40 h-2/4 w-2/4 aspect-square" />
      </div>
      <div className="bg-zinc-200  text-center flex flex-col items-center   shadow-subtelShadow rounded-3xl ">
        <p className="md:text-3xl text-2xl font-black my-9 border-b-4 border-primary-blue pb-4  ">
          {name}
        </p>

        <div className="flex flex-col gap-6 items-center justify-center">
          <div className=" px-6 ">
            <MdPinDrop className="lg:text-3xl text-2xl inline" />
            <p className="inline lg:text-xl text-lg font-semibold leading-[0.30rem]">
              {add}
            </p>
          </div>

          <div className="flex items-center">
            <FaPhone className="lg:text-2xl text-xl mr-2" />
            <p className="lg:text-xl text-lg font-semibold text-primary-blue">
              {phone}
            </p>
          </div>
          <div className="flex items-center justify-center flex-wrap">
            <MdEmail className="text-3xl mr-2" />
            <p className="block lg:text-xl text-lg">Email Us:</p>
            <p className="lg:text-xl text-lg font-semibold text-primary-blue block">
              info@mainlandMotors.ca
            </p>
          </div>
        </div>
        <div className="text-center bg-primary-blue text-white font-bold text-lg lg:text-xl w-2/3 py-2 m-auto rounded-2xl lg:mt-20 lg:mb-12 mt-12 mb-6">
          View Inventory
        </div>
      </div>
    </div>
  );
}

export default LocationCard;
