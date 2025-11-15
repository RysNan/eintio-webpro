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
    <section id="contact" className="w-full px-6 py-24 md:py-32 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-[#250950]">
            {content.contact.title}
          </h2>
          <p className="text-xl text-[#54428e]/70 max-w-3xl mx-auto">
            {content.contact.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={content.contact.form.name}
                  className="w-full px-6 py-4 border-2 border-[#54428e]/20 rounded-2xl focus:outline-none focus:border-[#f66d9d] transition-colors text-lg bg-[#FEFEFE]"
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
                  className="w-full px-6 py-4 border-2 border-[#54428e]/20 rounded-2xl focus:outline-none focus:border-[#f66d9d] transition-colors text-lg bg-[#FEFEFE]"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={content.contact.form.message}
                  rows={6}
                  className="w-full px-6 py-4 border-2 border-[#54428e]/20 rounded-2xl focus:outline-none focus:border-[#f66d9d] transition-colors resize-none text-lg bg-[#FEFEFE]"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#f66d9d] hover:bg-[#54428e] text-[#FEFEFE] font-bold py-5 px-8 rounded-2xl transition-all duration-300 text-lg shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              >
                <FaWhatsapp className="text-2xl" />
                {content.contact.form.submit}
              </button>
            </form>
          </div>
          <div className="lg:col-span-2 space-y-6">
            {content.contact.info.map((item: ContactInfo, index: number) => {
              const IconComponent = iconMap[item.type];
              return (
                <div key={index} className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-[#f66d9d] rounded-2xl flex items-center justify-center shrink-0 shadow-md">
                    <IconComponent className="text-2xl text-[#FEFEFE]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#250950] mb-2 text-lg">{item.title}</h3>
                    <p className="text-[#54428e]/70 text-lg">{item.value}</p>
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

export default Contact;