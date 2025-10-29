import { useLanguage } from "../context/LanguageContext";
import { FaGraduationCap, FaLaptopCode, FaCheckCircle } from 'react-icons/fa';
import type { IconType } from "react-icons";

interface ServiceCategory {
  type: 'academic' | 'technology';
  title: string;
  items: string[];
}

const iconMap: { [key in ServiceCategory['type']]: IconType } = {
  'academic': FaGraduationCap,
  'technology': FaLaptopCode
};

const Services = () => {
  const { content } = useLanguage();
  return (
    <section id="services" className="w-full px-6 py-24 md:py-32 bg-[#013C58] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            {content.services.title}
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {content.services.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {content.services.categories.map((category: ServiceCategory, index: number) => {
            const IconComponent = iconMap[category.type];
            return (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10 hover:border-[#F5A201]/50 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-[#F5A201] rounded-2xl flex items-center justify-center shrink-0">
                    <IconComponent className="text-3xl text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-white">
                    {category.title}
                  </h3>
                </div>
                
                {/* Services List */}
                <ul className="space-y-4">
                  {category.items.map((item: string, itemIndex: number) => {
                    const isInProgress = item.includes('Progress') || item.includes('Pengembangan');
                    return (
                      <li 
                        key={itemIndex} 
                        className="flex items-start gap-3 group"
                      >
                        <FaCheckCircle className={`text-xl shrink-0 mt-0.5 transition-colors ${
                          isInProgress ? 'text-white/30' : 'text-[#F5A201] group-hover:text-white'
                        }`} />
                        <span className={`text-lg leading-relaxed transition-colors ${
                          isInProgress 
                            ? 'text-white/50 italic' 
                            : 'text-white/90 group-hover:text-white'
                        }`}>
                          {item}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
