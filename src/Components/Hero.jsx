import React from "react";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="bg-gray-950 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Build Faster with{" "}
            <span className="text-green-400">Reusable UI Snippets</span>
          </h1>
          <p className="text-gray-300 text-lg mb-6">
            Copy, customize, and drop developer-friendly components into your
            next project.
          </p>
          <div className="flex gap-4 py-4 ">
            <Link to={"/Services"}>
              <a className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition">
                Browse Snippets
              </a>
            </Link>
            <Link to={"/Services"}>
              <a className="border border-gray-400 px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition">
                View GitHub Repo
              </a>
            </Link>
          </div>
        </div>

        {/* Right preview */}
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-4">
          <p className="text-sm text-gray-400 mb-2">Hero Section Preview</p>
          <div className="bg-gray-800 p-4 rounded-lg text-sm font-mono text-green-400">
            &lt;section className="hero bg-image"&gt;
            <br />
            &nbsp;&nbsp;&lt;h1&gt;Welcome to My Website&lt;/h1&gt;
            <br />
            &nbsp;&nbsp;&lt;p&gt;Your go-to resource for dev snippets&lt;/p&gt;
            <br />
            &lt;/section&gt;
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
