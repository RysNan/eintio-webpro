import { createContext, useContext, useState, type ReactNode } from "react";
// @ts-ignore
import id from '../static/content.js';
// @ts-ignore
import en from '../static/content-en.js';


type Language = 'id' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    content: typeof id;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: {children : ReactNode }) => {
    const [language, setLanguage] = useState<Language>('en');

    const content = language === 'id' ? id : en;

    return (
        <LanguageContext.Provider value={{ language, setLanguage, content}}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error('useLanguage must be used within LanguageProvider');
    return context;
}

