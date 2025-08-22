'use client';
import React, { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import './index.css'; // Import the CSS file
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const slidesData = [
    { image: '/images/utility/GameController.svg', title: 'KICK START GAMES', description: 'Empower Your Game Development Journey. Transition to Web3 gaming effortlessly. We handle blockchain infrastructure and token support, allowing you to focus on building games.' },
    { image: '/images/utility/ChartDonut.svg', title: 'DeFi Solutions', description: 'Unlock Defi Potential with MBLK: We Offer ready-to-use smart contracts, staking, vesting and multichain support. Enabling you to realize your vision without starting from scratch.' },
    { image: '/images/utility/Flask.svg', title: 'Customize Your Experience', description: 'Adapt MLBK to suit your DeFi or gaming needs, creating tailored, unique, and engaging experiences designed to meet your specific requirements.' },
    { image: '/images/utility/Bezogia.svg', title: 'Bezogia', description: 'Decentralized Gaming as a Service: Powered by MLBK Experience the seamless integration of MLBK technology with Bezogia’s gaming products, showcasing the future of decentralized gaming solutions.' },
    { image: '/images/utility/CodeBlock.svg', title: 'Bring Open Source Projects to Life', description: 'Fuel Innovation with MLBK : Use MLBK to integrate open-source projects into the Web3 ecosystem, empowering developers to innovate and collaborate.' }
];

// Duplicate the slidesData to make it 10 slides
const duplicatedSlidesData = [...slidesData, ...slidesData];

const UtilitySwiper = () => {
    const [activeIndex, setActiveIndex] = useState(2); // Start with the third slide as active
    const [swiperRef, setSwiperRef] = useState(null);
    const [renderKey, setRenderKey] = useState(0); // Key to force re-render

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.realIndex % slidesData.length); // Keep activeIndex within the original slide range
    };

    useEffect(() => {
        if (swiperRef) {
            swiperRef.update();
            // swiperRef.slideTo(2, 0, false); // Start with the middle slide
        }
    }, [swiperRef, renderKey]);

    // Trigger a second re-render to ensure proper Swiper rendering
    // useEffect(() => {
    //     if (renderKey < 2) {
    //         setTimeout(() => setRenderKey((prevKey) => prevKey + 1), 100);
    //     }
    // }, [renderKey]);

    // Re-render on window resize
    // useEffect(() => {
    //     const handleResize = () => {
    //         setRenderKey((prevKey) => prevKey + 1);
    //     };

    //     window.addEventListener('resize', handleResize);

    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, []);

    return (
        <div className='w-full min-h-[900px] h-screen relative' id="utility">
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-[#131212] bg-opacity-80 backdrop-blur-2xl z-50'>
                <div className='h-full w-full flex items-center flex-col justify-center  md:container md:mx-auto'>
                    <h2 className="text-[64px] font-bold leading-[90px] text-center mb-4 absolute top-6 w-full">$MBLK UTILITY</h2>
                    <div className="w-full h-[450px] test relative mt-[100px]">
                        <Swiper
                            key={renderKey} // Force re-render by changing key
                            loop={true}
                            slidesPerView={5} // Explicitly set slidesPerView to 5
                            spaceBetween={5}
                            initialSlide={0} // Start with the third slide (index 2)
                            modules={[Navigation, Pagination]}
                            navigation={{
                                prevEl: '.custom-nav-button-prev',
                                nextEl: '.custom-nav-button-next',
                            }}
                            onSlideChange={handleSlideChange}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    centeredSlides: true,
                                },
                                998: {
                                    slidesPerView: 3,
                                    centeredSlides: true,
                                },
                                1300: {
                                    slidesPerView: 5,
                                    centeredSlides: true,
                                }
                            }}
                            onSwiper={setSwiperRef}
                            className='w-full'
                        >
                            {duplicatedSlidesData.map((slide, index) => (
                                <SwiperSlide key={index} className={`custom-swiper-slide ${index % slidesData.length === activeIndex ? 'active' : 'inactive'}`}>
                                    <div className="p-[3px] rounded-[40px] h-full w-full transform-container" style={{
                                        background: 'linear-gradient(282.53deg, rgba(0, 0, 0, 0) 13.21%, #F8672C 57.95%, #5543D1 82.13%)'
                                    }}>
                                        <div className="h-full flex items-center justify-center rounded-[40px] transform-outer" style={{
                                            background: 'radial-gradient(52.06% 52.06% at 34.12% 38.38%, #222222 0%, #151316 100%)'
                                        }}>
                                            <div className='transform-inner'>
                                                <img src={slide.image} alt={slide.title} className="W-[60px] h-[60px]" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="swiper-button-prev custom-nav-button-prev custom-nav-button "></div>
                        <div className="swiper-button-next custom-nav-button-next custom-nav-button"></div>
                    </div>
                    <div className="text-center text-white h-full max-h-[100px] px-1 w-full max-w-[500px]">
                        <h3 className='text-[24px] font-bold text-white'>{slidesData[activeIndex].title}</h3>
                        <p className='text-[16px]'>{slidesData[activeIndex].description}</p>
                    </div>
                </div>
            </div>
            <div className='absolute hidden xl:block top-[120px] left-12'>
                <img src="/images/utility/Star 1.png" className='w-[512px] h-[512px]' alt="Star" />
            </div>
            <div className='absolute hidden xl:block bottom-[60px] right-6'>
                <img src="/images/utility/Star 2.png" className='w-[460px] h-[471px]' alt="Star" />
            </div>
            <div className='absolute hidden xl:block top-[60px] left-1/2 transform -translate-x-1/2'>
                <img src="/images/utility/Star 3.png" className='w-[312px] h-[312px]' alt="Star" />
            </div>
            <div className='absolute hidden xl:block bottom-[60px] left-1/2 transform -translate-x-1/2'>
                <img src="/images/utility/Star 4.png" className='w-[312px] h-[312px]' alt="Star" />
            </div>
        </div>
    );
};

export default UtilitySwiper;
