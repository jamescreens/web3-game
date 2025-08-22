'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './index.css'; // Import the CSS file

const EcoSwiper = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.2,    // Trigger when 20% of the component is in view
    });

    const ecoItems = [
        { 
            title: "PLAY AND EARN BEZOGIA", 
            description: "Experience the full potential of MBLK in Bezogia, our flagship play-to-earn game.", 
            img: '/images/ecosystem/Bezogia.png',
            link: 'https://www.bezogia.com/',
            buttonTitle: 'Play Bezogia'
        },
        { 
            title: "STAKE AND EARN", 
            description: "Join four staking pools to earn rewards and maximize your MBLK holdings.", 
            img: '/images/ecosystem/Stake.png',
            link: 'https://staking.magicalblocks.com',
            buttonTitle: 'Stake MBLK'
        },
        { 
            title: "BEZOGIA NFT COLLECTION", 
            description: "Discover and trade Bezogia NFTs on Magic Eden and NFT.io.", 
            img: '/images/ecosystem/NFT.png',
            link: 'https://magiceden.io/collections/ethereum/bezogiv2',
            buttonTitle: 'Buy MBLK'
        },
        { 
            title: "EDUCATING THE NEXT GENERATION", 
            description: "Empowering the younger generation with knowledge about crypto and blockchain technology.", 
            img: '/images/ecosystem/Academy.png',
            link: 'https://account.zogilabs.io/hub/account',
            buttonTitle: 'Learn More'
        },
    ];

    return (
        <div className="ecoSlider relative container mx-auto mt-[150px]" id="ecosystem" ref={ref}>
            <motion.h2 
                className="text-[32px] leading-[40px] text-left mb-4 w-full text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
            >
                MBLK Ecosystem
            </motion.h2>
            <div className='w-full flex justify-center items-center'>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation={{ prevEl: '.eco-nav-button-prev', nextEl: '.eco-nav-button-next' }}
                    pagination={{ clickable: true, el: '.eco-swiper-pagination' }}
                    initialSlide={0}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                    }}
                >
                    {ecoItems.map((item, index) => (
                        <SwiperSlide key={index} className="eco-slide hover-slide">
                            <motion.div 
                                className="w-full max-w-[480px] h-[489px] flex flex-col bg-[#151316] items-center rounded-[40px] overflow-hidden"
                                style={{
                                    backgroundImage: `url(${item.img})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <div 
                                    className="flex flex-col items-center justify-end h-full p-2 gap-2 leading-[30px] px-3"
                                    style={{
                                        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 73.92%)',
                                    }}
                                >
                                    <h3 className="text-white font-bold text-[24px]">{item.title}</h3>
                                    <p className="text-center text-white text-[18px] leading-[24px]">{item.description}</p>
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="eco-button">{item.buttonTitle}</a>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="eco-nav-button-container">
                <div className="swiper-button-prev eco-nav-button eco-nav-button-prev hide-on-mobile"></div>
                <div className="swiper-button-next eco-nav-button eco-nav-button-next hide-on-mobile"></div>
            </div>
            <div className="eco-swiper-pagination"></div>
        </div>
    );
};

export default EcoSwiper;
