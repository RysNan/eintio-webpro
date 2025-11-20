import { useLanguage } from '../context/LanguageContext';
import { FaQuoteLeft } from 'react-icons/fa';

const OrganizationalChart = () => {
  const { content } = useLanguage();
  const ceoData = content.about.organization.director;

  return (
    <div className="w-full">
      <div className="group relative bg-white/80 backdrop-blur-sm border border-[#54428e]/20 p-8 md:p-12 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 w-full">
    
        <div className="absolute inset-0 bg-gradient-to-r from-[#54428e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]" />

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-16">
          
          {/* --- Bagian Foto --- */}
          <div className="relative shrink-0">
            {/* Container Foto Lingkaran */}
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full p-2 border-2 border-[#f66d9d] bg-white shadow-lg group-hover:scale-105 transition-transform duration-500">
              <img 
                src="/ceo.svg" 
                alt={ceoData.name}
                className="w-full h-full object-cover rounded-full bg-gray-50"
              />
            </div>
            
            {/* Badge CEO */}
            <div className="absolute bottom-4 right-0 md:right-4 bg-[#250950] text-white text-sm font-bold px-5 py-2 rounded-full border-4 border-white shadow-md transform rotate-[-5deg] group-hover:rotate-0 transition-transform duration-300">
              CEO
            </div>
          </div>

          {/* --- Bagian Teks --- */}
          <div className="text-center md:text-left flex-1">
            <div className="mb-8 border-b border-[#54428e]/10 pb-6">
              <h3 className="text-4xl md:text-5xl font-black text-[#250950] mb-2 tracking-tight">
                {ceoData.name}
              </h3>
              <p className="text-[#f66d9d] font-bold uppercase tracking-[0.2em] text-sm md:text-base">
                {ceoData.title}
              </p>
            </div>
            
            <div className="relative">
        
              <FaQuoteLeft className="text-5xl text-[#54428e]/10 absolute -top-8 -left-4 md:-left-10" />
          
              <p className="text-xl md:text-2xl text-[#54428e] leading-relaxed font-medium italic relative z-10">
                 "{ceoData.quote}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationalChart;