import React, { useState } from "react";

function MapRender() {
  const mapSrc: string[] = [
    "https://www.google.com/maps/d/u/0/embed?mid=1sd99TA65EpB6cB2zg666bdwVFff3T-s&ehbc=2E312F", //default
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2611.764511464906!2d-122.67160888757539!3d49.110113982839025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485cfb9a7ea67f3%3A0xf292008b3146f895!2sMainland%20Motors%20Langley!5e0!3m2!1sen!2sin!4v1702228013233!5m2!1sen!2sin", //langley
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.8611823799943!2d-122.31660958757794!3d49.05126298699415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548435920ca7f24b%3A0x5ef3f2d88746f72d!2sMainland%20Motors%20Abbotsford!5e0!3m2!1sen!2sin!4v1702228212743!5m2!1sen!2sin", //abb
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.805489541405!2d-113.96363368748904!3d51.03821314475198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53717b5746be20a9%3A0x235dc1e9fa3763f1!2sMainland%20Motors%20Calgary!5e0!3m2!1sen!2sin!4v1702228259491!5m2!1sen!2sin", // calgary
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2606.7772748707202!2d-122.85572748757126!3d49.204784576147475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d78bfe5ecd25%3A0xaa4cb8b527c063e!2sMainland%20Motors!5e0!3m2!1sen!2sin!4v1702228303757!5m2!1sen!2sin", //surrey
  ];

  const [LoadMap, setLoadMap] = useState(0);
  const [renderMap, setrenderMap] = useState(false);

  if (window.innerWidth > 800) {
    return (
      <div className="bg-smoke">
        <div className="bg-[rgba(0,0,0,0.45)]">
          <div className="grid grid-cols-2  pt-9">
            <div className="p-4 pt-0 overflow-y-scroll h-full">
              <div
                className="p-6 pl-9 bg-neutral-900 shadow-subtelShadow rounded-3xl cursor-pointer"
                onClick={() => {
                  setLoadMap(4);
                }}
              >
                <p className=" text-primary-blue font-jost font-bold text-2xl mb-3">
                  Mainland Motors Surrey
                </p>
                <p className="text-white font-jost text-lg font-semibold">
                  13307 King George Blvd <br /> BC, Surrey
                </p>
                <p className=" text-gray-400 font-jost text-lg font-semibold">
                  Sales: <a href="">(866) 559-3017</a>
                </p>
              </div>
              <div
                className="p-6 pl-9 bg-neutral-900 shadow-subtelShadow rounded-3xl cursor-pointer"
                onClick={() => {
                  setLoadMap(1);
                }}
              >
                <p className=" text-primary-blue font-jost font-bold text-2xl  mb-3">
                  Langley Mainland Motors ltd.
                </p>
                <p className="text-white font-jost text-lg font-semibold">
                  5933 200 Street <br /> Langley, BC V3A 1N2
                </p>
                <p className=" text-gray-400 font-jost text-lg font-semibold">
                  Sales: <a href="">(844) 832-6528</a>
                  <br />
                  Service: <a href="">(888) 800-0365</a>
                </p>
              </div>
              <div
                className="p-6 pl-9 bg-neutral-900 shadow-subtelShadow rounded-3xl cursor-pointer"
                onClick={() => {
                  setLoadMap(2);
                }}
              >
                <p className=" text-primary-blue font-jost font-bold text-2xl  mb-3">
                  Mainland Motors Abbotsford
                </p>
                <p className="text-white font-jost text-lg font-semibold">
                  32835 South Fraser Way <br /> Abbotsford , BC V2S2A6
                </p>
                <p className=" text-gray-400 font-jost text-lg font-semibold">
                  Sales: <a href="">(877) 224-4360</a>
                </p>
              </div>
              <div
                className="p-6 pl-9 bg-neutral-900 shadow-subtelShadow rounded-3xl cursor-pointer"
                onClick={() => {
                  setLoadMap(3);
                }}
              >
                <p className=" text-primary-blue font-jost font-bold text-2xl  mb-3">
                  Mainland Motors Calgary
                </p>
                <p className="text-white font-jost text-lg font-semibold">
                  1734 50 SE <br /> Calgary, Alberta T2A 1S8
                </p>
                <p className=" text-gray-400 font-jost text-lg font-semibold">
                  General: <a href="">(833)-547-7056</a>
                  <br />
                  Service: <a href="">(833) 547-7227</a>
                </p>
              </div>
            </div>
            <div className="inline-block overflow-x-hidden pr-6">
              <iframe
                src={mapSrc[LoadMap]}
                className="relative top-[-6vh] border-none h-full w-full transition-all delay-1000"
                style={{ top: LoadMap == 0 ? "-6vh" : "0px" }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-smoke">
        <div className="bg-[rgba(0,0,0,0.45)]">
          <div className="flex w-full justify-around mt-4">
            <p
              className=" bg-primary-blue  cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg"
              onClick={() => {
                setrenderMap(true);
              }}
            >
              List View
            </p>
            <p
              className=" bg-primary-blue  cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg"
              onClick={() => {
                setrenderMap(false);
              }}
            >
              Map View
            </p>
          </div>
          <div className="">
            <div
              style={{ display: renderMap ? "block" : "none" }}
              className="p-4 overflow-y-scroll md:block"
            >
              <div
                className="p-6 bg-neutral-900 shadow-subtelShadow rounded-3xl cursor-pointer"
                onClick={() => {
                  setLoadMap(4);
                  setrenderMap(false);
                }}
              >
                <p className=" text-primary-blue font-jost font-bold text-xl mb-3">
                  Mainland Motors Surrey
                </p>
                <p className="text-white font-jost text-base font-semibold">
                  13307 King George Blvd <br /> BC, Surrey
                </p>
                <p className=" text-gray-400 font-jost text-base font-semibold">
                  Sales: <a href="">(866) 559-3017</a>
                </p>
              </div>
              <div
                className="p-4 bg-neutral-900 shadow-subtelShadow rounded-3xl cursor-pointer"
                onClick={() => {
                  setLoadMap(1);
                  setrenderMap(false);
                }}
              >
                <p className=" text-primary-blue font-jost font-bold text-xl  mb-3">
                  Langley Mainland Motors ltd.
                </p>
                <p className="text-white font-jost text-base font-semibold">
                  5933 200 Street <br /> Langley, BC V3A 1N2
                </p>
                <p className=" text-gray-400 font-jost text-base font-semibold">
                  Sales: <a href="">(844) 832-6528</a>
                  <br />
                  Service: <a href="">(888) 800-0365</a>
                </p>
              </div>
              <div
                className="p-4 bg-neutral-900 shadow-subtelShadow rounded-3xl cursor-pointer"
                onClick={() => {
                  setLoadMap(2);
                  setrenderMap(false);
                }}
              >
                <p className=" text-primary-blue font-jost font-bold text-xl  mb-3">
                  Mainland Motors Abbotsford
                </p>
                <p className="text-white font-jost text-base font-semibold">
                  32835 South Fraser Way <br /> Abbotsford , BC V2S2A6
                </p>
                <p className=" text-gray-400 font-jost text-base font-semibold">
                  Sales: <a href="">(877) 224-4360</a>
                </p>
              </div>
              <div
                className="p-4 bg-neutral-900 shadow-subtelShadow rounded-3xl cursor-pointer"
                onClick={() => {
                  setLoadMap(3);
                  setrenderMap(false);
                }}
              >
                <p className=" text-primary-blue font-jost font-bold text-xl  mb-3">
                  Mainland Motors Cabaseary
                </p>
                <p className="text-white font-jost text-base font-semibold">
                  1734 50 SE <br /> Cabaseary, Alberta T2A 1S8
                </p>
                <p className=" text-gray-400 font-jost text-base font-semibold">
                  General: <a href="">(833)-547-7056</a>
                  <br />
                  Service: <a href="">(833) 547-7227</a>
                </p>
              </div>
            </div>
            <div
              className="overflow-x-hidden w-full h-[60vh] mt-6 p-6"
              style={{ display: renderMap ? "none" : "inline-block" }}
            >
              <iframe
                src={mapSrc[LoadMap]}
                className="relative top-[-6vh] border-none h-full w-full transition-all delay-1000"
                style={{ top: LoadMap == 0 ? "-10vh" : "0px" }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MapRender;
