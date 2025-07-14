
import { PencilIcon } from "lucide-react";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-100 via-white to-blue-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            Organize Smarter with <span className="text-blue-600">TodoApp</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Plan your tasks with clarity using our smart digital pad. Easy, intuitive, and built for focus.
          </p>
          <Link
            to="/task"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
          >
            <PencilIcon className="w-5 h-5" />
            Start Planning
          </Link>
        </div>

        {/* Right: Smart Pad Mockup */}
        <div className="bg-white shadow-2xl rounded-3xl p-6 md:p-8 transform rotate-2 hover:rotate-0 transition duration-500 ease-in-out">
          <div className="bg-gray-100 rounded-xl p-4 space-y-3 max-w-sm mx-auto">
            <div className="h-4 w-2/3 bg-blue-200 rounded"></div>
            <div className="h-4 w-full bg-blue-300 rounded"></div>
            <div className="h-4 w-5/6 bg-blue-200 rounded"></div>
            <div className="h-4 w-3/4 bg-blue-300 rounded"></div>
            <div className="h-4 w-full bg-blue-200 rounded"></div>
          </div>
          <p className="text-xs text-center text-gray-400 mt-4">
            SmartPad – a preview of your organized life
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
