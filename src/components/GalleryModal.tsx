import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryPhoto } from '../types';

interface GalleryModalProps {
  photos: GalleryPhoto[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({
  photos,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  if (currentIndex === null || !photos[currentIndex]) return null;

  const current = photos[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prev = currentIndex === 0 ? photos.length - 1 : currentIndex - 1;
    onNavigate(prev);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const next = currentIndex === photos.length - 1 ? 0 : currentIndex + 1;
    onNavigate(next);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full bg-[#120824] border border-[#D4AF37]/40 rounded-sm shadow-[0_25px_80px_rgba(0,0,0,0.9)] overflow-hidden"
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-[#D4AF37]/25 bg-[#190B32]">
          <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
            {current.category} · {currentIndex + 1} of {photos.length}
          </span>
          <button
            onClick={onClose}
            className="p-1.5 text-[#EDE8DE]/70 hover:text-[#FAF7F2] hover:bg-[#251047] rounded-sm transition-colors"
            aria-label="Close photo"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image viewport */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black flex items-center justify-center overflow-hidden">
          <img
            src={current.image}
            alt={current.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#0B0517]/80 hover:bg-[#1E0F38] text-[#FAF7F2] border border-[#D4AF37]/40 transition-colors shadow-lg"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#0B0517]/80 hover:bg-[#1E0F38] text-[#FAF7F2] border border-[#D4AF37]/40 transition-colors shadow-lg"
            aria-label="Next photo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Caption bar */}
        <div className="px-6 py-4 bg-[#160B29] border-t border-[#D4AF37]/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h4 className="font-serif text-lg text-[#FAF7F2]">{current.title}</h4>
            <p className="text-xs text-[#EDE8DE]/70">{current.caption}</p>
          </div>
          <span className="text-[11px] font-mono text-[#D4AF37] uppercase tracking-wider shrink-0">
            Sürmeli Adana
          </span>
        </div>
      </div>
    </div>
  );
};
