import React from 'react';
import { Mail, Phone, Linkedin, Github,ArrowLeft } from 'lucide-react';
import Photo from '../assets/photo.jpeg'
const UserInfo= ({goBack}) => {
  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen pt-10">
         <button
    onClick={goBack}
    className="text-black font-semibold text-xl flex items-center space-x-2 absolute left-4 top-16 "
  >
    <ArrowLeft size={20} />
  </button>
      <div className="bg-white rounded-2xl shadow-md w-full max-w-md p-6">
        <div className="flex flex-col items-center mb-6">
          <img className='order-2 border-dashed rounded-xl w-24 h-24 mb-2'
          alt='img'
          src={Photo}/>
          <h2 className="text-2xl font-semibold text-gray-800">Tirath Bhuva</h2>
        </div>

        <div className="space-y-4">
          <a href="mailto:btirath2@gmail.com" className="flex items-center p-3 bg-gray-50 rounded-lg">
            <Mail className="w-5 h-5 text-gray-500 mr-3" />
            <span className="text-gray-700">btirath2@gmail.com</span>
          </a>
          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <Phone className="w-5 h-5 text-gray-500 mr-3" />
            <span className="text-gray-700">+91 7977045133</span>
          </div>
          <a href="https://www.linkedin.com/in/tirath-bhuva-97752513a/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <Linkedin className="w-5 h-5 text-gray-500 mr-3" />
            <span className="text-blue-600">Linkedin </span>
          </a>
          <a href="https://github.com/tirath2" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <Github className="w-5 h-5 text-gray-500 mr-3" />
            <span className="text-gray-700">github.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;