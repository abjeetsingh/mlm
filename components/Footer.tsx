import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@constants";

const Footer = () => (
  <footer className="footer">
    <div className=" bg-honeycomb ">
      <div className="footer__links-container  bg-darken sm:px-16 px-6 py-10 w-full">
        <div className="footer__rights">
          <Image
            src="/logo.png"
            alt="logo"
            width={180}
            height={18}
            className="object-contain"
          />
          <p className="text-lg font-bold font-jost text-primary-blue">
            Mainland Motors 2023 <br />
            All Rights Reserved &copy;
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((item) => (
            <div key={item.title} className="footer__link text-white">
              <h3 className="font-bold">{item.title}</h3>
              <div className="flex flex-col gap-5">
                {item.links.map((link) => (
                  <Link
                    key={link.title}
                    href={link.url}
                    className="text-[#bbbbbb]"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="footer__copyrights bg-black text-white">
      <p>@2022 Mainland Motor. All rights reserved</p>

      <div className="footer__copyrights-link">
        <Link href="/" className="text-white">
          Privacy & Policy
        </Link>
        <Link href="/" className="text-white">
          Terms & Condition
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
