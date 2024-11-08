import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#52637a] flex flex-col px-4 lg:px-20 gap-12 py-8">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:h-[500px]">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img
            src="https://media.istockphoto.com/id/2122148349/photo/writing-an-exam-at-the-university.jpg?s=612x612&w=0&k=20&c=LgVzLcd_cxNDQrolZFFqg7AIQnTd_xBrvdWfr-eVoK8="
            alt="students"
            className="object-cover rounded-lg shadow-lg max-h-80 lg:max-h-full"
          />
        </div>
        
        {/* Text Section */}
        <div className="flex flex-col gap-4 w-full lg:w-1/2 text-white">
          <h1 className="text-4xl font-bold leading-tight">
            Driving Insight, Shaping Tomorrow
          </h1>
          <p className="text-lg leading-relaxed">
            Welcome to The Mufasas – where innovative minds converge to tackle today’s pressing issues and pave the way for a brighter future. As a group of forward-thinking individuals, we dive into critical areas, from policy reform to cutting-edge technology, creating a platform for impactful discussions and transformative ideas.
          </p>
          <Link
            to="/e-lab"
            className="bg-blue-600 px-3 py-3 rounded-lg text-lg text-center w-32 text-white font-semibold hover:bg-blue-500 transition duration-200"
          > E-Lab
          </Link>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-primary-500 uppercase font-semibold tracking-wide mb-4">Meet the Team</h2>
          <h3 className="text-4xl font-extrabold text-gray-100">The Mufasas</h3>
        </div>

        {/* Team Members Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { name: "Kenzo Sano", imgSrc: "https://media.istockphoto.com/id/1473711199/photo/face-portrait-student-and-man-in-university-ready-for-back-to-school-learning-goals-or.jpg?s=612x612&w=0&k=20&c=Xrwp5ePvm6RjixgAjJo-OAw9oXkLt_HcmT3bdlLZUdw=" },
            { name: "Frank Musiime", imgSrc: "https://media.istockphoto.com/id/1473711199/photo/face-portrait-student-and-man-in-university-ready-for-back-to-school-learning-goals-or.jpg?s=612x612&w=0&k=20&c=Xrwp5ePvm6RjixgAjJo-OAw9oXkLt_HcmT3bdlLZUdw=" },
            { name: "Merveille Shekina", imgSrc: "https://media.istockphoto.com/id/1473711199/photo/face-portrait-student-and-man-in-university-ready-for-back-to-school-learning-goals-or.jpg?s=612x612&w=0&k=20&c=Xrwp5ePvm6RjixgAjJo-OAw9oXkLt_HcmT3bdlLZUdw=" },
            { name: "Eugene Koech", imgSrc: "https://media.istockphoto.com/id/1473711199/photo/face-portrait-student-and-man-in-university-ready-for-back-to-school-learning-goals-or.jpg?s=612x612&w=0&k=20&c=Xrwp5ePvm6RjixgAjJo-OAw9oXkLt_HcmT3bdlLZUdw=" },
            { name: "Duke Ndamage", imgSrc: "https://media.istockphoto.com/id/1473711199/photo/face-portrait-student-and-man-in-university-ready-for-back-to-school-learning-goals-or.jpg?s=612x612&w=0&k=20&c=Xrwp5ePvm6RjixgAjJo-OAw9oXkLt_HcmT3bdlLZUdw=" },
          ].map((member, index) => (
            <div key={index} className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/5">
              <div className="group relative bg-gray-100 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
                <img
                  alt={member.name}
                  className="w-full h-48 object-cover group-hover:opacity-90"
                  src={member.imgSrc}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-transparent bg-opacity-75 text-center rounded-b-xl">
                  <h4 className="font-semibold text-lg text-white">{member.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
