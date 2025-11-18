import { useLanguage } from "../context/LanguageContext";
import { FaGraduationCap, FaLaptopCode, FaCheckCircle, FaClock } from 'react-icons/fa';
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
    <section id="services" className="w-full px-6 py-24 md:py-32 bg-[#250950] text-[#FEFEFE] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FEFEFE] to-[#f66d9d]">
            {content.services.title}
          </h2>
          <p className="text-xl text-[#FEFEFE]/80 max-w-3xl mx-auto leading-relaxed">
            {content.services.subtitle}
          </p>
        </div>
        
        {/* Services Container */}
        {/* 1. Menggunakan items-start untuk layout bertangga */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Dekorasi Latar Belakang (Glow & Connector) */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-full z-0 pointer-events-none">
             {/* Garis diagonal penghubung */}
             <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-[#f66d9d]/30 to-transparent transform -rotate-45"></div>
             {/* Glow effect di tengah */}
             <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#54428e]/20 rounded-full blur-3xl"></div>
          </div>

          {content.services.categories.map((category: ServiceCategory, index: number) => {
            const IconComponent = iconMap[category.type];
            // Logic untuk menentukan kartu mana yang turun (index ganjil/kedua)
            const isSecondCard = index === 1; 

            return (
              <div 
                key={index} 
                // 2. Menambahkan lg:mt-24 pada kartu kedua
                className={`relative z-10 group ${isSecondCard ? 'lg:mt-24' : ''}`}
              >
                <div className="bg-[#FEFEFE]/5 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 border border-[#FEFEFE]/10 hover:border-[#f66d9d]/50 transition-all duration-500 hover:shadow-[0_0_50px_-12px_rgba(246,109,157,0.25)]">
                  
                  {/* Category Header */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#f66d9d] to-[#54428e] rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="text-4xl text-[#FEFEFE]" />
                    </div>
                    <div>
                       <h3 className="text-3xl md:text-4xl font-black text-[#FEFEFE] mb-2">
                        {category.title}
                      </h3>
                      <div className="h-1 w-12 bg-[#f66d9d] rounded-full group-hover:w-full transition-all duration-500"></div>
                    </div>
                  </div>
                  
                  {/* Services List */}
                  <ul className="space-y-5">
                    {category.items.map((item: string, itemIndex: number) => {
                      const isInProgress = item.includes('Progress') || item.includes('Pengembangan') || item.includes('Upcoming');
                      
                      return (
                        <li 
                          key={itemIndex} 
                          className="relative pl-4 group/item"
                        >
                           {/* Garis vertikal kecil di kiri list item */}
                          <div className={`absolute left-0 top-2 bottom-2 w-1 rounded-full transition-colors duration-300 ${isInProgress ? 'bg-[#FEFEFE]/10' : 'bg-[#54428e] group-hover/item:bg-[#f66d9d]'}`}></div>
                          
                          <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-[#FEFEFE]/5 transition-colors duration-300">
                            {isInProgress ? (
                                <FaClock className="text-xl shrink-0 mt-1 text-[#FEFEFE]/40" />
                            ) : (
                                <FaCheckCircle className="text-xl shrink-0 mt-1 text-[#f66d9d] group-hover/item:text-[#FEFEFE] transition-colors" />
                            )}
                            
                            <span className={`text-lg leading-relaxed font-medium transition-colors ${
                              isInProgress 
                                ? 'text-[#FEFEFE]/40 italic' 
                                : 'text-[#FEFEFE]/90 group-hover/item:text-[#FEFEFE]'
                            }`}>
                              {item} {isInProgress && <span className="text-xs ml-2 px-2 py-0.5 border border-[#FEFEFE]/20 rounded-full">Soon</span>}
                            </span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;