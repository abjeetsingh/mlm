import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

interface CardProps {
  review: {
    id: number;
    name: string;
    job: string;
    image: string;
    text: string;
  };
}

const Card: React.FC<CardProps> = ({ review }) => {
  return (
    <div className="flex flex-col md:relative">
      <div className=" z-[10] mx-auto">
        <img
          className="aspect-square rounded-full w-[140px] h-[140px] z-[25]"
          alt=""
          src={review.image}
        />
      </div>

      <div className="text-center mt-7">
        <p className="tracking-wider font-bold text-3xl capitalize">
          {review.name}
        </p>
        <p className="font-bold text-lg capitalize opacity-20">{review.job}</p>
      </div>

      <div className="text-violet-4000 mx-auto mt-5">
        <FaQuoteLeft />
      </div>

      <div className="text-center text-slate-500  text-lg font-semibold font-poppin">
        {review.text}
      </div>

      <div className="text-violet-4000 mx-auto mt-5">
        <FaQuoteRight />
      </div>
    </div>
  );
};

export default Card;
