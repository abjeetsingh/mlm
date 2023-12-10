import React from "react";
import BodyShow from "./BodyShow";

function BodyType() {
  return (
    <div className="bg-black text-center ">
      <div className="padding-x padding-y max-width my-10">
        <h1 className="text-white font-jost font-bold text-[30px] ">
          Car Body
        </h1>
        <p className="text-[#bbbbbb] text-[17px] font-jost">
          Rutrum ante tempus mauris facilisi, leo faucibus, egestas diamlorem
          malesu, vitae mauris.
        </p>
        <div className="grid gap-11 lg:grid-cols-3  md:grid-cols-2 my-10 px-9 ">
          <BodyShow body="Coupe" id={1} />
          <BodyShow body="Minivan" id={2} />
          <BodyShow body="Sedan" id={3} />
          <BodyShow body="Sport Car" id={4} />
          <BodyShow body="Super Car" id={5} />
          <BodyShow body="SUV" id={6} />
        </div>
      </div>
    </div>
  );
}

export default BodyType;
