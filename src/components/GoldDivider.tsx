import React from 'react';

interface GoldDividerProps {
  className?: string;
  withDiamond?: boolean;
}

export const GoldDivider: React.FC<GoldDividerProps> = ({ className = '', withDiamond = true }) => {
  return (
    <div className={`relative flex items-center justify-center my-6 ${className}`}>
      <div className="h-[1px] w-full max-w-xl bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
      {withDiamond && (
        <div className="absolute flex items-center justify-center bg-[#0B0517] px-3">
          <span className="w-2 h-2 rotate-45 border border-[#D4AF37] bg-[#1E0F38]" />
        </div>
      )}
    </div>
  );
};
