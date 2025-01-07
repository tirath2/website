import React, { useState, useRef } from "react";

const LockScreen = ({ onUnlock }) => {
 

  return (
    <div
      className="relative w-full h-full  overflow-hidden  shadow-xl flex flex-col items-center"
      style={{ fontFamily: "system-ui" }}
    >
    

      {/* Lock Screen Content */}
      <div className="flex-grow flex flex-col justify-center items-center text-white text-center">
        <p className="text-6xl font-light">
          {new Date().toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          })}   
        </p>
        <p className="text-lg font-light mt-2">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            day: "numeric",
            month: "long",
          })}
        </p>
      </div>

      {/* Swipe to Unlock */}
      <div
        className="relative  w-full cursor-pointer h-24 bg-gradient-to-t from-black to-transparent flex items-center justify-center"
        onClick={onUnlock}
      >
       
        <p
          className="text-gray-400 select-none font-light tracking-wide"
        >
          click to Unlock
        </p>
    </div>
    </div>
  );
};

export default LockScreen;
