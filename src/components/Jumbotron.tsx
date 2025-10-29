import { useLanguage } from "../context/LanguageContext";

const Jumbotron = () => {
  const { content } = useLanguage();
  return (
    <div id="home" className="w-full">
      <div className="relative w-full overflow-hidden h-[500px] md:h-[600px] lg:h-[700px]">
        <img src={content.jumbotron.header} className="w-full h-full object-cover" alt="header" />
        <div className="absolute inset-0 bg-linear-to-br from-[#013C58]/80 via-[#013C58]/70 to-[#F5A201]/40 flex items-center justify-center px-6">
          <div className="text-center max-w-5xl">
            <h1 className="text-5xl md:text-7xl lg:text-9xl text-white font-black mb-6 tracking-tight drop-shadow-lg">
              {content.jumbotron.title}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-white/95 font-light drop-shadow-md">
              {content.jumbotron.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jumbotron