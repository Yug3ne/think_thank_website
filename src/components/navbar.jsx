import React, { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { HiChatBubbleLeftRight } from "react-icons/hi2";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [copyButtonText, SetCopyButtonText] = useState("Copy");

  const handleLinkCopy = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      SetCopyButtonText("Copied!");
      setTimeout(() => {
        SetCopyButtonText("Copy");
      }, 1000);
    });
  };

  return (
    <div className="flex justify-between h-12 bg-[#52637a] items-center px-4 lg:px-20">
      {/* Normal sceen */}
      {/* logo */}
      <div>
        <Link to="/">
          <img src="MufasaAlu/logo.PNG" alt="Logo" className="w-12 h-12 rounded-full"/>
        </Link>
      </div>
      {/* middle */}
      <div className="flex items-center gap-4">
        <ul className=" hidden md:flex gap-4">
          <Link to="/challenges">E-Lab Challenges</Link>
          <Link to="/gallery">Gallery</Link>
        </ul>
      </div>
      {/* right thing */}
      <div>
        <button
          onClick={() => setShowContact(true)}
          className={`max-md:hidden font-medium cursor-pointer flex items-center gap-1 transition active:scale-95 text-sm py-2 px-5 rounded-full bg-black text-white `}
        >
          <HiChatBubbleLeftRight className="text-[17px]" />
          Let's Talk
        </button>
        <div>
          <div
            className={`fixed top-0 left-0 w-full h-full backdrop-blur-sm flex items-center justify-center ${
              showContact
                ? "z-40 opacity-100 transition duration-200 "
                : "-z-50 opacity-0 "
            } `}
          >
            <div
              onClick={() => setShowContact(false)}
              className="bg-dark-body-color/20 w-full h-full absolute top-0 left-0 z-10"
            ></div>
            <div
              className={` w-fit max-w-[500px] h-fit shadow-xl rounded-3xl bg-white p-8  mx-auto z-20 overflow-clip transition duration-200 ${
                showContact ? "scale-100 " : "scale-50 "
              } `}
            >
              <h1 className=" font-medium text-base">Contact us via </h1>
              <div className="py-4 flex gap-2 items-start justify-start max-sm:flex-wrap">
                <a
                  // href={`https://wa.me/${Contacts.WhatsAppNumber}`}
                  target="_blank"
                  className=" w-full h-fit flex items-center justify-start flex-col gap-1 cursor-pointer"
                >
                  <div className="p-2 w-fit transition bg-green-700 text-text-light-color rounded-full text-[30px]">
                    <FaWhatsapp />
                  </div>
                  <p className="font-medium text-sm ">WhatsApp</p>
                </a>
                <a
                  // href={`https://www.instagram.com/${Contacts.InstagramUsername}/`}
                  target="_blank"
                  className=" w-full h-fit flex items-center justify-start flex-col gap-1 cursor-pointer"
                >
                  <div className="p-2 w-fit bg-red-500  text-text-light-color rounded-full text-[30px]">
                    <IoLogoInstagram />
                  </div>
                  <p className="font-medium text-sm ">Instagram</p>
                </a>
                <a
                  // href={`mailto:${Contacts.Gmail}`}
                  target="_blank"
                  className=" w-full h-fit flex items-center justify-start flex-col gap-1 cursor-pointer"
                >
                  <div className="p-2 w-fit bg-blue-500  text-text-light-color rounded-full text-[30px]">
                    <MdOutlineEmail />
                  </div>
                  <p className="font-medium text-sm ">Gmail</p>
                </a>
              </div>
              <div className="w-full h-full flex flex-col ">
                <h1 className=" pt-5 font-medium text-base">Share The Link </h1>
                <input
                  type="text"
                  readOnly
                  value={window.location.href}
                  className=" my-2 py-2 px-4 font-medium w-full text-sm  bg-stone-200 rounded-full max-w-[300px]"
                />
                <button
                  onClick={handleLinkCopy}
                  className="font-medium cursor-pointer w-fit bg-dark-body-color text-light-body-color transition  active:scale-95 text-sm mt-1 py-2 px-5 rounded-full"
                >
                  {copyButtonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile screen */}
      {!open ? (
        <IoMenu
          className="md:hidden"
          size={30}
          onClick={() => setOpen((prev) => !prev)}
        />
      ) : (
        <IoClose
          size={30}
          className="md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        />
      )}
      {open && (
        <div className=" md:hidden absolute top-12 right-0 bg-[#172448] h-[440px] w-[240px] border-t-2 border-gray-500 z-10 flex flex-col gap-8 cursor-pointer list-none justify-center items-center">
          <Link onClick={() => setOpen((prev) => !prev)} to="/">
            Home
          </Link>
          <Link onClick={() => setOpen((prev) => !prev)} to="/challenges">
            E-Lab Challenges
          </Link>
          <Link onClick={() => setOpen((prev) => !prev)} to="/gallery">
            Gallery
          </Link>
          <button
            onClick={() => setShowContact(true)}
            className="flex gap-2 items-center"
          >
            <HiChatBubbleLeftRight size={28} className="text-[17px]" />
            Let's Talk
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
