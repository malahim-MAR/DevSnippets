import React from "react";

const Prompts = () => {
  return (
    <>
      <div className="prompt-section-parent">
        <h1 className="text-center text-3xl font-bold my-10">
          Service Section Prompts
        </h1>
        <div className="flex justify-around align-center gap-4 p-4 bg-gray-900 min-h-screen">
          {/* Prompt Section */}
          <div className="prompt-tab flex-1 bg-gray-800 rounded-lg shadow-xl">
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
                  <h2 className="px-5 font-bold text-2xl py-2">Prompt :</h2>
                  <p className=" flex-wrap font-mono px-5">
                    Design a modern, responsive "Services" section for a
                    <span className="bg-purple-950">
                      {" "}
                      [ ("developer-focused snippet") {"=>"} change this into
                      for which purpose do you want to make the section ]
                    </span>
                    website. The section should feature a clean layout with soft
                    shadows, rounded corners, and a grid or flex-based
                    arrangement. Use icons or minimal illustrations to visually
                    represent each service. Include subtle hover effects and a
                    cohesive color scheme (e.g., dark mode with accent colors or
                    light mode with soft tones). The services to display are:
                    <ul className="py-3">
                      <li>
                        1. React UI Snippets – Reusable UI components built with
                        React.
                      </li>
                      <li>
                        2. React UI Snippets – Reusable UI components built with
                        React.
                      </li>
                      <li>
                        3. React UI Snippets – Reusable UI components built with
                        React.
                      </li>
                      <li>
                        4. React UI Snippets – Reusable UI components built with
                        React.
                      </li>
                      <li>
                        5. React UI Snippets – Reusable UI components built with
                        React.
                      </li>
                      <li>
                        6. React UI Snippets – Reusable UI components built with
                        React.
                      </li>
                    </ul>
                  </p>
                  <pre className="px-4 py-2">
                    <code className="font-mono"></code>
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
                      {"\n"} react-scripts start{"\n"}
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
      </div>
    </>
  );
};

export default Prompts;
