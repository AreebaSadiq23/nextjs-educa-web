"use client";
import React, { useState } from "react";
import {
  FaBullseye,
  FaEye,
  FaStar,
  FaGlobe,
  FaUsers,
  FaTrophy,
} from "react-icons/fa";

type Section =
  | "mission"
  | "vision"
  | "chooseUs"
  | "values"
  | "goals"
  | "achievements";

const AboutSection: React.FC = () => {
  const [showMore, setShowMore] = useState<Record<Section, boolean>>({
    mission: false,
    vision: false,
    chooseUs: false,
    values: false,
    goals: false,
    achievements: false,
  });

  const toggleMore = (section: Section) => {
    setShowMore((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <section
      id="about"
      className="relative bg-gradient-to-br from-gray-300 to-slate-600 py-16 px-6 text-gray-900 max-w-screen-2xl mx-auto mt-20"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[url('/path-to-background-image.svg')] bg-cover opacity-20 blur-sm"></div>

      {/* Container */}
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 ">
          About Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card Component */}
          {[
            {
              title: "Our Mission",
              icon: <FaBullseye size={30} className="text-blue-400" />,
              content:
                "To empower students with knowledge and skills to succeed using innovative teaching methods.",
              extra:
                "We create an environment where students explore their potential, enhance critical thinking, and adapt to challenges.",
              key: "mission",
            },
            {
              title: "Our Vision",
              icon: <FaEye size={30} className="text-blue-400" />,
              content:
                "To be a leader in education by providing high-quality learning experiences that inspire and engage students.",
              extra:
                "Our vision fosters lifelong learning where students innovate and contribute positively to society.",
              key: "vision",
            },
            {
              title: "Why Choose Us?",
              icon: <FaStar size={30} className="text-yellow-400" />,
              content:
                "We focus on holistic development, critical thinking, and hands-on practical learning for our students.",
              extra:
                "Our expert faculty, advanced curriculum, and personalized mentoring make us the preferred choice for learners.",
              key: "chooseUs",
            },
            {
              title: "Our Core Values",
              icon: <FaGlobe size={30} className="text-green-400" />,
              content:
                "Integrity, Innovation, Excellence, and Commitment to continuous learning are our guiding principles.",
              extra:
                "We believe in fostering a culture of respect, collaboration, and inclusivity to build a strong foundation for students.",
              key: "values",
            },
            {
              title: "Our Goals",
              icon: <FaUsers size={30} className="text-purple-400" />,
              content:
                "To enhance the quality of education by integrating technology and research-based learning methods.",
              extra:
                "We aim to expand educational access, bridge skill gaps, and create future-ready professionals.",
              key: "goals",
            },
            {
              title: "Our Achievements",
              icon: <FaTrophy size={30} className="text-orange-400" />,
              content:
                "Recognized as a top educational institute with a high student success rate and industry collaborations.",
              extra:
                "We take pride in our alumni who have excelled in various fields, proving the effectiveness of our education system.",
              key: "achievements",
            },
          ].map(({ title, icon, content, extra, key }) => (
            <div
              key={key}
              className="bg-white/10 backdrop-blur-lg text-gray-700 p-6 rounded-2xl shadow-lg border border-gray-600 hover:shadow-xl transform hover:-translate-y-2 transition duration-300 animate-fade-in"
            >
              <div className="flex items-center space-x-4 mb-4">
                {icon}
                <h3 className="text-2xl font-semibold">{title}</h3>
              </div>
              <p className="text-gray-300">{content}</p>
              {showMore[key as Section] && (
                <p className="mt-2 text-gray-300">{extra}</p>
              )}
              <button
                onClick={() => toggleMore(key as Section)}
                className="text-orange-200 hover:text-orange-400 transition mt-4 inline-block"
              >
                {showMore[key as Section] ? "Show Less" : "Learn More"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
