import React,{useState,useEffect} from 'react'
import {
  Wifi,
  Battery,
  Signal,
} from "lucide-react";

export default function StatusBar(){
      const [currentTime, setCurrentTime] = useState("");


        useEffect(() => {
          const updateTime = () => {
            const now = new Date();
            setCurrentTime(
              now.toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
              })
            );
          };
          updateTime();
          const interval = setInterval(updateTime, 1000);
          return () => clearInterval(interval);
        }, []);
 return (
   <>
     <div className="absolute top-0 left-0 right-0 h-6 px-6 flex justify-between items-center z-30 text-white text-xs">
       <span>{currentTime}</span>
       <div className="flex items-center gap-2">
         <Signal size={14} />
         <Battery size={14} />
       </div>
     </div>
     {/* Dynamic Island (keep existing code) */}
     <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[125px] h-[35px] bg-black rounded-b-[20px] z-20">
       <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full">
         <div className="relative w-12 h-4 mx-auto">
           <div className="absolute left-0 w-4 h-4 bg-black rounded-full" />
           <div className="absolute right-0 w-2 h-4 bg-black rounded-full" />
         </div>
       </div>
     </div>
   </>
 );
}