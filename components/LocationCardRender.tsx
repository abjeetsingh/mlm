import React from "react";
import LocationCard from "./LocationCard";
import branch from "@components/branchData";

interface LocationProps {
  id: number;
  name: string;
  add: string;
  phone: string;
}

function LocationCardRender() {
  // Assuming branch is an array of LocationProps
  return (
    <div className="bg-gtr bg-cover bg-center bg-fixed">
      <div className="flex justify-center bg-[rgba(0,0,0,0.65)]">
        <div className=" lg:grid lg:gap-x-36 lg:grid-cols-2 lg:grid-rows-2 mb-10">
          {branch.map((location: LocationProps) => (
            <LocationCard
              name={location.name}
              add={location.add}
              phone={location.phone}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LocationCardRender;
