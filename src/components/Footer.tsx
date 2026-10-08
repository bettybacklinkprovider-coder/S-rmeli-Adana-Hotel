import React from 'react';
import { Phone, MapPin, Mail, Clock, Globe } from 'lucide-react';
import { PageId } from '../types';
import { HOTEL_INFO } from '../data/hotelData';
import { GoldDivider } from './GoldDivider';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080312] border-t border-[#D4AF37]/25 text-[#EDE8DE] pt-16 pb-12 relative overflow-hidden">
      {/* Background subtle radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-b from-[#3B1259]/20 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl tracking-[0.16em] uppercase text-[#FAF7F2]">
              Sürmeli Adana Hotel
            </h3>
            <p className="font-serif italic text-[#D4AF37] text-base">
              “Elegant comfort in the heart of Adana.”
            </p>
            <p className="text-xs text-[#EDE8DE]/70 leading-relaxed max-w-sm">
              Offering tranquil hospitality, bespoke comfort, and premier convenience in the historic district of Seyhan, Adana.
            </p>
            <div className="pt-2 flex items-center space-x-3 text-xs text-[#EDE8DE]/60">
              <span className="inline-flex items-center space-x-1.5">
                <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>24/7 Reception & Concierge</span>
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D4AF37]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider uppercase">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="text-[#EDE8DE]/75 hover:text-[#FAF7F2] hover:translate-x-1 transition-all flex items-center space-x-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/40" />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('rooms')}
                  className="text-[#EDE8DE]/75 hover:text-[#FAF7F2] hover:translate-x-1 transition-all flex items-center space-x-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/40" />
                  <span>Rooms & Suites</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('dining')}
                  className="text-[#EDE8DE]/75 hover:text-[#FAF7F2] hover:translate-x-1 transition-all flex items-center space-x-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/40" />
                  <span>Dining & Facilities</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="text-[#EDE8DE]/75 hover:text-[#FAF7F2] hover:translate-x-1 transition-all flex items-center space-x-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/40" />
                  <span>Contact & Booking</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D4AF37]">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs leading-relaxed text-[#EDE8DE]/80">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <a
                    href={`tel:${HOTEL_INFO.phoneRaw}`}
                    className="hover:text-[#F3E5AB] font-mono tracking-wider transition-colors font-semibold text-sm"
                  >
                    {HOTEL_INFO.phone}
                  </a>
                  <p className="text-[11px] text-[#EDE8DE]/50">Telephone & Reservations</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#FAF7F2]">{HOTEL_INFO.address}</p>
                  <p className="text-[11px] text-[#EDE8DE]/50">Seyhan / Adana, Türkiye</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href={`mailto:${HOTEL_INFO.email}`}
                  className="hover:text-[#F3E5AB] transition-colors"
                >
                  {HOTEL_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Regional Trust & Distances */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D4AF37]">
              Adana Central Hub
            </h4>
            <p className="text-xs text-[#EDE8DE]/70 leading-relaxed">
              Minutes away from Seyhan River, historic Stone Bridge (Taşköprü), and Adana Airport.
            </p>
            <div className="p-3 bg-[#130726] border border-[#D4AF37]/20 rounded-sm space-y-1.5 text-[11px]">
              <div className="flex justify-between text-[#EDE8DE]/80">
                <span>Airport (ADA)</span>
                <span className="font-mono text-[#F3E5AB]">3.2 km · 8 mins</span>
              </div>
              <div className="flex justify-between text-[#EDE8DE]/80">
                <span>Taşköprü Bridge</span>
                <span className="font-mono text-[#F3E5AB]">1.4 km · 4 mins</span>
              </div>
              <div className="flex justify-between text-[#EDE8DE]/80">
                <span>Sabancı Central Mosque</span>
                <span className="font-mono text-[#F3E5AB]">1.8 km · 5 mins</span>
              </div>
            </div>
            <div className="pt-1 flex items-center space-x-3">
              <span className="text-[11px] text-[#EDE8DE]/50 flex items-center space-x-1">
                <Globe className="w-3 h-3 text-[#D4AF37]" />
                <span>Turkish Hospitality Distinction</span>
              </span>
            </div>
          </div>
        </div>

        {/* Golden Divider */}
        <GoldDivider className="my-6" />

        {/* Bottom row: Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#EDE8DE]/60 pt-4 gap-3">
          <p>© 2026 Sürmeli Adana Hotel. All Rights Reserved.</p>
          <div className="flex items-center space-x-6 text-[11px]">
            <span>Kuruköprü, Seyhan, Adana</span>
            <span>·</span>
            <span>Check-in 14:00 / Check-out 12:00</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
