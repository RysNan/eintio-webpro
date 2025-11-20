import { useLanguage } from "../context/LanguageContext";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaChevronRight } from 'react-icons/fa';
import type { IconType } from "react-icons";

interface SocialLink {
  type: 'facebook' | 'twitter' | 'instagram' | 'linkedin';
  url: string;
}

const socialIconMap: { [key in SocialLink['type']]: IconType } = {
  'facebook': FaFacebookF,
  'twitter': FaTwitter,
  'instagram': FaInstagram,
  'linkedin': FaLinkedinIn
};

// Mapping ID section agar Tautan Cepat berfungsi
const sectionIds = ['home', 'company', 'services', 'projects', 'contact'];

const Footer = () => {
  const { content } = useLanguage();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#250950] text-[#FEFEFE] pt-20 pb-10 border-t border-[#FEFEFE]/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Kolom 1: Logo & Deskripsi (Lebih Lebar: span-4) */}
          <div className="lg:col-span-4 space-y-6">
            <img src={content.navbar.logo} alt="Eintio Logo" className="h-12 w-auto" />
            <p className="text-[#FEFEFE]/70 text-lg leading-relaxed max-w-sm">
              {content.footer.description}
            </p>
          </div>

          {/* Kolom 2: Tautan Cepat (span-3) */}
          <div className="lg:col-span-3">
            <h3 className="font-bold text-xl mb-6 text-[#f66d9d] tracking-wide uppercase text-sm">
              {content.footer.quickLinks.title}
            </h3>
            <ul className="space-y-4">
              {content.footer.quickLinks.links.map((link: string, index: number) => (
                <li key={index}>
                  <a 
                    href={`#${sectionIds[index]}`}
                    onClick={(e) => scrollToSection(e, sectionIds[index])}
                    className="group flex items-center gap-2 text-[#FEFEFE]/70 hover:text-[#FEFEFE] transition-colors text-base"
                  >
                    <FaChevronRight className="text-xs text-[#f66d9d] opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Layanan/Divisi (span-3) - UPDATE: Sesuai Divisi Baru */}
          <div className="lg:col-span-3">
            <h3 className="font-bold text-xl mb-6 text-[#f66d9d] tracking-wide uppercase text-sm">
              {content.footer.services.title}
            </h3>
            <ul className="space-y-4">
              {content.footer.services.items.map((service: string, index: number) => (
                <li key={index}>
                  <a 
                    href="#services" // Mengarahkan ke section services
                    onClick={(e) => scrollToSection(e, 'services')}
                    className="block text-[#FEFEFE]/70 hover:text-[#FEFEFE] transition-colors text-base hover:translate-x-1 duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 4: Sosial Media (span-2) */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-xl mb-6 text-[#f66d9d] tracking-wide uppercase text-sm">
              {content.footer.social.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {content.footer.social.links.map((social: SocialLink, index: number) => {
                const IconComponent = socialIconMap[social.type];
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#FEFEFE]/5 border border-[#FEFEFE]/10 hover:bg-[#f66d9d] hover:border-[#f66d9d] rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <IconComponent className="text-lg text-[#FEFEFE]/70 group-hover:text-white" />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="border-t border-[#FEFEFE]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#FEFEFE]/50 text-sm text-center md:text-left">
            {content.footer.copyright}
          </p>
          
          {/* Optional: Bottom Links */}
          <div className="flex gap-6 text-sm text-[#FEFEFE]/50">
            <span className="hover:text-[#FEFEFE] cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-[#FEFEFE] cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;