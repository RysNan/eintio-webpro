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
        <div className="absolute inset-0 bg-[#132648]/80 flex flex-col items-center justify-center px-6">
          <div className="text-center max-w-5xl flex-1 flex flex-col items-center justify-center">
            <h1 className="text-6xl md:text-8xl lg:text-9xl text-[#FEFEFE] font-black mb-6 tracking-tight drop-shadow-lg">
              {content.jumbotron.title}
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl text-[#FEFEFE]/95 font-light drop-shadow-md mb-6">
              {content.jumbotron.description}
            </p>
            <p className="text-lg md:text-xl lg:text-2xl text-[#FEFEFE]/90 max-w-3xl leading-relaxed drop-shadow-md">
              {content.jumbotron.brief}
            </p>
          </div>
          
          <button
            onClick={scrollToNextSection}
            className="mb-8 flex flex-col items-center gap-2 text-[#FEFEFE]/80 hover:text-[#FEFEFE] transition-all duration-300 group animate-bounce"
            aria-label="Scroll to next section"
          >
            <span className="text-base md:text-lg font-semibold">Scroll Down</span>
            <div className="w-10 h-10 border-2 border-[#FEFEFE]/50 rounded-full flex items-center justify-center group-hover:border-[#FEFEFE] group-hover:bg-[#FEFEFE]/10 transition-all duration-300">
              <FaChevronDown className="text-xl" />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Jumbotron;