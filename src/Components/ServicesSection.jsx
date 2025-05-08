import {
  CodeBracketIcon,
  CommandLineIcon,
  EyeIcon,
  ShoppingCartIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const ServicesSection = () => {
  const services = [
    {
      title: "React UI Snippets",
      description: "Reusable UI components built with React",
      icon: <CodeBracketIcon className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "JavaScript UI Snippets",
      description: "Functional UI code snippets using vanilla JavaScript",
      icon: <CommandLineIcon className="w-8 h-8 text-emerald-400" />,
    },
    {
      title: "Shopify .Liquid Snippets",
      description: "Custom Liquid templates for Shopify stores",
      icon: <ShoppingCartIcon className="w-8 h-8 text-purple-400" />,
    },
    {
      title: "AI Prompts for Sections",
      description: "Ready-to-use ChatGPT prompts for UI/content generation",
      icon: <SparklesIcon className="w-8 h-8 text-amber-400" />,
    },
    {
      title: "GitHub Project Links",
      description: "Curated open-source project links for developers",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="35"
          height="35"
          viewBox="0 0 24 24"
        >
          <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
        </svg>
      ),
    },
    {
      title: "Live Code Preview",
      description: "Interactive code preview and testing tools",
      icon: <EyeIcon className="w-8 h-8 text-rose-400" />,
    },
  ];

  return (
    <section className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Developer Tools & Resources
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-800 rounded-xl p-6 transition-all duration-300 hover:bg-gray-700 hover:transform hover:-translate-y-2 shadow-lg hover:shadow-xl"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <span className="inline-block bg-gray-700/50 rounded-lg p-3 group-hover:bg-gray-600/50 transition-colors">
                    {service.icon}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 flex-grow">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
