import React, { useState, useEffect } from "react";
import { User, Briefcase, Code, Mail } from "lucide-react";
import StatusBar from "./Components/StatusBar";
import Volume from "./Components/Volume";
import LockScreen from "./Components/LockScreen";
import AboutMe from "./Components/AboutMe";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import Projects from "./Components/Project";
import CV from "./assets/TIRATH_BHUVA_REACT_NATIVE.pdf";
const MobilePortfolio = () => {
  const [activeApp, setActiveApp] = useState(null);
  const [isPoweredOn, setIsPoweredOn] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    // Detect screen size to toggle mobile view
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768); // Adjust breakpoint as needed
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const handlePowerButton = () => {
    setIsPoweredOn(!isPoweredOn);
    if (!isPoweredOn) {
      setActiveApp(null);
      // setIsRecentApps(false);
    }
  };
  const appContent = {
    about: <AboutMe goBack={() => setActiveApp(null)} />,
    experience: <Experience goBack={() => setActiveApp(null)} />,
    projects: <Projects goBack={() => setActiveApp(null)} />,
    contact: <Contact goBack={() => setActiveApp(null)} />,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative overflow-hidden">
      {/* Left Heading Section */}
      {!isMobileView && (
        <div className="absolute left-12 top-1/2 transform -translate-y-1/2 z-10 animate-slide-in">
          <h1 className="text-4xl font-bold text-gray-800">Tirath Bhuva</h1>
          <p className="text-xl text-gray-600 mt-2">
            Senior Software Developer
          </p>
          <a
            href={CV}
            download
            className="inline-block mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            Download CV
          </a>
        </div>
      )}

      {/* Phone Content */}
      <div
        className={`relative ${
          isMobileView
            ? "w-screen h-screen"
            : "w-[380px] h-[100vh] bg-gray-800 rounded-[55px] p-4 shadow-2xl"
        } transition-transform duration-[1.2s] ease-in-out animate-slide-in ${
          !isMobileView ? "transform translate-x-32" : ""
        }`}
      >
        <Volume />
        <button
          className="absolute -right-[2px] top-24 w-[4px] h-24 bg-gray-700 rounded-r-sm"
          onClick={handlePowerButton}
        />
        <div
          className={`relative w-full h-full ${
            isMobileView ? "" : "bg-black rounded-[47px] overflow-hidden"
          }`}
        >
          <StatusBar />

          <div
            style={{
              backgroundImage: `url(${require("./assets/background.jpg")})`,
            }}
            className={`w-full h-full ${
              isPoweredOn ? "bg-[#f2f2f7]" : "bg-black"
            }`}
          >
            {activeApp ? (
              appContent[activeApp]
            ) : isPoweredOn ? (
              <div className="h-full relative flex flex-col">
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
              </div>
            ) : (
              <LockScreen onUnlock={() => setIsPoweredOn(true)} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobilePortfolio;
