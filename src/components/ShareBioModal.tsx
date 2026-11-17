import {useEffect, useState} from 'react';
import {Check, Copy, Share2, X} from 'lucide-react';
import {BRAND_INFO} from '../data/brandData';

interface ShareBioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ShareBioModal({isOpen, onClose}: ShareBioModalProps) {
  const [copiedUrl, setCopiedUrl] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const shareUrl = BRAND_INFO.bioUrl;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2400);
    } catch {
      setCopiedUrl(false);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Stilo Maria — Bio Oficial',
          text: 'Alfaiataria feminina, coloração pessoal e atendimento personalizado em Cuiabá.',
          url: shareUrl,
        });
      } catch {
        // User cancelled native share
      }
    } else {
      handleCopyLink();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A1816]/60 backdrop-blur-[2px] p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="share-bio-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-[#FAF9F6] border border-[#E5DFD5] rounded-2xl shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5DFD5] bg-[#FFFFFF]">
          <h2 id="share-bio-title" className="font-display text-2xl font-semibold text-[#1A1816]">
            Cartão Digital Stilo Maria
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar compartilhamento"
            className="p-2 text-[#6E655B] hover:text-[#1A1816] hover:bg-[#F3F0EA] rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5 text-center">
          <div className="mx-auto w-44 h-44 bg-[#FFFFFF] border border-[#E5DFD5] rounded-xl p-4 flex flex-col items-center justify-center">
            <svg
              viewBox="0 0 120 120"
              className="w-full h-full text-[#1A1816]"
              aria-label="Representação visual de acesso bio.stilomaria.com.br"
            >
              <rect x="6" y="6" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="6" />
              <rect x="15" y="15" width="14" height="14" fill="currentColor" />
              <rect x="82" y="6" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="6" />
              <rect x="91" y="15" width="14" height="14" fill="currentColor" />
              <rect x="6" y="82" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="6" />
              <rect x="15" y="91" width="14" height="14" fill="currentColor" />
              <rect x="48" y="10" width="8" height="8" fill="currentColor" />
              <rect x="64" y="10" width="8" height="8" fill="currentColor" />
              <rect x="48" y="26" width="16" height="8" fill="currentColor" />
              <rect x="10" y="48" width="16" height="8" fill="currentColor" />
              <rect x="34" y="48" width="12" height="12" fill="currentColor" />
              <rect x="54" y="48" width="12" height="12" fill="#8B6D43" />
              <rect x="74" y="48" width="16" height="8" fill="currentColor" />
              <rect x="98" y="48" width="12" height="12" fill="currentColor" />
              <rect x="10" y="66" width="8" height="8" fill="currentColor" />
              <rect x="26" y="66" width="18" height="8" fill="currentColor" />
              <rect x="54" y="68" width="8" height="16" fill="currentColor" />
              <rect x="70" y="68" width="16" height="8" fill="currentColor" />
              <rect x="94" y="68" width="16" height="16" fill="currentColor" />
              <rect x="48" y="92" width="14" height="14" fill="currentColor" />
              <rect x="70" y="88" width="12" height="10" fill="currentColor" />
              <rect x="88" y="96" width="22" height="12" fill="currentColor" />
              <rect x="70" y="104" width="12" height="8" fill="currentColor" />
            </svg>
          </div>

          <div>
            <p className="font-display text-xl text-[#1A1816]">Stilo Maria · Cuiabá</p>
            <p className="text-xs text-[#6E655B] mt-1">{shareUrl}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5">
            <button
              type="button"
              onClick={handleCopyLink}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium bg-[#FFFFFF] border border-[#D8D0C5] rounded-lg text-[#1A1816] hover:bg-[#F3F0EA] transition-colors whitespace-nowrap"
            >
              {copiedUrl ? <Check className="w-4 h-4 text-[#234F2D]" /> : <Copy className="w-4 h-4" />}
              {copiedUrl ? 'Link copiado' : 'Copiar link da bio'}
            </button>
            <button
              type="button"
              onClick={handleNativeShare}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold bg-[#1A1816] text-[#FAF9F6] rounded-lg hover:bg-[#332E2A] transition-colors whitespace-nowrap"
            >
              <Share2 className="w-4 h-4" />
              Compartilhar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
