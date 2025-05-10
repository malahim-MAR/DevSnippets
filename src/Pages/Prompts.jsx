import React from "react";

const Prompts = () => {
  return (
    <>
      <div className="flex justify-around align-center gap-4 p-4 bg-gray-900 min-h-screen">
        {/* Prompt Section */}
        <div className="prompt-tab flex-1 bg-gray-800 rounded-lg shadow-xl">
          <h1 className="text-center text-3xl font-bold my-10">
            Service Section Prompts
          </h1>
          <div className="tabs tabs-border">
            <input
              type="radio"
              name="prompt_tabs"
              className="tab"
              aria-label="index.js"
              defaultChecked
            />
            <div className="tab-content bg-gray-800 p-0">
              <div className="mockup-code bg-gray-800 text-gray-300">
                <pre className="px-4 py-2">
                  <code className="font-mono">
                    <span className="text-blue-400">function</span>{" "}
                    <span className="text-yellow-400">greet</span>() {"{\n"}
                    <span className="ml-4 text-purple-400">console</span>.
                    <span className="text-blue-400">log</span>(
                    <span className="text-green-400">'Hello World!'</span>);
                    {"\n"}
                    {"}"}
                  </code>
                </pre>
              </div>
            </div>

            <input
              type="radio"
              name="prompt_tabs"
              className="tab"
              aria-label="styles.css"
            />
            <div className="tab-content bg-gray-800 p-0">
              <div className="mockup-code bg-gray-800">
                <pre className="px-4 py-2">
                  <code className="font-mono">
                    <span className="text-blue-400">.container</span> {"{\n"}
                    <span className="ml-4">display: flex;\n</span>
                    <span className="ml-4">justify-content: center;\n</span>
                    <span className="ml-4">padding: 2rem;\n</span>
                    {"}"}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Output Section */}
        <div className="output-tab flex-1 bg-gray-800 rounded-lg shadow-xl">
          <div className="tabs tabs-border">
            <input
              type="radio"
              name="output_tabs"
              className="tab"
              aria-label="Preview"
              defaultChecked
            />
            <div className="tab-content bg-gray-800 p-4">
              <div className="mockup-window bg-gray-700">
                <img
                  src="https://via.placeholder.com/600x400/1F2937/FFFFFF?text=Hello+World+Preview"
                  alt="Output Preview"
                  className="w-full h-96 object-contain"
                />
              </div>
            </div>

            <input
              type="radio"
              name="output_tabs"
              className="tab"
              aria-label="Console"
            />
            <div className="tab-content bg-gray-800 p-0">
              <div className="mockup-code bg-gray-800 h-96 overflow-y-auto">
                <pre className="text-green-400 px-4 py-2">
                  <code>
                    <span className="text-gray-400">$ npm start</span>
                    {"\n"}
                    react-scripts start{"\n"}
                    Starting development server...{"\n"}
                    Compiled successfully!{"\n"}
                    Open http://localhost:3000
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Terminal Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 p-2 border-t border-gray-700">
        <div className="flex items-center text-gray-400 text-sm">
          <span className="mr-4">📁 src/</span>
          <span className="mr-4">⚡ Powered by Vite</span>
          <span className="flex items-center">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-1"></span>
            Connected
          </span>
        </div>
      </div>
    </>
  );
};

export default Prompts;
