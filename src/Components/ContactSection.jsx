export default function ContactSection() {
  return (
    <section className="bg-base-100 text-base-content py-20 px-4 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 animate-float">{`</>`}</div>
        <div className="absolute bottom-40 right-20 animate-float-delay">{"//>"}</div>
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-4xl font-bold font-mono bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {`<DebugAssistant/>`}
          </h2>
          <p className="font-mono text-neutral-content/70">// Code-level support for developers</p>
        </div>

        <div className="bg-base-200 rounded-xl p-8 border-2 border-primary/20 shadow-xl">
          <form className="space-y-10">
            {/* Personal Info Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="form-control">
                  <label className="label font-mono text-sm">
                    <span className="label-text">{`// Full Name`}</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered bg-base-100 pl-4 font-mono focus:ring-2 ring-primary"
                    placeholder="JohnDoe"
                  />
                </div>

                <div className="form-control">
                  <label className="label font-mono text-sm">
                    <span className="label-text">{`// GitHub Profile`}</span>
                  </label>
                  <div className="flex items-center bg-base-100 rounded-btn border border-base-300 pl-3">
                    <span className="text-neutral-content/50">github.com/</span>
                    <input
                      type="text"
                      className="input bg-transparent border-none flex-1 font-mono"
                      placeholder="username"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="form-control">
                  <label className="label font-mono text-sm">
                    <span className="label-text">{`// Contact Info`}</span>
                  </label>
                  <input
                    type="email"
                    className="input input-bordered bg-base-100 font-mono mb-4"
                    placeholder="john@example.com"
                  />
                  <div className="flex items-center bg-base-100 rounded-btn border border-base-300">
                    <span className="px-3 text-neutral-content/50">+</span>
                    <input
                      type="tel"
                      className="input bg-transparent border-none flex-1 font-mono"
                      placeholder="1234567890"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Info Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="form-control">
                <label className="label font-mono text-sm">
                  <span className="label-text">{`// Primary Stack`}</span>
                </label>
                <select className="select select-bordered bg-base-100 font-mono focus:ring-2 ring-primary">
                  <option disabled selected>--select--</option>
                  <option>JavaScript/TypeScript ★</option>
                  <option>Python</option>
                  <option>Rust</option>
                  <option>Go</option>
                  <option>Java/Kotlin</option>
                  <option>C/C++</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label font-mono text-sm">
                  <span className="label-text">{`// Environment`}</span>
                </label>
                <select className="select select-bordered bg-base-100 font-mono focus:ring-2 ring-primary">
                  <option disabled selected>--select--</option>
                  <option>Node.js</option>
                  <option>Browser</option>
                  <option>Mobile</option>
                  <option>Desktop</option>
                  <option>Server</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label font-mono text-sm">
                  <span className="label-text">{`// Urgency Level`}</span>
                </label>
                <select className="select select-bordered bg-base-100 font-mono focus:ring-2 ring-primary">
                  <option>🚨 Critical</option>
                  <option>⚠️ High</option>
                  <option selected>🟢 Normal</option>
                  <option>🔵 Low</option>
                </select>
              </div>
            </div>

            {/* Code Section */}
            <div className="form-control">
              <label className="label font-mono text-sm">
                <span className="label-text">{`// Error Details`}</span>
              </label>
              <div className="bg-base-300 rounded-lg p-4 border border-base-content/10">
                <div className="flex justify-between items-center mb-4">
                  <div className="font-mono text-sm opacity-70">
                    <span className="mr-4">📁 REPO_URL</span>
                    <span>⌨️ CTRL+V</span>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-error"></div>
                    <div className="w-3 h-3 rounded-full bg-warning"></div>
                    <div className="w-3 h-3 rounded-full bg-success"></div>
                  </div>
                </div>
                <textarea
                  className="textarea w-full bg-base-300 font-mono text-sm h-48 focus:outline-none"
                  placeholder={`// Paste error logs or code snippet\n// Include reproduction steps\n// Add relevant screenshots`}
                ></textarea>
              </div>
            </div>

            {/* Attachments */}
            <div className="form-control">
              <label className="label font-mono text-sm">
                <span className="label-text">{`// Attachments`}</span>
              </label>
              <div className="border-2 border-dashed border-primary/20 rounded-lg p-8 text-center hover:border-primary/40 transition-colors">
                <div className="font-mono text-sm opacity-70 mb-2">
                  Drag & drop files or <span className="text-primary cursor-pointer">browse</span>
                </div>
                <div className="text-xs opacity-50">
                  (Logs, screenshots, or code samples - max 25MB)
                </div>
              </div>
            </div>

            {/* Submit Section */}
            <div className="pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                <div className="font-mono text-sm opacity-70">
                  <span className="text-primary">//</span> Avg. response: 2-4h ⚡<br />
                  <span className="text-primary">//</span> Support hours: 08:00-20:00 UTC
                </div>
                <button 
                  type="button" 
                  className="btn btn-primary hover:btn-accent font-mono px-8 py-3 transition-all group"
                >
                  <span className="group-hover:scale-110 transition-transform mr-2">🚀</span>
                  Submit Debug Request
                  <span className="ml-2 opacity-70 group-hover:opacity-100">{'//>'}</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}