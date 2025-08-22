'use client'
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  return (
    <footer>
      <div className="relative overflow-hidden w-full h-[600px] md:h-[800px] pt-[200px]">
        <div className="flex items-start pt-6 justify-center h-full w-full z-50 relative bg-customDark rounded-t-full absolute top-[50px] md:top-[150px]">
          <div className="flex flex-col items-center  gap-2 px-4 md:px-0 mt-[40px]">
            <Link href='/'>
              <img src='/images/MBLK Logo White.png' className="w-[60px] h-[60px] md:h-[150px] md:w-[150px] my-2" alt='MBLKICON' />
            </Link>
            <p className="text-center text-white text-[12px] md:text-[16px] leading-[16px] md:leading-[24px] ">Disclaimer: Digital currencies may be unregulated in your jurisdiction.</p>
            <p className="text-center text-white text-[12px] md:text-[16px] leading-[16px] md:leading-[24px] "> The value of digital currencies may go down as well as up.</p>
            <p className="text-center text-white text-[12px] md:text-[16px] leading-[16px] md:leading-[24px] " >Smart Contract address : 0xF47245e9A3Ba3dCa8B004E34afc1290B1d435a52</p>
            <div className="flex flex-wrap gap-3 md:gap-6 mt-3">
              <ScrollLink to="utility" smooth={true} duration={500} className="text-[12px] md:text-[18px]  cursor-pointer text-[#F8672C] ">Utility</ScrollLink>
              <ScrollLink to="ecosystem" smooth={true} duration={500} className="text-[12px] md:text-[18px]  cursor-pointer text-[#F8672C] ">Ecosystem</ScrollLink>
              <ScrollLink to="updates" smooth={true} duration={500} className="text-[12px] md:text-[18px]  cursor-pointer text-[#F8672C] ">Updates</ScrollLink>
              <ScrollLink to="community" smooth={true} duration={500} className="text-[12px] md:text-[18px]  cursor-pointer text-[#F8672C] ">Community</ScrollLink>
            </div>
            <p className="text-white text-[12px] md:text-[18px]">©Copyright Magical Blocks 2024. All right reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
