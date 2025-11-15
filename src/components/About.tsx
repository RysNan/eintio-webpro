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
    <section id="company" className="w-full px-6 py-24 md:py-32 bg-[#FEFEFE]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-[#250950]">
            {content.about.title}
          </h2>
          <p className="text-xl text-[#54428e]/70 max-w-3xl mx-auto">
            {content.about.subtitle}
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Vision */}
          <div className="bg-[#FEFEFE] border-2 border-[#54428e] p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-[#54428e] rounded-2xl flex items-center justify-center shrink-0">
                <FaEye className="text-2xl text-[#FEFEFE]" />
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-[#250950]">
                {content.about.vision.title}
              </h3>
            </div>
            <p className="text-lg md:text-xl leading-relaxed text-[#54428e]">
              {content.about.vision.description}
            </p>
          </div>

          {/* Mission card */}
          <div className="bg-[#FEFEFE] border-2 border-[#f66d9d] p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-[#f66d9d] rounded-2xl flex items-center justify-center shrink-0">
                <FaFlag className="text-2xl text-[#FEFEFE]" />
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-[#250950]">
                {content.about.mission.title}
              </h3>
            </div>
            <ul className="space-y-3">
              {content.about.mission.items.map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="text-xl shrink-0 mt-0.5 text-[#f66d9d]" />
                  <span className="text-lg leading-relaxed text-[#54428e]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {content.about.values.map((value: AboutValue, index: number) => {
            const IconComponent = iconMap[value.type];
            return (
              <div key={index} className="bg-[#F5F5F5] p-10 rounded-3xl hover:bg-[#a18dda] group transition-all duration-300 cursor-pointer hover:shadow-xl hover:scale-105">
                <IconComponent className="text-6xl text-[#f66d9d] group-hover:text-[#FEFEFE] mb-6 transition-colors" />
                <h3 className="text-2xl font-bold mb-4 text-[#250950] group-hover:text-[#FEFEFE] transition-colors">{value.title}</h3>
                <p className="text-[#54428e] group-hover:text-[#FEFEFE]/90 text-lg leading-relaxed transition-colors">{value.description}</p>
              </div>
            );
          })}
        </div>

        {/* Organizational Structure */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-black text-[#250950] mb-4">
              {content.about.organizationTitle || 'Organizational Structure'}
            </h3>
            <p className="text-lg text-[#54428e]/70">
              {content.about.organizationSubtitle || 'Our team structure and leadership'}
            </p>
          </div>
          <div className="bg-linear-to-br from-[#F5F5F5] to-[#ffbeef] rounded-3xl p-4 md:p-8">
            <OrganizationalChart />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;