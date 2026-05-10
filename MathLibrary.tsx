import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, Book, Sparkles, Loader2, ArrowRight, Lightbulb } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { generateAcademyContent } from '../services/ai';

const CATEGORIES = [
  { id: 'numbers', icon: '1️⃣', color: 'bg-blue-crt' },
  { id: 'shapes', icon: '📐', color: 'bg-green-crt' },
  { id: 'operations', icon: '➕', color: 'bg-orange-crt' },
  { id: 'patterns', icon: '🌀', color: 'bg-purple-crt' },
  { id: 'logic', icon: '🧠', color: 'bg-yellow-crt' },
];

export default function MathLibrary() {
  const { t } = useTranslation();
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState<any>(null);

  const handleSearch = async (term: string) => {
    const searchTerm = term || query;
    if (!searchTerm.trim()) return;
    
    setIsLoading(true);
    try {
      const result = await generateAcademyContent(searchTerm);
      setContent(result);
    } catch (error) {
      console.error('Failed to fetch library content:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-10 max-w-6xl mx-auto space-y-12">
      <header className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="p-4 bg-purple-crt border-[var(--bd-width)] border-[var(--line)] shadow-[var(--shadow)] hand-drawn-border rotate-[-3deg]">
            <Book size={40} className="text-white" />
          </div>
          <div>
            <h1 className="text-6xl font-black rotate-[-1deg]">{t('library.header', 'Magic Academy')}</h1>
            <p className="text-2xl text-ink-muted">{t('library.sub_text', 'Explore the ancient scrolls of mathematical wisdom!')}</p>
          </div>
        </div>
      </header>

      <div className="relative group">
        <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
          <Search className="text-accent group-focus-within:rotate-12 transition-transform" size={28} />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch('')}
          placeholder={t('library.placeholder', 'What do you want to learn today? e.g., Fibonacci numbers...')}
          className="w-full pl-16 pr-8 py-8 text-2xl bg-[var(--panel-bg)] border-[var(--bd-width)] border-[var(--line)] hand-drawn-border focus:outline-none shadow-[var(--shadow)]"
        />
        <button
          onClick={() => handleSearch('')}
          disabled={isLoading}
          className="absolute right-6 top-1/2 -translate-y-1/2 px-8 py-3 bg-[var(--accent)] text-white text-xl font-black hand-drawn-border border-[var(--bd-width)] border-[var(--line)] shadow-[var(--shadow)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
        >
          {isLoading ? <Loader2 className="animate-spin" /> : <Sparkles />}
          {t('library.btn', 'Discover')}
        </button>
      </div>

      {!content && !isLoading && (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setQuery(t(`library.cat_${cat.id}`, cat.id));
                handleSearch(t(`library.cat_${cat.id}`, cat.id));
              }}
              className={cn(
                "p-8 border-[var(--bd-width)] border-[var(--line)] hand-drawn-border shadow-[var(--shadow)] transition-all hover:scale-110 flex flex-col items-center gap-4 text-center",
                cat.color
              )}
            >
              <span className="text-5xl">{cat.icon}</span>
              <span className="text-xl font-black text-white">{t(`library.cat_${cat.id}_label`, cat.id)}</span>
            </button>
          ))}
        </div>
      )}

      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-20 text-center space-y-6"
          >
            <div className="flex justify-center">
              <Loader2 className="animate-spin text-purple-crt" size={80} />
            </div>
            <p className="text-3xl font-black text-purple-crt italic animate-pulse">
              {t('library.loading', 'Reading the ancient scrolls...')}
            </p>
          </motion.div>
        ) : content ? (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <section className="md:col-span-2 space-y-10">
                <div className="p-10 bg-white border-[var(--bd-width)] border-[var(--line)] hand-drawn-border shadow-[var(--shadow)] space-y-6">
                  <h2 className="text-4xl font-black flex items-center gap-3">
                    <Sparkles className="text-yellow-crt" />
                    {content.title}
                  </h2>
                  <div className="text-2xl leading-relaxed space-y-4 whitespace-pre-wrap">
                    {content.explanation}
                  </div>
                </div>

                <div className="p-10 bg-blue-crt text-white border-[var(--bd-width)] border-[var(--line)] hand-drawn-border shadow-[var(--shadow)] rotate-[1deg] space-y-6">
                  <h3 className="text-3xl font-black flex items-center gap-3">
                    <Lightbulb className="text-yellow-300" />
                    {t('library.magic_fact', 'Magic Fact')}
                  </h3>
                  <p className="text-2xl italic">
                    {content.magicFact}
                  </p>
                </div>
              </section>

              <aside className="space-y-10">
                <div className="p-8 bg-green-crt text-white border-[var(--bd-width)] border-[var(--line)] hand-drawn-border shadow-[var(--shadow)] rotate-[-2deg] space-y-6">
                  <h3 className="text-2xl font-black">{t('library.visualization', 'Imagine This')}</h3>
                  <p className="text-xl leading-relaxed">
                    {content.visualAnalogy}
                  </p>
                </div>

                <div className="p-8 bg-[var(--panel-bg)] border-[var(--bd-width)] border-[var(--line)] hand-drawn-border shadow-[var(--shadow)] space-y-6">
                  <h3 className="text-2xl font-black">{t('library.related', 'Related Secrets')}</h3>
                  <div className="flex flex-wrap gap-3">
                    {content.relatedTopics?.map((topic: string, i: number) => (
                      <button
                        key={i}
                        onClick={() => {
                          setQuery(topic);
                          handleSearch(topic);
                        }}
                        className="px-4 py-2 bg-white border-[var(--bd-width)] border-[var(--line)] hand-drawn-border text-lg font-black hover:bg-accent hover:text-white transition-all flex items-center gap-2"
                      >
                        {topic}
                        <ArrowRight size={16} />
                      </button>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
