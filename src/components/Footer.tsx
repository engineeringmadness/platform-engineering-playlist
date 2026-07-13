import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 text-center bg-transparent border-t border-[#1f2a44] mt-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center text-[#9aa7bd]">
          <span>engineeringmadness.dev Made using</span>
          <a
            href="https://lovable.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 font-bold text-[#22d3ee] hover:text-[#67e8f9] hover:underline"
          >
            Lovable
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
