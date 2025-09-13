/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
    FaMapMarkerAlt,
    FaHome,
    FaHotel,
    FaArrowLeft,
    FaArrowRight,
    FaTimes,
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkedAlt,
} from "react-icons/fa";
import Hotel01 from "../assets/Hotel/Hotel_01.jpg";
import Hotel02 from "../assets/Hotel/Hotel_02.jpg";
import Hotel03 from "../assets/Hotel/Hotel_03.jpg";
import Hotel04 from "../assets/Hotel/Hotel_04.jpg";
import Hotel05 from "../assets/Hotel/Hotel_05.jpg";
import Hotel06 from "../assets/Hotel/Hotel_06.jpg";
import Hotel07 from "../assets/Hotel/Hotel_07.jpg";
import Hotel08 from "../assets/Hotel/Hotel_08.jpg";
import Hotel09 from "../assets/Hotel/Hotel_09.jpg";

import Flat01 from "../assets/Flat/Flat_01.jpg";
import Flat02 from "../assets/Flat/Flat_02.jpg";
import Flat03 from "../assets/Flat/Flat_03.jpg";
import Flat04 from "../assets/Flat/Flat_04.jpg";
import Flat05 from "../assets/Flat/Flat_05.jpg";
import Flat06 from "../assets/Flat/Flat_06.jpg";
import Flat07 from "../assets/Flat/Flat_07.jpg";
import Flat08 from "../assets/Flat/Flat_08.jpg";
import Flat09 from "../assets/Flat/Flat_09.jpg";

import Plot01 from "../assets/Plots/Plot_01.jpg";
import Plot02 from "../assets/Plots/Plot_02.jpg";
import Plot03 from "../assets/Plots/Plot_03.jpg";
import Plot04 from "../assets/Plots/Plot_04.jpg";
import Plot05 from "../assets/Plots/Plot_05.jpg";
import Plot06 from "../assets/Plots/Plot_06.jpg";
import Plot07 from "../assets/Plots/Plot_07.jpg";

const properties = [
    {
        location: "Lakshman Jhula Tapovan",
        images: [Hotel01, Hotel02, Hotel03, Hotel04, Hotel05, Hotel06, Hotel07, Hotel08, Hotel09],
        listings: [
            { title: "Plot for Sale", details: "320 gaj | ₹1.25 Lakh per gaj", icon: <FaMapMarkerAlt /> },
            { title: "Hotel for Lease", details: "₹6.5 Lakh per month", icon: <FaHotel /> },
            { title: "Hotel for Sale", details: "120 gaj | ₹5 Crore", icon: <FaHotel /> },
        ],
    },
    {
        location: "Bharat Vihar Gali No. 4",
        images: [Flat01, Flat02, Flat03, Flat04, Flat05, Flat06, Flat07, Flat08, Flat09],
        listings: [{ title: "Flat for Sale", details: "3BHK Flat | ₹65 Lakh", icon: <FaHome /> }],
    },
    {
        location: "Veerbhadra Visthapit",
        images: [Plot04, Plot05, Plot03],
        listings: [
            { title: "Plot for Sale", details: "240 gaj × 2 | ₹45,000 per gaj", icon: <FaMapMarkerAlt /> },
            { title: "Plot for Sale", details: "150 gaj | ₹48,000 per gaj", icon: <FaMapMarkerAlt /> },
        ],
    },

    {
        location: "Mansha Devi (Near Shani Dev Mandir)",
        images: [Plot07, Plot02],
        listings: [
            { title: "Plot for Sale", details: "150 gaj | ₹18,000 per gaj", icon: <FaMapMarkerAlt /> },
            { title: "Plot for Sale", details: "100 gaj | ₹18,000 per gaj", icon: <FaMapMarkerAlt /> },
        ],
    },
    {
        location: "Gumaniwala",
        images: [Plot01],
        listings: [{ title: "Plot for Sale", details: "100 gaj | ₹25,000 per gaj", icon: <FaMapMarkerAlt /> }],
    },
    {
        location: "Shyampur (Gadi)",
        images: [Plot06],
        listings: [{ title: "Plot for Sale", details: "150 gaj | ₹30,000 per gaj", icon: <FaMapMarkerAlt /> }],
    },
];

export default function ServicesPage() {
    const [selectedProperty, setSelectedProperty] = useState(null);
    const [currentImage, setCurrentImage] = useState(0);

    const handleNext = () => {
        if (selectedProperty) {
            setCurrentImage((prev) => (prev + 1) % selectedProperty.images.length);
        }
    };

    const handlePrev = () => {
        if (selectedProperty) {
            setCurrentImage((prev) => (prev - 1 + selectedProperty.images.length) % selectedProperty.images.length);
        }
    };

    return (
        <main className="bg-gray-50 text-gray-800">
            {/* Page Heading */}
            <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-blue-100 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-gray-900"
                >
                    Our <span className="text-blue-600">Property Listings</span>
                </motion.h1>
                <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                    Explore our latest properties available for sale, lease, or investment.
                    Each listing is carefully curated to bring you the best opportunities in real estate.
                </p>
            </section>

            {/* Property Cards */}
            <section className="p-6 max-w-7xl mx-auto">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {properties.map((property, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="rounded-2xl shadow-lg overflow-hidden bg-white"
                        >
                            <img
                                src={property.images[0]}
                                alt={property.location}
                                className="w-full h-48 object-cover cursor-pointer"
                                onClick={() => {
                                    setSelectedProperty(property);
                                    setCurrentImage(0);
                                }}
                            />
                            <div className="p-5">
                                <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                                    <FaMapMarkerAlt className="text-red-500" /> {property.location}
                                </h2>
                                <ul className="space-y-2">
                                    {property.listings.map((listing, i) => (
                                        <li key={i} className="text-gray-700 flex items-center gap-2">
                                            <span className="text-blue-500">{listing.icon}</span>
                                            <span>
                                                <span className="font-medium">{listing.title}:</span> {listing.details}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href="/contact"
                                    className="mt-4 inline-block w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition text-center"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Modal for Image Carousel */}
            <AnimatePresence>
                {selectedProperty && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                    >
                        <div className="relative w-11/12 md:w-3/4 lg:w-1/2">
                            <img
                                src={selectedProperty.images[currentImage]}
                                alt="property"
                                className="w-full max-h-[80vh] object-contain rounded-lg"
                            />
                            {/* Controls */}
                            <button
                                onClick={handlePrev}
                                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
                            >
                                <FaArrowLeft />
                            </button>
                            <button
                                onClick={handleNext}
                                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
                            >
                                <FaArrowRight />
                            </button>
                            <button
                                onClick={() => setSelectedProperty(null)}
                                className="absolute top-3 right-3 bg-red-600 text-white p-2 rounded-full shadow"
                            >
                                <FaTimes />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-300 px-6 py-12 mt-16">
                <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-4">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold text-white">PropKeys</h3>
                        <p className="mt-4 text-gray-400">
                            Simplifying real estate with transparency, innovation, and dedication.
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
                            <li className="flex items-center gap-2"><FaPhoneAlt /> +91 9068534078</li>
                            <li className="flex items-center gap-2"><FaEnvelope /> r.thapa0608@gmail.com</li>
                            <li className="flex items-center gap-2"><FaMapMarkedAlt /> Rishikesh, Uttarakhand</li>
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
}
