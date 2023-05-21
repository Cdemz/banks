import React from "react";
import { GiSpaceship } from "react-icons/gi";
import { BiHappyHeartEyes } from "react-icons/bi";
import { FaUsersCog } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const Experience = () => {
  return (
    <div>
      <div className=" flex flex-col md:flex-row">
        {/* first box */}
        <div className="bg-[var(--color-primary)] px-8 py-8 flex flex-col gap-6 items-start md:w-[60%]">
          <h1 className="text-xl">Our Proud</h1>
          <p className="font-bold text-2xl">15 years of undeafed success</p>
          <p>
            we have a long and proud history given emphasisnto environment
            social and economic outcomes to deliver places that respond
          </p>
          <button type="button" className="bg-[var(--color-idan)] px-4 py-2">
            work with us{" "}
          </button>
        </div>
        {/* other items  */}
        <div className=" bg-black px-6 py-10 grid grid-cols-2 gap-4">
          {/* item 1  */}
          <div className="flex gap-3 items-center ">
            <MdRateReview size={40} className="text-[var(--color-primary)] " />
            <div className="">
              <h1 className="text-3xl font-bold">103</h1>
              <p>5 Star Rating</p>
            </div>
          </div>
          {/* item 2  */}
          <div className="flex gap-3 items-center  ">
            <FaUsersCog size={40} className="text-[var(--color-primary)] " />
            <div className="">
              <h1 className="text-3xl font-bold">13</h1>
              <p>Team Members</p>
            </div>
          </div>
          {/* item 3  */}
          <div className="flex gap-3 items-center">
            <BiHappyHeartEyes
              size={40}
              className="text-[var(--color-primary)] "
            />
            <div className="">
              <h1 className="text-3xl font-bold">97</h1>
              <p>Statisfied Clients</p>
            </div>
          </div>
          {/* item 4  */}
          <div className="flex gap-3 items-center">
            <GiSpaceship size={40} className="text-[var(--color-primary)] " />
            <div className="">
              <h1 className="text-3xl font-bold">142</h1>
              <p>Completed Projects</p>
            </div>
          </div>
        </div>
      </div>
      {/* end of first big box  */}
      <div className="bg-[var(--color-bg)] text-[var(--color-text)] text-center pt-5 px-5">
        <p className="text-[var(--color-primary)] ">Featured Work</p>
        <h1 className="text-2xl font-bold ">Our Recent Works</h1>
        <div className="mt-4  flex flex-col md:flex-row md:justify-around">
          <div className=" md:w-[30%] bg-white flex flex-col gap-4   text-center">
            <Image src="/houseslab.png" alt="house" width={300} height={300} />
            <h1>Residential Construction</h1>
            <p>
              {" "}
              Building new homes, townhouses, or residential complexes,
              providing services from initial design to final construction.
            </p>
            <button className=" flex items-center gap-2   px-5 py-2 rounded-2xl">
              Explore More
              <div className="h-10 w-10 rounded-full flex justify-center items-center bg-[var(--color-primary)] ">
                <BsArrowRight className="inline-flex text-[var(--color-bg)]" />
              </div>
            </button>
          </div>
          {/* item 2  */}
          <div className="md:w-[30%] bg-white flex flex-col gap-4  text-center">
            <Image src="/houseslab.png" alt="house" width={300} height={300} />
            <h1> Renovation and Remodeling</h1>
            <p>
              Renovating or remodeling existing structures to improve
              functionality, aesthetics, and energy efficiency.
            </p>
            <button className=" flex items-center gap-2   px-5 py-2 rounded-2xl">
              Explore More
              <div className="h-10 w-10 rounded-full flex justify-center items-center bg-[var(--color-bg)] ">
                <BsArrowRight className="inline-flex text-[var(--color-primary)]" />
              </div>
            </button>
          </div>
          {/* itme 3 */}
          <div className="md:w-[30%] bg-white flex flex-col gap-4  text-center">
            <Image src="/houseslab.png" alt="house" width={300} height={300} />
            <h1>Sustainable Construction</h1>
            <p>
              Incorporating environmentally friendly practices and utilizing
              sustainable materials and technologies to minimize the project's
              impact on the environment.
            </p>
            <button className=" flex items-center gap-2   px-5 py-2 rounded-2xl">
              Explore More
              <div className="h-10 w-10 rounded-full flex justify-center items-center bg-[var(--color-bg)] ">
                <BsArrowRight className="inline-flex text-[var(--color-primary)]" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
