"use client";
import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { IoMdCloseCircle, IoMdContact, IoMdConstruct } from "react-icons/io";
import { HiMailOpen, HiUserGroup } from "react-icons/hi";
import { AiFillInstagram, AiFillHome } from "react-icons/ai";

const NavBar: FC = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-text)] relative ">
      <div className=" flex w-[95%] mx-auto p-4 items-center justify-between  ">
        <div>
          <Image
            alt=""
            width={300}
            height={300}
            src="/banks.png"
            className="w-[5rem] h-10"
          />
        </div>
        <nav className="md:flex hidden">
          <ul className="flex gap-4">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">About US</a>
            </li>
          </ul>
        </nav>
        <button className=" hidden md:flex border-[var(--color-text)] border-4 px-5 py-2 rounded-2xl">
          Free Quote
        </button>

        {/* meun dropdown  */}
        <div onClick={handleNav} className="md:hidden">
          {!nav ? <BiMenuAltRight size={30} /> : <IoMdCloseCircle size={30} />}
        </div>
        {/* end  */}
      </div>
      {/* mobile nav  */}
      <div
        className={
          nav
            ? "md:hidden text-[var(--color-bg)] bg-[var(--color-text)] absolute p-6 items-center  left-[12.3rem] rounded-2xl ease-in-out duration-[1500ms] shadow-lg shadow-black z-40 "
            : "fixed right-[-100%] "
        }
      >
        <nav className=" md:hidden flex   ">
          <ul className="">
            <li className="flex items-center gap-3">
              <AiFillHome />
              <a href="">Home</a>
            </li>
            <li className="flex items-center gap-3">
              <RiServiceLine />
              <a href="">Services</a>
            </li>
            <li className="flex items-center gap-3">
              <IoMdConstruct />
              <a href="">Projects</a>
            </li>
            <li className="flex items-center gap-3">
              <AiFillInstagram />
              <a href="">Blog</a>
            </li>
            <li className="flex items-center gap-3">
              <IoMdContact />
              <a href="">Contact</a>
            </li>
            <li className="flex items-center gap-3">
              <HiUserGroup />
              <a href="">About US</a>
            </li>
          </ul>
        </nav>
        <button className="border-[var(--color-bg)] border-4 px-5 py-2 rounded-2xl mt-4">
          Get A Quote
        </button>
      </div>
    </div>
  );
};

export default NavBar;
