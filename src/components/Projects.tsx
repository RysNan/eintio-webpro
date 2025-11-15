import { useLanguage } from "../context/LanguageContext";
import { FaRocket, FaTools, FaLightbulb } from 'react-icons/fa';

const Projects = () => {
  const { content } = useLanguage();
  return (
    <section id="projects" className="w-full px-6 py-24 md:py-32 bg-[#FEFEFE]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-[#250950]">
            {content.projects.title}
          </h2>
          <p className="text-xl text-[#54428e]/70 max-w-3xl mx-auto">
            {content.projects.subtitle}
          </p>
        </div>
        
        {/* Coming Soon Display */}
        <div className="flex flex-col items-center justify-center py-16">
          <div className="relative mb-12">
            <div className="absolute inset-0 bg-[#f66d9d]/20 blur-3xl rounded-full"></div>
            <FaRocket className="relative text-9xl text-[#f66d9d] animate-bounce" />
          </div>
          
          <h3 className="text-4xl md:text-5xl font-black text-[#250950] mb-6">
            {content.projects.comingSoon.title}
          </h3>
          
          <p className="text-xl text-[#54428e]/70 max-w-2xl text-center mb-12 leading-relaxed">
            {content.projects.comingSoon.description}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
            <div className="flex flex-col items-center p-8 bg-[#F5F5F5] rounded-2xl">
              <FaTools className="text-5xl text-[#f66d9d] mb-4" />
              <h4 className="text-xl font-bold text-[#250950] mb-2">{content.projects.comingSoon.features[0].title}</h4>
              <p className="text-[#54428e] text-center">{content.projects.comingSoon.features[0].description}</p>
            </div>
            
            <div className="flex flex-col items-center p-8 bg-[#F5F5F5] rounded-2xl">
              <FaLightbulb className="text-5xl text-[#f66d9d] mb-4" />
              <h4 className="text-xl font-bold text-[#250950] mb-2">{content.projects.comingSoon.features[1].title}</h4>
              <p className="text-[#54428e] text-center">{content.projects.comingSoon.features[1].description}</p>
            </div>
            
            <div className="flex flex-col items-center p-8 bg-[#F5F5F5] rounded-2xl">
              <FaRocket className="text-5xl text-[#f66d9d] mb-4" />
              <h4 className="text-xl font-bold text-[#250950] mb-2">{content.projects.comingSoon.features[2].title}</h4>
              <p className="text-[#54428e] text-center">{content.projects.comingSoon.features[2].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;