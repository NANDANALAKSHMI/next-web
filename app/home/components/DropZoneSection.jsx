import React from 'react';
import { motion, useTransform } from 'framer-motion';

const DropZoneSection = ({ scrollYProgress, dropBoxRef }) => {
  return (
    <div className="p-4 md:p-0">

      <motion.div
        className="max-w-2xl mx-auto bg-white rounded-lg p-8 shadow-md border border-gray-100"

        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        ref={dropBoxRef}
        data-dropbox
        style={{
          scale: useTransform(scrollYProgress, [0, 1], [1, 1.2]),
          y: useTransform(scrollYProgress, [0, 1], [0, -50]),
          backgroundImage: "url('/bg.png')",
          // backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <motion.div
          className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1],
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

        <p className="text-lg text-[#36156b] text-bold">Drop anything to capture feedback</p>

        <motion.div
          className="mt-6 text-sm text-gray-500 flex items-center justify-center"
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0])
          }}
        >
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DropZoneSection;