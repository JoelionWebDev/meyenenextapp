import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" text-gray-300 bg-slate-500 text-center mb-8 pt-6">
      <section className="p-11 m-auto  md:flex  gap-x-12 text-start justify-center w-5/6 ">
        <div>
          <h2>Company</h2>
          <ul>
            <li>
              <Link href={"#"}>About Us</Link>
            </li>
            <li>
              <Link href={"#"}>Blog</Link>
            </li>
            <li>
              <Link href={"#"}>Careers</Link>
            </li>
            <li>
              <Link href={"#"}>Contact Us</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2>Support</h2>
          <ul>
            <li>
              <Link href={"#"}>Help Center</Link>
            </li>
            <li>
              <Link href={"#"}>Safety Center</Link>
            </li>
            <li>
              <Link href={"#"}>Community Guidelines</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2>Legal</h2>
          <ul>
            <li>
              <Link href={"#"}>Cookies Policy</Link>
            </li>
            <li>
              <Link href={"#"}>Privacy Policy</Link>
            </li>
            <li>
              <Link href={"#"}>Terms of Service</Link>
            </li>
            <li>
              <Link href={"#"}>Law Enforcement</Link>
            </li>
          </ul>
        </div>
        <div className="social">
          <h2 className="socialicons">Social Networks</h2>
        </div>
      </section>
      <p>+234 8148608347</p>
      <p className="pb-8">Ologunfe, Awoyaya, Ibeju Lekki, Lagos</p>
    </footer>
  );
};

export default Footer;
