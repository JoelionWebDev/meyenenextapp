import React from "react";
import Image from "next/image";
import Link from "next/link";
// import Balancer from "react-wrap-balancer";

// images
import databiz from "@/assets/images/client-databiz.svg";
import audiophile from "@/assets/images/client-audiophile.svg";
import meet from "@/assets/images/client-meet.svg";
import maker from "@/assets/images/client-maker.svg";

import hremoImagedesktop from "@/assets/images/image-hero-desktop.png";
import hremoImageMobile from "@/assets/images/image-hero-mobile.png";

export default function Featured() {
  const bannerImages = [databiz, audiophile, meet, maker];
  return (
    <div>
      <section className="mx-auto flex w-3/4  flex-col-reverse gap-2  px-4  pb-12 transition-all md:flex-row md:gap-4">
        {/* left div */}
        <div className=" flex flex-col items-center  gap-6 pt-8 text-center md:w-1/2 md:items-start md:gap-10 md:pt-32 md:text-left">
          {/* <Balancer> */}
          <h1 className="text-4xl font-semibold md:text-6xl">
            Meyene Electrical Company
          </h1>
          <h3>Powering Your World with Precision</h3>
          {/* </Balancer> */}
          {/* <Balancer> */}
          <p className=" text-neutral-500 md:max-w-[400px]">
            Your trusted partner for expert electrical solutions, delivering
            safe, efficient, and reliable service for homes and businesses. With
            a commitment to excellence and a team of skilled professionals, we
            bring your vision to life—brightening spaces and ensuring peace of
            mind, one project at a time.
          </p>
          {/* </Balancer> */}
          <div className="w-full flex max-md:flex-col">
            <button className="border-balck  w-fit rounded-xl border-2 bg-black px-4 py-2  text-white transition-all hover:border-black hover:bg-black hover:bg-transparent  hover:text-black/90">
              Projects
            </button>
            <Link
              href={
                "https://whatsapp.com/channel/0029Vagriqv30LKGFcsyyz3H/3408"
              }
              target="_blank"
              className="border-balck  w-fit rounded-xl border-2 bg-black px-4 py-2  text-white transition-all hover:border-black hover:bg-black hover:bg-transparent  hover:text-black/90"
            >
              Chat with us
            </Link>
          </div>
          <div className="flex gap-2 md:gap-6">
            {bannerImages.map((img, i) => (
              <Image
                className=" h-5 w-auto"
                key={i}
                src={img}
                alt="client-image"
              />
            ))}
          </div>
        </div>

        {/* right div */}
        <section className="md:w-1/2 ">
          <Image
            className="hidden h-auto max-w-[400px]  md:block"
            src={hremoImagedesktop}
            alt="hreo-image"
          />
          <Image
            className="h-auto w-full  md:hidden"
            src={hremoImageMobile}
            alt="hreo-image"
          />
        </section>
      </section>
    </div>
  );
}
