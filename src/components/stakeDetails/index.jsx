"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Switch from "react-switch";
import clock from "../../../public/images/stake/clock.svg";
import group from "../../../public/images/stake/group.svg";
import growth from "../../../public/images/stake/growth.svg";
import money from "../../../public/images/stake/money.svg";
import ethIcon from "../../../public/images/ETH.png";
import { checkDateAndAddDays, getCurrentTimestamp } from "@/utils";
import toast, { Toaster } from "react-hot-toast";

const cards = [
    {
        src: money,
        amount: "22.222.222",
        title: "Total Mblk Staked",
    },
    {
        src: group,
        amount: "22.222.222",
        title: "APY",
        width: 22,
    },
    {
        src: growth,
        amount: "22.222.222",
        title: "Total Claimed Rewards (Single & LP)",
    },
    {
        src: clock,
        amount: "22.222.222",
        title: "Last Reward (Single & LP)",
    },
];

const poolAddress30Day = 30;
const poolAddress90Day = 90;

const StakingDetails = () => {
    const [walletConnected, setWalletConnected] = useState(true);
    const [mode, setMode] = useState("Withdraw");
    const [autoCompounding, setAutoCompounding] = useState(true);
    const [selectedPeriod, setSelectedPeriod] = useState(
        "30 DAYS SINGLE STAKING"
    );
    const [showWalletModal, setShowWalletModal] = useState(false);
    const [showStakingModal, setShowStakingModal] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [startTimeDate, setStartTimeDate] = useState();
    const [endTimeDate, setEndTimeDate] = useState();
    const [shouldClaim, setShouldClaim] = useState(false);
    const [stakedMblk, setStakedMblk] = useState(0);
    const [mblkTokenApproved, setmblkTokenApproved] = useState(false);
    const [stakedMblkTokenApproved, setstakedMblkTokenApproved] = useState(false);

    const [isStakingReady, setIsStakingReady] = useState(false);

    const [arp, setArp] = useState(0);

    const [stakingInfo30Days, setStakingInfo30Days] = React.useState({
        totalClaimedRewards: " 0",
        lastReward: " 0",
        totalMblkStaked: " 0",
        apy: " 0",
    });
    const [lpStakingInfo30Days, setLpStakingInfo30Days] = useState({
        totalLpStaked: "",
        apy: "",
    });
    const [stakingInfo90Days, setStakingInfo90Days] = React.useState({
        totalClaimedRewards: " 0",
        lastReward: " 0",
        totalMblkStaked: "0",
        apy: " 0",
    });
    const [lpStakingInfo90Days, setLpStakingInfo90Days] = useState({
        totalLpStaked: "",
        apy: "",
    });

    const [userMblkStakeInfo, setuserMblkStakeInfo] = useState({
        mblkAmount: "0",
        startTimeStamp: 0,
        endTime: 0,
        lastClaimedTimeStamp: 0,
        stakedMBLKMinted: "0",
        userFees: "0",
        userTotalClaimedRewards: "0",
    });
    const [walletAddress, setWalletAddress] = useState();
    const [userMblkBalance, setUserMblkBalance] = useState();

    const calcMblkArp = (
        totalRewards,
        TotalStakedAmount,
        StakingDurationInDays
    ) => {
        if (Number(TotalStakedAmount) === 0) return 0;

        const res =
            (totalRewards / Number(TotalStakedAmount)) *
            (365 / StakingDurationInDays);

        if (isNaN(res)) return 0;

        setArp(res);

        return Math.round(res);
    };

    const calcNextDistrubtion = () => {
        const currTimestamp = getCurrentTimestamp();

        if (Number(userMblkStakeInfo.mblkAmount) === 0) return 0;

        return (
            (userMblkStakeInfo.lastClaimedTimeStamp + 86400 - currTimestamp) / 3600
        );
    };

    const changeMode = (newMode) => {
        setMode(newMode);
    };

    const handleSwitchChange = (checked) => {
        setAutoCompounding(checked);
    };

    const handlePeriodChange = (period) => {
        setSelectedPeriod(period);
    };

    const openWalletModal = () => {
        setShowWalletModal(true);
    };

    const closeWalletModal = () => {
        setShowWalletModal(false);
    };

    const closeStakingModal = () => {
        setShowStakingModal(false);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div className="pt-[100px] container mx-auto">
            <div className="relative w-full min-h-[330px] p-4 bg-gradient rounded-[40px] box text-center flex items-center flex-col justify-center">
                <h2 className="text-[38px] leading-[40px] md:text-[64px] text-white md:leading-[80px] uppercase">
                    Staking is coming soon. stay tuned
                </h2>
                <button
                    // onClick={openWalletModal}
                    onClick={() => {
                        toast((t) => (
                            <span>
                                Coming Soon
                            </span>
                        ), {
                            icon: '⚠️',
                            style: {
                                background: '#fc6d32',
                                color: 'white',
                            },
                        });
                    }}
                    // disabled
                    className="hover:scale-105 duration-300 ease-in-out text-start ps-6 w-[240px] md:w-[300px] lg:w-[375px] text-[18px] md:text-[24px] h-[45px] sm:h-[65px] md:h-[79px] leading-[30px] font-bold bg-gradient-orange rounded-[40px] text-white flex items-center justify-between mt-4"
                >
                    <span>Connect Wallet</span>
                    <span className="w-[30px] h-[30px] md:w-[61px] md:h-[61px] rounded-full bg-white me-2"></span>
                </button>
            </div>
            {/* <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <StakingInfoCard
            imageSrc="/images/BNB.png"
            chainName="BNB CHAIN"
            apyDetails={[
              { period: "3 Months", apy: "99.99%" },
              { period: "1 Year", apy: "99.99%" },
              { period: "2 Years", apy: "99.99%" },
              { period: "4 Years", apy: "99.99%" },
            ]}
            stakedAmount="BNB STAKED"
            stakedValue="1.4 Trillion ($4,000,000)"
          />
          <StakingInfoCard
            imageSrc="/images/BNB.png"
            chainName="BNB CHAIN"
            apyDetails={[
              { period: "3 Months", apy: "99.99%" },
              { period: "1 Year", apy: "99.99%" },
              { period: "2 Years", apy: "99.99%" },
              { period: "4 Years", apy: "99.99%" },
            ]}
            stakedAmount="BNB STAKED"
            stakedValue="1.4 Trillion ($4,000,000)"
          />
  
          <div className="bg-[#151316] rounded-[20px] p-6 text-white text-center flex items-center flex-col justify-center">
            <h3 className="text-[36px] font-bold leading-[36px] mb-4 text-white">
              TOTAL STAKED
            </h3>
            <p className="text-xl font-bold mb-4">1.4 Trillion ($4,000,000)</p>
          </div>
        </div> */}
            <Toaster />
        </div>
    )
}

export default StakingDetails;
