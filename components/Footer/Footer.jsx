import React from "react";
import Link from "next/link";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

const Footer = ({ links = [], socialLinks = [], copyright }) => {
  return (
    <footer className="bg-gray-800 text-gray-200 p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Navigation Links */}
        <nav className="space-x-4">
          {links.map((link, index) => (
            <Link key={index} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          {socialLinks.map((social, index) => (
            <Link
              key={index}
              href={social.href}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              {social.icon}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-sm text-center md:text-right">
          {copyright || "© 2024 MyLibrary. All rights reserved."}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
