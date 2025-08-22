import React from 'react'

const steps = [
    {
        title: "Connect Your Wallet",
        description: "Ensure your wallet is connected and funded with MBLK, ETH, or USDT."
    },
    {
        title: "Choose Your Staking Option",
        description: "Select the staking option that best suits your strategy."
    },
    {
        title: "Stake and Earn",
        description: " Confirm your staking and start earning rewards immediately."
    },
  
];

const StakingSteps = () => {
    return (
        <div className='pt-[100px] container mx-auto min-h-[700px] px-2'>
            <h2 className='text-[24px] leading-[36px] text-start  lg:text-[36px] lg:leading-[45px] font-bold text-orange-500'>STAKE YOUR MBLK TOKENS AND EARN TOKEN, OUR <br />SISTER TOKEN, AS A REWARD.</h2>
            <p className='text-white text-[18px] leading-[24px] font-light my-8'>Connect your wallet. It&apos;s as easy as 1, 2, 3.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {steps.map((step, index) => (
                    <div key={index} className='text-center p-4 rounded-[24px]' style={{background: '#00000080'}}>
                        <div className='flex justify-start mb-4'>
                            <div className='w-[67px] h-[67px] rounded-full gradient-bg flex items-center justify-center'>
                                <div className='w-[60px] h-[60px] rounded-full bg-black'></div>
                            </div>
                        </div>
                        <h3 className='text-white text-xl font-semibold mb-2 text-start'>{step.title}</h3>
                        <p className='text-white text-sm text-start'>{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StakingSteps
