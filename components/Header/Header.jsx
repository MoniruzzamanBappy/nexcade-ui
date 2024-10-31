import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = ({ logoSrc, links = [], buttonLabel, onButtonClick }) => {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center text-2xl font-semibold text-blue-600"
        >
          {logoSrc ? (
            <div className="mr-2">
              <Image src={logoSrc} alt="Logo" width={32} height={32} priority />
            </div>
          ) : (
            "Nexcade"
          )}
        </Link>

        {/* Navigation Links */}
        <nav className="space-x-4 hidden md:flex">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Button */}
        {buttonLabel && (
          <button
            onClick={onButtonClick}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            {buttonLabel}
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
