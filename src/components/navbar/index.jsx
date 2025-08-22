"use client";
import Image from "next/image";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const router = useRouter();

    const isStakeRoute = pathname === "/stake";

    return (
        <nav className="w-full py-2 px-3 bg-[#151316] rounded-[40px] flex items-center justify-between absolute top-0 z-50">
            <Link href="/" className="flex items-center">
                <Image
                    src="/images/MblkLogo.png"
                    alt="Magical Blocks Logo"
                    width={50}
                    height={50}
                />
                <span className="ml-2 text-white font-bold leading-[16px]">
                    MAGICAL <br /> BLOCKS
                </span>
            </Link>
            <div className="hidden lg:flex gap-3 items-center">
                {!isStakeRoute && (
                    <div className="flex justify-center space-x-4 text-white mr-4 items-center">
                        <ScrollLink
                            to="utility"
                            smooth={true}
                            duration={500}
                            className="hover:scale-105 duration-300 ease-in-out text-[18px] font-bold cursor-pointer"
                        >
                            Utility
                        </ScrollLink>
                        <ScrollLink
                            to="ecosystem"
                            smooth={true}
                            duration={500}
                            className="hover:scale-105 duration-300 ease-in-out text-[18px] font-bold cursor-pointer"
                        >
                            Ecosystem
                        </ScrollLink>
                        <ScrollLink
                            to="updates"
                            smooth={true}
                            duration={500}
                            className="hover:scale-105 duration-300 ease-in-out text-[18px] font-bold cursor-pointer"
                        >
                            Updates
                        </ScrollLink>
                        <ScrollLink
                            to="community"
                            smooth={true}
                            duration={500}
                            className="hover:scale-105 duration-300 ease-in-out text-[18px] font-bold cursor-pointer"
                        >
                            Community
                        </ScrollLink>
                    </div>
                )}
                <div className="flex space-x-4">
                    <button className="hover:scale-105 duration-300 ease-in-out">
                        <Link
                            href={"/stake"}
                            className="w-[164px] h-[60px] border border-[#FF7036] rounded-[40px] text-white font-bold text-[18px] flex items-center justify-center"
                        >
                            {"Stake"}
                        </Link>
                    </button>
                    <button className="hover:scale-105	 duration-300 ease-in-out cursor-pointer w-[164px] flex items-center justify-center h-[60px] bg-gradient-purple rounded-[40px] text-white font-bold text-[18px]">
                        <ScrollLink
                            smooth={true}
                            duration={500}
                            to='whereToBuy'>
                            BUY MBLK
                        </ScrollLink>
                    </button>
                </div>
            </div>
            <div className="lg:hidden flex items-center">
                <button onClick={toggleMenu} className="text-white">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>
            </div>
            {isOpen && (
                <div className="lg:hidden absolute top-16 left-0 right-0 bg-[#151316] rounded-[40px] flex flex-col items-center space-y-4 py-4 mx-2">
                    {!isStakeRoute && (
                        <>
                            <ScrollLink
                                to="utility"
                                smooth={true}
                                duration={500}
                                className="hover:scale-105 duration-300 text-[18px] font-[300] text-white cursor-pointer"
                            >
                                Utility
                            </ScrollLink>
                            <ScrollLink
                                to="ecosystem"
                                smooth={true}
                                duration={500}
                                className="hover:scale-105 duration-300 text-[18px] font-[300] text-white cursor-pointer"
                            >
                                EcoSystem
                            </ScrollLink>
                            <ScrollLink
                                to="updates"
                                smooth={true}
                                duration={500}
                                className="hover:scale-105 duration-300 text-[18px] font-[300] text-white cursor-pointer"
                            >
                                Updates
                            </ScrollLink>
                            <ScrollLink
                                to="community"
                                smooth={true}
                                duration={500}
                                className="hover:scale-105 duration-300 text-[18px] font-[300] text-white cursor-pointer"
                            >
                                Community
                            </ScrollLink>
                        </>
                    )}
                    <Link
                        href={"/stake"}
                        className="hover:scale-105 duration-300 ease-in-out w-[164px] h-[60px] border border-[#FF7036] rounded-[40px] text-white font-bold text-[18px] flex items-center justify-center"
                    >
                        {"Stake"}
                    </Link>
                    <button className="hover:scale-105 duration-300 ease-in-out w-[164px] h-[60px] bg-gradient-purple rounded-[40px] text-white font-bold text-[18px]">
                        BUY MBLK
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
