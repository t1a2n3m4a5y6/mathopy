import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Star, Trophy, ArrowRight, Loader2, PartyPopper, Brain, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { generateDailyBites } from '../services/ai';

export default function DailyChallenge() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [dailyData, setDailyData] = useState<any>(null);
  const [answer, setAnswer] = useState('');
  const [showFeedback, setShowFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [hasSolved, setHasSolved] = useState(() => {
    const lastSolved = localStorage.getItem('lastSolvedDate');
    const today = new Date().toDateString();
    return lastSolved === today;
  });

  useEffect(() => {
    const fetchDailyData = async () => {
      setIsLoading(true);
      try {
        // We could cache this in localStorage for the day
        const today = new Date().toDateString();
        const cached = localStorage.getItem('dailyContent');
        const cachedDate = localStorage.getItem('dailyContentDate');
        
        if (cached && cachedDate === today) {
          setDailyData(JSON.parse(cached));
        } else {
          const data = await generateDailyBites();
          setDailyData(data);
          localStorage.setItem('dailyContent', JSON.stringify(data));
          localStorage.setItem('dailyContentDate', today);
        }
      } catch (error) {
        console.error('Failed to fetch daily content:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDailyData();
  }, []);

  const checkAnswer = () => {
    if (!dailyData) return;
    
    const isCorrect = answer.trim().toLowerCase() === dailyData.answer.toLowerCase();
    setShowFeedback(isCorrect ? 'correct' : 'wrong');
    
    if (isCorrect) {
      setHasSolved(true);
      localStorage.setItem('lastSolvedDate', new Date().toDateString());
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-full space-y-8 p-10">
        <Loader2 className="animate-spin text-accent" size={80} />
        <h2 className="text-3xl font-black text-ink-muted animate-pulse">
          {t('daily.preparing', 'Gathering today\'s magic bits...')}
        </h2>
      </div>
    );
  }

  return (
    <div className="p-10 max-w-4xl mx-auto space-y-12">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-4 bg-orange-crt border-[var(--bd-width)] border-[var(--line)] shadow-[var(--shadow)] hand-drawn-border rotate-3">
            <Calendar size={40} className="text-white" />
          </div>
          <div>
            <h1 className="text-6xl font-black rotate-[-1deg]">{t('daily.header', 'Daily Bits')}</h1>
            <p className="text-2xl text-ink-muted">{new Date().toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-6 py-3 bg-yellow-crt border-[var(--bd-width)] border-[var(--line)] shadow-[var(--shadow)] hand-drawn-border rotate-2">
          <Trophy size={24} className="text-white" />
          <span className="text-2xl font-black text-white">XP: 250</span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Fact of the Day */}
        <section className="p-10 bg-blue-crt text-white border-[var(--bd-width)] border-[var(--line)] hand-drawn-border shadow-[var(--shadow)] rotate-[-1deg] flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Sparkles className="text-yellow-300" size={32} />
              <h2 className="text-3xl font-black">{t('daily.fact_title', 'Magic Fact')}</h2>
            </div>
            <p className="text-2xl italic leading-relaxed">
              "{dailyData?.fact}"
            </p>
          </div>
          <div className="mt-10 flex justify-end">
            <Star className="text-yellow-300 animate-bounce" size={40} />
          </div>
        </section>

        {/* Challenge of the Day */}
        <section className="p-10 bg-white border-[var(--bd-width)] border-[var(--line)] hand-drawn-border shadow-[var(--shadow)] rotate-[1deg] space-y-6">
          <div className="flex items-center gap-3">
            <Brain className="text-accent" size={32} />
            <h2 className="text-3xl font-black text-[var(--ink)]">{t('daily.challenge_title', 'Quest of the Day')}</h2>
          </div>
          <p className="text-2xl leading-relaxed text-[var(--ink)] font-bold">
            {dailyData?.challenge}
          </p>

          <AnimatePresence mode="wait">
            {!hasSolved ? (
              <motion.div
                key="input"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4 pt-4"
              >
                <input
                  type="text"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder={t('daily.answer_placeholder', 'Your answer...')}
                  className="w-full p-4 text-xl border-[var(--bd-width)] border-[var(--line)] hand-drawn-border focus:outline-none focus:ring-4 focus:ring-accent/20"
                />
                <button
                  onClick={checkAnswer}
                  className="w-full py-4 bg-green-crt text-white text-2xl font-black hand-drawn-border border-[var(--bd-width)] border-[var(--line)] shadow-[var(--shadow)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3"
                >
                  <Trophy size={24} />
                  {t('daily.btn_submit', 'Claim Victory!')}
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="solved"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="p-8 bg-green-crt text-white hand-drawn-border text-center space-y-4"
              >
                <PartyPopper size={60} className="mx-auto" />
                <h3 className="text-3xl font-black">{t('daily.solved_title', 'Master of Magic!')}</h3>
                <p className="text-xl">{t('daily.solved_sub', 'You\'ve mastered today\'s bit of wisdom.')}</p>
                <div className="flex items-center justify-center gap-2 pt-4">
                   <div className="px-4 py-2 bg-white/20 rounded-full font-black">
                     +250 XP
                   </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showFeedback === 'wrong' && (
              <motion.p
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="text-red-500 font-black text-center text-xl"
              >
                {t('daily.try_again', 'Not quite there! Try a different spell.')}
              </motion.p>
            )}
          </AnimatePresence>
        </section>
      </div>

      <div className="p-10 bg-purple-crt text-white border-[var(--bd-width)] border-[var(--line)] hand-drawn-border shadow-[var(--shadow)] flex flex-col md:flex-row items-center gap-8">
        <div className="text-8xl">🦉</div>
        <div className="space-y-4">
          <h2 className="text-3xl font-black">{t('daily.tip_title', 'Sage\'s Advice')}</h2>
          <p className="text-2xl leading-relaxed italic">
            "{t('daily.tip_text', 'Remember to always look for the shapes within the numbers. Every circle tells a story of infinity.')}"
          </p>
        </div>
      </div>
    </div>
  );
}
