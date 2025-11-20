import { useLanguage } from "../context/LanguageContext";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock, FaWhatsapp } from 'react-icons/fa';
import type { IconType } from "react-icons";

interface ContactInfo {
  type: 'address' | 'email' | 'phone' | 'hours';
  title: string;
  value: string;
}

const iconMap: { [key in ContactInfo['type']]: IconType } = {
  'address': FaMapMarkerAlt,
  'email': FaEnvelope,
  'phone': FaPhoneAlt,
  'hours': FaClock
};

const Contact = () => {
  const { content } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const phoneInfo = content.contact.info.find((item: ContactInfo) => item.type === 'phone');
    const phoneNumber = phoneInfo?.value.replace(/\D/g, '') || '';
    
    const message = `*Halo! Saya ingin bertanya*\n\n` +
                   `*Nama:* ${formData.name}\n` +
                   `*Email:* ${formData.email}\n\n` +
                   `*Pesan:*\n${formData.message}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="w-full px-6 py-20 md:py-28 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-5 text-[#250950]">
            {content.contact.title}
          </h2>
          <p className="text-lg md:text-xl text-[#54428e]/70 max-w-2xl mx-auto">
            {content.contact.subtitle}
          </p>
        </div>

        {/* Card Container with balanced padding */}
        <div className="bg-[#FEFEFE] rounded-[2.5rem] shadow-xl p-8 md:p-12 overflow-hidden">
          {/* Restored the 3:2 grid split for better use of space */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            
            {/* Form Section (Takes 3 columns) */}
            <div className="lg:col-span-3 space-y-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={content.contact.form.name}
                    // Comfortable padding
                    className="w-full px-6 py-4 border-2 border-[#54428e]/20 rounded-2xl focus:outline-none focus:border-[#f66d9d] transition-colors text-lg bg-white"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={content.contact.form.email}
                    className="w-full px-6 py-4 border-2 border-[#54428e]/20 rounded-2xl focus:outline-none focus:border-[#f66d9d] transition-colors text-lg bg-white"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={content.contact.form.message}
                    rows={5}
                    className="w-full px-6 py-4 border-2 border-[#54428e]/20 rounded-2xl focus:outline-none focus:border-[#f66d9d] transition-colors resize-none text-lg bg-white"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#f66d9d] hover:bg-[#54428e] text-[#FEFEFE] font-bold py-4 px-8 rounded-2xl transition-all duration-300 text-lg shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                >
                  <FaWhatsapp className="text-2xl" />
                  {content.contact.form.submit}
                </button>
              </form>
            </div>

            {/* Info Section (Takes 2 columns) */}
            <div className="lg:col-span-2 space-y-8 flex flex-col justify-center lg:pl-8 lg:border-l lg:border-[#54428e]/10">
              {content.contact.info.map((item: ContactInfo, index: number) => {
                const IconComponent = iconMap[item.type];
                return (
                  <div key={index} className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-[#f66d9d]/10 rounded-xl flex items-center justify-center shrink-0">
                      <IconComponent className="text-xl text-[#f66d9d]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#250950] mb-1 text-lg">{item.title}</h3>
                      <p className="text-[#54428e]/80 text-lg leading-relaxed">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;