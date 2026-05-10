import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Loader2, BrainCircuit, ChevronRight, CheckCircle2, XCircle, Info } from 'lucide-react';
import { generatePracticeQuestions } from '../services/ai';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export default function MathPractice() {
  const { t } = useTranslation();
  const [topic, setTopic] = useState('');
  const [difficulty, setDifficulty] = useState('Intermediate');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const isKids = localStorage.getItem('ageGroup') === 'kids';
  const isAdult = localStorage.getItem('ageGroup') === 'adult';
  const isTeen = localStorage.getItem('ageGroup') === 'teen';

  const labels = {
    header: t('practice.header_kids'),
    subHeader: t('practice.sub_kids'),
    badge: t('practice.badge_kids'),
    inputLabel: t('practice.input_label_kids'),
    inputPlaceholder: t('practice.placeholder_kids'),
    difficultyLabel: t('practice.difficulty_kids'),
    button: t('practice.btn_kids'),
    loading: t('practice.loading_kids'),
    congrats: t('practice.congrats_kids'),
    scoreText: t('practice.score_kids', { score: score, total: questions.length }),
    playAgain: t('practice.again_kids')
  };

  const startQuiz = async () => {
    if (!topic.trim()) return;
    setLoading(true);
    setQuestions([]);
    setCurrentIdx(0);
    setScore(0);
    setIsAnswered(false);
    setSelectedOption(null);
    try {
      const data = await generatePracticeQuestions(topic, difficulty);
      setQuestions(data.questions);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleOptionSelect = (option: string) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);
    if (option === questions[currentIdx].answer) {
      setScore(s => s + 1);
    }
  };

  const nextQuestion = () => {
    setCurrentIdx(i => i + 1);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-12 h-screen flex flex-col bg-[var(--bg)] transition-colors duration-300 overflow-y-auto">
      <div className="mb-10">
        <h2 className={cn("text-3xl text-ink-muted mb-2", isTeen && "font-mono uppercase tracking-[0.2em] text-accent/40")} style={{ transform: `rotate(var(--rotate))` }}>{labels.header}</h2>
        <div className="flex justify-between items-end">
          <h2 className={cn("text-4xl font-black text-[var(--ink)] uppercase tracking-tighter", isTeen && "text-accent tracking-widest")}>{labels.subHeader}</h2>
          <div className={cn("px-4 py-2 font-black text-sm transition-all", isTeen ? "bg-accent/10 text-accent border border-accent/30 font-mono" : "bg-accent text-[var(--bg)] rounded-full rotate-3")}>{labels.badge}</div>
        </div>
        {isTeen && questions.length > 0 && currentIdx < questions.length && (
          <div className="mt-8">
            <div className="flex items-center gap-3">
              <div className="text-[10px] font-mono text-accent/60 uppercase tracking-widest shrink-0">Analysis_Precision</div>
              <div className="flex-1 h-[2px] bg-slate-800 relative">
                <motion.div 
                  animate={{ width: `${(score / (currentIdx + 1)) * 100}%` }}
                  className="h-full bg-accent shadow-[0_0_10px_var(--accent)]"
                />
              </div>
              <div className="font-mono text-[10px] text-accent font-bold tabular-nums">
                {Math.round((score / (currentIdx + 1)) * 100) || 0}%
              </div>
            </div>
          </div>
        )}
      </div>

      {questions.length === 0 ? (
        <div className={cn("p-12 transition-all duration-500", isTeen ? "hud-panel" : "bg-[var(--panel-bg)] border-[var(--bd-width)] border-[var(--line)] hand-drawn-border crayon-shadow")}>
          <div className="space-y-10">
            <div>
              <label className={cn("block text-2xl font-black mb-4 text-[var(--ink)]", isTeen && "font-mono uppercase text-sm tracking-widest opacity-60")}>{labels.inputLabel}</label>
              <input 
                type="text" 
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder={labels.inputPlaceholder}
                className={cn(
                  "w-full p-8 bg-[var(--bg)] border-[var(--bd-width)] border-[var(--line)] text-3xl transition-all text-[var(--ink)]",
                  isTeen ? "font-mono focus:border-accent" : "font-primary hand-drawn-border focus:border-accent"
                )}
              />
            </div>
            <div>
              <label className="block text-2xl font-black mb-4 text-[var(--ink)]">{labels.difficultyLabel}</label>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { id: 'Beginner', color: 'bg-green-crt' },
                  { id: 'Intermediate', color: 'bg-orange-crt' },
                  { id: 'Advanced', color: 'bg-red-crt' }
                ].map((level) => (
                  <button
                    key={level.id}
                    onClick={() => setDifficulty(level.id)}
                    className={cn(
                      "p-6 border-[var(--bd-width)] font-black text-2xl transition-all hand-drawn-border",
                      difficulty === level.id 
                        ? `${level.color} text-white border-[var(--line)] shadow-[var(--shadow)] scale-105` 
                        : "border-[var(--line)] bg-[var(--bg)] hover:bg-[var(--panel-bg)]"
                    )}
                  >
                    {level.id}
                  </button>
                ))}
              </div>
            </div>
            <button
              disabled={loading || !topic.trim()}
              onClick={startQuiz}
              className={cn(
                "w-full py-6 bg-accent text-[var(--bg)] font-black uppercase text-2xl flex items-center justify-center gap-4 transition-all border-[var(--bd-width)] border-[var(--line)] hand-drawn-border",
                (loading || !topic.trim()) ? "opacity-30" : "hover:scale-105 crayon-shadow"
              )}
            >
              {loading ? <Loader2 className="animate-spin" size={24} /> : <BrainCircuit size={28} />}
              {loading ? labels.loading : labels.button}
            </button>
          </div>
        </div>
      ) : (
        <div className="flex-1 pb-20">
          {currentIdx < questions.length ? (
            <motion.div 
              key={currentIdx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-10"
            >
              <div className="flex justify-between items-end border-b-[var(--bd-width)] border-[var(--line)] pb-6">
                <div className="text-3xl font-black text-[var(--ink)]">Question # {currentIdx + 1}</div>
                <div className="text-xl font-bold opacity-50 text-[var(--ink)]">Progress: {currentIdx + 1} / {questions.length}</div>
              </div>

              <div className="bg-[var(--bg)] border-[var(--bd-width)] border-[var(--line)] p-12 hand-drawn-border shadow-[var(--shadow)]">
                <h3 className="text-3xl font-bold mb-12 leading-relaxed text-[var(--ink)]">{questions[currentIdx].question}</h3>
                <div className="grid grid-cols-1 gap-6">
                  {questions[currentIdx].options.map((option, i) => {
                    return (
                      <button
                        key={i}
                        disabled={isAnswered}
                        onClick={() => handleOptionSelect(option)}
                        className={cn(
                          "p-6 border-[var(--bd-width)] text-left font-bold text-2xl transition-all relative group flex items-center gap-8 hand-drawn-border",
                          !isAnswered ? `border-[var(--line)] bg-[var(--bg)] hover:scale-102` : 
                          option === questions[currentIdx].answer ? "border-green-500 bg-green-500/10 text-green-600 scale-105" :
                          selectedOption === option ? "border-red-500 bg-red-500/10 text-red-600 opacity-50" : "border-[var(--line)] opacity-20"
                        )}
                      >
                        <span className={cn("w-12 h-12 border-[var(--bd-width)] border-current flex items-center justify-center text-xl shrink-0 hand-drawn-border")}>{i+1}</span>
                        <span>{option}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <AnimatePresence>
                {isAnswered && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="bg-accent/5 text-[var(--ink)] p-10 border-[var(--bd-width)] border-accent hand-drawn-border shadow-[var(--shadow)]"
                  >
                    <div className="flex items-start gap-8">
                      <div className="p-4 bg-accent text-[var(--bg)] hand-drawn-border border-[var(--bd-width)] border-[var(--line)]" style={{ transform: `rotate(var(--rotate-alt))` }}>
                        <Info size={32} />
                      </div>
                      <div className="flex-1">
                        <div className="text-2xl font-black mb-4 text-accent uppercase tracking-widest opacity-[var(--intensity)]">Contextual Information</div>
                        <p className="text-xl font-medium leading-relaxed italic">{questions[currentIdx].explanation}</p>
                      </div>
                    </div>
                    <button
                      onClick={nextQuestion}
                      className="mt-10 w-full py-5 bg-accent text-white font-black uppercase text-xl flex items-center justify-center gap-3 transition-all border-[var(--bd-width)] border-[var(--line)] crayon-shadow"
                    >
                      {currentIdx === questions.length - 1 ? 'Show Results' : 'Analyze Next Vector'} <ChevronRight size={24} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center bg-[var(--bg)] border-[var(--bd-width)] border-[var(--line)] p-20 hand-drawn-border shadow-[var(--shadow)]"
              style={{ boxShadow: `20px 20px 0px var(--accent)` }}
            >
              <h3 className="text-7xl font-black mb-6 text-accent uppercase tracking-tighter" style={{ transform: `rotate(calc(var(--rotate) * 2))` }}>{labels.congrats}</h3>
              <div className="text-3xl font-bold mb-12 text-ink-muted">{t(isKids ? 'practice.score_kids' : isAdult ? 'practice.score_adult' : 'practice.score_teen', { score: score, total: questions.length })}</div>
              <button 
                onClick={() => setQuestions([])}
                className="px-20 py-6 bg-accent text-[var(--bg)] font-black uppercase text-2xl border-[var(--bd-width)] border-[var(--line)] hand-drawn-border crayon-shadow hover:scale-110 transition-all"
              >
                {labels.playAgain}
              </button>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
}
