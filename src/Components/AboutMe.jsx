import React, { useState } from "react";
import { User, GraduationCap, Layers ,BarChart, GitBranch, Code, Terminal, Codepen,Box,ArrowLeft} from "lucide-react";

const AboutMe = ({goBack}) => {
  const [activeTab, setActiveTab] = useState("bio");

  const tabs = [
    { id: "bio", name: "Bio", icon: User },
    { id: "education", name: "Education", icon: GraduationCap },
    { id: "skills", name: "Skills", icon: Layers },
  ];

  const content = {
    bio: (
      <div className="p-4">
        <h2 className="text-xl font-semibold">Hello, I'm Tirath Bhuva</h2>
        <p className="mt-2 text-gray-700">
          A Senior Software Developer based in Mumbai with 6 years of
          experience. I specialize in building scalable and efficient software
          solutions. Passionate about solving complex problems and delivering
          impactful products. Currently focused on creating meaningful ventures
          and leveraging technology to revolutionize industries.
        </p>
      </div>
    ),
    education: (
      <div className="p-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center space-x-2">
        <GraduationCap size={28} className="text-blue-500" />
        <span>Education</span>
      </h2>

      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300">
          <h3 className="text-2xl text-white font-bold">Master of Science in Information Technology</h3>
          <p className="mt-2 text-white opacity-80">KES College, Mumbai</p>
          <p className="mt-2 text-white opacity-60">Graduated: 2021</p>
         
        </div>

        <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300">
          <h3 className="text-2xl text-white font-bold">Bachelor of Science in Information Technology</h3>
          <p className="mt-2 text-white opacity-80">Nirmala Memorial College, Mumbai</p>
          <p className="mt-2 text-white opacity-60">Graduated: 2017</p>
         
        </div>
      </div>
    </div>
    ),
    skills: (
      <div className="p-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center space-x-2">
        <BarChart size={28} className="text-blue-500" />
        <span>Skills</span>
      </h2>

      {/* Skill Levels (Progress Bars) */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-700">Core Skills</h3>
          <div className="space-y-4">
            {[{name:"React Native",value:4.5},{name:"React JS",value:4.5}, {name:"Node JS",value:4}, {name:"JavaScript",value:5}].map((skill, index) => (
              <div key={index} className="flex items-center space-x-4">
                <span className="w-32 font-medium text-gray-600">{skill.name}</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-500 h-2.5 rounded-full"
                    style={{
                      width: `${skill.value * 20}%`, // Adjust this value for different skill levels
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Skills (Tags or Icons) */}
         <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-700">Other Skills</h3>

          {/* Frontend Skills */}
          <div>
            <h4 className="text-lg font-medium text-gray-600 mb-3">Frontend Development</h4>
            <div className="flex overflow-x-auto mb-8">
              <div className="text-center m-2 bg-gray-200 p-4 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition">
                <Code size={24} className="mx-auto mb-2 text-blue-600" />
                <span className="text-gray-800">HTML</span>
              </div>
              <div className="text-center m-2 bg-gray-200 p-4 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition">
                <Code size={24} className="mx-auto mb-2 text-blue-600" />
                <span className="text-gray-800">CSS</span>
              </div>
             
              <div className="text-center m-2 bg-gray-200 p-4 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition">
                <Box size={24} className="mx-auto mb-2 text-blue-600" />
                <span className="text-gray-800">Webpack</span>
              </div>
            </div>
          </div>

          {/* Backend Skills */}
          <div>
            <h4 className="text-lg font-medium text-gray-600 mb-3">Backend Development</h4>
            <div className="flex overflow-x-auto mb-8">
              <div className="text-center m-2 bg-gray-200 p-4 rounded-lg shadow-lg hover:bg-green-500 hover:text-white transition">
                <GitBranch size={24} className="mx-auto mb-2 text-green-600" />
                <span className="text-gray-800">Git</span>
              </div>
              <div className="text-center m-2 bg-gray-200 p-4 rounded-lg shadow-lg hover:bg-green-500 hover:text-white transition">
                <Terminal size={24} className="mx-auto mb-2 text-green-600" />
                <span className="text-gray-800">Linux</span>
              </div>
              <div className="text-center m-2 bg-gray-200 p-4 rounded-lg shadow-lg hover:bg-green-500 hover:text-white transition">
                <Codepen size={24} className="mx-auto mb-2 text-green-600" />
                <span className="text-gray-800">GraphQL</span>
              </div>
              <div className="text-center m-2 bg-gray-200 p-4 rounded-lg shadow-lg hover:bg-green-500 hover:text-white transition">
                <Terminal size={24} className="mx-auto mb-2 text-green-600" />
                <span className="text-gray-800">Docker</span>
              </div>
            </div>
          </div>

          {/* Tools and Others */}
          <div>
            <h4 className="text-lg font-medium text-gray-600 mb-3">Tools & Others</h4>
            <div className="flex overflow-x-auto mb-8">
              <div className="text-center m-2 bg-gray-200 p-4 rounded-lg shadow-lg hover:bg-yellow-500 hover:text-white transition">
                <Codepen size={24} className="mx-auto mb-2 text-yellow-600" />
                <span className="text-gray-800">TypeScript</span>
              </div>
              <div className="text-center m-2 bg-gray-200 p-4 rounded-lg shadow-lg hover:bg-yellow-500 hover:text-white transition">
                <Layers size={24} className="mx-auto mb-2 text-yellow-600" />
                <span className="text-gray-800">Jest</span>
              </div>
              
              <div className="text-center m-2 bg-gray-200 p-4 rounded-lg shadow-lg hover:bg-yellow-500 hover:text-white transition">
                <GitBranch size={24} className="mx-auto mb-2 text-yellow-600" />
                <span className="text-gray-800">CI/CD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    ),
  };

  return (
    <div className="h-full w-full flex items-center justify-center bg-gray-100">
      <div className="h-full w-full bg-white shadow-lg overflow-hidden">
        {/* Header */}
       <div className="bg-blue-500 text-white h-1/6 flex w-full relative items-center justify-center text-center">
          <button
    onClick={goBack}
    className="text-white font-semibold text-xl flex items-center space-x-2 absolute left-4 bottom-8 "
  >
    <ArrowLeft size={20} /></button>   <h1 className="text-2xl font-bold mt-4">About Me</h1>
        </div>

        {/* Content */}
        <div className="flex flex-col fl justify-between h-5/6 ">
          <div className="flex-grow overflow-y-auto">
            {content[activeTab]}
          </div>

          {/* Tabs */}
          <div className="flex justify-around max-h-52 mb-4 bg-gray-100 border-t border-gray-300 p-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center ${
                  activeTab === tab.id ? "text-blue-500" : "text-gray-500"
                }`}
              >
                <tab.icon size={24} />
                <span className="text-sm">{tab.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
