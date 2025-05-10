import ContactSection from "../Components/ContactSection";

export default function About() {
  return (
    <>
      <section className="bg-base-100 text-base-content py-20 px-4 lg:px-8">
        {/* Hero Section */}
        <header className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Code Repository for Modern Developers
          </h1>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Zero-dependency solutions that integrate seamlessly into your
            existing workflow
          </p>
        </header>

        {/* Services Section */}
        <div className="max-w-7xl mx-auto mb-20">
          <h2 className="text-3xl font-bold font-mono mb-12 text-center border-b-2 border-primary pb-2">
            &lt;ServicesWeProvide/&gt;
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "React + Tailwind Components",
                description:
                  "Production-ready UI components with native TW styling",
                icon: "⚛️",
                border: "border-primary",
              },
              {
                title: "HTML/CSS/Bootstrap",
                description:
                  "Pure markup solutions without jQuery dependencies",
                icon: "🖥️",
                border: "border-secondary",
              },
              {
                title: "Shopify .liquid Snippets",
                description: "Theme-friendly liquid templates with inline CSS",
                icon: "🛍️",
                border: "border-accent",
              },
              {
                title: "WordPress Elementor",
                description: "Conflict-free snippets with unique CSS scoping",
                icon: "💡",
                border: "border-primary",
              },
              {
                title: "AI Ready Prompts",
                description: "Dev-optimized prompts for code generation",
                icon: "🤖",
                border: "border-secondary",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-base-200 p-6 rounded-box border border-base-300 hover:border-primary transition-all"
              >
                <div className={`flex items-center gap-4 mb-4`}>
                  <span className="text-3xl">{service.icon}</span>
                  <h3 className="text-xl font-bold font-mono">
                    {service.title}
                  </h3>
                </div>
                <p className="opacity-80 pl-14">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Developer Features */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-base-200 rounded-box p-8 border border-base-300">
            <h3 className="text-2xl font-mono mb-4">🖥️ Live Features</h3>
            <ul className="space-y-4 opacity-90">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                Interactive Code Previews
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                Embedded Code Editor
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                GitHub Repo Links
              </li>
            </ul>
          </div>

          <div className="bg-base-200 rounded-box p-8 border border-base-300">
            <h3 className="text-2xl font-mono mb-4">📦 Implementation</h3>
            <div className="mockup-code">
              <pre className="px-4">
                <code>
                  {`// Direct implementation example\n`}
                  <span className="text-primary">
                    {"<div class='shopify-snippet'>"}
                  </span>
                  \n
                  <span className="text-secondary"> {"<style>"}</span>\n
                  <span className="text-accent">
                    {" "}
                    .unique-class {"{"} color: red; {"}"}\n
                  </span>
                  <span className="text-secondary"> {"</style>"}</span>\n
                  <span className="text-primary">{"</div>"}</span>
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="bg-base-200 rounded-box p-8 border border-primary">
            <h2 className="text-3xl font-mono mb-4">👨💻 Solo Dev Team</h2>
            <p className="opacity-90">
              Maintained by a single developer who understands the pain points
              of modern web development
            </p>
            <div className="mt-6 badge badge-primary badge-lg">
              No Middle Management
            </div>
          </div>
        </div>

        {/* Why Created Section */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-base-200 rounded-box p-8 border border-accent">
            <h2 className="text-3xl font-mono mb-6">
              🚀 Why DevSnippet Exists
            </h2>
            <div className="space-y-6 opacity-90">
              <p>
                Frustrated by the{" "}
                <span className="text-primary">"npm install everything"</span>{" "}
                culture, I created a repository of pure implementation examples.
              </p>

              <div className="mockup-code">
                <pre className="px-4">
                  <code>
                    {`// Shopify Solution Example\n`}
                    <span className="text-primary">{"{% style %}"}</span>\n
                    <span className="text-accent">
                      {" "}
                      #shopify-section-{"{id}"} {"{"} \n padding: 2rem;\n {"}"}
                    </span>
                    \n
                    <span className="text-primary">{"{% endstyle %}"}</span>
                  </code>
                </pre>
              </div>

              <p>
                For WordPress Elementor, we use{" "}
                <span className="text-secondary">unique class prefixes</span>{" "}
                and inline styles to prevent theme conflicts:
              </p>

              <div className="bg-base-300 rounded-box p-4">
                <code className="font-mono text-sm">
                  {`.ds-element-12345 {\n  color: #fff !important;\n}`}
                </code>
              </div>

              <p className="font-mono border-l-4 border-primary pl-4">
                "Our snippets survive plugin updates and theme changes"
              </p>
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
