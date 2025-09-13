/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    FaArrowRight,
    FaHome,
    FaBuilding,
    FaHandshake,
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt
} from "react-icons/fa";
import heroBG from "../assets/Home-image.avif";

const Home = () => {
    return (
        <main className="w-full">
            {/* Hero Section */}
            <section
                className="h-screen w-full relative bg-cover bg-center flex items-center justify-center px-6"
                style={{
                    backgroundImage:
                        `url(${heroBG})`,
                }}
            >
                <div className="bg-black/50 absolute inset-0" />
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 text-center text-white space-y-6 max-w-3xl"
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold">
                        Find Your Dream <span className="text-blue-400">Property</span>
                    </h1>
                    <p className="text-lg md:text-xl">
                        Buy, sell, or rent properties with trust and transparency.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/services"
                            className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow-md hover:bg-blue-700 transition flex items-center gap-2"
                        >
                            Browse Listings <FaArrowRight />
                        </Link>
                        <Link
                            to="/contact"
                            className="px-6 py-3 border border-white text-white rounded-2xl hover:bg-blue-600 transition"
                        >
                            Contact Us
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-7xl mx-auto text-center space-y-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Why Choose <span className="text-blue-600">PropKeys</span>
                    </h2>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="p-6 bg-gray-50 rounded-xl shadow-md space-y-3">
                            <FaHome className="text-4xl text-blue-600 mx-auto" />
                            <h3 className="text-xl font-semibold">Wide Property Range</h3>
                            <p className="text-gray-600">
                                From budget flats to luxury villas, we cover it all.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-xl shadow-md space-y-3">
                            <FaBuilding className="text-4xl text-blue-600 mx-auto" />
                            <h3 className="text-xl font-semibold">Trusted Developers</h3>
                            <p className="text-gray-600">
                                We partner with the best developers in the industry.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-xl shadow-md space-y-3">
                            <FaHandshake className="text-4xl text-blue-600 mx-auto" />
                            <h3 className="text-xl font-semibold">Transparent Deals</h3>
                            <p className="text-gray-600">
                                Fair, hassle-free, and reliable property transactions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-300 px-6 py-12">
                <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-4">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold text-white">PropKeys</h3>
                        <p className="mt-4 text-gray-400">
                            Revolutionizing real estate with trust, transparency, and
                            technology-driven solutions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link to="/home" className="hover:text-white">Home</Link></li>
                            <li><Link to="/about" className="hover:text-white">About</Link></li>
                            <li><Link to="/services" className="hover:text-white">Services</Link></li>
                            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <FaPhoneAlt /> +91 9068534078
                            </li>
                            <li className="flex items-center gap-2">
                                <FaEnvelope /> r.thapa0608@gmail.com
                            </li>
                            <li className="flex items-center gap-2">
                                <FaMapMarkerAlt /> Rishikesh, Uttarakhand
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    {/* <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
                        <div className="flex gap-4 text-xl">
                            <a href="#" className="hover:text-white"><FaFacebook /></a>
                            <a href="#" className="hover:text-white"><FaInstagram /></a>
                            <a href="#" className="hover:text-white"><FaTwitter /></a>
                        </div>
                    </div> */}

                </div>

                <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} PropKeys. All rights reserved.
                </div>
            </footer>
        </main>
    );
};

export default Home;
