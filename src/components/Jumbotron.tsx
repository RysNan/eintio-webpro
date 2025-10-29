import { useLanguage } from "../context/LanguageContext";
import { FaChevronDown } from 'react-icons/fa';

const Jumbotron = () => {
  const { content } = useLanguage();
  
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('company');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="home" className="w-full">
      <div className="relative w-full overflow-hidden h-screen min-h-[600px]">
        <img src={content.jumbotron.header} className="w-full h-full object-cover" alt="header" />
        <div className="absolute inset-0 bg-linear-to-br from-[#013C58]/80 via-[#013C58]/70 to-[#F5A201]/40 flex flex-col items-center justify-center px-6">
          <div className="text-center max-w-5xl flex-1 flex flex-col items-center justify-center">
            <h1 className="text-5xl md:text-7xl lg:text-9xl text-white font-black mb-6 tracking-tight drop-shadow-lg">
              {content.jumbotron.title}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-white/95 font-light drop-shadow-md mb-6">
              {content.jumbotron.description}
            </p>
            <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-3xl leading-relaxed drop-shadow-md">
              {content.jumbotron.brief}
            </p>
          </div>
          
          {/* Scroll Down Button */}
          <button
            onClick={scrollToNextSection}
            className="mb-8 flex flex-col items-center gap-2 text-white/80 hover:text-white transition-all duration-300 group animate-bounce"
            aria-label="Scroll to next section"
          >
            <span className="text-sm md:text-base font-semibold">Scroll Down</span>
            <div className="w-10 h-10 border-2 border-white/50 rounded-full flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all duration-300">
              <FaChevronDown className="text-xl" />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Jumbotron