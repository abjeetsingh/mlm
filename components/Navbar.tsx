"use client";

import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="w-full md:top-4 z-10 md:fixed items-center md:flex md:justify-center absolute">
      <div
        className={`md:w-[75vw] md:self-center  ${
          scrolling ? "md:bg-black/30 md:rounded-[75vw]" : ""
        } transition-all delay-200 ease-in-out`}
      >
        <nav className="max-width flex-between padding-x padding-y">
          <Link href="/" className="flex-center">
            <Image
              src="/logo.png"
              alt="logo"
              width={150}
              height={28}
              className="object-contain"
            />
          </Link>

          <CustomButton
            title="All Cars"
            btnType="button"
            containerStyles=" rounded-full  text-bold text-white bg-primary-blue/90 opacity min-w-[130px]"
          />
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
