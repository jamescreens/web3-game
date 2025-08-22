'use client'
import React, { useState, useEffect } from 'react';
import LogoSlider from './logos';
import Image from 'next/image';
import PartnersLogoSlider from './logos/PartnersLogoSlider';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link as ScrollLink } from "react-scroll";

const HeroSection = () => {
  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: slidersRef, inView: slidersInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [headerText, setHeaderText] = useState('');

  useEffect(() => {
    const fullText = 'DISCOVER MBLK \n THE FUTURE OF GAMEFI';
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setHeaderText(fullText.substring(0, currentIndex + 1));
      currentIndex += 1;

      if (currentIndex === fullText.length) {
        clearInterval(intervalId); // Clear the interval once the full text is displayed
      }
    }, 100); // Adjust the speed of the animation here

    return () => clearInterval(intervalId); // Clear the interval on cleanup
  }, []);

  return (
    <>
      <div className="relative w-full h-[785px] overflow-hidden" ref={contentRef}>
        <div className="relative w-full h-full">
          <div className="relative w-full h-full py-5 flex items-center flex-col gap-3">
            <div className="relative w-full h-full p-5">
              <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover"
              >
                <source src="/videos/Hero.mp4" type="video/mp4" />
              </video>
              <div className="absolute top-0 left-0 w-full h-1/2" style={{
                background: 'linear-gradient(180deg, #131212 23.93%, rgba(19, 18, 18, 0) 100%)',
                zIndex: 1
              }}></div>
              <div className="absolute bottom-0 left-0 w-full h-1/4" style={{
                background: 'linear-gradient(0deg, #131212 23.93%, rgba(19, 18, 18, 0) 100%)',
                zIndex: 1
              }}></div>

              <motion.div
                className="relative z-10 flex flex-col items-center h-full justify-center"
                initial={{ opacity: 0, y: -50 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                style={{ height: '200px' }}
              >
                {/* Animated Header */}
                <h2 className="text-[24px] font-bold md:text-[40px] leading-[50px] text-white text-center mt-4 ms-4 whitespace-pre-line min-h-[130px]">
                  {headerText}
                </h2>

                <div className="chip bg-black w-[227px] h-[227px] flex items-center justify-center rounded-[34px] border border-[#784DE2] mt-[40px]">
                  <div className="pins left">
                    <div className="pin pin-top-left"></div>
                    <div className="pin pin-bottom-left"></div>
                  </div>
                  <div className="pins right">
                    <div className="pin pin-top-right"></div>
                    <div className="pin pin-bottom-right"></div>
                  </div>
                  <img src={'/images/MBLK Logo White.png'} alt="MBLK LOGO" className='w-[100px] h-[100px] md:h-[150px] md:w-[150px]' />
                </div>
                <p className="text-white text-[16px] ms-4 text-center md:text-[18px] md:leading-[24px] mt-[60px] font-bold bg-black bg-opacity-50 md:bg-transparent p-2 rounded-lg">
                  Staking, Rewards, and More - All with MLBK: Explore a World of <br /> Opportunities in Gaming and Blockchain, Powered by the MLBK Token.
                </p>
                <div className="hero-section flex items-center justify-center mt-2 gap-4 flex-col md:flex-row">
                  <ScrollLink 
                  to='whereToBuy'
                  smooth={true}
                  duration={500}>
                    <button className= "hover:scale-105 duration-300 text-start ps-6 w-[370px] text-[24px] h-[79px] leading-[30px] font-bold bg-gradient-blue rounded-[40px] text-white flex justify-between items-center px-2">
                      BUY MBLK <span className='w-[61px] h-[61px] rounded-full bg-white block flex items-center justify-center' style={{ boxShadow: '0px 4px 4px 0px #00000040' }}>
                        <Image src={'/images/Basket.png'} width={24} height={24} alt='Basket' />
                      </span>
                    </button>
                  </ScrollLink>
                  <Link href='/stake'>
                    <button className="hover:scale-105 duration-300 text-start ps-6 w-[370px] text-[24px] h-[79px] leading-[30px] font-bold bg-gradient-orange rounded-[40px] text-white flex justify-between items-center px-2 my-4">
                      STAKE MBLK <span className='w-[61px] h-[61px] rounded-full bg-white block flex items-center justify-center' style={{ boxShadow: '0px 4px 4px 0px #00000040' }}>
                        <Image src={'/images/Vault.png'} width={24} height={24} alt='Vault' />
                      </span>
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      <motion.div
        className='relative h-[350px] md:h-[450px] flex justify-center items-center flex-col overflow-hidden'
        ref={slidersRef}
        initial={{ opacity: 0 }}
        animate={slidersInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-black absolute w-full rotate-6">
          <LogoSlider />
        </div>
        <div className="bg-black absolute w-full -rotate-6">
          <PartnersLogoSlider />
        </div>
      </motion.div>
    </>
  );
};

export default HeroSection;
