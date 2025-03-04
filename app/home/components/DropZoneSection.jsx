import React from 'react';
import { motion, useTransform } from 'framer-motion';

const DropZoneSection = ({ scrollYProgress, dropBoxRef }) => {
  return (
    <motion.div
      className="max-w-2xl mx-auto bg-white rounded-lg p-8 shadow-md border border-gray-100"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      ref={dropBoxRef}
      data-dropbox
      style={{
        scale: useTransform(scrollYProgress, [0, 1], [1, 1.2]),
        y: useTransform(scrollYProgress, [0, 1], [0, -50])
      }}
    >
      <motion.div
        className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center"
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        style={{
          rotate: useTransform(scrollYProgress, [0.5, 0.8], [0, 360]),
          scale: useTransform(scrollYProgress, [0.5, 0.8], [1, 1.3])
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
      >
        <svg className="w-5 h-5 mr-2 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
        Scroll to collect feedback elements
      </motion.div>
    </motion.div>
  );
};

export default DropZoneSection;