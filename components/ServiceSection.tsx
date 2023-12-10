import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function ServiceSection() {
  const car = useRef(null);
  useEffect(() => {
    const el = car.current;
    if (window.innerWidth < 800) {
      gsap.fromTo(
        el,
        { x: -1000 },
        {
          x: 0,
          scrollTrigger: {
            trigger: ".service",
            start: "-400px bottom",
            end: "bottom center",
            scrub: 0,
          },
        }
      );
    } else {
      gsap.fromTo(
        el,
        { x: -1000 },
        {
          x: 0,
          scrollTrigger: {
            trigger: ".service",
            start: "top center",
            end: "top top",
            scrub: 0,
          },
        }
      );
    }
  }, []);

  return (
    <div className="bg-honeycomb service ">
      <div className="bg-darken grid md:grid-cols-2 m-auto py-10">
        <div className=" text-center md:relative">
          <h1 className="text-white font-jost inline-block text-left font-bold text-2xl p-11 lg:px-24">
            It is a long established fact that reader will bedistracted by the
            readable
          </h1>
          <img src="/lambo.png" alt="" className=" car" ref={car} />
        </div>

        <div className="grid md:grid-cols-2 md:grid-rows-2 m-4 gap-x-10 w-3/4">
          <div className="m-2">
            <div>
              <img src="/services1.svg" alt="" className="w-16 inline-block" />
              <h1 className="text-white inline font-jost font-bold text-lg mx-2">
                Auto car Dealer
              </h1>
            </div>
            <p className="text-[#bbbbbb] text-base my-4 ">
              Volutpat sodales, mauris erat rutrum deserunt sed pharetra mollis,
              nunc leo eu maecenas nascetur duis viverra nam vitae
            </p>
          </div>
          <div className="m-2">
            <div>
              <img src="/services2.svg" alt="" className="w-16 inline-block" />
              <h1 className="text-white inline font-jost font-bold text-lg mx-2">
                Auto car Dealer
              </h1>
            </div>
            <p className="text-[#bbbbbb] text-base my-4 ">
              Volutpat sodales, mauris erat rutrum deserunt sed pharetra mollis,
              nunc leo eu maecenas nascetur duis viverra nam vitae
            </p>
          </div>

          <div className="m-2">
            <div>
              <img src="/services3.svg" alt="" className="w-16 inline-block" />
              <h1 className="text-white inline font-jost font-bold text-lg mx-2">
                Auto car Dealer
              </h1>
            </div>
            <p className="text-[#bbbbbb] text-base my-4 ">
              Volutpat sodales, mauris erat rutrum deserunt sed pharetra mollis,
              nunc leo eu maecenas nascetur duis viverra nam vitae
            </p>
          </div>

          <div className="m-2">
            <div>
              <img src="/services4.svg" alt="" className="w-16 inline-block" />
              <h1 className="text-white inline font-jost font-bold text-lg mx-2">
                Auto car Dealer
              </h1>
            </div>
            <p className="text-[#bbbbbb] text-base my-4 ">
              Volutpat sodales, mauris erat rutrum deserunt sed pharetra mollis,
              nunc leo eu maecenas nascetur duis viverra nam vitae
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
