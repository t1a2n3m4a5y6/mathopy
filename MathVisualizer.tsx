import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Loader2, Palette, RefreshCw, Download, Sparkles, ChevronRight } from 'lucide-react';
import { generateMathVisual } from '../services/ai';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export default function MathVisualizer() {
  const { t } = useTranslation();
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [visualCode, setVisualCode] = useState<string | null>(null);

  const labels = {
    header: t('visualizer.header_kids'),
    inputPlaceholder: t('visualizer.placeholder_kids'),
    button: t('visualizer.btn_kids'),
    sidebarTitle: t('visualizer.sidebar_kids'),
    badge: t('visualizer.badge_kids'),
    loading: t('visualizer.loading_kids'),
    drawAgain: t('visualizer.again_kids')
  };

  const handleGenerate = async () => {
    if (!description.trim()) return;
    setLoading(true);
    setVisualCode(null);
    try {
      const code = await generateMathVisual(description);
      setVisualCode(code);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-12 h-screen flex flex-col bg-[var(--bg)] transition-colors duration-300 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 flex-1 overflow-hidden">
        
        {/* Left Side: Controls */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          <div>
            <h2 className="text-3xl text-ink-muted mb-6" style={{ transform: `rotate(var(--rotate))` }}>{labels.header}</h2>
            <div className="bg-[var(--panel-bg)] border-[var(--bd-width)] border-[var(--line)] p-10 hand-drawn-border crayon-shadow">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder={labels.inputPlaceholder}
                className="w-full h-48 bg-[var(--bg)] border-[var(--bd-width)] border-[var(--line)] p-8 font-primary text-2xl font-bold focus:ring-0 focus:border-accent transition-colors resize-none hand-drawn-border text-[var(--ink)]"
              />
              <button
                disabled={loading || !description.trim()}
                onClick={handleGenerate}
                className={cn(
                  "w-full mt-8 py-5 bg-accent text-[var(--bg)] font-black uppercase text-xl border-[var(--bd-width)] border-[var(--line)] hand-drawn-border transition-all",
                  (loading || !description.trim()) ? "opacity-30" : "hover:scale-105 crayon-shadow active:translate-y-1"
                )}
              >
                {loading ? 'Drawing...' : labels.button}
              </button>
            </div>
          </div>

          <div className="bg-accent/5 text-[var(--accent)] p-8 border-[var(--bd-width)] border-accent hand-drawn-border shadow-[var(--shadow)]" style={{ transform: `rotate(var(--rotate-alt))` }}>
            <h4 className="text-2xl font-black mb-6 flex items-center gap-2">
              <Palette size={24} /> {labels.sidebarTitle}
            </h4>
            <div className="grid grid-cols-1 gap-4">
              {[
                "Spiral Rainbow",
                "Mandelbrot Fractal",
                "Julia Set Animation",
                "3D Sine Wave Field"
              ].map((idea) => (
                <button 
                  key={idea}
                  onClick={() => setDescription(idea)}
                  className="w-full text-left font-primary text-xl hover:text-accent transition-colors flex items-center gap-3 group px-4 py-2 border-2 border-transparent hover:border-accent/30 hand-drawn-border"
                >
                  <RefreshCw size={14} className="group-hover:rotate-180 transition-transform duration-500 opacity-50" />
                  {idea}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Visual Output */}
        <div className="lg:col-span-8 relative flex flex-col pt-10 overflow-hidden">
          <div className="absolute top-[-10px] right-8 py-1 px-4 text-sm font-black transition-all z-20 bg-accent text-[var(--bg)] border-[var(--bd-width)] border-[var(--line)] hand-drawn-border rotate-3 shadow-[var(--shadow)]">
            {labels.badge}
          </div>
          
          <div className="flex-1 bg-[var(--panel-bg)] border-[var(--bd-width)] border-[var(--line)] relative overflow-hidden flex items-center justify-center hand-drawn-border shadow-[var(--shadow)]" style={{ boxShadow: `16px 16px 0px var(--accent)` }}>
            {/* Faded Background Text */}
            <h1 className="absolute bottom-[-20px] left-[-20px] text-[180px] font-black tracking-[-10px] opacity-[0.05] select-none pointer-events-none uppercase text-accent rotate-[-12deg]">
              ART
            </h1>

            {loading ? (
              <div className="flex flex-col items-center gap-8 z-10 text-[var(--ink)]">
                <div className="w-24 h-24 border-8 border-accent border-t-transparent rounded-full animate-spin hand-drawn-border" />
                <p className="text-3xl font-black text-accent">{labels.loading}</p>
              </div>
            ) : visualCode ? (
              <iframe 
                srcDoc={visualCode}
                className="w-full h-full border-none"
                title="Math Art Sandbox"
              />
            ) : (
              <div className="text-center p-20 opacity-[0.1] z-0 text-[var(--ink)]">
                <Sparkles size={240} strokeWidth={0.5} className="mx-auto" />
                <h2 className="text-5xl font-black mt-10">Dimension Interface</h2>
              </div>
            )}
          </div>

          <div className="mt-10 flex gap-6">
            <button 
              onClick={handleGenerate}
              className="px-12 py-4 bg-accent text-[var(--bg)] font-black uppercase text-xl border-[var(--bd-width)] border-[var(--line)] hand-drawn-border crayon-shadow hover:scale-110 transition-all flex items-center gap-3"
            >
              {labels.drawAgain} <RefreshCw size={24} />
            </button>
            <button className="px-12 py-4 bg-green-crt text-white font-black uppercase text-xl border-[var(--bd-width)] border-[var(--line)] hand-drawn-border crayon-shadow hover:scale-110 transition-all flex items-center gap-3">
              Export <Download size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
