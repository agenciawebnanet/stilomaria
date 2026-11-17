import {useState} from 'react';
import {Sparkles} from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'Stilo Maria',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-[#EFECE5] text-[#6E655B] p-6 text-center ${className}`}
      >
        <Sparkles className="w-6 h-6 mb-2 text-[#8B6D43]" strokeWidth={1.5} />
        <span className="font-display text-lg text-[#1A1816]">{fallbackTitle}</span>
        <span className="text-xs text-[#6E655B] mt-1">Alfaiataria Feminina · Cuiabá</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
