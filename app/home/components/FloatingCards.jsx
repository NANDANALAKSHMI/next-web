'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useTransform } from 'framer-motion';
import HoverCard from './HoverCard';

const FloatingCards = ({ 
  floatingCards, 
  scrollYProgress, 
  hoveredCard, 
  setHoveredCard,
  hoveredIcon,
  setHoveredIcon 
}) => {
  const [positions, setPositions] = useState([]);
  const [dropBoxPosition, setDropBoxPosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

      const handleResize = () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

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

    const updatePositions = () => {
      const dropBox = document.querySelector('[data-dropbox]');
      if (dropBox) {
        const dropBoxRect = dropBox.getBoundingClientRect();
        setDropBoxPosition({
          x: dropBoxRect.left + dropBoxRect.width / 2,
          y: dropBoxRect.top + dropBoxRect.height / 2,
        });
      }
    };

    updatePositions();
    window.addEventListener('resize', updatePositions);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', updatePositions);
    };
  }, [floatingCards]);

  return (
    <>
      {floatingCards.map((card) => {
        const position = positions.find(pos => pos.id === card.id) || { x: 0, y: 0, left: card.left, top: card.top };

        const cardX = useTransform(
          scrollYProgress,
          [0, 0.8],
          [0, dropBoxPosition.x - (parseFloat(card.left) * (windowSize.width / 100))]
        );

        const cardY = useTransform(
          scrollYProgress,
          [0, 0.8],
          [0, dropBoxPosition.y - (parseFloat(card.top) * (windowSize.height / 100))]
        );

        const cardScale = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.8, 0.5]);
        const cardOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.8, 0]);

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
                  <HoverCard 
                    card={card} 
                    position={position} 
                    hoveredIcon={hoveredIcon}
                    setHoveredIcon={setHoveredIcon}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default FloatingCards;
