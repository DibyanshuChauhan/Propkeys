/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <main className="bg-gray-50 text-gray-800">
            {/* Hero Section */}
            <section className="min-h-[50vh] flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 px-6 py-20">
                <div className="max-w-3xl text-center space-y-6">
                    <motion.h2
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900"
                    >
                        About <span className="text-blue-600">PropKeys</span>
                    </motion.h2>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                        PropKeys is a newly founded startup with a bold vision — to make real estate{" "}
                        <span className="font-semibold text-blue-600">simpler, smarter, and more accessible</span>.
                        We aim to empower clients with knowledge, transparent processes, and professional guidance as they take their first steps in property investment.
                    </p>
                </div>
            </section>

            {/* Mission, Vision, Values, Skills */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto text-center space-y-12">
                    <h3 className="text-3xl font-bold text-gray-900">Who We Are</h3>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {/* Mission */}
                        <motion.div whileHover={{ scale: 1.03 }} className="p-6 bg-white rounded-xl shadow-md text-left space-y-3">
                            <h4 className="text-xl font-semibold text-gray-900">Mission</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                To guide individuals and families in making confident property decisions by providing clear, honest, and reliable real estate solutions.
                            </p>
                        </motion.div>

                        {/* Vision */}
                        <motion.div whileHover={{ scale: 1.03 }} className="p-6 bg-white rounded-xl shadow-md text-left space-y-3">
                            <h4 className="text-xl font-semibold text-gray-900">Vision</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                To grow into a trusted name in real estate, known for innovation, transparency, and creating lasting value for clients and communities.
                            </p>
                        </motion.div>

                        {/* Skills */}
                        <motion.div whileHover={{ scale: 1.03 }} className="p-6 bg-white rounded-xl shadow-md text-left space-y-3">
                            <h4 className="text-xl font-semibold text-gray-900">Skills</h4>
                            <ul className="text-gray-600 text-sm leading-relaxed list-disc pl-5 space-y-1">
                                <li><strong>Property Valuation:</strong> Identifying true market worth.</li>
                                <li><strong>Client Advisory:</strong> Helping clients make informed choices.</li>
                                <li><strong>Project Planning:</strong> From concept to completion.</li>
                                <li><strong>Negotiation:</strong> Ensuring fair and beneficial deals.</li>
                            </ul>
                        </motion.div>

                        {/* Values */}
                        <motion.div whileHover={{ scale: 1.03 }} className="p-6 bg-white rounded-xl shadow-md text-left space-y-3">
                            <h4 className="text-xl font-semibold text-gray-900">Values</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Built on <span className="font-semibold">integrity, innovation, and customer focus</span>, we believe in honest business, forward-thinking strategies, and putting people first.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Closing Section */}
            <section className="py-20 bg-gray-900 text-white text-center px-6">
                <div className="max-w-3xl mx-auto space-y-6">
                    <h3 className="text-3xl font-bold">Shaping the Future of Real Estate</h3>
                    <p className="text-lg">
                        As a startup, every step we take is towards building trust and delivering results.
                        We are excited to grow with our clients and partners — together, let’s build smarter communities.
                    </p>
                    <Link
                        to="/contact"
                        className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-2xl shadow-md hover:bg-gray-100 transition"
                    >
                        Connect With Us
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default About;
