import React from "react";
import Image from "next/image";
import Solar2 from "@/assets/images/solar2.jpg";
import Solar1 from "@/assets/images/solar1.jpg";

const page = () => {
  return (
    <main className="w-full bg-gray-200">
      <div className="sola m-auto w-2/3 my-4">
        <section className="s1">
          <h1>Solar Projects</h1>
          <h2>Empowering a Sustainable Future </h2>
          <p>
            As a forward-thinking company, Meyene Electrical Company has
            embraced the power of renewable energy. Our solar projects are
            designed to provide clean, cost-effective, and sustainable energy
            solutions to homes, businesses, and industries.
          </p>
        </section>
        <section className="s2 ">
          <div>
            <h3>Our Solar Services Include:</h3>
            <ul>
              <li>
                Solar Panel Installation: Customized solar systems tailored to
                meet your energy needs.
              </li>
              <li>
                Hybrid Power Solutions: Combining solar, grid, and generator
                systems for maximum reliability.
              </li>
              <li>
                Energy Storage Systems: High-capacity batteries to store excess
                energy for uninterrupted power supply.
              </li>
              <li>
                Maintenance and Upgrades: Regular system checks and upgrades to
                keep your solar system running optimally.
              </li>
            </ul>
          </div>
          <Image src={Solar2} alt="solar pannel"></Image>
          <div>
            <h3>Notable Solar Projects</h3>
            <ul>
              <li>
                Estate Solar Installation – Lekki, Lagos: Installed a solar grid
                system powering an entire residential estate, reducing energy
                bills by 60%.
              </li>
              <li>
                Hospital Solar Backup – Abuja: Provided a reliable solar power
                system for a hospital, ensuring uninterrupted operations even
                during power outages.
              </li>
              <li>
                Factory Hybrid Solar System – Port Harcourt: Integrated a hybrid
                solar solution into a manufacturing plant, cutting costs and
                minimizing environmental impact.
              </li>
              <li>
                Retail Mall Solar Setup – Kano: Designed and implemented a solar
                energy system to meet the high-energy demands of a busy shopping
                complex.
              </li>
            </ul>
          </div>
        </section>
        <Image src={Solar1} alt="solar image 2"></Image>
      </div>
    </main>
  );
};

export default page;
