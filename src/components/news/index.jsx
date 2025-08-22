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

const NewsSlider = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2,    // Trigger when 20% of the component is in view
  });

  const newsItems = [
    { title: "$MBLK Sets the Stage with a Thrilling $400,000 Airdrop Ahead of Game Launch!", image: "/images/news/Airdrop.png" , src:'https://x.com/ZogiLabs/status/1771262655552004309' },
    { title: "MBLK and Immutable - Is this the future?", image: "/images/news/Immutable.png" , src:'https://x.com/ZogiLabs/status/1793703601208250782' },
    { title: "Enjin and MBLK Joining Forces", image: "/images/news/Enjin.png" , src:'https://x.com/ZogiLabs/status/1756090722241925378' },
  ];

  return (
    <div className="newsSlider relative container mx-auto" id="updates" ref={ref}>
      <motion.h2 
        className="text-[32px] leading-[40px] text-left mb-4 w-full text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        MBLK News
      </motion.h2>
      <div className='w-full flex justify-center items-center'>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          navigation={{ prevEl: '.news-nav-button-prev', nextEl: '.news-nav-button-next' }}
          pagination={{ clickable: true, el: '.news-swiper-pagination' }}
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
          {newsItems.map((item, index) => (
            <SwiperSlide key={index} className="news-slide hover-slide">
              <motion.div 
                className="w-full max-w-[480px] h-[490px] flex flex-col bg-[#151316] items-center rounded-[40px] overflow-hidden"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div 
                  className="flex flex-col items-center justify-end w-full h-full p-2 gap-2 leading-[30px] px-3"
                  style={{
                    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 73.92%)',
                  }}
                >
                  <h3 className="text-white font-bold text-[24px]">{item.title}</h3>
                  <a href={item.src} target="_blank" rel="noopener noreferrer" className="eco-button">View More</a>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="news-nav-button-container">
        <div className="swiper-button-prev news-nav-button news-nav-button-prev hide-on-mobile"></div>
        <div className="swiper-button-next news-nav-button news-nav-button-next hide-on-mobile"></div>
      </div>
      <div className="news-swiper-pagination"></div>
    </div>
  );
};

export default NewsSlider;
