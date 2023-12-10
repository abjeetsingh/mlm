import React, { useState } from "react";
interface Props {
  body: string;
  id: number;
}

function BodyShow(props: Props) {
  const [filter, setFilter] = useState("grayscale");

  return (
    <div
      className={`border-2 border-zinc-500 grid justify-center text-center shadow-xl hover:text-primary-blue text-white hover:bg-[#e9e6ed]/10 transition-all duration-500 cursor-pointer`}
      onMouseEnter={() => setFilter("grayscale-0")}
      onMouseLeave={() => setFilter("grayscale")}
    >
      <div>
        <h1 className="text-lg font-jost  p-1 ">{props.body}</h1>
      </div>
      <img
        src={`/BodyType${props.id}.png`}
        alt="BodyType"
        className={`${filter} `}
      />
    </div>
  );
}

export default BodyShow;
