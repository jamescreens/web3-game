"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Tokenomics = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once when the section comes into view
    threshold: 0.2, // Trigger animation when 20% of the section is in view
  });

  const data = [
    { label: "Total Supply", value: "1 B" },
    { label: "Circulating Supply", value: "125.12M" },
    { label: "Circulating Mcap", value: "243K" },
    { label: "Remaining Vested Tokens", value: "0%" },
  ];

  return (
    <div
      className="py-4 container mx-auto mt-[100px] lg:h-[500px]"
      id="tokenomics"
      ref={ref}
    >
      <h2 className="font-bold text-4xl md:text-[64px] text-center text-orange-500">
        TOKEN STATS
      </h2>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 box lg:min-h-[195px]"
        style={{ background: "radial-gradient(...)" }}
      >
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-4 rounded-[32px] shadow-md text-center flex items-center flex-col justify-center"
            style={{ background: "#00000080" }}
          >
            <div className="text-white mt-2 text-[32px] leading-[40px] font-bold">
              {item.value}
            </div>
            <div className="text-orange-500  text-[24px]">{item.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tokenomics;
