import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { GoLocation } from "react-icons/go";
import { Menu } from "@headlessui/react";
import { TbWorld } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";

const Home: NextPage = () => {
  const languges = [
    {
      name: "khmer",
      link: "#",
    },
    { name: "English", link: "/" },
    { name: "French", link: "/" },
  ];

  const anyPlace = [
    { place: "Any Where", href: "/" },
    { place: "Any Week", href: "/" },
    { place: "Add Guest", href: "/" },
  ];

  const placeButton = [
    { btnName: "Cabin", icon: "/img/cabin.png", href: "/" },
    { btnName: "Island", icon: "/img/vector.png", href: "/" },
    { btnName: "Island", icon: "/img/vector.png", href: "/" },
    { btnName: "Island", icon: "/img/vector.png", href: "/" },
    { btnName: "Island", icon: "/img/vector.png", href: "/" },
    { btnName: "Island", icon: "/img/vector.png", href: "/" },
    { btnName: "Island", icon: "/img/vector.png", href: "/" },
    { btnName: "Island", icon: "/img/vector.png", href: "/" },
    // { btnName: "Island", icon: "/img/vector.png", href: "/" },
    // { btnName: "Island", icon: "/img/vector.png", href: "/" },
  ];

  // function clickHandling() {
  //   return alert("Hey.......");
  // }
  return (
    <div className="bg-[url('/img/amsterdam.jpg')]">
      <nav className="flex justify-between px-4 py-3 font-semibold md:px-7 md:text-xl text-white bg-emerald-600">
        <div className="flex items-center">
          <GoLocation className="mr-1" />
          <p>Xoxoxo</p>
        </div>
        <div className="flex ">
          <div className=" hover:bg-white hover:text-emerald-600 hover:rounded-md hover:px-2 ">
            Sign In
          </div>
          <div className=" hover:bg-white hover:text-emerald-600 hover:rounded-md hover:px-2 mx-12 md:mx-20">
            Sign Up
          </div>
          <div className=" hover:bg-white hover:text-emerald-600 hover:rounded-md hover:px-2 ">
            ? Help
          </div>
        </div>
      </nav>

      {/* Language Switcher---------------------- */}
      <div className="flex justify-between mt-5 ">
        <div className=" text-white ml-3 md:ml-40 ">
          <p className="text-xl font-bold md:text-5xl  ">Discover</p>
          <p className="text-lg font-semibold md:text-4xl md:mt-2">
            your comforatable Hotel!
          </p>
        </div>
        <Menu as="div">
          <Menu.Button>
            <div className="flex items-center bg-emerald-600 rounded-l-md px-6 py-1  text-xl text-white outline outline-emerald-600 hover:outline-emerald-200">
              <TbWorld />
              <p className="mx-2">Language</p>
              <RiArrowDropDownLine className="w-8 h-8" />
            </div>
            <Menu.Items>
              {languges.map((v) => {
                return (
                  <a
                    href={v.link}
                    className=" block bg-white  hover:bg-emerald-600 hover:text-white rounded-l-md  "
                  >
                    {v.name}
                  </a>
                );
              })}
            </Menu.Items>
          </Menu.Button>
        </Menu>
      </div>

      {/* Searching Bar----------------------------- */}
      <div className=" flex mt-6 md:mt-8 justify-center items-center">
        <input
          type="text"
          placeholder="Search destinations"
          className=" h-8 pl-4 outline outline-offset-0 outline-emerald-600 md:h-12 md:w-80 rounded-l-md"
        />
        <BiSearch className=" h-8 w-8 px-1 bg-emerald-600 rounded-r-md  outline outline-offset-0 outline-emerald-600 md:h-12 hover:bg-white hover:text-emerald-600 text-white" />
      </div>
      <div className="flex mt-5 justify-center">
        <button className=" hover:bg-white hover:text-emerald-600  hover:outline md:text-lg md:px-4 md:py-2   bg-emerald-600 px-3 rounded-md text-white py-1">
          Any Where
        </button>
        <button className=" hover:bg-white hover:text-emerald-600  hover:outline md:text-lg md:px-4 md:py-2 md:mx-8  bg-emerald-600 px-3 rounded-md text-white py-1 mx-4">
          Any Week
        </button>
        <button className=" hover:bg-white hover:text-emerald-600  hover:outline md:text-lg md:px-4 md:py-2   bg-emerald-600 px-3 rounded-md text-white py-1">
          Add Guest
        </button>
      </div>

      {/* The flilter button below Searching bar ----------------------- */}
      <div className="flex justify-center">
        {placeButton.map((key) => {
          return (
            <div className=" flex bg-white outline  outline-emerald-600 md:text-sm text-xs  rounded-lg  mt-5 md:w-16 md:h-16 w-14 h-14  text-emerald-600  font-semibold  justify-center mx-2 hover:outline-emerald-200  ">
              <button className=" w-14 h-14 md:w-16 md:h-16  rounded-lg ">
                <Image src={key.icon} width={25} height={30} />
                <div>{key.btnName}</div>
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <div>hi</div>
        <div>hi</div>
        <div>hi</div>
        <div>hi</div>
        <div>hi</div>
        <div>hi</div>
        <div>hi</div>
        <div>hi</div>
        <div>hi</div>
        <div>hi</div>
        <div>hi</div>
        <div>hi</div>
        <div>hi</div>
        <div>hi</div>
        <div>hi</div>
        <div>hi</div>
        <div>hi</div>
        <div>hi</div>
        <div>hi</div>
      </div>
    </div>
  );
};

export default Home;
