/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    FaPhoneAlt,
    FaEnvelope,
    FaUser,
    FaMapMarkerAlt,
    FaFacebook,
    FaInstagram,
    FaTwitter,
} from "react-icons/fa";

const Contact = () => {
    return (
        <main className="bg-gray-50 text-gray-800">
            {/* Hero Section */}
            <section className="min-h-[40vh] flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 px-6 py-20">
                <div className="max-w-3xl text-center space-y-6">
                    <motion.h2
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900"
                    >
                        Get in <span className="text-blue-600">Touch</span>
                    </motion.h2>
                    <p className="text-lg md:text-xl text-gray-600">
                        We’d love to hear from you! Whether you’re looking for your dream
                        property, exploring investment opportunities, or simply want to
                        connect — we’re here to help.
                    </p>
                </div>
            </section>

            {/* Contact Info */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center p-6 bg-white shadow rounded-xl"
                    >
                        <FaUser className="text-blue-600 text-2xl mb-3" />
                        <p className="font-medium">Ravi Thapa</p>
                    </motion.div>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        href="tel:+919068534078"
                        className="flex flex-col items-center p-6 bg-white shadow rounded-xl"
                    >
                        <FaPhoneAlt className="text-blue-600 text-2xl mb-3" />
                        <p className="font-medium">+91 9068534078</p>
                    </motion.a>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        href="mailto:r.thapa0608@gmail.com"
                        className="flex flex-col items-center p-6 bg-white shadow rounded-xl"
                    >
                        <FaEnvelope className="text-blue-600 text-2xl mb-3" />
                        <p className="font-medium">r.thapa0608@gmail.com</p>
                    </motion.a>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center p-6 bg-white shadow rounded-xl"
                    >
                        <FaMapMarkerAlt className="text-blue-600 text-2xl mb-3" />
                        <p className="font-medium text-center">Rishikesh, Uttarakhand</p>
                    </motion.div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-16 px-6 bg-gray-100">
                <div className="max-w-6xl mx-auto text-center space-y-8">
                    <h3 className="text-3xl font-bold text-gray-900">Find Us</h3>
                    <div className="w-full h-80 rounded-xl overflow-hidden shadow">
                        <iframe
                            title="PropKeys Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.228984204361!2d78.2929!3d30.0869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390916d6f7f0f7d9%3A0xf2b2e3f2172a3c8b!2sRishikesh%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1694000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
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
                            We’re here to guide you in your real estate journey — from buying
                            your dream home to making smart investments.
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
                        <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2"><FaPhoneAlt /> +91 9068534078</li>
                            <li className="flex items-center gap-2"><FaEnvelope /> r.thapa0608@gmail.com</li>
                            <li className="flex items-center gap-2"><FaMapMarkerAlt /> Rishikesh, Uttarakhand</li>
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

export default Contact;
