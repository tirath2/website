import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {  ArrowLeft,  } from "lucide-react";
import Bug1 from "../assets/bug1.png"
import Bug2 from "../assets/bug2.png"
import Bug3 from "../assets/bug3.png"
import Bug4 from "../assets/bug4.png"
import Bug5 from "../assets/bug5.png"
import Bug6 from "../assets/bug6.png"
import Bug7 from "../assets/bug7.png"
import Bug8 from "../assets/bug8.png"
import Bug9 from "../assets/bug9.png"
import Bug10 from "../assets/bug10.png"
import Res1 from "../assets/res1.png"
import Res2 from "../assets/res2.png"
import Res3 from "../assets/res3.png"
import Res4 from "../assets/res4.png"
import Res5 from "../assets/res5.png"
import Res6 from "../assets/res6.png"
import Res7 from "../assets/res7.png"


const projects = [
  {
    id: 1,
    name: "Buggy: Project Tracking Software",
    description: `Buggy is a powerful and intuitive project tracking software designed to streamline the workflow of development teams, making it easier to manage tasks, monitor progress, and report issues. Inspired by industry-standard tools like Jira, Buggy aims to provide a seamless experience for developers, testers, and project managers through its innovative features and modern tech stack.

Built with **NestJS** for backend services and a sleek, responsive **ReactJS** frontend, Buggy ensures scalability, reliability, and user-friendly interactions. A unique Chrome extension further enhances Buggy by automatically capturing logs and API calls, simplifying bug reporting during testing.`,
    summary: [
      "User Service: Manages user authentication, roles, and access control.",
      "Logs Service: Records system and user activity logs to track performance and issues effectively.",
      "Task Service: Facilitates task creation, assignment, and progress tracking.",
      "Frontend: Developed using ReactJS, offering a clean, dynamic interface for smooth navigation and task management.",
      "Chrome Extension: Captures real-time logs and API call data while users interact with applications.",
    ],
    github: ["https://github.com/yourgithub/buggy-backend", "https://github.com/yourgithub/buggy-frontend"],
    images: [Bug1,Bug2,Bug3,Bug4,Bug5,Bug6,Bug7,Bug8,Bug9,Bug10],
  },
  {
    id: 2,
    name: "Restaurant Management System",
    description: `The Restaurant Management System is a comprehensive software solution designed to streamline restaurant operations. It offers features to create and manage menus, handle table reservations, take and process orders, generate bills, and manage inventory.

The system is built with **NestJS** for the backend, ensuring scalability and performance, and **ReactJS** for the frontend, providing a responsive and user-friendly interface. The platform is designed to cater to restaurant owners, staff, and customers, ensuring seamless interaction and management.`,
    summary: [
      "Menu Management: Create, update, and delete menu items with categories, pricing, and availability.",
      "Table Reservations: Reserve tables with geolocation restrictions and check availability.",
      "Order Management: Take customer orders digitally and track preparation and delivery status.",
      "Billing System: Generate detailed bills with multiple payment options, including split payments.",
      "Inventory Management: Track stock levels, manage suppliers, and generate low-stock alerts.",
    ],
    github: ["https://github.com/yourgithub/restaurant-backend", "https://github.com/yourgithub/restaurant-frontend"],
    images: [Res1,Res2,Res3,Res4,Res5,Res6,Res7],
  },
];

const Projects = ({goBack}) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

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
          <h1 className="text-2xl font-bold mt-4">Projects</h1>
        </div>

      {!selectedProject ? (
        <div className="flex flex-col overflow-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer m-2"
              onClick={() => handleProjectClick(project)}
            >
              <Carousel
                infinite
                showDots
                autoPlay
                autoPlaySpeed={3000}
                containerClass="carousel-container"
                responsive={{
                  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
                  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
                  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
                }}
              >
                {project.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${project.name} ${index + 1}`}
                    className="w-full h-48 object-cover"
                  />
                ))}
              </Carousel>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
                <p className="text-gray-600 truncate">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <button
            onClick={handleCloseDetails}
            className="bg-red-500 text-white px-4 py-2 rounded mb-4"
          >
            Close Details
          </button>
          <h2 className="text-2xl font-bold mb-4">{selectedProject.name}</h2>
          <p className="mb-4">{selectedProject.description}</p>
          <h3 className="text-lg font-semibold mb-2">Summary:</h3>
          <ul className="list-disc pl-6 mb-4">
            {selectedProject.summary.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h3 className="text-lg font-semibold mb-2">GitHub Links:</h3>
          <ul className="list-disc pl-6">
            {selectedProject.github.map((link, index) => (
              <li key={index}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </div>
  );
};

export default Projects;
