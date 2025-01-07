
import React, { useState, useEffect } from "react";

export default function Volume() {
 const [showVolumeIndicator, setShowVolumeIndicator] = useState(false);
  const [volumeLevel, setVolumeLevel] = useState(50);

    // Volume indicator timer
  useEffect(() => {
    let timer;
    if (showVolumeIndicator) {
      timer = setTimeout(() => setShowVolumeIndicator(false), 2000);
    }
    return () => clearTimeout(timer);
  }, [showVolumeIndicator]);

      const handleVolumeButton = (direction) => {
    setShowVolumeIndicator(true);
    setVolumeLevel((prev) =>
      direction === "up" ? Math.min(prev + 10, 100) : Math.max(prev - 10, 0)
    );
  };

    return (
        <>
              <button
            className="absolute -left-[2px] top-24 w-[4px] h-16 bg-gray-700 rounded-l-sm"
            onClick={() => handleVolumeButton("up")}
          />
          <button
            className="absolute -left-[2px] top-48 w-[4px] h-16 bg-gray-700 rounded-l-sm"
            onClick={() => handleVolumeButton("down")}
          />
  {showVolumeIndicator && (
          <div className="absolute left-6 top-24  bg-gray-800/80 rounded-lg p-3 z-50 backdrop-blur-md">
            <div className="w-4 h-32 flex items-end justify-end bg-gray-200 rounded-full">
              <div
                className="w-full bg-white rounded-full transition-all duration-200"
                style={{ height: `${volumeLevel}%` }}
              />
            </div>
          </div>
        )}
        </>
    );
}