import { useLanguage } from "../context/LanguageContext";
import { 
  FaGraduationCap, 
  FaGlobe, 
  FaGamepad, 
  FaMobileAlt, 
  FaCheckCircle, 
  FaClock, 
  FaCode,
  FaPaintBrush // 1. Tambah icon baru untuk Desain
} from 'react-icons/fa';
import type { IconType } from "react-icons";

interface TechDivision {
  // 2. Update Interface: Tambahkan 'design'
  id: 'web' | 'game' | 'app' | 'design';
  title: string;
  description: string; 
  items: string[];
}

// 3. Update Icon Map
const techIconMap: { [key in TechDivision['id']]: IconType } = {
  'web': FaGlobe,
  'game': FaGamepad,
  'app': FaMobileAlt,
  'design': FaPaintBrush 
};

const Services = () => {
  const { content } = useLanguage();
  
  const renderListItems = (items: string[]) => (
    <ul className="space-y-4">
      {items.map((item: string, index: number) => {
        const isInProgress = item.toLowerCase().includes('progress') || item.toLowerCase().includes('soon');
        return (
          <li key={index} className="flex items-start gap-3 group/item">
            {isInProgress ? (
              <FaClock className="text-lg shrink-0 mt-1 text-[#FEFEFE]/40" />
            ) : (
              <FaCheckCircle className="text-lg shrink-0 mt-1 text-[#f66d9d] group-hover/item:text-[#FEFEFE] transition-colors" />
            )}
            <span className={`text-base leading-relaxed font-medium ${
              isInProgress ? 'text-[#FEFEFE]/40 italic' : 'text-[#FEFEFE]/80 group-hover/item:text-[#FEFEFE]'
            }`}>
              {item} {isInProgress && <span className="text-[10px] ml-2 px-2 py-0.5 border border-[#FEFEFE]/20 rounded-full">Soon</span>}
            </span>
          </li>
        );
      })}
    </ul>
  );

  return (
    <section id="services" className="w-full px-6 py-24 md:py-32 bg-[#250950] text-[#FEFEFE] overflow-hidden relative">
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-96 h-96 bg-[#f66d9d]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[5%] w-96 h-96 bg-[#54428e]/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FEFEFE] to-[#f66d9d]">
            {content.services.title}
          </h2>
          <p className="text-xl text-[#FEFEFE]/80 max-w-3xl mx-auto leading-relaxed">
            {content.services.subtitle}
          </p>
        </div>

        {/* --- SECTION 1: ACADEMIC --- */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8 px-2">
            <div className="p-3 bg-[#FEFEFE]/10 rounded-xl">
              <FaGraduationCap className="text-3xl text-[#f66d9d]" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-[#FEFEFE]">
              {content.services.academic.title}
            </h3>
          </div>

          <div className="bg-[#FEFEFE]/5 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 border border-[#FEFEFE]/10 hover:border-[#f66d9d]/30 transition-all duration-500 shadow-2xl relative overflow-hidden group">
            <FaGraduationCap className="absolute -right-10 -bottom-10 text-[200px] text-[#FEFEFE]/5 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <div>
                <p className="text-xl text-[#FEFEFE]/90 mb-6 leading-relaxed">
                  {content.services.academic.description}
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f66d9d]/20 border border-[#f66d9d]/30 text-[#f66d9d]">
                  <FaClock className="text-sm" />
                  <span className="text-sm font-bold">Available for Students</span>
                </div>
              </div>
              <div className="bg-[#250950]/50 rounded-2xl p-6 border border-[#FEFEFE]/5">
                {renderListItems(content.services.academic.items)}
              </div>
            </div>
          </div>
        </div>

        {/* --- SECTION 2: TECHNOLOGY --- */}
        <div>
          <div className="flex items-center gap-4 mb-12 px-2">
             <div className="p-3 bg-[#FEFEFE]/10 rounded-xl">
              <FaCode className="text-3xl text-[#f66d9d]" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-[#FEFEFE]">
              {content.services.technology.title}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {content.services.technology.divisions.map((div: TechDivision, index: number) => {
              const IconComponent = techIconMap[div.id];
              
              return (
                <div 
                  key={index} 
                  className="group bg-[#FEFEFE]/5 backdrop-blur-md rounded-[2rem] p-8 border border-[#FEFEFE]/10 hover:bg-[#FEFEFE]/10 hover:border-[#f66d9d]/50 transition-all duration-300 hover:-translate-y-2 flex flex-col"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#f66d9d] to-[#54428e] rounded-2xl flex items-center justify-center shrink-0 shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="text-3xl text-[#FEFEFE]" />
                  </div>
                  
                  <h4 className="text-2xl font-bold text-[#FEFEFE] mb-3">
                    {div.title}
                  </h4>
                  <p className="text-[#FEFEFE]/60 text-sm mb-6 min-h-[40px]">
                    {div.description}
                  </p>
                  
                  <div className="pt-6 border-t border-[#FEFEFE]/10 mt-auto">
                    {renderListItems(div.items)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;