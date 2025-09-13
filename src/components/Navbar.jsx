/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "Home", href: "/home" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50"
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-blue-600 tracking-wide">
                    PropKeys
                </Link>

                {/* Desktop Links */}
                <ul className="hidden md:flex space-x-8 relative">
                    {links.map((link) => (
                        <li key={link.name} className="relative">
                            <NavLink
                                to={link.href}
                                className={({ isActive }) =>
                                    `font-medium transition-colors duration-200 relative ${isActive
                                        ? "text-blue-600"
                                        : "text-gray-700 hover:text-blue-600"
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-700 text-2xl"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden bg-white/95 backdrop-blur-sm shadow-md"
                >
                    <ul className="flex flex-col items-center space-y-6 py-6">
                        {links.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;
