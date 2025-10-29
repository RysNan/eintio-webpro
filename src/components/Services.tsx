import { useLanguage } from "../context/LanguageContext";
import { FaLaptopCode, FaMobileAlt, FaGraduationCap, FaBookOpen, FaPalette, FaVideo } from 'react-icons/fa';
import type { IconType } from "react-icons";

interface Service {
  type: 'web' | 'mobile' | 'elearning' | 'thesis' | 'design' | 'video';
  title: string;
  description: string;
}

const iconMap: { [key in Service['type']]: IconType } = {
  'web': FaLaptopCode,
  'mobile': FaMobileAlt,
  'elearning': FaGraduationCap,
  'thesis': FaBookOpen,
  'design': FaPalette,
  'video': FaVideo
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.services.items.map((service: Service, index: number) => {
            const IconComponent = iconMap[service.type];
            return (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl hover:bg-[#F5A201] group transition-all duration-300 cursor-pointer hover:shadow-2xl hover:scale-105 border border-white/10">
                <IconComponent className="text-6xl text-[#F5A201] group-hover:text-white mb-6 transition-colors" />
                <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/70 group-hover:text-white/90 text-lg leading-relaxed transition-colors">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
