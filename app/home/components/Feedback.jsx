'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Feedback = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

 
  const cardData = [
    {
      id: 1,
      title: "Capture Feedback Everywhere",
      description: "Seamlessly collect insights from multiple sources like Slack, Intercom, HubSpot, and Email.",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      iconPath: "M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z",
      gradient: "from-blue-100 to-blue-200"
    },
    {
      id: 2,
      title: "Transcribe Customer Calls",
      description: "Automatically record and transcribe calls from Zoom, Google Meet, and Microsoft Teams.",
      iconBg: "bg-purple-50",
      iconColor: "text-purple-600",
      iconPath: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z",
      gradient: "from-purple-100 to-purple-200"
    },
    {
      id: 3,
      title: "AI-Powered Research",
      description: "Collaborate in real-time, use AI for translation, rephrasing, and document enhancement.",
      iconBg: "bg-green-50",
      iconColor: "text-green-600",
      iconPath: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      gradient: "from-green-100 to-green-200"
    }
  ];

  const subImages = [
    { 
      src: "/bg2.png", 
      alt: "Feedback Interface", 
      position: "top-[100px] left-0",
      delay: 0 
    },
    { 
      src: "/bg500.png", 
      alt: "Call Transcription", 
      position: "top-[100px] right-0",
      delay: 0.5 
    },
    { 
      src: "/bg1.png", 
      alt: "Collaborative Research", 
      position: "bottom-[70px] left-0",
      delay: 0.25 
    },
    { 
      src: "/bg3.png", 
      alt: "AI-Powered Insights", 
      position: "bottom-[70px] right-0",
      delay: 0.75 
    }
  ];

  // Animation variants
  const cardVariants = {
    hover: { 
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  const imageVariants = {
    initial: { y: 0, opacity: 0.7 },
    animate: (custom) => ({
      y: [0, -20, 0],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        delay: custom,
        ease: "easeInOut"
      }
    })
  };

  return (
    <div className="flex flex-col w-full container mx-auto p-4 font-sans ">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12 flex justify-center"
      >
        <h1 className="text-3xl lg:text-[58px] w-full md:w-[60%] font-bold text-gray-800 mb-4 leading-tight">
          The Fastest Feedback Capture Experience
        </h1>
      </motion.div>

   
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {cardData.map((card) => (
          <motion.div
            key={card.id}
            variants={cardVariants}
            whileHover="hover"
            onHoverStart={() => setHoveredCard(card.id)}
            onHoverEnd={() => setHoveredCard(null)}
            className={`bg-white p-6 rounded-xl shadow-lg border-2 border-transparent 
                        transition-all duration-300 
                        ${hoveredCard === card.id ? `border-blue-300 bg-gradient-to-br ${card.gradient}` : ''}`}
          >
            <div className="flex items-center mb-4">
              <div className={`${card.iconBg} p-3 rounded-lg mr-4`}>
                <svg
                  className={`w-7 h-7 ${card.iconColor}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={card.iconPath}
                  ></path>
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">{card.title}</h2>
            </div>
            <p className="text-gray-600 text-base">{card.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative flex justify-center"
      >
      
        <Image
          src="/new1.png"
          alt="Feedback Platform Overview"
          width={1200}
          height={600}
          className="rounded-2xl "
        />

        {subImages.map((image, index) => (
          <motion.div 
            key={image.src}
            className={`absolute ${image.position} w-[25%] h-[150px] z-10`}
            variants={imageVariants}
            initial="initial"
            animate="animate"
            custom={image.delay}
          >
            <Image 
              src={image.src} 
              alt={image.alt} 
              fill 
              className="rounded-lg " 
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Feedback;