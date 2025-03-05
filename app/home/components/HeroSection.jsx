'use client'
import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FloatingCards from './FloatingCards';
import DropZoneSection from './DropZoneSection';


const HeroSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const heroRef = useRef(null);
  const dropBoxRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const floatingCards = [
    {
      id: 1,
      icon: "📋",
      color: "bg-blue-100",
      left: "10%",
      top: "15%",
      title: "Task List",
      description: "Organize and prioritize your feedback items",
      cardType: "favorites"
    },
    {
      id: 2,
      icon: "📝",
      color: "bg-red-100",
      left: "85%",
      top: "20%",
      title: "Notes",
      description: "Capture important details from customers",
      cardType: "notes"
    },
    {
      id: 3,
      icon: "📊",
      color: "bg-gray-100",
      left: "25%",
      top: "35%",
      title: "Analytics",
      description: "Track feedback trends and insights",
      cardType: "analytics"
    },
    {
      id: 4,
      icon: "📱",
      color: "bg-purple-100",
      left: "75%",
      top: "40%",
      title: "Mobile",
      description: "Capture feedback on the go",
      cardType: "mobile"
    },
    {
      id: 5,
      icon: "🔍",
      color: "bg-orange-100",
      left: "30%",
      top: "65%",
      title: "Search",
      description: "Find feedback items quickly",
      cardType: "search"
    },
    {
      id: 6,
      icon: "📁",
      color: "bg-blue-100",
      left: "15%",
      top: "80%",
      title: "Files",
      description: "Attach relevant documents to feedback",
      cardType: "files"
    },
    {
      id: 7,
      icon: "🗂️",
      color: "bg-green-100",
      left: "50%",
      top: "90%",
      title: "Categories",
      description: "Organize feedback by topic",
      cardType: "categories"
    },
    {
      id: 8,
      icon: "🔊",
      color: "bg-blue-200",
      left: "70%",
      top: "75%",
      title: "Announcements",
      description: "Share updates with your team",
      cardType: "announcements"
    },
    {
      id: 9,
      icon: "⭐",
      color: "bg-purple-200",
      left: "90%",
      top: "60%",
      title: "Favorites",
      description: "Save important feedback items",
      cardType: "favorites"
    },
  ];
  

  return (
    <div className="relative w-full md:h-screen h-full overflow-hidden py-16" ref={heroRef}>
      <FloatingCards 
        floatingCards={floatingCards} 
        scrollYProgress={scrollYProgress} 
        hoveredCard={hoveredCard}
        setHoveredCard={setHoveredCard}
        hoveredIcon={hoveredIcon}
        setHoveredIcon={setHoveredIcon}
      />
      
      <div className="relative z-20 container mx-auto px-4 text-center xl:pt-32 pt-10">
        <motion.h1
          className="md:text-[60px] text-[45px] font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.5], [1, 0]),
            y: useTransform(scrollYProgress, [0, 0.5], [0, -50])
          }}
        >
          Your feedback hub,<br />on autopilot
        </motion.h1>

        <motion.p
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.4], [1, 0]),
            y: useTransform(scrollYProgress, [0, 0.4], [0, -20])
          }}
        >
          Cycle is the fastest way for your team to capture product
          feedback and share customer insights without the busywork.
        </motion.p>

        <DropZoneSection 
          scrollYProgress={scrollYProgress} 
          dropBoxRef={dropBoxRef}
        />
      </div>
      <div className="md:h-screen"></div>
    </div>
  );
};

export default HeroSection;