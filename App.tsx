/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Calculator, 
  BookOpen, 
  Palette, 
  Settings, 
  Menu, 
  X, 
  Sparkles,
  ChevronRight,
  BrainCircuit,
  Binary,
  Moon,
  Sun,
  Eye,
  EyeOff,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './lib/utils';
import MathSolver from './components/MathSolver';
import MathPractice from './components/MathPractice';
import MathVisualizer from './components/MathVisualizer';
import MathPractical from './components/MathPractical';
import MathCustomExperience from './components/MathCustomExperience';
import MathLibrary from './components/MathLibrary';
import DailyChallenge from './components/DailyChallenge';
import LanguageSelector from './components/LanguageSelector';
import LandingPage from './components/LandingPage';

type Section = 'solver' | 'practice' | 'visualizer' | 'practical' | 'custom' | 'library' | 'daily';
type Theme = 'light' | 'dark';
type AgeGroup = 'kids';

export default function App() {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState<Section>('solver');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('theme') as Theme) || 'light');
  const [ageGroup, setAgeGroup] = useState<AgeGroup | null>(null);
  const [eyeComfort, setEyeComfort] = useState(() => localStorage.getItem('eyeComfort') === 'true');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-eye-comfort', eyeComfort.toString());
    localStorage.setItem('eyeComfort', eyeComfort.toString());
  }, [eyeComfort]);

  useEffect(() => {
    if (ageGroup) {
      localStorage.setItem('ageGroup', ageGroup);
      document.body.className = `theme-${ageGroup}`;
    } else {
      document.body.className = 'theme-kids';
    }
  }, [ageGroup]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');
  const toggleEyeComfort = () => setEyeComfort(prev => !prev);

  const getThemeLabels = () => {
    return {
      title: 'Mathopy',
      backpack: t('kids.backpack', 'My Backpack'),
      solver: t('nav.magic_solver', 'Magic Solver'),
      quiz: t('nav.fun_quiz', 'Fun Quiz'),
      playground: t('nav.playground', 'Playground'),
      art: t('nav.art_maker', 'Art Maker'),
      lessons: t('nav.my_lessons', 'My Lessons'),
      library: t('nav.academy', 'Academy'),
      daily: t('nav.daily_bits', 'Daily Bits'),
      footer: t('footer.kids', 'Hand-drawn with love by Mathopy AI')
    };
  };

  const labels = getThemeLabels();

  const navItems = [
    { id: 'solver', label: labels.solver, icon: Calculator, color: 'text-blue-crt', bgColor: 'bg-blue-crt' },
    { id: 'practice', label: labels.quiz, icon: BrainCircuit, color: 'text-green-crt', bgColor: 'bg-green-crt' },
    { id: 'practical', label: labels.playground, icon: Binary, color: 'text-orange-crt', bgColor: 'bg-orange-crt' },
    { id: 'visualizer', label: labels.art, icon: Palette, color: 'text-purple-crt', bgColor: 'bg-purple-crt' },
    { id: 'library', label: labels.library, icon: BookOpen, color: 'text-blue-500', bgColor: 'bg-blue-500' },
    { id: 'daily', label: labels.daily, icon: Sparkles, color: 'text-orange-500', bgColor: 'bg-orange-500' },
    { id: 'custom', label: labels.lessons, icon: Settings, color: 'text-yellow-crt', bgColor: 'bg-yellow-crt' },
  ];

  if (!ageGroup) {
    return <LandingPage onSelectAge={(id) => setAgeGroup(id as any)} />;
  }

  return (
    <div className={cn(
      "flex flex-col min-h-screen theme-transition bg-[var(--bg)] text-[var(--ink)] selection:bg-[var(--accent)] selection:text-white",
      `theme-${ageGroup}`
    )}>
      {/* Header */}
      <header className="h-24 border-b-[var(--bd-width)] border-[var(--line)] flex items-center justify-between px-10 bg-[var(--bg)] z-30 shrink-0">
        <div className="flex gap-1 text-5xl font-black lowercase tracking-tighter">
          {ageGroup === 'kids' ? (
            <>
              <span className="text-blue-crt transform -rotate-6">M</span>
              <span className="text-green-crt transform rotate-12">a</span>
              <span className="text-yellow-crt transform -rotate-3">t</span>
              <span className="text-orange-crt transform rotate-6">h</span>
              <span className="text-purple-crt transform -rotate-12">o</span>
              <span className="text-accent transform rotate-3">p</span>
              <span className="text-blue-crt transform -rotate-6">y</span>
            </>
          ) : (
            <span className="text-[var(--ink)] font-black uppercase tracking-tighter">
              {labels.title}
            </span>
          )}
        </div>
        
        <nav className="hidden xl:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id as Section)}
              className={cn(
                "text-xl transition-all relative py-2 px-6 border-[var(--bd-width)] group font-black",
                "border-transparent hand-drawn-border",
                activeSection === item.id 
                  ? "border-[var(--line)] bg-[var(--panel-bg)] shadow-[var(--shadow)] scale-110" 
                  : "opacity-50 hover:opacity-100"
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>
        
        <div className="flex items-center gap-2">
              <LanguageSelector />
              <button 
                onClick={() => setAgeGroup(null)}
                className="p-3 border-[var(--bd-width)] border-[var(--line)] hand-drawn-border hover:bg-[var(--line)] hover:text-[var(--bg)] transition-colors"
                title={t('common.change_dimension')}
              >
                <Settings size={24} />
              </button>
              <button 
                onClick={toggleEyeComfort}
                className="p-3 border-[var(--bd-width)] border-[var(--line)] hand-drawn-border hover:bg-[var(--line)] hover:text-[var(--bg)] transition-colors"
                title={eyeComfort ? t('common.disable_eye_comfort') : t('common.enable_eye_comfort')}
              >
                {eyeComfort ? <EyeOff size={24} /> : <Eye size={24} />}
              </button>
              <button 
                onClick={toggleTheme}
                className="p-3 border-[var(--bd-width)] border-[var(--line)] hand-drawn-border hover:bg-[var(--line)] hover:text-[var(--bg)] transition-colors"
                title={theme === 'light' ? t('common.switch_power_mode') : t('common.restore_light')}
              >
                {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
              </button>
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className={cn(
              "p-3 border-[var(--bd-width)] border-[var(--line)] transition-colors ml-2",
              "hand-drawn-border hover:bg-[var(--line)] hover:text-[var(--bg)]"
            )}
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Navigation Sidebar */}
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.aside 
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 340, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              className="h-full bg-[var(--panel-bg)] border-r-[var(--bd-width)] border-[var(--line)] overflow-y-auto hidden lg:flex flex-col shrink-0"
            >
            <div className="p-10 space-y-12">
              <h2 className={cn("text-3xl text-ink-muted capitalize", ageGroup === 'kids' && "rotate-[-2deg]")}>{labels.backpack}</h2>
                <div className="space-y-4">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id as Section)}
                      className={cn(
                        "w-full flex items-center gap-5 p-5 transition-all text-left group",
                        "hand-drawn-border border-[var(--bd-width)]",
                        activeSection === item.id 
                          ? `bg-[var(--accent)] text-white border-[var(--line)] shadow-[var(--shadow)] scale-105` 
                          : "bg-transparent border-transparent hover:bg-white/5"
                      )}
                    >
                      <div className={cn(
                        "p-3 rounded-lg transition-colors",
                        activeSection === item.id ? "bg-white/20" : "bg-white/5"
                      )}>
                        <item.icon size={24} className={activeSection === item.id ? "text-white" : "text-accent"} />
                      </div>
                      <div>
                        <div className="text-xl font-black">{item.label}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="p-10 mt-auto space-y-8">
                <div className={cn(
                  "p-6 bg-[var(--accent)]/5 border-[var(--bd-width)] border-[var(--accent)]",
                  "hand-drawn-border",
                  ageGroup === 'kids' && "rotate-2"
                )}>
                  <p className="text-xl italic text-[var(--accent)]">
                    {t('kids.quote')}
                  </p>
                </div>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto relative bg-[var(--bg)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeSection}-${ageGroup}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="h-full"
            >
              {activeSection === 'solver' && <MathSolver />}
              {activeSection === 'practice' && <MathPractice />}
              {activeSection === 'visualizer' && <MathVisualizer />}
              {activeSection === 'practical' && <MathPractical />}
              {activeSection === 'library' && <MathLibrary />}
              {activeSection === 'daily' && <DailyChallenge />}
              {activeSection === 'custom' && <MathCustomExperience />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      <footer className="h-10 border-t-[var(--bd-width)] border-[var(--line)] flex items-center justify-center px-10 text-lg opacity-50 shrink-0">
        <div>{labels.footer}</div>
      </footer>
    </div>
  );
}
