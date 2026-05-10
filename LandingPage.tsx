import { motion } from 'motion/react';
import { useTranslation, Trans } from 'react-i18next';
import { Sparkles, BrainCircuit, Palette, Calculator, Star, Heart, Languages } from 'lucide-react';
import { cn } from '../lib/utils';
import LanguageSelector from './LanguageSelector';

interface LandingPageProps {
  onSelectAge: (age: 'kids') => void;
}

export default function LandingPage({ onSelectAge }: LandingPageProps) {
  const { t } = useTranslation();

  const features = [
    {
      icon: Calculator,
      title: t('landing.feat1_title', 'Magic Solver'),
      desc: t('landing.feat1_desc', 'Snap a photo or type a problem. Watch it get solved like magic!'),
      color: 'bg-blue-400'
    },
    {
      icon: Palette,
      title: t('landing.feat2_title', 'Art Maker'),
      desc: t('landing.feat2_desc', 'Turn your math formulas into beautiful, colorful masterpieces.'),
      color: 'bg-purple-400'
    },
    {
      icon: BrainCircuit,
      title: t('landing.feat3_title', 'Fun Quizzes'),
      desc: t('landing.feat3_desc', 'Test your brain with puzzles that feel like a video game.'),
      color: 'bg-green-400'
    }
  ];

  const testimonials = [
    { name: t('landing.test1_name', 'Teacher Sam'), text: t('landing.test1_text', 'Mathopy makes math feel like playtime! My students are obsessed.') },
    { name: t('landing.test2_name', 'Leo, Age 8'), text: t('landing.test2_text', 'I used to hate math, but now I love making art with numbers!') },
    { name: t('landing.test3_name', 'Dr. Jane'), text: t('landing.test3_text', 'The perfect balance between high-level analysis and playful learning.') }
  ];

  return (
    <div className="theme-kids min-h-screen bg-[var(--bg)] text-[var(--ink)] font-primary overflow-x-hidden">
      {/* Navbar */}
      <nav className="h-24 border-b-[var(--bd-width)] border-[var(--line)] flex items-center justify-between px-10 bg-[var(--bg)] sticky top-0 z-50">
        <div className="flex gap-1 text-5xl font-black lowercase tracking-tighter">
          <span className="text-blue-500 transform -rotate-6">M</span>
          <span className="text-green-500 transform rotate-12">a</span>
          <span className="text-yellow-500 transform -rotate-3">t</span>
          <span className="text-orange-500 transform rotate-6">h</span>
          <span className="text-purple-500 transform -rotate-12">o</span>
          <span className="text-accent transform rotate-3">p</span>
          <span className="text-blue-500 transform -rotate-6">y</span>
        </div>
        <div className="hidden md:flex gap-10 items-center">
          <a href="#features" className="text-2xl hover:text-accent transition-colors">{t('landing.features')}</a>
          <a href="#how" className="text-2xl hover:text-accent transition-colors">{t('landing.how_works')}</a>
          <div className="flex items-center gap-4">
            <LanguageSelector />
            <button 
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
              className="px-8 py-3 bg-accent text-white hand-drawn-border border-[var(--bd-width)] border-[var(--line)] shadow-[var(--shadow)] hover:scale-105 transition-all text-2xl"
            >
              {t('landing.play_now')}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 px-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-8xl md:text-9xl font-black leading-none mb-10 transform -rotate-1">
              <Trans i18nKey="landing.hero_title">
                Math is <span className="text-accent inline-block animate-bounce">Magic!</span>
              </Trans>
            </h1>
            <p className="text-3xl md:text-4xl leading-relaxed mb-12 text-ink-muted">
              {t('landing.hero_subtitle')}
            </p>
            <div className="flex flex-wrap gap-8">
              <button 
                onClick={() => onSelectAge('kids')}
                className="px-12 py-6 bg-yellow-400 text-black text-4xl hand-drawn-border border-[var(--bd-width)] border-[var(--line)] shadow-[var(--shadow)] hover:rotate-2 transition-all flex items-center gap-4"
              >
                {t('landing.start_magic')} <Sparkles />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-[var(--panel-bg)] p-12 hand-drawn-border border-[var(--bd-width)] border-[var(--line)] shadow-[var(--shadow)] relative z-10 rotate-3">
              <div className="grid grid-cols-2 gap-6">
                <div className="h-40 bg-blue-100 rounded-full flex items-center justify-center text-7xl transform -rotate-12">π</div>
                <div className="h-40 bg-pink-100 rounded-full flex items-center justify-center text-7xl transform rotate-12">Σ</div>
                <div className="h-40 bg-green-100 rounded-full flex items-center justify-center text-7xl transform rotate-6">√</div>
                <div className="h-40 bg-orange-100 rounded-full flex items-center justify-center text-7xl transform -rotate-6">∞</div>
              </div>
              <div className="mt-8 text-center text-3xl font-black text-accent uppercase tracking-widest">
                {t('landing.unlock_brain')}
              </div>
            </div>
            {/* Floating elements */}
            <Star className="absolute -top-10 -right-10 text-yellow-400 fill-yellow-400 w-24 h-24 animate-pulse" />
            <Heart className="absolute -bottom-10 -left-10 text-accent fill-accent w-24 h-24 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-10 bg-white/50 border-y-[var(--bd-width)] border-[var(--line)]">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-7xl font-black mb-6">{t('landing.cool_superpowers')}</h2>
          <p className="text-3xl text-ink-muted italic">{t('landing.superpowers_sub')}</p>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[var(--panel-bg)] p-10 hand-drawn-border border-[var(--bd-width)] border-[var(--line)] shadow-[var(--shadow)] flex flex-col items-center text-center hover:scale-105 transition-all"
            >
              <div className={cn("w-24 h-24 rounded-full flex items-center justify-center mb-8 border-[var(--bd-width)] border-[var(--line)]", f.color)}>
                <f.icon size={48} className="text-white" />
              </div>
              <h3 className="text-4xl font-black mb-4">{f.title}</h3>
              <p className="text-2xl text-ink-muted leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section id="how" className="py-24 px-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-7xl font-black text-center mb-20">{t('landing.how_to_play')}</h2>
          <div className="space-y-16">
            {[
              { step: '01', title: t('landing.step1_title'), desc: t('landing.step1_desc') },
              { step: '02', title: t('landing.step2_title'), desc: t('landing.step2_desc') },
              { step: '03', title: t('landing.step3_title'), desc: t('landing.step3_desc') }
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={cn(
                  "flex flex-col md:flex-row gap-10 items-center",
                  i % 2 !== 0 && "md:flex-row-reverse"
                )}
              >
                <div className="text-9xl font-black text-accent/20 select-none">{s.step}</div>
                <div className="flex-1 bg-[var(--panel-bg)] p-10 hand-drawn-border border-[var(--bd-width)] border-[var(--line)] shadow-[var(--shadow)]">
                  <h3 className="text-4xl font-black mb-4">{s.title}</h3>
                  <p className="text-2xl text-ink-muted">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-10 bg-blue-100/30">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 bg-white hand-drawn-border border-[var(--bd-width)] border-[var(--line)] rotate-[-1deg] hover:rotate-1 transition-all">
              <p className="text-2xl italic mb-6">"{t.text}"</p>
              <div className="text-3xl font-black text-accent">— {t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-10 text-center relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <h2 className="text-8xl font-black mb-12">{t('landing.ready_start')}</h2>
          <div className="grid max-w-2xl mx-auto">
             <button
              onClick={() => onSelectAge('kids')}
              className="group p-12 bg-yellow-400 hand-drawn-border border-[var(--bd-width)] border-[var(--line)] shadow-[var(--shadow)] hover:scale-110 transition-all flex flex-col items-center gap-6"
            >
              <Sparkles className="w-24 h-24 group-hover:rotate-45 transition-transform" />
              <div className="text-5xl font-black uppercase">{t('landing.play_kids')}</div>
            </button>
          </div>
        </motion.div>
        
        {/* Background blobs */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-50 select-none animate-pulse" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-50 select-none animate-pulse" />
      </section>

      <footer className="py-20 border-t-[var(--bd-width)] border-[var(--line)] text-center text-3xl font-black opacity-30">
        {t('landing.copyright')}
      </footer>
    </div>
  );
}

