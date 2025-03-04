'use client'
import React from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

const PageContent = () => {
    return (
        <div className="w-full container mx-auto py-20 px-4 relative">
            <ScrollTriggeredSection>
                <motion.div
                    className="grid md:grid-cols-10 grid-cols-1 gap-8 glassmorphism-effect"
                >
                    <div className='md:col-span-3 bg-white rounded-[23px] p-8'>
                        <FeedbackSourceCard />
                    </div>
                    <div className='md:col-span-7 bg-white rounded-[23px] p-8'>
                        <div className="grid grid-cols-2 gap-8">
                            <TopFeatureRequests />
                            <FeedbackStatus />
                            <CustomerQuotes />
                            <CustomersFeedbackChart />
                        </div>
                    </div>
                </motion.div>
            </ScrollTriggeredSection>
        </div>
    )
}

// Reusable scroll-triggered section component
const ScrollTriggeredSection = ({ children }) => {
    const ref = React.useRef(null)
    const isInView = useInView(ref, { once: false, amount: 0.1 })

    return (
        <div ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6 }}
            >
                {children}
            </motion.div>
        </div>
    )
}

const FeedbackSourceCard = () => {
    const ref = React.useRef(null)
    const isInView = useInView(ref, { once: false, amount: 0.3 })

    const integrations = [
        { id: 1, icon: "📷", color: "bg-blue-100", name: "Camera" },
        { id: 2, icon: "📊", color: "bg-red-100", name: "Chart" },
        { id: 3, icon: "📝", color: "bg-gray-100", name: "Notes" },
        { id: 4, icon: "📰", color: "bg-gray-100", name: "News" },
        { id: 5, icon: "🎯", color: "bg-purple-100", name: "Target" },
        { id: 6, icon: "🔍", color: "bg-orange-100", name: "Search" },
        { id: 7, icon: "✨", color: "bg-blue-100", name: "Star" },
        { id: 8, icon: "📱", color: "bg-blue-100", name: "Mobile" },
        { id: 9, icon: "📊", color: "bg-green-100", name: "Chart" },
        { id: 10, icon: "🔊", color: "bg-gray-100", name: "Audio" },
        { id: 11, icon: "📄", color: "bg-blue-100", name: "Document" },
        { id: 12, icon: "📈", color: "bg-gray-100", name: "Analytics" },
        { id: 13, icon: "🌀", color: "bg-purple-200", name: "Cycle" }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 }
    };

    return (
        <div ref={ref}>
            <motion.div
                className="bg-white rounded-lg border border-blue-100 border-dashed p-6"
                initial={{ x: -50, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div className="mb-6">
                    <div className="bg-gray-200 rounded-lg overflow-hidden h-36 mb-4">
                        <img
                            src="/person.jpg"
                            alt="User feedback video"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <motion.div
                    className="grid grid-cols-4 gap-4"
                    variants={container}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                >
                    {integrations.slice(0, 12).map((app, index) => (
                        <motion.div
                            key={app.id}
                            className="flex justify-center"
                            variants={item}
                        >
                            <motion.div
                                className={`w-12 h-12 ${app.color} rounded-full flex items-center justify-center shadow-sm`}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="text-lg">{app.icon}</span>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="flex justify-center mt-6">
                    <motion.div
                        className="w-14 h-14 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full flex items-center justify-center shadow-md"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ delay: 0.8, type: "spring", stiffness: 300 }}
                    >
                        <span className="text-lg">{integrations[12].icon}</span>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

const TopFeatureRequests = () => {
    const ref = React.useRef(null)
    const isInView = useInView(ref, { once: false, amount: 0.4 })

    const features = [
        { id: 1, width: "75%" },
        { id: 2, width: "60%" },
        { id: 3, width: "85%" },
        { id: 4, width: "90%" },
        { id: 5, width: "40%" }
    ];

    return (
        <div ref={ref}>
            <motion.div
                className="bg-white rounded-lg p-6 shadow-sm"
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <div className="flex items-center gap-2 mb-6">
                    <span className="text-blue-600 text-xl">✦</span>
                    <h3 className="font-medium text-lg">Top feature requests</h3>
                </div>

                <div className="space-y-4">
                    {features.map((feature, index) => (
                        <div key={feature.id} className="flex items-center gap-3">
                            <div className="w-16 h-3 bg-gray-100 rounded-full"></div>
                            <motion.div
                                className="h-3 bg-blue-400 rounded-full"
                                style={{ width: "0%" }}
                                animate={isInView ? { width: feature.width } : { width: "0%" }}
                                transition={{ duration: 0.8, delay: 0.3 + (index * 0.1) }}
                            ></motion.div>
                            <div className="h-3 bg-gray-100 rounded-full flex-grow"></div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

const FeedbackStatus = () => {
    const ref = React.useRef(null)
    const isInView = useInView(ref, { once: false, amount: 0.4 })

    return (
        <div ref={ref}>
            <motion.div
                className="bg-white rounded-lg p-6 shadow-sm"
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <div className="flex items-center gap-2 mb-6">
                    <span className="text-blue-600 text-xl">✦</span>
                    <h3 className="font-medium text-lg">Feedback status</h3>
                </div>

                <div className="flex justify-center">
                    <div className="relative w-32 h-32">
                        {/* Blue segment */}
                        <motion.div
                            className="absolute w-32 h-32"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <svg width="128" height="128" viewBox="0 0 128 128">
                                <circle
                                    cx="64"
                                    cy="64"
                                    r="60"
                                    fill="none"
                                    stroke="#3B82F6"
                                    strokeWidth="8"
                                    strokeDasharray="110 376"
                                    strokeDashoffset="0"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </motion.div>

                        {/* Pink segment */}
                        <motion.div
                            className="absolute w-32 h-32"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <svg width="128" height="128" viewBox="0 0 128 128">
                                <circle
                                    cx="64"
                                    cy="64"
                                    r="60"
                                    fill="none"
                                    stroke="#EC4899"
                                    strokeWidth="8"
                                    strokeDasharray="94 376"
                                    strokeDashoffset="-110"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </motion.div>

                        {/* Green segment */}
                        <motion.div
                            className="absolute w-32 h-32"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <svg width="128" height="128" viewBox="0 0 128 128">
                                <circle
                                    cx="64"
                                    cy="64"
                                    r="60"
                                    fill="none"
                                    stroke="#10B981"
                                    strokeWidth="8"
                                    strokeDasharray="120 376"
                                    strokeDashoffset="-204"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </motion.div>

                        {/* Center circle */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full"
                            initial={{ scale: 0 }}
                            animate={isInView ? { scale: 1 } : { scale: 0 }}
                            transition={{ duration: 0.3, delay: 0.7 }}
                        />

                        {/* Dots beside circle */}
                        <motion.div
                            className="absolute top-1/2 right-0 transform translate-x-6 -translate-y-6 space-y-1"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.3, delay: 0.8 }}
                        >
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

const CustomerQuotes = () => {
    const ref = React.useRef(null)
    const isInView = useInView(ref, { once: false, amount: 0.4 })

    return (
        <div ref={ref}>
            <motion.div
                className="bg-white rounded-lg p-6 shadow-sm"
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <div className="flex items-center gap-2 mb-6">
                    <span className="text-blue-600 text-xl">✦</span>
                    <h3 className="font-medium text-lg">Summary of customer quotes</h3>
                </div>

                <div className="space-y-4">
                    <div>
                        <motion.div
                            className="h-3 w-0 bg-green-400 rounded-full mb-2"
                            animate={isInView ? { width: "8rem" } : { width: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        />
                        <div className="h-2 w-full bg-gray-100 rounded-full" />
                    </div>
                    <div className="space-y-2">
                        <div className="h-2 w-full bg-gray-100 rounded-full" />
                        <div className="h-2 w-5/6 bg-gray-100 rounded-full" />
                        <div className="h-2 w-4/6 bg-gray-100 rounded-full" />
                    </div>
                    <div className="space-y-2">
                        <div className="h-2 w-full bg-gray-100 rounded-full" />
                        <div className="h-2 w-3/4 bg-gray-100 rounded-full" />
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

const CustomersFeedbackChart = () => {
    const ref = React.useRef(null)
    const isInView = useInView(ref, { once: false, amount: 0.3 })

    const bars = [
        { id: 1, height: "80px" },
        { id: 2, height: "50px" },
        { id: 3, height: "90px" },
        { id: 4, height: "60px" },
        { id: 5, height: "40px" },
        { id: 6, height: "30px" },
        { id: 7, height: "70px" },
        { id: 8, height: "55px" },
        { id: 9, height: "85px" },
    ];

    return (
        <div ref={ref}>
            <motion.div
                className="bg-white rounded-lg p-6 shadow-sm"
                initial={{ y: 40, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <div className="flex items-center gap-2 mb-6">
                    <span className="text-blue-600 text-xl">✦</span>
                    <h3 className="font-medium text-lg">Customers with most feedback</h3>
                </div>

                <div className="flex items-end justify-between h-32 gap-1">
                    {bars.map((bar, index) => (
                        <motion.div
                            key={bar.id}
                            className="w-full bg-pink-200 rounded-t-md"
                            style={{ height: 0 }}
                            animate={isInView ? { height: bar.height } : { height: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.2 + (index * 0.05),
                                type: "spring",
                                stiffness: 200
                            }}
                        />
                    ))}
                </div>
                <div className="h-3 w-full bg-gray-100 rounded-full mt-4" />
                <div className="grid grid-cols-9 gap-1 mt-2">
                    {bars.map((bar) => (
                        <div key={`label-${bar.id}`} className="h-2 w-full bg-gray-100 rounded-full" />
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default PageContent