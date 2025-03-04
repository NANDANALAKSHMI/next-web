'use client'
import React from 'react';
import { useState } from 'react';

const Feedback = () => {
  const [currentTab, setCurrentTab] = useState('inbox');
  
  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto p-4 font-sans">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-2">The fastest feedback capture you'll ever see</h1>
      </div>
      
      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="bg-blue-50 p-2 rounded-md mr-2">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h2 className="text-xl font-semibold">Capture feedback from anywhere</h2>
          </div>
          <p className="text-gray-600">Connect your sources (Slack, Intercom, HubSpot, Email & more) to create feedback with context</p>
        </div>
        
        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="bg-indigo-50 p-2 rounded-md mr-2">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
              </svg>
            </div>
            <h2 className="text-xl font-semibold">Record & transcribe customer calls</h2>
          </div>
          <p className="text-gray-600">Invite Cycle's recorder to any Zoom, G Meet or MS Teams call to fetch transcripts & summaries</p>
        </div>
        
        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="bg-blue-50 p-2 rounded-md mr-2">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h2 className="text-xl font-semibold">Document your user research</h2>
          </div>
          <p className="text-gray-600">Co-write docs in real-time, add things like tables & toggles, and translate or rephrase with AI</p>
        </div>
      </div>
      
     <div>
        <img src="/news.png" alt="" />
     </div>
   
    </div>
  );
};

export default Feedback;