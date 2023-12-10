import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { Vector3 } from "webgi";

export const scrollAni = (
  position: Vector3,
  tar: Vector3,
  onUpdate: () => void
) => {
  const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);

  tl.fromTo(
    ".outercanvas",
    {
      x: 500,
    },
    {
      x: 0,
      scrollTrigger: {
        trigger: ".render",
        start: "top top",
        end: "100px",
        scrub: 2,
      },
    }
  ).to(position, {});
};
//create a useeffect for page reload
