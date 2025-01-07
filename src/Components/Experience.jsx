import React, { useState } from "react";
import { Briefcase, Search, Calendar, MapPin, ChevronRight, ArrowLeft, MoreVertical } from "lucide-react";

const ExperienceApp = ({goBack}) => {
  const [activeView, setActiveView] = useState('list'); // 'list' or 'detail'
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const experienceData = [
    {
      id: "groyyo",
      company: "Groyyo",
      logo: "G",
      role: "Senior Software Developer",
      period: "11/2022 – Present",
      location: "Mumbai, India",
      color: "from-blue-400 to-blue-600",
      skills: ["React Native", "React.js", "NestJS", "PostgreSQL"],
      type: "Full-time • Remote",
      responsibilities: [
        "Led the development of Groyyo Plus, a factory-focused ERP solution using React Native, React.js, and NestJS.",
        "Built and maintained RESTful APIs for dynamic features like bulk data uploads and real-time notifications.",
        "Optimized database queries, reducing API response times by 40%.",
        "Played a key role in developing Intent360 for factory production and quality tracking.",
      ],
    },
    {
      id: "cometchat",
      company: "CometChat",
      logo: "C",
      role: "Senior Software Engineer",
      period: "10/2020 – 11/2022",
      location: "Mumbai, India",
      color: "from-purple-400 to-purple-600",
      skills: ["React Native", "Node.js", "PostgreSQL", "WebRTC"],
      type: "Full-time • Hybrid",
      responsibilities: [
        "Designed and developed a video calling SDK for React Native and React.js.",
        "Created Node.js APIs to store and process analytics data in PostgreSQL.",
        "Built reusable backend components for real-time data exchange.",
        "Developed a React Native UI Kit with customizable components.",
      ],
    },
    {
      id: "cabbagesoft",
      company: "Cabbagesoft",
      logo: "C",
      role: "React Native Developer",
      period: "10/2019 – 09/2021",
      location: "Mumbai, India",
      color: "from-green-400 to-green-600",
      skills: ["React Native", "iOS", "Android", "REST APIs"],
      type: "Full-time • On-site",
      responsibilities: [
        "Developed mobile applications for iOS and Android using React Native.",
        "Integrated third-party APIs for real-time updates.",
        "Ensured responsive layouts and optimized performance.",
      ],
    },
    {
      id: "ninesquare",
      company: "Nine Square",
      logo: "N",
      role: "React Native Developer",
      period: "05/2018 – 10/2019",
      location: "Mumbai, India",
      color: "from-orange-400 to-orange-600",
      skills: ["React Native", "UI/UX", "REST APIs"],
      type: "Full-time • On-site",
      responsibilities: [
        "Built and deployed React Native applications for iOS and Android.",
        "Converted UI designs into functional React Native components.",
        "Integrated APIs and collaborated with backend teams for seamless user experience.",
      ],
    },
  ];

  const handleJobSelect = (job) => {
    setSelectedJob(job);
    setActiveView('detail');
  };

  const filteredJobs = experienceData.filter(job => 
    job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
   <div className="h-full w-full flex items-center justify-center bg-gray-100">
      <div className="h-full w-full bg-white shadow-lg overflow-hidden ">
        {/* Header */}
        <div className="bg-blue-500 text-white h-1/6 flex w-full relative items-center justify-center text-center">
          <button
    onClick={goBack}
    className="text-white font-semibold text-xl flex items-center space-x-2 absolute left-4 bottom-8 "
  >
    <ArrowLeft size={20} />
  </button>
          <h1 className="text-2xl font-bold mt-4">Experience</h1>
        </div>
        {activeView === 'list' ? (
          <>
            {/* List View */}
           
             

              {/* Search Bar */}
              <div className=" m-2">
                <div className="relative">
                  <Search size={16} className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search roles or companies..."
                    className="w-full bg-gray-100 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Job List */}
              <div className="px-4 space-y-3 overflow-y-auto h-[calc(100%-8rem)]">
                {filteredJobs.map((job) => (
                  <button
                    key={job.id}
                    className="w-full bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-200 active:scale-98"
                    onClick={() => handleJobSelect(job)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${job.color} flex items-center justify-center text-white font-bold text-xl`}>
                          {job.logo}
                        </div>
                        <div className="text-left">
                          <h3 className="font-semibold text-gray-900">{job.company}</h3>
                          <p className="text-sm text-gray-500">{job.role}</p>
                        </div>
                      </div>
                      <ChevronRight size={20} className="text-gray-400" />
                    </div>
                  </button>
                ))}
              </div>
          </>
        ) : (
          <>
            {/* Detail View */}
            <div className="h-full pt-12 pb-36 overflow-y-auto bg-white">
              {/* Header */}
              <div className=" bg-white px-4 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <button 
                    onClick={() => setActiveView('list')}
                    className="p-2 rounded-full hover:bg-gray-100"
                  >
                    <ArrowLeft size={20} className="text-gray-600" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <MoreVertical size={20} className="text-gray-600" />
                  </button>
                </div>

                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedJob?.color} flex items-center justify-center text-white font-bold text-2xl`}>
                    {selectedJob?.logo}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{selectedJob?.company}</h2>
                    <p className="text-gray-500">{selectedJob?.role}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  <div className="flex items-center bg-blue-50 text-blue-600 rounded-full px-3 py-1 text-xs">
                    <Calendar size={12} className="mr-1" />
                    {selectedJob?.period}
                  </div>
                  <div className="flex items-center bg-green-50 text-green-600 rounded-full px-3 py-1 text-xs">
                    <MapPin size={12} className="mr-1" />
                    {selectedJob?.location}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-4 mt-6 space-y-6">
                {/* Job Type */}
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Employment Type</h3>
                  <p className="text-gray-900">{selectedJob?.type}</p>
                </div>

                {/* Skills */}
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedJob?.skills.map((skill, index) => (
                      <span 
                        key={index}
                        className="bg-gray-100 text-gray-600 rounded-full px-3 py-1 text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Responsibilities */}
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-3">Key Responsibilities</h3>
                  <ul className="space-y-3">
                    {selectedJob?.responsibilities.map((task, index) => (
                      <li 
                        key={index}
                        className="flex items-start text-sm text-gray-600"
                      >
                        <span className="text-blue-500 mt-1 mr-2">•</span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ExperienceApp;
