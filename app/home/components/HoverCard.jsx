import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HoverCard = ({ card, hoveredIcon, setHoveredIcon }) => {
  const renderCardContent = () => {
    switch(card.cardType) {
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
          <div className={`border border-${card.color.split('-')[1]}-300 border-dashed rounded-lg p-4 bg-white shadow-sm w-64 z-10`}>
            <div className="flex items-center justify-between mb-1">
              <div className="text-xs text-gray-500">CYCLE</div>
              <motion.div
                className={`w-8 h-8 ${card.color} rounded-full flex items-center justify-center cursor-pointer`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onHoverStart={() => setHoveredIcon(`icon-${card.id}`)}
                onHoverEnd={() => setHoveredIcon(null)}
              >
                <span className="text-lg">{card.icon}</span>
              </motion.div>
            </div>
            <div className="font-medium mb-2">{card.title}</div>
            <div className="text-xs text-gray-500">Title</div>
            <div className="border border-gray-200 rounded px-3 py-2 text-sm mb-3">
              {card.title} request
            </div>
            <div className="flex gap-2 mb-2">
              <button className={`bg-${card.color.split('-')[1]}-100 text-${card.color.split('-')[1]}-700 px-3 py-1 rounded text-xs`}>{card.title}</button>
              <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-xs">Custom</button>
            </div>
            <div className="text-xs text-gray-500">Description</div>
            <div className="text-sm mb-3">
              {card.description}...
            </div>
           
            <AnimatePresence>
              {hoveredIcon === `icon-${card.id}` && (
                <motion.div
                  className="absolute bg-white rounded-lg p-3 shadow-lg border border-gray-200 z-50 w-48 right-0 top-10"
                  initial={{ opacity: 0, scale: 0.8, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <h3 className="font-medium text-sm mb-1">{card.title} Options</h3>
                  <p className="text-xs text-gray-600">Configure your {card.title.toLowerCase()} settings</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
    }
  };

  return renderCardContent();
};

export default HoverCard;