import React, { useState, useEffect, useRef } from "react";
import {
  User,
  Briefcase,
  Code,
  Mail,
  X,
  Wifi,
  Battery,
  Signal,
} from "lucide-react";
import fingerImage from "./assets/finger.png";
import StatusBar from "./Components/StatusBar";
import Volume from "./Components/Volume";
import LockScreen from "./Components/LockScreen";
import AboutMe from "./Components/AboutMe";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import Projects from "./Components/Project";

const MobilePortfolio = () => {
  const [activeApp, setActiveApp] = useState(null);
  const [isPoweredOn, setIsPoweredOn] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isCursorInsidePhone, setIsCursorInsidePhone] = useState(false);
  const [isAppExiting, setIsAppExiting] = useState(false);

  const [isNotificationCenter, setIsNotificationCenter] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const notificationPanelRef = useRef(null);

  const apps = [
    { id: "about", name: "About Me", icon: User, color: "bg-blue-400" },
    {
      id: "experience",
      name: "Experience",
      icon: Briefcase,
      color: "bg-green-400",
    },
    { id: "projects", name: "Projects", icon: Code, color: "bg-purple-400" },
    { id: "contact", name: "Contact", icon: Mail, color: "bg-red-400" },
  ];

  const closeApp = () => {
    setIsAppExiting(true);
    setTimeout(() => {
      setActiveApp(null);
      setIsAppExiting(false);
    }, 300);
  };

  const handleTouchStart = (e) => {
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    const touchY = e.touches[0].clientY;
    const deltaY = touchY - touchStartY;

    if (deltaY > 50 && !isNotificationCenter) {
      setIsNotificationCenter(true);
    } else if (deltaY < -50 && isNotificationCenter) {
      setIsNotificationCenter(false);
    }
  };

  const handleMouseMove = (e) => {
    const phoneElement = document.querySelector("#phone");
    if (phoneElement) {
      const { top, left, width, height } = phoneElement.getBoundingClientRect();
      const isInside =
        e.clientX >= left &&
        e.clientX <= left + width &&
        e.clientY >= top &&
        e.clientY <= top + height;

      setIsCursorInsidePhone(isInside);
      if (isInside) {
        setCursorPosition({ x: e.clientX, y: e.clientY });
      }
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handlePowerButton = () => {
    setIsPoweredOn(!isPoweredOn);
    if (!isPoweredOn) {
      setActiveApp(null);
      // setIsRecentApps(false);
    }
  };
  const goBack = () => {
    setActiveApp(null);
  };
  const appContent = {
    about: <AboutMe goBack={goBack} />,
    experience: <Experience goBack={goBack} />,
    projects: <Projects goBack={goBack} />,
    contact: <Contact goBack={goBack} />,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative">
      {/* Finger cursor (keep existing code) */}

      {/* Phone Container with Border */}
      <div className="relative w-[380px] h-[100vh] bg-gray-800 rounded-[55px] p-4 shadow-2xl">
        {/* Phone Frame Details */}
        <div className="absolute inset-0 rounded-[55px] overflow-hidden">
          {/* Inner Border */}
          <div className="absolute inset-[3px] border-[14px] border-black rounded-[52px]" />
        </div>

        {/* Volume Indicator */}

        <Volume />
        <button
          className="absolute -right-[2px] top-24 w-[4px] h-24 bg-gray-700 rounded-r-sm"
          onClick={handlePowerButton}
        />
        {/* Main Phone Body */}
        <div
          id="phone"
          className="relative w-full h-full bg-black rounded-[47px] overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <StatusBar />
          {/* Side Buttons */}

          {/* Main Screen Content */}
          <div
            style={{
              backgroundImage: `url(${require("./assets/background.jpg")})`,
            }}
            className={`w-full h-full rounded-[47px] transition-colors duration-500 
            ${isPoweredOn ? "bg-[#f2f2f7]" : "bg-black"} `}
          >
            {activeApp ? (
              appContent[activeApp]
            ) : isPoweredOn ? (
              <div className="h-full relative flex flex-col">
                {/* Active App View */}

                {/* Bottom Dock */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gray-200/50 backdrop-blur-md">
                  <div className="h-full flex justify-around items-center px-4">
                    {apps.map((app) => (
                      <button
                        key={app.id}
                        onClick={() => setActiveApp(app.id)}
                        className="transition-transform duration-200 hover:scale-105"
                      >
                        <div
                          className={`w-12 h-12 ${app.color} rounded-2xl flex items-center justify-center shadow-md`}
                        >
                          <app.icon className="text-white" size={20} />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-400 rounded-full" />
              </div>
            ) : (
              <LockScreen onUnlock={handlePowerButton} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobilePortfolio;
