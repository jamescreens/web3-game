'use client';
import React from 'react';
import './index.css';

const Community = () => {
  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden py-4 mt-[50px]" style={{
        background: 'radial-gradient(50% 50% at 50% 50%, #382B3E 0%, #131212 100%)'
    }} id="community">
      <div className="circle-container outer-circle lg:w-[700px] lg:h-[700px] md:w-[550px] md:h-[550px] sm:w-[450px] sm:h-[450px] w-[300px] h-[300px] animate-spin-slow">
        <a href="https://discord.com/invite/peCmdzm4ew" target="_blank" rel="noopener noreferrer" className="icon-container discord-container absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:w-[80px] lg:h-[80px] md:w-[60px] md:h-[60px] sm:w-[50px] sm:h-[50px] w-[40px] h-[40px]">
          <img src="/images/community/DiscordLogo.svg" alt="Discord" className="lg:w-[40px] lg:h-[40px] md:w-[32px] md:h-[32px] sm:w-[28px] sm:h-[28px] w-[20px] h-[20px]" />
        </a>
        <a href="https://twitter.com/ZogiLabs" target="_blank" rel="noopener noreferrer" className="icon-container twitter-container absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 lg:w-[80px] lg:h-[80px] md:w-[60px] md:h-[60px] sm:w-[50px] sm:h-[50px] w-[40px] h-[40px]">
          <img src="/images/community/twitter.svg" alt="Twitter" className="lg:w-[40px] lg:h-[40px] md:w-[32px] md:h-[32px] sm:w-[28px] sm:h-[28px] w-[20px] h-[20px]" />
        </a>
        <a href="https://www.youtube.com/@LegendsOfBezogia" target="_blank" rel="noopener noreferrer" className="icon-container youtube-container absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 lg:w-[80px] lg:h-[80px] md:w-[60px] md:h-[60px] sm:w-[50px] sm:h-[50px] w-[40px] h-[40px]">
          <img src="/images/community/YoutubeLogo.svg" alt="Youtube" className="lg:w-[40px] lg:h-[40px] md:w-[32px] md:h-[32px] sm:w-[28px] sm:h-[28px] w-[20px] h-[20px]" />
        </a>
        <a href="https://medium.com/@ZogiLabs" target="_blank" rel="noopener noreferrer" className="icon-container medium-container absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:w-[80px] lg:h-[80px] md:w-[60px] md:h-[60px] sm:w-[50px] sm:h-[50px] w-[40px] h-[40px]">
          <img src="/images/community/MediumLogo.svg" alt="Medium" className="lg:w-[40px] lg:h-[40px] md:w-[32px] md:h-[32px] sm:w-[28px] sm:h-[28px] w-[20px] h-[20px]" />
        </a>
      </div>
      <div className="circle-container middle-circle lg:w-[540px] lg:h-[540px] md:w-[420px] md:h-[420px] sm:w-[330px] sm:h-[330px] w-[240px] h-[240px] animate-spin-slow-reverse">
        <a href="https://t.me/zogilabs" target="_blank" rel="noopener noreferrer" className="icon-container telegram-container absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:w-[60px] lg:h-[60px] md:w-[50px] md:h-[50px] sm:w-[40px] sm:h-[40px] w-[30px] h-[30px]">
          <img src="/images/community/TelegramLogo.svg" alt="Telegram" className="lg:w-[36px] lg:h-[36px] md:w-[28px] md:h-[28px] sm:w-[24px] sm:h-[24px] w-[20px] h-[20px]" />
        </a>
      </div>
      <div className="circle-container inner-circle lg:w-[400px] lg:h-[400px] md:w-[300px] md:h-[300px] sm:w-[250px] sm:h-[250px] w-[180px] h-[180px] animate-spin-slow">
        <a href="https://www.linkedin.com/company/zogi-labs/mycompany/" target="_blank" rel="noopener noreferrer" className="icon-container linkedin-container absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 lg:w-[50px] lg:h-[50px] md:w-[40px] md:h-[40px] sm:w-[35px] sm:h-[35px] w-[30px] h-[30px]">
          <img src="/images/community/LinkedinLogo.svg" alt="LinkedIn" className="lg:w-[32px] lg:h-[32px] md:w-[28px] md:h-[28px] sm:w-[24px] sm:h-[24px] w-[20px] h-[20px]" />
        </a>
      </div>
      <div className="outer-join-container absolute flex items-center justify-center text-center">
        <div className="join-container">
          <h2 className='font-bold text-[18px] leading-[18px] lg:text-[36px] lg:leading-[39px] text-white p-2'>JOIN MBLK COMMUNITY</h2>
        </div>
      </div>
    </div>
  );
};

export default Community;
