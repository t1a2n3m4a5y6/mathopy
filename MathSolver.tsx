import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { Send, Loader2, Eraser, Info, Sparkles, Eye, ChevronDown } from 'lucide-react';
import { solveMathProblem } from '../services/ai';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export default function MathSolver() {
  const { t } = useTranslation();
  const [input, setInput] = useState('');
  const [solution, setSolution] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSolve = async () => {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const res = await solveMathProblem(input);
      setSolution(res || 'I couldn\'t solve that. Please try again.');
    } catch (error) {
      console.error(error);
      setSolution('Error occurred while solving. Check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-12 h-screen flex flex-col bg-[var(--bg)] transition-colors duration-300">
      <div className="mb-10">
        <div className="flex justify-between items-start mb-10">
          <div className="space-y-2">
            <h2 className="text-5xl font-black text-ink mb-4">
              {t('solver.header')}
            </h2>
            <p className="text-xl text-ink-muted">{t('solver.input_label')}</p>
          </div>
        </div>

        <div className="relative group">
          <div className="hand-drawn-border">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t('solver.placeholder')}
              className="w-full bg-transparent border-none p-8 text-3xl focus:ring-0 transition-all min-h-[220px] text-[var(--ink)] resize-none font-primary"
            />
          </div>

          <div className="flex justify-between items-center mt-8">
            <p className="text-2xl italic text-ink-muted opacity-[var(--intensity)]">
              {t('solver.sub_text')}
            </p>

            <div className="flex items-center gap-8">
              <button 
                onClick={() => { setInput(''); setSolution(null); }}
                className="text-xl font-black uppercase text-ink-muted hover:text-red-crt transition-colors flex items-center gap-2"
              >
                <Eraser size={18} /> {t('common.clear')}
              </button>
              <button
                disabled={loading || !input.trim()}
                onClick={handleSolve}
                className={cn(
                  "px-10 py-3 bg-accent text-[var(--bg)] font-black uppercase text-xl transition-all border-[var(--bd-width)] border-[var(--line)] hand-drawn-border",
                  (loading || !input.trim()) ? "opacity-30 cursor-not-allowed" : "hover:scale-105 active:translate-y-1"
                )}
              >
                <Send size={18} /> {loading ? t('solver.analyzing') : t('common.execute')}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar">
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
              <>
                <div className="w-20 h-20 bg-accent hand-drawn-border animate-bounce mb-6" style={{ borderRadius: 'var(--radius)' }}></div>
                <p className="text-3xl text-accent font-bold">{t('solver.processing')}</p>
              </>
          </div>
        )}

        {solution && !loading && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12 pb-20 mt-10 p-10 bg-[var(--panel-bg)] border-[var(--bd-width)] border-[var(--line)] relative transition-all duration-500 hand-drawn-border crayon-shadow"
          >
            <div className="absolute top-[-16px] left-8 px-4 py-1 border-[var(--bd-width)] border-[var(--line)] text-sm font-black uppercase tracking-widest bg-accent text-[var(--bg)] hand-drawn-border text-2xl">
              {t('solver.logical_deduction')}
            </div>
            <div className="markdown-body mt-4">
              <ReactMarkdown
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]}
                components={{
                  h1: ({node, ...props}) => <h1 className="text-4xl font-black mb-10 text-accent underline underline-offset-8" {...props} />,
                  h2: ({node, ...props}) => <h2 className="text-2xl font-bold mb-6 mt-14 text-blue-crt" style={{ transform: `rotate(var(--rotate))` }} {...props} />,
                  p: ({node, ...props}) => <p className="mb-8 leading-relaxed text-2xl font-bold text-[var(--ink)]" {...props} />,
                  ol: ({node, ...props}) => <ol className="space-y-10" {...props} />,
                  li: ({node, children, ...props}) => {
                    const colors = ['bg-red-crt', 'bg-blue-crt', 'bg-green-crt', 'bg-orange-crt', 'bg-purple-crt'];
                    const colorIndex = (Math.random() * colors.length) | 0;
                    return (
                      <li className="relative pl-16 group list-none mb-4" style={{ transform: `rotate(calc(var(--rotate-alt) * 0.5))` }}>
                        <div className={cn("absolute left-0 top-1 w-12 h-12 text-white flex items-center justify-center font-black text-xl hand-drawn-border border-2 border-black", colors[colorIndex])}>
                          {colorIndex % 2 === 0 ? '★' : '◆'}
                        </div>
                        <div className="text-[var(--ink)] leading-relaxed text-2xl font-bold">
                          {children}
                        </div>
                      </li>
                    );
                  },
                  code: ({node, ...props}) => <code className="bg-gray-500/10 text-accent px-2 py-0.5 rounded-lg border border-accent/20 font-body " {...props} />,
                  pre: ({node, ...props}) => <pre className="bg-[#1a1a1a] text-white p-10 hand-drawn-border border-[var(--bd-width)] border-accent text-xl overflow-x-auto my-10 font-body" {...props} />,
                }}
              >
                {solution}
              </ReactMarkdown>
            </div>
          </motion.div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: var(--line); }
      `}} />
    </div>
  );
}
