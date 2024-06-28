import React from 'react';
import ChatWidget  from '../Components/ChatWidget';

const Home = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full p-6 bg-gray-800 rounded-lg shadow-md">
      <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-blue-300">Battu</h1>
          <p className="text-md text-gray-400">Your Friendly Chatbot</p>
        </div>
        <ChatWidget/>
      </div>
    </div>
  );
};

export default Home;
