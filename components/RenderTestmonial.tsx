import React from "react";
import Testimonials from "./Testimonial"; // Import the correct component
import reviews from "./data";

export default function Testimonial() {
  return (
    <div className=" text-center bg-black py-12">
      <h1 className="text-4xl font-jost font-bold text-white ">
        Our Testimonials
      </h1>
      <div className="bg-primary-blue h-[4px] w-1/5 mt-1 mx-auto "></div>
      <Testimonials reviews={reviews} /> {/* Corrected component name */}
    </div>
  );
}
