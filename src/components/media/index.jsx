'use client';

import React from 'react';
import LogoBoxes from './LogoBoxes';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './index.css';

const Media = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2,    // Trigger when 20% of the component is in view
  });

  const logoBoxes = [
    { name: "CryptoDaily", link: "https://cryptodaily.co.uk/2023/03/mblk-token-private-sale-exceeds-expectations-sets-stage-for-ido-success" },
    { name: "BitcoinNews", link: "https://news.bitcoin.com/bezoge-earth-reveals-the-legends-of-bezogia-full-theatrical-trailer/" },
    { name: "financeYahoo", link: "https://finance.yahoo.com/news/zogi-labs-sets-stage-thrilling-113800056.html" },
    { name: "play to earn", link: "https://playtoearn.com/news/legends-of-bezogia-is-now-live-with-its-beta-version" },
    { name: "SportBusiness", link: "https://www.sportbusiness.com/news/legends-of-bezogia-by-bezoge-earth-revealed-as-key-sponsor-of-dubai-globe-soccer-awards/" },
    { name: "DailyCoin", link: "https://dailycoin.com/weekly-crypto-gaming-news-chainlink-axie-infinity-ethermon-grasshopper-farm-ubisoft-cryptozoon-legends-of-bezogia/" },
    { name: "CastleCrypto", link: "https://www.castlecrypto.gg/world-of-bezogia-celebrates-1st-nft-mint-on-enjin-blockchain-with-world-building-tournament/" },
    { name: "CoinTelegraph", link: "https://cointelegraph.com/press-releases/the-mastermind-meme-king-blockchain-game-builder-of-21-000x-token-storms-web3" },
  ];

  return (
    <motion.div 
      className="media w-full py-3 my-4 container mx-auto mt-[100px] overflow-hidden relative" 
      id="media" 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-[64px] font-bold leading-[80px] text-center">MEDIA</h2>
      <p className="text-center text-white text-[18px] leading-[24px] my-2 px-4">
        Here you&apos;ll find links to our latest press releases, news articles, and media coverage. Stay up-to-date with our latest developments and achievements as we continue to grow and innovate. Explore our media resources to learn more about our journey and the impact we&apos;re making.
      </p>
      <div className="mt-6 flex flex-row items-center space-y-6">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true, el: '.custom-pagination' }} 
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 6,
              spaceBetween: 40,
            }
          }}
        >
          {logoBoxes.map((item, index) => (
            <SwiperSlide key={index} className='flex items-center justify-center'>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <LogoBoxes name={item.name} link={item.link} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="custom-pagination mt-4"></div>
    </motion.div>
  );
}

export default Media;
