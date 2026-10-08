import React from 'react';
import { X, Check, Users, Maximize, Bed, Bath, Calendar, ShieldCheck } from 'lucide-react';
import { RoomItem } from '../types';

interface RoomDetailModalProps {
  room: RoomItem | null;
  onClose: () => void;
  onBook: (roomName: string) => void;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({
  room,
  onClose,
  onBook,
}) => {
  if (!room) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#120824] border border-[#D4AF37]/35 rounded-sm shadow-[0_25px_70px_rgba(0,0,0,0.85)] overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-[#D4AF37]/25 bg-[#190B32]">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">
              Sürmeli Adana Hotel · {room.category} Accommodation
            </span>
            <h3 className="font-serif text-2xl text-[#FAF7F2] tracking-wide">
              {room.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#EDE8DE]/70 hover:text-[#FAF7F2] hover:bg-[#251047] rounded-sm transition-colors"
            aria-label="Close room details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Main Photo with Subtle Golden Scrim */}
          <div className="relative aspect-[16/9] w-full rounded-sm overflow-hidden border border-[#D4AF37]/25">
            <img
              src={room.image}
              alt={room.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0517] via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-3 left-3 bg-[#0B0517]/90 backdrop-blur-sm border border-[#D4AF37]/30 px-3 py-1 rounded-sm text-xs font-mono text-[#F3E5AB]">
              From €{room.pricePerNight} / night
            </div>
          </div>

          {/* Quick Specifications Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 bg-[#170B2F] border border-[#D4AF37]/20 rounded-sm text-xs">
            <div className="flex items-center space-x-2">
              <Maximize className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <div>
                <span className="text-[#EDE8DE]/50 text-[10px] block uppercase">Area</span>
                <span className="text-[#FAF7F2] font-semibold">{room.size}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <div>
                <span className="text-[#EDE8DE]/50 text-[10px] block uppercase">Capacity</span>
                <span className="text-[#FAF7F2] font-semibold">{room.occupancy}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Bed className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <div>
                <span className="text-[#EDE8DE]/50 text-[10px] block uppercase">Bedding</span>
                <span className="text-[#FAF7F2] font-semibold truncate">{room.bedding}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Bath className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <div>
                <span className="text-[#EDE8DE]/50 text-[10px] block uppercase">Bathroom</span>
                <span className="text-[#FAF7F2] font-semibold truncate">Ensuite Rain Shower</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D4AF37]">
              Room Overview & Comfort
            </h4>
            <p className="text-sm text-[#EDE8DE]/85 leading-relaxed">
              {room.detailedDescription}
            </p>
          </div>

          {/* Detailed Specifications: Bedding & Bathroom */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 bg-[#150A2A] border border-[#D4AF37]/15 rounded-sm">
              <span className="text-[11px] uppercase tracking-wider text-[#D4AF37] block font-semibold mb-1">
                Bedding & Sleep Quality
              </span>
              <p className="text-[#EDE8DE]/80 leading-relaxed">
                {room.bedding} dressed in crisp high-thread Egyptian cotton, hypoallergenic pillows, and acoustic noise-dampening insulation.
              </p>
            </div>
            <div className="p-4 bg-[#150A2A] border border-[#D4AF37]/15 rounded-sm">
              <span className="text-[11px] uppercase tracking-wider text-[#D4AF37] block font-semibold mb-1">
                Bathroom & Vanity
              </span>
              <p className="text-[#EDE8DE]/80 leading-relaxed">
                {room.bathroom}, equipped with custom botanical bath essentials, oversized terry towels, and lighted vanity mirror.
              </p>
            </div>
          </div>

          {/* Amenities Grid */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D4AF37]">
              Room Amenities & Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {room.amenities.map((amenity, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-[#EDE8DE]/80">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#2A114A] border border-[#D4AF37]/40 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-[#D4AF37]" />
                  </span>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Guarantee notice */}
          <div className="flex items-center space-x-2.5 p-3 bg-[#110722] border border-[#D4AF37]/20 rounded-sm text-xs text-[#EDE8DE]/70">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span>Best rate guarantee with direct booking. Free cancellation up to 24 hours before check-in.</span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-[#D4AF37]/25 bg-[#190B32]">
          <div>
            <span className="text-[10px] text-[#EDE8DE]/60 uppercase tracking-wider block">Rate per night</span>
            <span className="font-mono text-xl font-bold text-[#F3E5AB]">€{room.pricePerNight}</span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs tracking-wider uppercase text-[#EDE8DE]/80 hover:text-[#FAF7F2] transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBook(room.name);
              }}
              className="flex items-center space-x-1.5 px-6 py-2.5 text-xs tracking-wider uppercase font-semibold text-[#0B0517] bg-gradient-to-r from-[#D4AF37] via-[#E8C766] to-[#C59A27] hover:brightness-110 rounded-sm shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book This Room</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
