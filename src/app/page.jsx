import HeroSection from "@/components/hero";
import UtilitySwiper from "@/components/utilitySwiper";
import EcoSwiper from "@/components/ecosystem";
import NewsSlider from "@/components/news";
import CoreValues from "@/components/coreValues";
import Community from "@/components/community";
import WhereToBuy from "@/components/whereToBuy";
import StakeEarn from "@/components/stakeEarn";
import Tokenomics from "@/components/tokenomics";
import Media from "@/components/media";

export default function Home() {
  return (
    <div className="pt-[45px]">
      <HeroSection />
      <UtilitySwiper />
      <EcoSwiper />
      <NewsSlider />
      <CoreValues />
      <Community />
      <WhereToBuy />
      <StakeEarn />
      <Tokenomics />
      <Media />
    </div>
  );
}
