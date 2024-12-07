import React from "react";
import Image from "next/image";
import meyene from "@/assets/images/meyene.jpeg";

const page = () => {
  return (
    <div>
      <section className="w-4/6 m-auto mt-8">
        <h1>About Meyene Electrical Company</h1>
        <p className="mb-10">
          Welcome to Meyene Electrical Company, your trusted partner for
          reliable and innovative electrical and solar solutions.
        </p>
        <Image
          src={meyene}
          alt="Mr Meyene"
          className="rounded-full w-full h-4/5"
        ></Image>
        <h3>Who We Are?</h3>
        <p className="font-style mb-10">
          Founded in 2013 and headquartered in Ologunfe, Awoyaya, Ibeju Lekki,
          Lagos, Meyene Electrical Company has grown to become a leading
          provider of electrical and solar energy solutions. With over a decade
          of experience, we pride ourselves on delivering top-notch services
          that meet the unique needs of residential, commercial, and industrial
          clients.
        </p>
        <h3>Our Mission</h3>
        <p className="mb-10">
          To provide safe, efficient, and sustainable energy solutions while
          exceeding our clients’ expectations through innovation, quality, and
          excellent customer service.
        </p>
        <h1>What We Do</h1>

        <ul className="mb-10">
          <li>
            Electrical Services: From installations and repairs to large-scale
            industrial systems, we deliver reliable and tailored electrical
            solutions.
          </li>
          <li>
            Solar Energy Solutions: We design and implement renewable energy
            systems that reduce costs, improve energy efficiency, and support a
            greener planet.
          </li>
          <li>
            Gadget Supply: Our wide range of high-quality electrical gadgets and
            components ensures you get the best tools for your projects.
          </li>
        </ul>
        <h1>Why Choose Us?</h1>
        <ul className="mb-10">
          <li>
            A Proven Legacy: With a strong track record since 2013, we’ve
            successfully completed hundreds of projects.
          </li>
          <li>
            Customer-Centric Approach: Your satisfaction is our top priority.
          </li>
          <li>
            Quality Assurance: We use only premium materials and cutting-edge
            technology to deliver exceptional results.
          </li>
          <li>
            Expert Team: Our skilled professionals are committed to solving your
            energy challenges efficiently.
          </li>
        </ul>
        <h1>Our Vision</h1>
        <p className="mb-10">
          To be the go-to company for electrical and solar solutions across
          Nigeria, driving innovation and sustainability in every project we
          undertake.
        </p>
        <h3>Contact Us</h3>
        <ul className="mb-10">
          <li>
            {" "}
            <span>Address:</span> Ologunfe, Awoyaya, Ibeju Lekki, Lagos
          </li>
          <li>
            {" "}
            <span>Phone:</span> +234 8148608347
          </li>
          <li>
            {" "}
            <span>Email:</span> meyeneelectrical@gmail.com
          </li>
        </ul>
      </section>
    </div>
  );
};

export default page;
