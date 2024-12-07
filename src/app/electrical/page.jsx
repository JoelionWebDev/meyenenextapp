import Image from "next/image";
import Project1 from "@/assets/images/010.jpg";
import Project2 from "@/assets/images/014.jpg";
import Project3 from "@/assets/images/020.jpg";

function Electrical() {
  return (
    <div>
      <section className="section1 w-4/6 m-auto mt-6">
        <h1 className="text-center text-3xl font-extrabold  ">
          Welcome to Meyene Electrical Company – Our Projects
        </h1>
        <p className="text-left text-base pt-2 mb-4">
          At Meyene Electrical Company, we are committed to excellence in both
          electrical solutions and solar energy projects. With over a decade of
          hands-on experience, we’ve built a reputation for delivering reliable
          and innovative solutions to meet the diverse needs of our clients.
        </p>
        <div className="md:flex gap-5 w-full">
          <Image
            className="w-full md:w-3/6 mb-3"
            src={Project1}
            alt="project1"
          />
          <Image className="w-full md:w-3/6" src={Project2} alt="project1" />
        </div>
        <h1 className="text-center text-3xl font-extrabold mt-5 ">
          Reliable Power, Expertly Delivered
        </h1>
        <p className="text-left text-base pt-2 mb-4">
          Our expertise in electrical services spans residential, commercial,
          and industrial installations. We’ve worked on hundreds of projects,
          each tailored to ensure safety, efficiency, and seamless operation.
        </p>
      </section>
      <h1 className="text-center text-3xl font-extrabold mt-5 ">
        Notable Electrical Projects
      </h1>
      <ul className="text-center w-4/6 m-auto">
        <li>
          Luxury Apartment Wiring – Ikoyi, Lagos: Designed and installed a
          state-of-the-art wiring system for a luxury residential building,
          ensuring maximum energy efficiency.
        </li>
        <li>
          <Image className="w-full mb-5" src={Project3} alt="project3" />
        </li>
      </ul>
    </div>
  );
}

export default Electrical;
