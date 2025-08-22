'use client'
import React, { useState } from 'react';

const faqData = [
    {
        question: 'What is staking?',
        answer: 'Staking involves locking up your cryptocurrency to earn rewards. It\'s a way to put your assets to work and generate passive income.',
    },
    {
        question: 'How are rewards calculated?',
        answer: 'Rewards are calculated based on the amount staked and the duration of the staking period. Each staking option has its own reward structure.',
    },
    {
        question: 'Is there a minimum staking amount?',
        answer: 'Yes, each staking option may have a minimum amount required to participate. Please check the specific details for each option.',
    },
    {
        question: 'Can I unstake my tokens?',
        answer: 'Yes, you can unstake your tokens, but some staking options may have a lock-up period. Please review the terms for each option.',
    },
];

const FAQSection = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleToggle = (index) => {
        setExpandedIndex(index === expandedIndex ? null : index);
    };

    return (
        <>
            <div className='mt-[100px]'>
                <h2 className="text-[64px] font-bold text-center mb-6 leading-[5px]">FAQs</h2>
                <div className="max-w-4xl mx-auto my-8 p-6 rounded-2xl" style={{ background: '#00000080' }}>
                    <div className="space-y-4">
                        {faqData.map((item, index) => (
                            <div key={index} className="border-b border-gray-700">
                                <button
                                    onClick={() => handleToggle(index)}
                                    className="w-full text-left p-4 flex justify-between items-center focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 focus-visible:ring-blue-500 transition-all duration-300"
                                >
                                    <h3 className="text-2xl  font-bold text-start">{item.question}</h3>
                                    <span className={`transform transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </span>
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${expandedIndex === index ? 'max-h-screen' : 'max-h-0'}`}>
                                    <div className="p-4 text-white">
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 text-center text-white">
                        <p>Join us today and start staking at <span className="font-bold">MBLK Staking</span> to maximize your rewards and be part of the future of finance.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FAQSection;
