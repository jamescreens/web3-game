import React from "react";
import StakingDetails from "@/components/stakeDetails";
import StakingSteps from "@/components/stakeSteps";
import FAQSection from "@/components/Faqs";

const Stake = () => {
    return (
        <>
            <StakingDetails/>
            <StakingSteps/>
            <FAQSection/>
        </>
    );
};

export default Stake;
