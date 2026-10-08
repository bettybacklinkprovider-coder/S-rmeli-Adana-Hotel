import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X } from 'lucide-react';
import { PageId } from '../types';
import { HOTEL_INFO } from '../data/hotelData';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenBooking: (roomPref?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenBooking,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'rooms', label: 'Rooms & Suites' },
    { id: 'dining', label: 'Dining & Facilities' },
    { id: 'contact', label: 'Contact & Booking' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0517]/95 backdrop-blur-md border-b border-[#D4AF37]/25 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3'
          : 'bg-gradient-to-b from-[#0B0517]/90 via-[#0B0517]/50 to-transparent py-5 border-b border-[#D4AF37]/15'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            aria-label="Sürmeli Adana Hotel - Home"
          >
            <span className="font-serif text-lg sm:text-xl md:text-2xl tracking-[0.18em] font-medium text-[#FAF7F2] uppercase group-hover:text-[#F3E5AB] transition-colors whitespace-nowrap">
              Sürmeli Adana Hotel
            </span>
          </button>

          {/* Zone 2: Navigation Links with subtle golden underline */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-8 shrink-0" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative text-xs tracking-[0.14em] uppercase font-medium transition-colors py-1 group focus:outline-none whitespace-nowrap shrink-0 ${
                    isActive ? 'text-[#F3E5AB]' : 'text-[#EDE8DE]/80 hover:text-[#FAF7F2]'
                  }`}
                >
                  <span className="whitespace-nowrap inline-block">{link.label}</span>
                  {/* Subtle golden underline animation */}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] transition-all duration-300 ${
                      isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="hidden sm:flex items-center space-x-3 shrink-0">
            <a
              href={`tel:${HOTEL_INFO.phoneRaw}`}
              className="flex items-center space-x-1.5 px-3 py-2 text-xs tracking-wider uppercase text-[#EDE8DE] hover:text-[#F3E5AB] border border-[#D4AF37]/30 hover:border-[#D4AF37] rounded-sm transition-all duration-200 bg-[#160B29]/60 hover:bg-[#1E0F38] whitespace-nowrap"
              title="Call Sürmeli Adana Hotel"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="whitespace-nowrap font-medium">Call Now</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="flex items-center space-x-1.5 px-4 py-2 text-xs tracking-wider uppercase font-semibold text-[#0B0517] bg-gradient-to-r from-[#D4AF37] via-[#E8C766] to-[#C59A27] hover:brightness-110 rounded-sm shadow-[0_0_15px_rgba(212,175,55,0.25)] hover:shadow-[0_0_22px_rgba(212,175,55,0.45)] transition-all duration-200 whitespace-nowrap active:scale-[0.98]"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span className="whitespace-nowrap">Book Your Stay</span>
            </button>
          </div>

          {/* Mobile/Tablet hamburger menu toggle */}
          <div className="flex items-center space-x-2 lg:hidden">
            <a
              href={`tel:${HOTEL_INFO.phoneRaw}`}
              aria-label="Call Hotel"
              className="p-2 text-[#D4AF37] border border-[#D4AF37]/30 rounded-sm bg-[#160B29]/80 sm:hidden"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#EDE8DE] hover:text-[#D4AF37] border border-[#D4AF37]/30 rounded-sm bg-[#160B29]/80 focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0517]/98 border-b border-[#D4AF37]/30 backdrop-blur-xl px-4 pt-3 pb-6 transition-all duration-300 animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left py-2.5 px-3 text-sm tracking-wider uppercase font-medium border-l-2 transition-colors ${
                    isActive
                      ? 'border-[#D4AF37] text-[#F3E5AB] bg-[#1E0F38]/50'
                      : 'border-transparent text-[#EDE8DE]/90 hover:text-[#FAF7F2] hover:bg-[#160B29]/50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <div className="pt-2 grid grid-cols-2 gap-2">
              <a
                href={`tel:${HOTEL_INFO.phoneRaw}`}
                className="flex items-center justify-center space-x-1.5 py-2.5 text-xs tracking-wider uppercase text-[#EDE8DE] border border-[#D4AF37]/40 rounded-sm bg-[#160B29]"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Call Now</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="flex items-center justify-center space-x-1.5 py-2.5 text-xs tracking-wider uppercase font-semibold text-[#0B0517] bg-gradient-to-r from-[#D4AF37] to-[#E8C766] rounded-sm shadow-md"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Stay</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
