import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Loader2, Sparkles, Wand2, Target, History } from 'lucide-react';
import { ai } from '../services/ai';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import ReactMarkdown from 'react-markdown';

export default function MathCustomExperience() {
  const { t } = useTranslation();
  const [goal, setGoal] = useState('');
  const [loading, setLoading] = useState(false);
  const [curriculum, setCurriculum] = useState<string | null>(null);

  const isKids = localStorage.getItem('ageGroup') === 'kids';
  const isAdult = localStorage.getItem('ageGroup') === 'adult';

  const labels = {
    header: t('custom.header_kids'),
    title: t('custom.title_kids'),
    inputLabel: t('custom.input_label_kids'),
    inputPlaceholder: t('custom.placeholder_kids'),
    past: t('custom.past_kids'),
    button: t('custom.btn_kids'),
    loadingBtn: t('custom.loading_btn_kids'),
    outputHeader: t('custom.output_header_kids'),
    outputSub: t('custom.output_sub_kids'),
    loadingText: t('custom.loading_text_kids'),
    empty: t('custom.empty_kids')
  };

  const generateExperience = async () => {
    if (!goal.trim()) return;
    setLoading(true);
    setCurriculum(null);

    const prompt = isKids 
      ? `Create a super fun, custom mathematical learning quest or secret map for a child based on this goal: "${goal}".
        The plan should include:
        1. A fun "Quest Map" (list of things to learn).
        2. "Magic Steps" (sequence of study).
        3. Simple "Brain Exercises" (fun activities) for each concept.
        4. "Magic Potions" (links to sections like Magic Solver, Fun Quiz, Art Maker).
        Use a very friendly, excited, and magical tone. Format with clear Markdown headers and bold text.`
      : isAdult
        ? `Create a professional, structured, and deep mathematical curriculum based on this goal: "${goal}".
        The plan should include:
        1. Core Theoretical Foundations.
        2. Sequential Learning Modules with specific learning outcomes.
        3. Rigorous Practical Applications and Problem Sets.
        4. Integration points with the Mathopy Analytical Solver for verification.
        Use a formal, academic, and encouraging tone. Format with clear Markdown headers.`
        : `Create an engaging and modern mathematical learning experience for a student based on this goal: "${goal}".
        The plan should include:
        1. Key Learning Milestones.
        2. Study Roadmap.
        3. Cool Interactive Challenges.
        4. Integration with Mathopy Sandbox and Challenges.
        Use a cool, motivational, and modern tone. Format with Markdown.`;

    try {
      const result = await ai.models.generateContent({
        model: "gemini-3.1-pro-preview",
        contents: prompt,
      });
      setCurriculum(result.text);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-12 h-screen flex flex-col bg-[var(--bg)] transition-colors duration-300 overflow-hidden">
      <div className="mb-10 shrink-0">
        <h2 className="text-3xl text-ink-muted mb-2" style={{ transform: `rotate(var(--rotate))` }}>{labels.header}</h2>
        <h1 className="text-4xl font-black text-[var(--ink)] uppercase tracking-tighter">{labels.title}</h1>
      </div>

      <div className="flex-1 flex flex-col gap-8 overflow-hidden">
        <div className="bg-[var(--panel-bg)] border-[var(--bd-width)] border-[var(--line)] p-10 hand-drawn-border crayon-shadow shrink-0 transition-colors duration-300">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 border-b-2 border-accent/20 pb-4">
              <Target size={32} className="text-accent" />
              <label className="text-2xl font-black text-[var(--ink)]">{labels.inputLabel}</label>
            </div>
            <textarea
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder={labels.inputPlaceholder}
              className="w-full h-32 bg-[var(--bg)] border-[var(--bd-width)] border-[var(--line)] p-8 font-primary text-2xl font-bold focus:ring-0 focus:border-accent transition-all resize-none hand-drawn-border text-[var(--ink)]"
            />
            <div className="flex justify-between items-center">
              <div className="flex gap-4">
                <button className="flex items-center gap-2 text-xl font-black text-ink-muted hover:text-accent transition-colors">
                  <History size={20} /> {labels.past}
                </button>
              </div>
              <button
                disabled={loading || !goal.trim()}
                onClick={generateExperience}
                className={cn(
                  "px-12 py-5 bg-accent text-[var(--bg)] font-black uppercase text-xl flex items-center gap-3 border-[var(--bd-width)] border-[var(--line)] hand-drawn-border transition-all",
                  (loading || !goal.trim()) ? "opacity-30" : "hover:scale-105 crayon-shadow active:translate-y-1"
                )}
              >
                {loading ? <Loader2 className="animate-spin" size={24} /> : <Wand2 size={24} />}
                {loading ? labels.loadingBtn : labels.button}
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-[var(--bg)] border-[var(--bd-width)] border-[var(--line)] relative flex flex-col hand-drawn-border shadow-[var(--shadow)] overflow-hidden transition-colors duration-300">
          <div className="h-14 bg-[var(--line)] text-[var(--bg)] flex items-center px-10 justify-between shrink-0">
            <div className="text-xl font-black flex items-center gap-4">
              <Sparkles size={24} className="text-accent" />
              {labels.outputHeader} / {loading ? 'Computing...' : labels.outputSub}
            </div>
          </div>
          
          <div className="flex-1 p-12 overflow-y-auto custom-scrollbar bg-[var(--bg)]">
            {loading ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-24 h-24 bg-accent hand-drawn-border animate-pulse mb-8 border-[var(--bd-width)] border-[var(--line)]" />
                <p className="text-3xl font-black text-accent">{labels.loadingText}</p>
              </div>
            ) : curriculum ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="markdown-body"
              >
                <ReactMarkdown
                  components={{
                    h1: ({node, ...props}) => <h1 className="text-5xl font-black mb-12 text-accent" style={{ transform: `rotate(var(--rotate))` }} {...props} />,
                    h2: ({node, ...props}) => <h2 className="text-3xl font-bold mb-8 mt-16 text-blue-crt border-b-4 border-blue-crt/20 pb-2 " style={{ transform: `rotate(var(--rotate-alt))` }} {...props} />,
                    p: ({node, ...props}) => <p className="mb-10 leading-relaxed text-2xl font-bold text-[var(--ink)]" {...props} />,
                    ul: ({node, ...props}) => <ul className="space-y-6 mb-12" {...props} />,
                    li: ({node, ...props}) => (
                      <li className="flex gap-6 items-start">
                        <div className="w-10 h-10 mt-1 bg-accent text-[var(--bg)] flex items-center justify-center font-black hand-drawn-border border-2 border-[var(--line)] shrink-0 opacity-[var(--intensity)]">✔</div>
                        <span className="text-2xl font-bold text-[var(--ink)] leading-relaxed" {...props} />
                      </li>
                    ),
                  }}
                >
                  {curriculum}
                </ReactMarkdown>
              </motion.div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center opacity-[0.1] pointer-events-none select-none text-[var(--ink)]">
                <Wand2 size={160} strokeWidth={0.5} />
                <h3 className="text-5xl font-black mt-8">{labels.empty}</h3>
              </div>
            )}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: var(--line); }
      `}} />
    </div>
  );
}
