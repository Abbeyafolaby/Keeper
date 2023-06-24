"use client"
import React, { useState, useEffect } from "react";

const Header = () => {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const time = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => {
      clearInterval(time);
    };
  }, []);

  const getCurrentTime = (): string => {
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, "0");
    const minutes = currentTime.getMinutes().toString().padStart(2, "0");

    return `${hours}:${minutes}`;
  };

  return (
    <header className="bg-[#f5ba13] my-auto mx-[-16px] py-4 px-8 shadow-md flex items-center text-white">
      <h1 className=" font-normal text-2xl mr-auto">Keeper</h1>
      <p className="text-l">{currentTime}</p>
    </header>
  );
};

export default Header;
