'use client'

import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const StakeEarn = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.2,    // Trigger when 20% of the component is in view
    });

    return (
        <div className='w-full h-[1000px] md:h-[600px] container mx-auto my-[70px] overflow-hidden' id="stakeEarn" ref={ref}>
            <div className="flex items-center flex-col md:flex-row justify-around gap-3">
                <motion.div 
                    className='order-2 md:order-1 text-start flex items-center md:items-start flex-col justify-start gap-2 max-w-[607px]'
                    initial={{ opacity: 0, x: -100 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className='font-bold text-[36px] leading-[44px] '>STAKE.EARN.CLAIM REWARDS</h2>
                    <p className='text-[18px] leading-[24px] text-white text-center md:text-start'>Staking, Rewards, and More - All with MLBK: Explore a World of Opportunities in Gaming and Blockchain, Powered by the MLBK Token.</p>
                    <Link href='/stake'>
                        <button className="hover:scale-105 duration-300 text-start ps-6 w-[370px] text-[24px] h-[79px] leading-[30px] font-bold bg-gradient-orange rounded-[40px] text-white flex justify-between items-center px-2 my-4">
                            STAKE MBLK <span className='w-[61px] h-[61px] rounded-full bg-white block flex items-center justify-center' style={{ boxShadow: '0px 4px 4px 0px #00000040' }}>
                                <Image src={'/images/Vault.png'} width={24} height={24} alt='Vault' />
                            </span>
                        </button>
                    </Link>
                    {/* <div className='flex items-center gap-2'>
                        <div className='bg-[#171518] p-4 rounded-[20px]'>
                            <h2 className='font-bold text-[32px] leading-[39px] text-white'>$9.99 M+</h2>
                            <p className='text-[24px] text-[#F8672C] font-normal leading-[29px]'>STAKED</p>
                        </div>
                        <div className='bg-[#171518] p-4 rounded-[20px]'>
                            <h2 className='font-bold text-[32px] leading-[39px] text-white'>999.9 M+</h2>
                            <p className='text-[24px] text-[#F8672C] font-normal leading-[29px]'>HOLDERS</p>
                        </div>
                    </div> */}
                </motion.div>
                <motion.div 
                    className='order-1 md:order-2'
                    initial={{ opacity: 0, x: 100 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <Image src={'/images/StakeEarn.png'} width={321} height={467} alt='Stake Earn Claim Rewards' />
                </motion.div>
            </div>
        </div>
    )
}

export default StakeEarn
