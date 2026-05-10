import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Loader2, Binary, Play, Code2, Sparkles, RefreshCcw, Maximize2, Download, Edit3, Save, X } from 'lucide-react';
import { ai, cleanAIGeneratedCode } from '../services/ai';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export default function MathPractical() {
  const { t } = useTranslation();
  const [concept, setConcept] = useState('');
  const [loading, setLoading] = useState(false);
  const [practicalCode, setPracticalCode] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedCode, setEditedCode] = useState('');
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const labels = {
    header: t('practical.header_kids'),
    title: t('practical.title_kids'),
    inputPlaceholder: t('practical.placeholder_kids'),
    button: t('practical.btn_kids'),
    loading: t('practical.loading_kids'),
    empty: t('practical.empty_kids')
  };

  const generatePractical = async () => {
    if (!concept.trim()) return;
    setLoading(true);
    setPracticalCode(null);
    setIsEditing(false);

    const prompt = `Create a super fun, interactive mathematical "playground" (educational game/demo) for kids to learn: "${concept}".
        Requirements:
        1. THEME: "Fun Crayon Sketchbook". Use bright colors.
        2. TYPOGRAPHY: 'Gochi Hand'.
        3. BORDERS: Thick hand-drawn style.
        4. INTERACTION: One fun game or slider.
        5. Tone: Excited, magical child-friendly.`;

    try {
      const result = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
      });
      const code = cleanAIGeneratedCode(result.text);
      setPracticalCode(code);
      setEditedCode(code);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!practicalCode) return;
    const blob = new Blob([practicalCode], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${concept.replace(/\s+/g, '_')}_playground.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const toggleFullscreen = () => {
    if (iframeRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        iframeRef.current.requestFullscreen();
      }
    }
  };

  const saveEdit = () => {
    setPracticalCode(editedCode);
    setIsEditing(false);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-12 h-screen flex flex-col bg-[var(--bg)] transition-colors duration-300 overflow-hidden">
      <div className="mb-10 flex justify-between items-start">
        <div>
          <h2 className="text-3xl text-ink-muted mb-2" style={{ transform: `rotate(var(--rotate))` }}>{labels.header}</h2>
          <h2 className="text-4xl font-black text-[var(--ink)] uppercase tracking-tighter">{labels.title}</h2>
        </div>
        {practicalCode && !loading && (
          <div className="flex gap-4">
            <button 
              onClick={handleDownload}
              className="p-3 bg-green-crt text-white hand-drawn-border border-[var(--bd-width)] border-[var(--line)] shadow-[var(--shadow)] hover:scale-110 transition-all"
              title="Download Magic File"
            >
              <Download size={20} />
            </button>
            <button 
              onClick={() => setIsEditing(!isEditing)}
              className={cn(
                "p-3 hand-drawn-border border-[var(--bd-width)] border-[var(--line)] transition-all shadow-[var(--shadow)]",
                isEditing ? "bg-red-crt text-white" : "bg-accent text-[var(--bg)] hover:scale-110"
              )}
              title={isEditing ? "Cancel" : "Edit"}
            >
              {isEditing ? <X size={20} /> : <Edit3 size={20} />}
            </button>
            <button 
              onClick={toggleFullscreen}
              className="p-3 bg-purple-crt text-white hand-drawn-border border-[var(--bd-width)] border-[var(--line)] shadow-[var(--shadow)] hover:scale-110 transition-all"
              title="Fullscreen"
            >
              <Maximize2 size={20} />
            </button>
          </div>
        )}
      </div>

      <div className="flex-1 flex flex-col gap-8 overflow-hidden">
        <div className="p-6 flex gap-8 items-center shadow-[var(--shadow)] shrink-0 transition-all duration-500 bg-[var(--panel-bg)] border-[var(--bd-width)] border-[var(--line)] hand-drawn-border">
          <div className="w-16 h-16 bg-accent text-[var(--bg)] flex items-center justify-center border-[var(--bd-width)] border-[var(--line)] transition-all hand-drawn-border" style={{ transform: `rotate(var(--rotate-alt))` }}>
            <Binary size={32} />
          </div>
          <input 
            type="text" 
            value={concept}
            onChange={(e) => setConcept(e.target.value)}
            placeholder={labels.inputPlaceholder}
            className="flex-1 bg-transparent border-none focus:ring-0 text-3xl font-black placeholder:opacity-30 text-[var(--ink)] font-primary"
            onKeyDown={(e) => e.key === 'Enter' && generatePractical()}
          />
          <button
            disabled={loading || !concept.trim()}
            onClick={generatePractical}
            className={cn(
              "px-12 py-5 bg-accent text-[var(--bg)] font-black uppercase text-xl flex items-center gap-3 border-[var(--bd-width)] border-[var(--line)] transition-all hand-drawn-border",
              (loading || !concept.trim()) ? "opacity-30" : "hover:scale-105 shadow-[var(--shadow)] active:translate-y-1"
            )}
          >
            {loading ? <Loader2 className="animate-spin" size={24} /> : <Play size={24} />}
            {loading ? 'Processing...' : labels.button}
          </button>
        </div>

        <div className="flex-1 bg-[var(--bg)] border-[var(--bd-width)] border-[var(--line)] relative flex flex-col hand-drawn-border shadow-[var(--shadow)] transition-colors duration-300 overflow-hidden">
          <div className="h-14 bg-[var(--line)] text-[var(--bg)] flex items-center px-10 justify-between shrink-0">
            <div className="text-xl font-black flex items-center gap-4">
              <div className="w-4 h-4 bg-accent rounded-full animate-pulse border-2 border-white" />
              Sandbox World / {loading ? 'Computing...' : isEditing ? 'Source Code' : 'Display'}
            </div>
            {isEditing && (
              <button 
                onClick={saveEdit}
                className="flex items-center gap-2 px-4 py-1 bg-green-crt text-white border-2 border-white rounded-lg hover:scale-105 transition-all text-sm"
              >
                <Save size={14} /> Commit Changes
              </button>
            )}
          </div>
          
          <div className="flex-1 relative bg-[var(--bg)] overflow-hidden transition-colors duration-300">
            {loading ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[var(--bg)] z-10 p-12 text-center">
                <div className="w-24 h-24 bg-accent hand-drawn-border animate-bounce mb-10 border-[var(--bd-width)] border-[var(--line)]" style={{ borderRadius: 'var(--radius)' }} />
                <p className="text-4xl font-black text-accent mb-4 uppercase tracking-tighter">{labels.loading}</p>
              </div>
            ) : isEditing ? (
              <textarea
                value={editedCode}
                onChange={(e) => setEditedCode(e.target.value)}
                className="w-full h-full p-8 font-mono text-sm bg-[#111] text-[#00f2ff] focus:ring-0 resize-none"
              />
            ) : practicalCode ? (
              <iframe 
                ref={iframeRef}
                srcDoc={practicalCode}
                className="w-full h-full border-none bg-white"
                title="Math Practical Sandbox"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-center p-20 space-y-10 opacity-[0.1] select-none pointer-events-none text-[var(--ink)]">
                <Sparkles size={240} strokeWidth={0.5} />
                <h3 className="text-6xl font-black uppercase tracking-tighter">{labels.empty}</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
