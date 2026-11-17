import {useEffect} from 'react';
import {ExternalLink, X} from 'lucide-react';
import {BRAND_INFO} from '../data/brandData';

interface StoryVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function StoryVideoModal({isOpen, onClose}: StoryVideoModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A1210]/75 backdrop-blur-[2px] p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="story-video-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-[#FAF9F6] border border-[#E5DFD5] rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#E5DFD5] bg-[#FFFFFF]">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-wider text-[#8B6D43]">
              Stilo Maria
            </p>
            <h2 id="story-video-title" className="font-display text-xl font-semibold text-[#1A1816]">
              {BRAND_INFO.storyLabel}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar vídeo"
            className="p-2 text-[#6E655B] hover:text-[#1A1816] hover:bg-[#F3F0EA] rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 bg-[#2A1B18]">
          <div className="aspect-[9/16] max-h-[65vh] mx-auto rounded-xl overflow-hidden bg-[#1A1210]">
            <iframe
              src={BRAND_INFO.storyYoutubeEmbedUrl}
              title="Conheça a história da Stilo Maria"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="px-5 py-3.5 bg-[#FFFFFF] border-t border-[#E5DFD5] flex items-center justify-between gap-3">
          <span className="text-xs text-[#6E655B]">Vídeo oficial no YouTube</span>
          <a
            href={BRAND_INFO.storyYoutubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#FAF9F6] bg-[#3E2723] rounded-lg hover:bg-[#2E1C19] transition-colors whitespace-nowrap"
          >
            Abrir no YouTube
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
