import React from "react";

const currentYear: number = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="fixed text-center bottom-0 w-full mx-[-16px] h-[2.5rem] bg-black pt-2">
      <p className="text-[#ccc]">
        &copy; {currentYear} Chef Abbey. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
