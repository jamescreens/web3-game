"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CoreValues = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      className="relative w-full min-h-[1000px] mt-[100px]"
      id="coreValues"
      ref={ref}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#131212] bg-opacity-80 backdrop-blur-3xl z-50 flex items-center justify-center">
        <div className="flex justify-center items-center flex-col">
          <motion.h2
            className="text-center text-[64px] md:text-[128px] md:leading-[80px] mb-0 font-bold"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            OUR CORE VALUES
          </motion.h2>
          <motion.div
            className="relative w-full max-w-[1294px]  p-8 bg-gradient rounded-[40px] box"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Core Value 1 */}
              <motion.div
                className="p-6 text-white border-[#221D24] border-b-2 md:border-b-0 core-value-hover"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-white font-bold text-[24px] leading-[30px] mb-2">
                  INNOVATION IN GAMING & BLOCKCHAIN
                </h2>
                <p className="text-[18px] leading-[24px] text-center">
                  Embrace cutting-edge technology to create immersive and
                  innovative experiences.
                </p>
              </motion.div>
              {/* Core Value 2 */}
              <motion.div
                className="p-6 text-white border-[#221D24] border-b-2 md:border-b-0 core-value-hover"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h2 className="text-white font-bold text-[24px] leading-[30px] mb-2">
                  MULTI-PURPOSE UTILITY
                </h2>
                <p className="text-[18px] leading-[24px] text-center">
                  Provide a versatile token that supports a wide range of
                  functionalities and integrations.
                </p>
              </motion.div>
              {/* Core Value 3 */}
              <motion.div
                className="p-6 text-white border-[#221D24] border-b-2 md:border-b-0 pt-[50px] core-value-hover"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h2 className="text-white font-bold text-[24px] leading-[30px] mb-2">
                  PLAYER AND DEVELOPER EMPOWERMENT
                </h2>
                <p className="text-[18px] leading-[24px] text-center">
                  Empower players and developers with tools, rewards, and
                  opportunities to innovate.
                </p>
              </motion.div>
              {/* Core Value 4 */}
              <motion.div
                className="p-6 pt-[50px] text-white core-value-hover"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <h2 className="text-white font-bold text-[24px] leading-[30px] mb-2">
                  ECONOMIC SUSTAINABILITY AND TRANSPARENCY
                </h2>
                <p className="text-[18px] leading-[24px] text-center">
                  Maintain a balanced and transparent token economy for
                  long-term value and trust.
                </p>
              </motion.div>
              {/* Vertical Divider */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-full w-[4px] bg-[#221D24] md:block hidden"></div>
              </div>
              {/* Horizontal Divider */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-[4px] bg-[#221D24] md:block hidden"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Star Images (No Animation) */}
      <div className="absolute hidden xl:block bottom-[150px] left-6">
        <img
          src="/images/utility/Star 1.png"
          className="w-[412px] h-[412px]"
          alt="Star"
        />
      </div>
      <div className="absolute hidden xl:block bottom-[150px] right-6">
        <img
          src="/images/utility/Star 2.png"
          className="w-[460px] h-[471px]"
          alt="Star"
        />
      </div>
      <div className="absolute hidden xl:block top-[160px] left-1/2 transform -translate-x-1/2">
        <img
          src="/images/utility/Star 3.png"
          className="w-[250px] h-[250px]"
          alt="Star"
        />
      </div>
      <div className="absolute hidden xl:block bottom-[150px] left-1/2 transform -translate-x-1/2">
        <img
          src="/images/utility/Star 4.png"
          className="w-[250px] h-[250px]"
          alt="Star"
        />
      </div>
    </div>
  );
};

export default CoreValues;
