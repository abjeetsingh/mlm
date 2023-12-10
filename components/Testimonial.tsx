import React, { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Card from "./Card";

interface Review {
  id: number;
  name: string;
  job: string;
  image: string;
  text: string;
}

interface TestimonialProps {
  reviews: Review[];
}

const Testimonial: React.FC<TestimonialProps> = (props) => {
  const { reviews } = props;
  const [index, setIndex] = useState(0);

  const leftShiftHandler = () => {
    if (index - 1 < 0) {
      indexSetter(reviews.length - 1);
    } else {
      indexSetter(index - 1);
    }
  };

  const indexSetter = (i: number) => {
    setIndex(i);
  };

  const rightShiftHandler = () => {
    if (index + 1 >= reviews.length) {
      indexSetter(0);
    } else {
      indexSetter(index + 1);
    }
  };

  const surpriseHandler = () => {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(rightShiftHandler, 8000);

    return () => {
      clearInterval(intervalId);
    };
  }, [index]);

  return (
    <div className="w-[90vw] md:w-[60vw] h-full bg-gray-200 flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 mx-auto hover:shadow-xl rounded-lg">
      <Card review={reviews[index]} />

      <div className="text-3xl mt-11 gap-3 text-primary-blue font-bold mx-auto ">
        <button
          onClick={leftShiftHandler}
          className="cursor-pointer hover:text-black"
        >
          <FiChevronLeft />
        </button>

        <button
          onClick={rightShiftHandler}
          className="cursor-pointer hover:text-black"
        >
          <FiChevronRight />
        </button>
      </div>

      <div className="mt-7 hover:shadow-glow transition-all duration-500">
        <button
          onClick={surpriseHandler}
          className="bg-primary-blue cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg"
        >
          Surprise me
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
