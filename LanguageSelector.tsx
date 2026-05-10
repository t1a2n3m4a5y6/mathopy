import { useTranslation } from 'react-i18next';
import { languages } from '../languages';
import { Globe, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 p-3 border-[var(--bd-width)] border-[var(--line)] hand-drawn-border hover:bg-[var(--line)] hover:text-[var(--bg)] transition-colors min-w-[140px]"
      >
        <Globe size={20} className="text-accent" />
        <span className="font-bold uppercase tracking-wider text-sm truncate max-w-[80px]">
          {currentLanguage.code}
        </span>
        <ChevronDown size={16} className={cn("transition-transform duration-300", isOpen && "rotate-180")} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute right-0 mt-4 w-64 max-h-[400px] overflow-y-auto bg-[var(--panel-bg)] border-[var(--bd-width)] border-[var(--line)] shadow-[var(--shadow)] z-[100] hand-drawn-border custom-scrollbar"
          >
            <div className="p-2 grid grid-cols-1 divide-y divide-[var(--line)]">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => selectLanguage(lang.code)}
                  className={cn(
                    "flex flex-col items-start p-4 hover:bg-[var(--line)] hover:text-[var(--bg)] transition-colors text-left",
                    i18n.language === lang.code && "bg-accent/10 border-l-4 border-accent"
                  )}
                >
                  <span className="font-black text-sm uppercase">{lang.name}</span>
                  <span className="text-xs opacity-60 font-medium italic">{lang.nativeName}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 10px; }
      `}} />
    </div>
  );
}
