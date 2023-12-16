import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WebgiViewer from "./WebgiViewer";
import Service from "./serviceData";
import { setInterval, setTimeout } from "timers";
import { FeatureTwo } from "./FeatureTwo";

gsap.registerPlugin(ScrollTrigger);
interface manyservices {
  id: number;
  name: string;
  desc: string;
}

function Features() {
  const [Serv, setServ] = useState("Service 1");
  const [fade, setFade] = useState(true);
  const services = Service;

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(".coverss", {
      // opacity: 0,
      scrollTrigger: {
        trigger: ".paragraph",
        start: "top top",
        pin: true,
        pinSpacing: false,
        scrub: 1,
      },
    });
    //   .to(".render", {
    //     scrollTrigger: {
    //       trigger: ".render",
    //       start: "top top",
    //       end: "+=5000px",
    //       pin: true,
    //       scrub: 1,
    //     },
    //   });
  }, []);
  var service: manyservices | undefined = services.find(
    (x: manyservices) => x.name == Serv
  );
  function changeVal(theService: string) {
    setFade(!fade);
    setTimeout(() => {
      setServ(theService);
      service = services.find((x: manyservices) => x.name == Serv);
    }, 500);
  }
  var valid = false;
  if (window.innerWidth > 800) valid = true;
  useEffect(() => {
    gsap.to(".slide", {
      opacity: 0,
      duration: 0.6,
    });
    gsap.to(".slide", {
      opacity: 1,
      duration: 1,
      delay: 1,
    });
  }, [fade]);

  useEffect(() => {
    if (window.innerWidth < 800) {
      var i = 0;
      setInterval(() => {
        if (Serv) {
          i = i + 1;
          setServ(`Service ${i % 7}`);
        }
      }, 5000);
    }
  }, []);

  return (
    <div className="">
      <div className=" w-[100vw] paragraph -z-20  bg-black holder lg:py-20 py-6">
        <FeatureTwo />
      </div>
      <div className="h-[100vh] lg:h-[100vh] w-[100vw] bg-dodge bg-cover bg-center bg-fixed render z-40">
        <div className=" h-full w-full bg-[rgba(0,0,0,0.30)] faded">
          {/* add animation here */}
          <div className="feature bg-[rgba(0,0,0,0.40)] lg:h-[70vh] lg:w-[80vw] w-[90vw] shadow-subtelShadow rounded-3xl text-center relative left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
            <div className="h-full">
              <div className="heading  font-semibold font-jost text-primary-blue lg:text-4xl/[2] text-3xl my-6 bg-white/20 rounded-2xl">
                Why Chose Mainland?
              </div>
              <div className="flex flex-col-reverse lg:grid lg:grid-cols-3  items-center p-8 w-full overflow-hidden">
                <div className="w-full h-full mt-12 slide text-center shadow-subtelShadow p-6 rounded-3xl  ">
                  <div className="text-primary-blue mb-4 font-jost font-bold text-2xl bg-white/20 rounded-2xl py-1 ">
                    {service?.name}
                  </div>
                  <div className="text-white font-jost font-semibold leading-7 text-lg text-justify">
                    {service?.desc}
                  </div>
                </div>

                <div className="bg-[rgba(0,0,0,0.40)] hidden justify-center lg:flex items-center rounded-[50%] ml-10 ">
                  <WebgiViewer />
                </div>

                <div className="order-1 hidden lg:block">
                  <ul className=" text-white text-base lg:text-lg lg:font-black flex-col items-center gap-3 list-disc lg:flex p-4">
                    <li
                      className=" cursor-pointer border-r-2 border-primary-blue px-6 lg:border-none p-2 rounded-3xl shadow-subtelShadow  font-semibold text-[#eeeee] "
                      onClick={() => changeVal("Service 1")}
                    >
                      Service 1
                    </li>
                    <li
                      className=" cursor-pointer border-r-2 border-primary-blue px-6 lg:border-none p-2 rounded-3xl shadow-subtelShadow bg-[rgba(0,0,0,0.30)]font-semibold text-[#eeeee]"
                      onClick={() => changeVal("Service 2")}
                    >
                      Service 2
                    </li>
                    <li
                      className=" cursor-pointer border-r-2 border-primary-blue px-6 lg:border-none p-2 rounded-3xl shadow-subtelShadow bg-[rgba(0,0,0,0.30)] font-semibold text-[#eeeee]"
                      onClick={() => changeVal("Service 3")}
                    >
                      Service 3
                    </li>
                    <li
                      className=" cursor-pointer border-r-2 border-primary-blue px-6 lg:border-none p-2 rounded-3xl shadow-subtelShadow bg-[rgba(0,0,0,0.30)] font-semibold text-[#eeeee]"
                      onClick={() => changeVal("Service 4")}
                    >
                      Service 4
                    </li>
                    <li
                      className=" cursor-pointer border-r-2 border-primary-blue px-6 lg:border-none p-2 rounded-3xl shadow-subtelShadow bg-[rgba(0,0,0,0.30)] font-semibold text-[#eeeee]"
                      onClick={() => changeVal("Service 5")}
                    >
                      Service 5
                    </li>
                    <li
                      className=" cursor-pointer border-primary-blue  p-2 rounded-3xl px-6 shadow-subtelShadow bg-[rgba(0,0,0,0.30)] font-semibold text-[#eeeee]"
                      onClick={() => changeVal("Service 6")}
                    >
                      Service 6
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
