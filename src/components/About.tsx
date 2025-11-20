import { useLanguage } from "../context/LanguageContext";
import { FaLightbulb, FaHandshake, FaEye, FaFlag, FaStar, FaCheckCircle } from 'react-icons/fa';
import type { IconType } from "react-icons";
import OrganizationalChart from "./OrganizationalChart"; 

interface AboutValue {
  type: 'innovation' | 'quality' | 'collaboration';
  title: string;
  description: string;
}

const iconMap: { [key in AboutValue['type']]: IconType } = {
  'innovation': FaLightbulb,
  'quality': FaStar,
  'collaboration': FaHandshake
};

const About = () => {
  const { content } = useLanguage();

  return (
    <section id="company" className="relative w-full px-6 py-24 md:py-32 bg-[#FEFEFE] overflow-hidden">
      
      {/* --- DEKORASI BACKGROUND (BLOBS) --- */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#54428e] opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#f66d9d] opacity-5 rounded-full blur-3xl translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-20 w-72 h-72 bg-[#a18dda] opacity-10 rounded-full blur-3xl translate-y-1/3 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-[#250950]">
            {content.about.title}
          </h2>
          <p className="text-xl text-[#54428e]/80 max-w-3xl mx-auto font-medium">
            {content.about.subtitle}
          </p>
          <div className="w-24 h-2 bg-gradient-to-r from-[#54428e] to-[#f66d9d] mx-auto mt-8 rounded-full" />
        </div>

        {/* Vision & Mission Section */}
        <div className="flex flex-col gap-12 mb-24">
          
          {/* Vision Card */}
          <div className="group relative bg-white/80 backdrop-blur-sm border border-[#54428e]/20 p-8 md:p-12 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-[#54428e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]" />
            
            <div className="relative flex flex-col md:flex-row md:items-center gap-6 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-[#54428e] to-[#250950] rounded-3xl flex items-center justify-center shrink-0 shadow-lg shadow-[#54428e]/30 group-hover:scale-110 transition-transform duration-500">
                <FaEye className="text-3xl text-white" />
              </div>
              <div>
                <span className="text-[#f66d9d] font-bold tracking-wider text-sm uppercase mb-2 block">Our Ambition</span>
                <h3 className="text-3xl md:text-4xl font-black text-[#250950]">
                  {content.about.vision.title}
                </h3>
              </div>
            </div>
            <p className="text-lg md:text-xl leading-relaxed text-[#54428e] pl-0 md:pl-26">
              {content.about.vision.description}
            </p>
          </div>

          {/* Mission Card */}
          <div className="group relative bg-white/80 backdrop-blur-sm border border-[#f66d9d]/20 p-8 md:p-12 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 w-full">
             <div className="absolute inset-0 bg-gradient-to-r from-[#f66d9d]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]" />

            <div className="relative flex flex-col md:flex-row md:items-center gap-6 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-[#f66d9d] to-[#d9467a] rounded-3xl flex items-center justify-center shrink-0 shadow-lg shadow-[#f66d9d]/30 group-hover:scale-110 transition-transform duration-500">
                <FaFlag className="text-3xl text-white" />
              </div>
              <div>
                <span className="text-[#54428e] font-bold tracking-wider text-sm uppercase mb-2 block">Our Action</span>
                <h3 className="text-3xl md:text-4xl font-black text-[#250950]">
                  {content.about.mission.title}
                </h3>
              </div>
            </div>
            
            <div className="pl-0 md:pl-26">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {content.about.mission.items.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3 bg-[#F5F5F5] p-4 rounded-2xl hover:bg-[#fff0f5] transition-colors duration-300">
                    <FaCheckCircle className="text-xl shrink-0 mt-1 text-[#f66d9d]" />
                    <span className="text-lg leading-relaxed text-[#54428e] font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-28 w-full">
          {content.about.values.map((value: AboutValue, index: number) => {
            const IconComponent = iconMap[value.type];
            return (
              <div key={index} className="relative bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 group overflow-hidden w-full">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br from-[#f66d9d] to-[#54428e] opacity-10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-[#F5F5F5] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#250950] transition-colors duration-300">
                    <IconComponent className="text-3xl text-[#f66d9d] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-black mb-3 text-[#250950] group-hover:text-[#f66d9d] transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-[#54428e] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- CEO PROFILE SECTION --- */}
        <div className="mt-20 w-full">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-black text-[#250950] mb-4">
              Leadership
            </h3>
            <p className="text-lg text-[#54428e]/70">
              Guiding our vision and strategy
            </p>
          </div>
          
          <div className="w-full flex justify-center">
             <OrganizationalChart />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;