'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useAnimation } from 'framer-motion';

const HeroSection = () => {
  const [positions, setPositions] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const heroRef = useRef(null);
  const dropBoxRef = useRef(null);
  const svgRef = useRef(null); // Ref for the SVG element

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
      cardType: "taskList"
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

  const [dropBoxPosition, setDropBoxPosition] = useState({ x: 0, y: 0 });
  const [svgPosition, setSvgPosition] = useState({ x: 0, y: 0 }); // State for SVG position

  useEffect(() => {
    setPositions(floatingCards.map(card => ({
      id: card.id,
      x: 0,
      y: 0,
      left: card.left,
      top: card.top
    })));

    const interval = setInterval(() => {
      setPositions(prev => prev.map(pos => ({
        ...pos,
        x: pos.x + (Math.random() * 4 - 2),
        y: pos.y + (Math.random() * 4 - 2)
      })));
    }, 2000);

    // Update dropbox and SVG positions
    const updatePositions = () => {
      if (dropBoxRef.current) {
        const dropBoxRect = dropBoxRef.current.getBoundingClientRect();
        setDropBoxPosition({
          x: dropBoxRect.left + dropBoxRect.width / 2,
          y: dropBoxRect.top + dropBoxRect.height / 2,
        });
      }

      if (svgRef.current) {
        const svgRect = svgRef.current.getBoundingClientRect();
        setSvgPosition({
          x: svgRect.left + svgRect.width / 2,
          y: svgRect.top + svgRect.height / 2,
        });
      }
    };

    updatePositions();
    window.addEventListener('resize', updatePositions);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', updatePositions);
    };
  }, []);

  const HoverCard = ({ card, position }) => {
    const currentCard = floatingCards.find(c => c.id === card);

    const renderCardContent = () => {
      switch (currentCard.cardType) {
        case 'taskList':
          return (
            <div className="border border-blue-300 border-dashed rounded-lg p-4 bg-white shadow-sm w-64">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs text-gray-500">TASKS</div>
                <motion.div
                  className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center cursor-pointer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onHoverStart={() => setHoveredIcon('taskPlus')}
                  onHoverEnd={() => setHoveredIcon(null)}
                >
                  <span className="text-lg">➕</span>
                </motion.div>
              </div>
              <div className="font-medium mb-2">Task List</div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" checked={true} readOnly />
                  <span className="text-sm line-through text-gray-500">Review customer feedback</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Prioritize feature requests</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Schedule team discussion</span>
                </div>
              </div>
              <AnimatePresence>
                {hoveredIcon === 'taskPlus' && (
                  <motion.div
                    className="absolute bg-white rounded-lg p-3 shadow-lg border border-gray-200 z-50 w-48 right-0 top-10"
                    initial={{ opacity: 0, scale: 0.8, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <h3 className="font-medium text-sm mb-1">Add Task</h3>
                    <p className="text-xs text-gray-600">Create a new task to track feedback action items</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );

        case 'notes':
          return (
            <div className="border border-red-300 border-dashed rounded-lg p-4 bg-white shadow-sm w-64">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs text-gray-500">NOTES</div>
                <motion.div
                  className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center cursor-pointer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onHoverStart={() => setHoveredIcon('notesEdit')}
                  onHoverEnd={() => setHoveredIcon(null)}
                >
                  <span className="text-lg">✏️</span>
                </motion.div>
              </div>
              <div className="font-medium mb-2">Customer Notes</div>
              <div className="border border-gray-200 rounded p-2 bg-yellow-50 text-sm mb-3">
                <p>Customer mentioned they need integration with Slack and want to track conversation history.</p>
                <p className="text-xs text-gray-500 mt-2">Added by Alex - 2 hours ago</p>
              </div>
              <AnimatePresence>
                {hoveredIcon === 'notesEdit' && (
                  <motion.div
                    className="absolute bg-white rounded-lg p-3 shadow-lg border border-gray-200 z-50 w-48 right-0 top-10"
                    initial={{ opacity: 0, scale: 0.8, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <h3 className="font-medium text-sm mb-1">Edit Note</h3>
                    <p className="text-xs text-gray-600">Update your customer conversation notes</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );

        case 'analytics':
          return (
            <div className="border border-gray-300 border-dashed rounded-lg p-4 bg-white shadow-sm w-64">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs text-gray-500">ANALYTICS</div>
                <motion.div
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onHoverStart={() => setHoveredIcon('analyticsInfo')}
                  onHoverEnd={() => setHoveredIcon(null)}
                >
                  <span className="text-lg">ℹ️</span>
                </motion.div>
              </div>
              <div className="font-medium mb-3">Feedback Overview</div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs">Feature Requests</span>
                  <div className="w-32 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full" style={{ width: '70%' }}></div>
                  </div>
                  <span className="text-xs font-medium">70%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs">Bug Reports</span>
                  <div className="w-32 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="bg-red-500 h-full" style={{ width: '20%' }}></div>
                  </div>
                  <span className="text-xs font-medium">20%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs">Questions</span>
                  <div className="w-32 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="bg-yellow-500 h-full" style={{ width: '10%' }}></div>
                  </div>
                  <span className="text-xs font-medium">10%</span>
                </div>
              </div>
              <AnimatePresence>
                {hoveredIcon === 'analyticsInfo' && (
                  <motion.div
                    className="absolute bg-white rounded-lg p-3 shadow-lg border border-gray-200 z-50 w-48 right-0 top-10"
                    initial={{ opacity: 0, scale: 0.8, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <h3 className="font-medium text-sm mb-1">Analytics Data</h3>
                    <p className="text-xs text-gray-600">View detailed metrics on your customer feedback</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );

        case 'mobile':
          return (
            <div className="border border-purple-300 border-dashed rounded-lg p-4 bg-white shadow-sm w-64">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs text-gray-500">MOBILE</div>
                <motion.div
                  className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center cursor-pointer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onHoverStart={() => setHoveredIcon('mobileSync')}
                  onHoverEnd={() => setHoveredIcon(null)}
                >
                  <span className="text-lg">🔄</span>
                </motion.div>
              </div>
              <div className="font-medium mb-2">Mobile App</div>
              <div className="flex justify-center mb-3">
                <div className="w-32 bg-gray-900 rounded-xl p-2">
                  <div className="w-full h-20 bg-blue-500 rounded-md mb-2 flex items-center justify-center">
                    <span className="text-white text-xs">Cycle App</span>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-8 h-1 bg-gray-600 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="text-xs text-center text-gray-500">Last synced: 5 minutes ago</div>
              <AnimatePresence>
                {hoveredIcon === 'mobileSync' && (
                  <motion.div
                    className="absolute bg-white rounded-lg p-3 shadow-lg border border-gray-200 z-50 w-48 right-0 top-10"
                    initial={{ opacity: 0, scale: 0.8, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <h3 className="font-medium text-sm mb-1">Sync Mobile</h3>
                    <p className="text-xs text-gray-600">Sync your feedback data with the mobile app</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );

        default:
          return (
            <div className={`border border-${currentCard.color.split('-')[1]}-300 border-dashed rounded-lg p-4 bg-white shadow-sm w-64 z-10`}>
              <div className="flex items-center justify-between mb-1">
                <div className="text-xs text-gray-500">CYCLE</div>
                <motion.div
                  className={`w-8 h-8 ${currentCard.color} rounded-full flex items-center justify-center cursor-pointer`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onHoverStart={() => setHoveredIcon(`icon-${currentCard.id}`)}
                  onHoverEnd={() => setHoveredIcon(null)}
                >
                  <span className="text-lg">{currentCard.icon}</span>
                </motion.div>
              </div>
              <div className="font-medium mb-2">{currentCard.title}</div>
              <div className="text-xs text-gray-500">Title</div>
              <div className="border border-gray-200 rounded px-3 py-2 text-sm mb-3">
                {currentCard.title} request
              </div>
              <div className="flex gap-2 mb-2">
                <button className={`bg-${currentCard.color.split('-')[1]}-100 text-${currentCard.color.split('-')[1]}-700 px-3 py-1 rounded text-xs`}>{currentCard.title}</button>
                <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-xs">Custom</button>
              </div>
              <div className="text-xs text-gray-500">Description</div>
              <div className="text-sm mb-3">
                {currentCard.description}...
              </div>

              <AnimatePresence>
                {hoveredIcon === `icon-${currentCard.id}` && (
                  <motion.div
                    className="absolute bg-white rounded-lg p-3 shadow-lg border border-gray-200 z-50 w-48 right-0 top-10"
                    initial={{ opacity: 0, scale: 0.8, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <h3 className="font-medium text-sm mb-1">{currentCard.title} Options</h3>
                    <p className="text-xs text-gray-600">Configure your {currentCard.title.toLowerCase()} settings</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
      }
    };

    return renderCardContent();
  };

  return (
    <div className="relative w-full h-screen overflow-hidden py-16" ref={heroRef}>
      {floatingCards.map((card) => {
        const position = positions.find(pos => pos.id === card.id) || { x: 0, y: 0, left: card.left, top: card.top };

        const cardX = useTransform(
          scrollYProgress,
          [0, 0.8],
          [position.x, svgPosition.x] 
        );

        const cardY = useTransform(
          scrollYProgress,
          [0, 0.8],
          [position.y, svgPosition.y] 
        );

        const cardScale = useTransform(
          scrollYProgress,
          [0, 0.8, 1],
          [1, 0.8, 0.5]
        );

        const cardOpacity = useTransform(
          scrollYProgress,
          [0, 0.7, 1],
          [1, 0.8, 0]
        );

        return (
          <React.Fragment key={card.id}>
            <motion.div
              className={`absolute ${card.color} p-4 w-12 h-12 rounded-full flex items-center justify-center shadow-md cursor-pointer`}
              style={{
                left: position.left,
                top: position.top,
                zIndex: hoveredCard === card.id ? 30 : 10,
                x: cardX,
                y: cardY,
                scale: cardScale,
                opacity: cardOpacity,
              }}
              initial={{ scale: 1 }}
              whileHover={{ scale: scrollYProgress.get() > 0.5 ? 1 : 1.2 }}
              whileTap={{ scale: scrollYProgress.get() > 0.5 ? 0.9 : 0.9 }}
              onHoverStart={() => scrollYProgress.get() < 0.5 && setHoveredCard(card.id)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <span className="text-xl">{card.icon}</span>
            </motion.div>

            <AnimatePresence>
              {hoveredCard === card.id && scrollYProgress.get() < 0.5 && (
                <motion.div
                  className="absolute bg-white z-40"
                  style={{
                    left: `calc(${position.left} + 20px)`,
                    top: `calc(${position.top} + 20px)`,
                  }}
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <HoverCard card={card.id} position={position} />
                </motion.div>
              )}
            </AnimatePresence>
          </React.Fragment>
        );
      })}

      <div className="relative z-20 container mx-auto px-4 text-center xl:pt-32 pt-10">
        <motion.h1
          className="text-[60px] font-bold text-gray-900 mb-4"
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
          feedback and share customer insights – without the busywork.
        </motion.p>

        <motion.div
          className="max-w-2xl mx-auto bg-white rounded-lg p-8 shadow-md border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          ref={dropBoxRef}
          style={{
            scale: useTransform(scrollYProgress, [0, 1], [1, 1.2]),
            y: useTransform(scrollYProgress, [0, 1], [0, -50])
          }}
        >
          <motion.div
        className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center"
        animate={{
          y: [0, -10, 0], // Floating effect
          rotate: [0, 5, -5, 0], // Gentle rotation
          scale: [1, 1.05, 1], // Slight pulsing effect
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        style={{
          rotate: useTransform(scrollYProgress, [0.5, 0.8], [0, 360]),
          scale: useTransform(scrollYProgress, [0.5, 0.8], [1, 1.3]),
        }}
      >
        <img src="/bubble.png" alt="" className="w-full h-full rounded-full" />
      </motion.div>
          <p className="text-lg text-gray-700">Drop anything to capture feedback</p>

          <motion.div
            className="mt-6 text-sm text-gray-500 flex items-center justify-center"
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0])
            }}
            ref={svgRef}
          >
            <svg className="w-5 h-5 mr-2 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            Scroll to collect feedback elements
          </motion.div>
        </motion.div>
       
      </div>

      <div className="h-screen"></div>
    </div>
  );
};

export default HeroSection;