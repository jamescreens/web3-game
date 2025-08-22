'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const platforms = [
    { name: "GATE.IO", image: "/images/wheretobuy/gate.png", background: '/images/wheretobuy/gatebg.png', link: "https://www.gate.io/trade/MBLK_USDT", backgroundColor: 'linear-gradient(180deg, #2354E6 0%, #000000 69.5%)', borderHover:'linear-gradient(360deg, #17E6A1 0%, #151316 100%)' },
    { name: "MEXC", image: "/images/wheretobuy/mexc.png", background: "/images/wheretobuy/mexc-logo.png", link: "https://mexc.com/exchange/MBLK_USDT", backgroundColor: 'linear-gradient(180deg, #0266EB 0%, #000000 69.5%)',borderHover:'linear-gradient(360deg, #FFFFFF 0%, #151316 100%)' },
    { name: "UNISWAP", image: "/images/wheretobuy/uniswap.png", background: '/images/wheretobuy/uniswapbg.png', link: "https://app.uniswap.org/explore/tokens/ethereum/0xf47245e9a3ba3dca8b004e34afc1290b1d435a52", backgroundColor: 'linear-gradient(180deg, #FF007A 0%, #000000 69.5%)',borderHover:'linear-gradient(360deg, #FF007A 0%, #151316 100%)' },
];

const WhereToBuy = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.2,    // Trigger when 20% of the component is in view
    });

    return (
        <div className="w-full text-center mt-[120px] text-white min-h-[800px]" id="whereToBuy" ref={ref}>
            <div className="relative flex justify-center items-center bg-[#000000] py-4 overflow-hidden">
                <div className="ticker-wrapper">
                    <div className="ticker">
                        {[...Array(10)].map((_, i) => (
                            <div key={i} className='flex items-center'>
                                <h2 className="mx-2 text-[24px] leading-[30px] text-[#F8672C]">WHERE TO BUY $MBLK?</h2>
                                <span className="mx-2 block w-[22px] h-[22px] bg-[#F8672C] rounded-full"></span>
                            </div>
                        ))}
                        {[...Array(10)].map((_, i) => (
                            <div key={i + 10} className='flex items-center'>
                                <h2 className="mx-2 text-[24px] leading-[30px] text-[#F8672C]">WHERE TO BUY $MBLK?</h2>
                                <span className="mx-2 block w-[22px] h-[22px] bg-[#F8672C] rounded-full"></span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <motion.div 
                className="mt-2 px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
            >
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-4 mt-[60px]">
                        {platforms.map((platform, index) => (
                            <motion.div 
                                key={index}
                                className='rounded-[20px] p-[1px] min-h-[441px] w-[300px]'
                                style={{
                                    background: 'linear-gradient(360deg, #F8672C 0%, #151316 100%)'
                                }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = platform.borderHover;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'linear-gradient(360deg, #F8672C 0%, #151316 100%)';
                                }}
                            >
                                <div className="relative p-4 rounded-[20px] text-center bg-black flex justify-end gap-3 flex-col items-center h-full w-full">
                                    <div 
                                        className='absolute top-0 bottom-0 left-0 right-0 flex items-center flex-col justify-end gap-3 p-3 rounded-[20px]'
                                        style={{
                                            background:'linear-gradient(180deg, #151316 0%, #000000 69.5%)',
                                            transition: 'background 0.3s ease-in-out',
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = platform.backgroundColor;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = 'linear-gradient(180deg, #151316 0%, #000000 69.5%)';
                                        }}
                                    >
                                        <img src={platform.background} alt="" className='absolute top-6 h-[260px] w-[260px]' />    
                                        <Image src={platform.image} alt={platform.name} width={120} height={120} className='z-50'/>
                                        <h3 className="mt-2 text-lg text-white font-bold">{platform.name}</h3>
                                        <a href={platform.link} target='_blank' className="px-3 py-1 border-2 border-[#5543D1] hover:bg-[#5543D1] transition duration-300 ease-in-out rounded-full flex items-center justify-between gap-1">GO TO <Image src={'/images/LinkIcon.png'} width={20} height={20} alt='VisitLink' /></a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default WhereToBuy;
