import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

interface ContactInfo {
  type: 'address' | 'email' | 'phone' | 'hours';
  title: string;
  value: string;
}

const WhatsAppFloat = () => {
  const { content } = useLanguage();

  const handleWhatsAppClick = () => {
    // Get phone number from contact info
    const phoneInfo = content.contact.info.find((item: ContactInfo) => item.type === 'phone');
    // Remove any non-numeric characters from phone number
    const phoneNumber = phoneInfo?.value.replace(/\D/g, '') || '';
    
    // Create WhatsApp URL with a default greeting message
    const message = encodeURIComponent('Halo! Saya tertarik dengan layanan Eintio.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Open WhatsApp in a new window
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-2xl hover:shadow-[#25D366]/50 flex items-center justify-center transition-all duration-300 hover:scale-110 animate-bounce-slow group"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-3xl md:text-4xl" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat with us
      </span>
      
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></span>
    </button>
  );
};

export default WhatsAppFloat;
