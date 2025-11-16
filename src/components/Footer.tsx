import { useLanguage } from "../context/LanguageContext";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
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

const Footer = () => {
  const { content } = useLanguage();
  return (
    <footer className="w-full bg-[#250950] text-[#FEFEFE] px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <img src={content.navbar.logo} alt="logo" className="h-10 mb-4 brightness-0 invert" />
            <p className="text-[#FEFEFE]/70 text-lg leading-relaxed">{content.footer.description}</p>
          </div>
          <div>
            <h3 className="font-bold text-2xl mb-4">{content.footer.quickLinks.title}</h3>
            <ul className="space-y-2">
              {content.footer.quickLinks.links.map((link: string, index: number) => (
                <li key={index}>
                  <a href="#" className="text-[#FEFEFE]/70 hover:text-[#f66d9d] transition-colors text-lg">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-2xl mb-4">{content.footer.services.title}</h3>
            <ul className="space-y-2">
              {content.footer.services.items.map((service: string, index: number) => (
                <li key={index}>
                  <a href="#" className="text-[#FEFEFE]/70 hover:text-[#f66d9d] transition-colors text-lg">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-2xl mb-4">{content.footer.social.title}</h3>
            <div className="flex gap-4">
              {content.footer.social.links.map((social: SocialLink, index: number) => {
                const IconComponent = socialIconMap[social.type];
                return (
                  <a
                    key={index}
                    href={social.url}
                    className="w-12 h-12 bg-[#FEFEFE]/10 hover:bg-[#f66d9d] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <IconComponent className="text-xl" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="border-t border-[#FEFEFE]/10 pt-6 text-center">
          <p className="text-[#FEFEFE]/70 text-lg">{content.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;