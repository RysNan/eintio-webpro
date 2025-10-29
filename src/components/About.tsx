import { useLanguage } from "../context/LanguageContext";
import { FaBullseye, FaLightbulb, FaHandshake } from 'react-icons/fa';
import type { IconType } from "react-icons";

interface AboutValue {
  type: 'vision' | 'innovation' | 'collaboration';
  title: string;
  description: string;
}

const iconMap: { [key in AboutValue['type']]: IconType } = {
  'vision': FaBullseye,
  'innovation': FaLightbulb,
  'collaboration': FaHandshake
};

const About = () => {
  const { content } = useLanguage();
  return (
    <section id="company" className="w-full px-6 py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-[#013C58]">
            {content.about.title}
          </h2>
          <p className="text-xl text-[#013C58]/70 max-w-3xl mx-auto">
            {content.about.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.about.values.map((value: AboutValue, index: number) => {
            const IconComponent = iconMap[value.type];
            return (
              <div key={index} className="bg-[#013C58]/5 p-10 rounded-3xl hover:bg-[#F5A201] group transition-all duration-300 cursor-pointer hover:shadow-xl hover:scale-105">
                <IconComponent className="text-6xl text-[#F5A201] group-hover:text-white mb-6 transition-colors" />
                <h3 className="text-2xl font-bold mb-4 text-[#013C58] group-hover:text-white transition-colors">{value.title}</h3>
                <p className="text-[#013C58]/70 group-hover:text-white/90 text-lg leading-relaxed transition-colors">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
