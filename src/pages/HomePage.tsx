import React, { useState } from 'react';
import {
  Calendar,
  Compass,
  ArrowRight,
  Phone,
  BedDouble,
  MapPin,
  Sparkles,
  HeartHandshake,
  UtensilsCrossed,
  ShieldCheck,
  Maximize,
  Users,
  Check,
  Coffee,
  Wine,
  Bell,
  Eye,
  Languages,
} from 'lucide-react';
import { PageId, RoomItem } from '../types';
import {
  HOTEL_INFO,
  HOTEL_IMAGES,
  ROOMS_DATA,
  WHY_CHOOSE_ITEMS,
} from '../data/hotelData';
import { GoldDivider } from '../components/GoldDivider';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (roomPref?: string) => void;
  onSelectRoom: (room: RoomItem) => void;
  onOpenGallery?: (index?: number) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenBooking,
  onSelectRoom,
  onOpenGallery,
}) => {
  const [pillarLanguage, setPillarLanguage] = useState<'en' | 'tr'>('en');

  // Preview 4 rooms for Section 3
  const previewRooms = ROOMS_DATA.filter((r) =>
    ['deluxe-room', 'superior-room', 'executive-room', 'presidential-suite'].includes(r.id)
  );

  return (
    <div className="w-full bg-[#0B0517] text-[#EDE8DE] selection:bg-[#D4AF37]/30">
      {/* =========================================================================
          SECTION 1 — LUXURY HERO
          ========================================================================= */}
      <section
        id="section-hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Full-screen realistic hotel backdrop with dark purple overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={HOTEL_IMAGES.hero}
            alt="Sürmeli Adana Hotel Exterior at Dusk"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Deep dark purple gradient scrims */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0517] via-[#100624]/85 to-[#0B0517]/90" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#15072B]/60 to-[#0B0517]/95" />
        </div>

        {/* Animated Gold Light Effects & Floating Particles */}
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/5 w-72 h-72 rounded-full bg-[#D4AF37]/10 blur-3xl animate-gold-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-[#581C87]/20 blur-3xl animate-float-slow" />
          {/* Subtle gold dust particles */}
          <div className="absolute top-1/3 left-1/3 w-1.5 h-1.5 rounded-full bg-[#F3E5AB]/60 blur-[1px] animate-float-slow" />
          <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-[#D4AF37]/50 blur-[1px] animate-float-slow" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-1/4 left-1/2 w-1 h-1 rounded-full bg-[#E5C158]/70 blur-[0.5px] animate-float-slow" style={{ animationDelay: '4s' }} />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          {/* Refined unboxed kicker */}
          <div className="flex items-center justify-center space-x-3 text-xs tracking-[0.25em] uppercase text-[#D4AF37] mb-4">
            <span>5-Star Luxury</span>
            <span aria-hidden="true">·</span>
            <span>Seyhan, Adana</span>
            <span aria-hidden="true">·</span>
            <span>Türkiye</span>
          </div>

          {/* Primary Hotel Heading */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-medium tracking-[0.12em] uppercase text-[#FAF7F2] drop-shadow-md leading-tight text-balance">
            Sürmeli Adana Hotel
          </h1>

          {/* Subheading */}
          <p className="mt-4 font-serif italic text-2xl sm:text-3xl md:text-4xl text-gold-gradient tracking-wide">
            Your Elegant Stay in the Heart of Adana
          </p>

          {/* Supporting Text */}
          <p className="mt-6 text-sm sm:text-base md:text-lg text-[#EDE8DE]/80 max-w-2xl mx-auto font-light leading-relaxed">
            “Experience refined comfort, warm Turkish hospitality and a premium stay in the heart of Adana.”
          </p>

          {/* Primary Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm tracking-[0.15em] uppercase font-semibold text-[#0B0517] bg-gradient-to-r from-[#D4AF37] via-[#E8C766] to-[#C59A27] hover:brightness-110 rounded-sm shadow-[0_0_25px_rgba(212,175,55,0.35)] hover:shadow-[0_0_35px_rgba(212,175,55,0.55)] transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Stay</span>
            </button>

            <button
              onClick={() => {
                onNavigate('rooms');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm tracking-[0.15em] uppercase font-medium text-[#FAF7F2] border border-[#D4AF37]/50 hover:border-[#D4AF37] hover:bg-[#1E0F38]/60 rounded-sm transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
            >
              <Compass className="w-4 h-4 text-[#D4AF37]" />
              <span>Explore Rooms</span>
            </button>
          </div>

          {/* Quick trust metrics */}
          <div className="mt-16 pt-8 border-t border-[#D4AF37]/20 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs text-[#EDE8DE]/70">
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span>Prime Kuruköprü Location</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span>Direct Booking Best Rate</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span>24/7 Dedicated Concierge</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — WELCOME / ABOUT THE HOTEL
          ========================================================================= */}
      <section id="section-welcome" className="py-24 sm:py-32 relative bg-[#0E061D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left side: Large premium hotel image */}
            <div className="lg:col-span-6 relative group">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[#D4AF37]/30 shadow-[0_15px_45px_rgba(0,0,0,0.7)]">
                <img
                  src={HOTEL_IMAGES.about}
                  alt="Sürmeli Adana Hotel Grand Lobby Lounge"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0517]/80 via-transparent to-transparent" />
              </div>
              {/* Golden accent frame ornament */}
              <div className="hidden sm:block absolute -bottom-4 -right-4 w-48 h-48 border-r border-b border-[#D4AF37]/40 pointer-events-none -z-10" />
            </div>

            {/* Right side: Welcome copy & luxury highlights */}
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
                Heritage & Prestige
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FAF7F2] leading-tight">
                {HOTEL_INFO.welcomeHeading}
              </h2>

              <p className="text-sm sm:text-base text-[#EDE8DE]/80 leading-relaxed font-light">
                {HOTEL_INFO.welcomeDescription}
              </p>

              <p className="text-sm text-[#EDE8DE]/75 leading-relaxed font-light">
                Whether visiting for international business congresses, regional commerce, or to explore the storied history of Çukurova, our hotel delivers a serene sanctuary where every detail—from soundproof acoustic glazing to hand-selected Mediterranean culinary offerings—is orchestrated for your absolute comfort.
              </p>

              {/* Small luxury highlights */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#D4AF37]/20">
                <div className="p-3.5 bg-[#170A2E] border border-[#D4AF37]/20 rounded-sm">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#F3E5AB]">
                    Elegant Accommodation
                  </div>
                  <p className="text-[11px] text-[#EDE8DE]/65 mt-1 leading-normal">
                    Quiet, tastefully appointed suites and rooms with ergonomic workspaces.
                  </p>
                </div>

                <div className="p-3.5 bg-[#170A2E] border border-[#D4AF37]/20 rounded-sm">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#F3E5AB]">
                    Central Location
                  </div>
                  <p className="text-[11px] text-[#EDE8DE]/65 mt-1 leading-normal">
                    Minutes from Seyhan River, Taşköprü, and Adana Airport.
                  </p>
                </div>

                <div className="p-3.5 bg-[#170A2E] border border-[#D4AF37]/20 rounded-sm">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#F3E5AB]">
                    Turkish Hospitality
                  </div>
                  <p className="text-[11px] text-[#EDE8DE]/65 mt-1 leading-normal">
                    Decades of authentic, attentive care tailored to every guest.
                  </p>
                </div>

                <div className="p-3.5 bg-[#170A2E] border border-[#D4AF37]/20 rounded-sm">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#F3E5AB]">
                    Comfortable Stay
                  </div>
                  <p className="text-[11px] text-[#EDE8DE]/65 mt-1 leading-normal">
                    Hypoallergenic Egyptian cotton bedding & Italian marble rain showers.
                  </p>
                </div>
              </div>

              {/* Discover More button */}
              <div className="pt-2">
                <button
                  onClick={() => {
                    onNavigate('rooms');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3 text-xs tracking-[0.15em] uppercase font-semibold text-[#0B0517] bg-gradient-to-r from-[#D4AF37] via-[#E8C766] to-[#C59A27] hover:brightness-110 rounded-sm shadow-[0_0_20px_rgba(212,175,55,0.25)] transition-all flex items-center space-x-2"
                >
                  <span>Discover More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — ROOMS & SUITES PREVIEW
          ========================================================================= */}
      <section id="section-rooms-preview" className="py-24 sm:py-32 relative bg-[#0B0517]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] block mb-2">
              Sanctuaries of Repose
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#FAF7F2]">
              Rooms Designed for Comfort
            </h2>
            <p className="mt-4 text-sm text-[#EDE8DE]/75 leading-relaxed font-light">
              Each space is crafted with acoustic serenity, warm wood accents, and plush Egyptian cotton linens to ensure deep, restorative sleep in the heart of Adana.
            </p>
            <div className="w-16 h-[1.5px] bg-[#D4AF37]/40 mx-auto mt-6" />
          </div>

          {/* Room Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {previewRooms.map((room) => (
              <div
                key={room.id}
                className="group purple-card purple-card-hover rounded-sm overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Large Room Image with Zoom on Hover */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#180A2E]">
                    <img
                      src={room.image}
                      alt={room.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#120824] via-transparent to-transparent opacity-80" />
                    <div className="absolute top-3 right-3 bg-[#0B0517]/85 backdrop-blur-sm border border-[#D4AF37]/30 px-2.5 py-1 text-[11px] font-mono text-[#F3E5AB] rounded-sm">
                      €{room.pricePerNight} <span className="text-[9px] text-[#EDE8DE]/60">/ night</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between text-[11px] text-[#D4AF37] uppercase tracking-wider font-semibold">
                      <span>{room.category}</span>
                      <span>{room.size}</span>
                    </div>

                    <h3 className="font-serif text-xl text-[#FAF7F2] group-hover:text-[#F3E5AB] transition-colors">
                      {room.name}
                    </h3>

                    <p className="text-xs text-[#EDE8DE]/70 line-clamp-2 leading-relaxed">
                      {room.description}
                    </p>

                    {/* Elegant feature icons */}
                    <div className="pt-2 border-t border-[#D4AF37]/15 flex items-center justify-between text-[11px] text-[#EDE8DE]/70">
                      <span className="flex items-center space-x-1">
                        <Users className="w-3 h-3 text-[#D4AF37]" />
                        <span>{room.occupancy}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <BedDouble className="w-3 h-3 text-[#D4AF37]" />
                        <span>King Bed</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-5 pt-0">
                  <button
                    onClick={() => onSelectRoom(room)}
                    className="w-full py-2.5 text-xs tracking-wider uppercase font-semibold text-[#EDE8DE] hover:text-[#0B0517] bg-[#1F0E3D]/80 hover:bg-[#D4AF37] border border-[#D4AF37]/35 rounded-sm transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>View Room</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View All Rooms Button */}
          <div className="mt-14 text-center">
            <button
              onClick={() => {
                onNavigate('rooms');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-semibold text-[#FAF7F2] border border-[#D4AF37]/60 hover:border-[#D4AF37] hover:bg-[#1E0F38] rounded-sm transition-all duration-300 inline-flex items-center space-x-3 shadow-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]"
            >
              <span>View All Rooms & Suites</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — DINING & HOTEL EXPERIENCE
          ========================================================================= */}
      <section id="section-dining-experience" className="py-24 sm:py-32 relative bg-[#0E0520] overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#4A166A]/20 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] block mb-2">
              Culinary Art & Leisure
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#FAF7F2]">
              Taste, Relax & Enjoy
            </h2>
            <p className="mt-4 text-sm text-[#EDE8DE]/75 leading-relaxed font-light">
              From our abundant morning Turkish breakfast buffet to candlelit evening Mediterranean dining and tranquil lounge moments, experience warm Adana hospitality throughout the day.
            </p>
            <div className="w-16 h-[1.5px] bg-[#D4AF37]/40 mx-auto mt-6" />
          </div>

          {/* Lifestyle Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 1. Fine Dining Restaurant */}
            <div className="purple-card purple-card-hover rounded-sm overflow-hidden flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={HOTEL_IMAGES.diningRestaurant}
                  alt="Sürmeli Fine Dining Restaurant"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120824] via-transparent to-transparent opacity-75" />
                <div className="absolute bottom-3 left-3 flex items-center space-x-1.5 text-xs text-[#FAF7F2]">
                  <UtensilsCrossed className="w-4 h-4 text-[#D4AF37]" />
                  <span className="font-serif text-base">Sürmeli Restaurant</span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs text-[#EDE8DE]/75 leading-relaxed">
                  Refined lunch and dinner service highlighting authentic Mediterranean seasonings, prime local cuts, and sommelier-selected pairings in an intimate atmosphere.
                </p>
                <div className="text-[11px] text-[#D4AF37] tracking-wider uppercase flex items-center space-x-2">
                  <span>A La Carte Service</span>
                  <span>·</span>
                  <span>12:00 - 23:00</span>
                </div>
              </div>
            </div>

            {/* 2. Breakfast Presentation */}
            <div className="purple-card purple-card-hover rounded-sm overflow-hidden flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={HOTEL_IMAGES.breakfast}
                  alt="Traditional Turkish Breakfast Spread"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120824] via-transparent to-transparent opacity-75" />
                <div className="absolute bottom-3 left-3 flex items-center space-x-1.5 text-xs text-[#FAF7F2]">
                  <Coffee className="w-4 h-4 text-[#D4AF37]" />
                  <span className="font-serif text-base">Grand Morning Breakfast</span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs text-[#EDE8DE]/75 leading-relaxed">
                  Start your morning with artisanal cheeses, Mediterranean olives, natural honeycombs, warm Turkish pastries, and samovar-brewed Çay in our sunlit dining salon.
                </p>
                <div className="text-[11px] text-[#D4AF37] tracking-wider uppercase flex items-center space-x-2">
                  <span>Buffet Breakfast</span>
                  <span>·</span>
                  <span>07:00 - 10:30</span>
                </div>
              </div>
            </div>

            {/* 3. Amber Lounge Bar */}
            <div className="purple-card purple-card-hover rounded-sm overflow-hidden flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={HOTEL_IMAGES.loungeBar}
                  alt="Amber Lounge and Bar"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120824] via-transparent to-transparent opacity-75" />
                <div className="absolute bottom-3 left-3 flex items-center space-x-1.5 text-xs text-[#FAF7F2]">
                  <Wine className="w-4 h-4 text-[#D4AF37]" />
                  <span className="font-serif text-base">Amber Lounge & Bar</span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs text-[#EDE8DE]/75 leading-relaxed">
                  An ambient venue for afternoon espresso, discreet executive discussions, or quiet evening cocktails surrounded by warm golden lighting and plush royal velvet.
                </p>
                <div className="text-[11px] text-[#D4AF37] tracking-wider uppercase flex items-center space-x-2">
                  <span>Cocktails & Coffee</span>
                  <span>·</span>
                  <span>11:00 - Midnight</span>
                </div>
              </div>
            </div>
          </div>

          {/* Explore Facilities CTA */}
          <div className="mt-14 text-center">
            <button
              onClick={() => {
                onNavigate('dining');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-semibold text-[#0B0517] bg-gradient-to-r from-[#D4AF37] via-[#E8C766] to-[#C59A27] hover:brightness-110 rounded-sm shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all inline-flex items-center space-x-2"
            >
              <span>Explore Facilities & Dining</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — WHY CHOOSE SÜRMELİ ADANA HOTEL (TURKISH HERITAGE & IMAGES)
          ========================================================================= */}
      <section id="section-why-choose" className="py-24 sm:py-32 relative bg-[#090314]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Bilingual / Turkish Toggle */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] block mb-2 font-medium">
              {pillarLanguage === 'tr' ? 'Sürmeli Ayrıcalıkları · Türk Konukseverliği' : 'Signature Pillars · Authentic Turkish Experience'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#FAF7F2] leading-tight">
              {pillarLanguage === 'tr' ? 'Adana\'nın Kalbinde Benzersiz Bir Konaklama' : 'A Stay Designed Around You in Adana'}
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#EDE8DE]/75 leading-relaxed font-light">
              {pillarLanguage === 'tr'
                ? 'Tarihi Taşköprü ve Seyhan Nehri\'nin yanı başında, asırlık Türk konukseverliği, eşsiz Adana gastronomisi ve kraliyet konforuyla unutulmaz bir deneyim.'
                : 'Centrally situated beside historic Taşköprü and Seyhan River, we unite prime location with genuine Turkish hospitality and tranquil 5-star comfort.'}
            </p>

            {/* Language Switcher Pill */}
            <div className="mt-6 inline-flex items-center p-1 rounded-sm bg-[#160A2A] border border-[#D4AF37]/35 shadow-inner">
              <button
                onClick={() => setPillarLanguage('en')}
                className={`flex items-center space-x-1.5 px-4 py-1.5 text-xs uppercase tracking-wider font-medium rounded-sm transition-all duration-200 ${
                  pillarLanguage === 'en'
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#C59A27] text-[#0B0517] font-semibold shadow-sm'
                    : 'text-[#EDE8DE]/70 hover:text-[#FAF7F2]'
                }`}
              >
                <span>English</span>
              </button>
              <button
                onClick={() => setPillarLanguage('tr')}
                className={`flex items-center space-x-1.5 px-4 py-1.5 text-xs uppercase tracking-wider font-medium rounded-sm transition-all duration-200 ${
                  pillarLanguage === 'tr'
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#C59A27] text-[#0B0517] font-semibold shadow-sm'
                    : 'text-[#EDE8DE]/70 hover:text-[#FAF7F2]'
                }`}
              >
                <Languages className="w-3.5 h-3.5" />
                <span>Türkçe</span>
              </button>
            </div>

            <div className="w-16 h-[1.5px] bg-[#D4AF37]/40 mx-auto mt-6" />
          </div>

          {/* 6 Luxury Feature Cards with Authentic Turkish Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CHOOSE_ITEMS.map((item) => {
              const renderIcon = () => {
                switch (item.icon) {
                  case 'MapPin':
                    return <MapPin className="w-5 h-5 text-[#D4AF37]" />;
                  case 'BedDouble':
                    return <BedDouble className="w-5 h-5 text-[#D4AF37]" />;
                  case 'Sparkles':
                    return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
                  case 'HeartHandshake':
                    return <HeartHandshake className="w-5 h-5 text-[#D4AF37]" />;
                  case 'UtensilsCrossed':
                    return <UtensilsCrossed className="w-5 h-5 text-[#D4AF37]" />;
                  default:
                    return <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />;
                }
              };

              // Map card id to photo lightbox index or action
              const getCardGalleryIndex = (id: string) => {
                switch (id) {
                  case 'location':
                    return 8; // Historic Taşköprü & Seyhan
                  case 'comfort':
                    return 2; // Deluxe room
                  case 'atmosphere':
                    return 11; // Grand Royal Purple & Gold Atrium
                  case 'hospitality':
                    return 9; // Turkish Tea & Hospitality
                  case 'dining':
                    return 10; // Adana Kebap feast
                  case 'service':
                    return 12; // Concierge service
                  default:
                    return 0;
                }
              };

              const handleCardAction = (id: string) => {
                switch (id) {
                  case 'location':
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    break;
                  case 'comfort':
                    onNavigate('rooms');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    break;
                  case 'dining':
                    onNavigate('dining');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    break;
                  case 'atmosphere':
                    if (onOpenGallery) {
                      onOpenGallery(11);
                    } else {
                      onNavigate('dining');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                    break;
                  case 'hospitality':
                    if (onOpenGallery) {
                      onOpenGallery(9);
                    } else {
                      onOpenBooking();
                    }
                    break;
                  case 'service':
                    onOpenBooking();
                    break;
                  default:
                    onOpenBooking();
                }
              };

              return (
                <div
                  key={item.id}
                  className="group bg-[#140828] border border-[#D4AF37]/25 hover:border-[#D4AF37]/70 rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(212,175,55,0.18)]"
                >
                  <div>
                    {/* Authentic Turkish Image Container */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#1D0B38]">
                      <img
                        src={item.image}
                        alt={`${item.title} - Sürmeli Adana Hotel`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                      />
                      {/* Gradient overlay for contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#140828] via-[#140828]/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />

                      {/* Golden Tag Badge on Image */}
                      <div className="absolute top-3 left-3 bg-[#0B0517]/85 backdrop-blur-md border border-[#D4AF37]/40 px-2.5 py-1 text-[11px] font-medium text-[#F3E5AB] rounded-sm tracking-wide shadow-md flex items-center space-x-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                        <span>{pillarLanguage === 'tr' ? item.turkishBadge : item.badge}</span>
                      </div>

                      {/* Floating Icon badge on Image */}
                      <div className="absolute bottom-3 right-3 w-10 h-10 rounded-sm bg-[#0E041C]/90 backdrop-blur-md border border-[#D4AF37]/50 flex items-center justify-center shadow-lg group-hover:border-[#F3E5AB] group-hover:scale-110 transition-transform">
                        {renderIcon()}
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 space-y-3">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold flex items-center space-x-1.5">
                        <span>✦</span>
                        <span>{pillarLanguage === 'tr' ? item.badge : item.highlightTag}</span>
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl text-[#FAF7F2] group-hover:text-[#F3E5AB] transition-colors leading-tight">
                        {pillarLanguage === 'tr' ? item.turkishTitle : item.title}
                      </h3>

                      {/* Bilingual Subtitle */}
                      <p className="font-serif italic text-xs text-[#D4AF37]/85">
                        {pillarLanguage === 'tr' ? item.title : item.turkishTitle}
                      </p>

                      <p className="text-xs sm:text-sm text-[#EDE8DE]/75 leading-relaxed font-light pt-1">
                        {pillarLanguage === 'tr' ? item.turkishDescription : item.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Action Bar */}
                  <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-[#D4AF37]/15 mt-3">
                    <button
                      onClick={() => handleCardAction(item.id)}
                      className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-wider font-medium text-[#F3E5AB] hover:text-[#FAF7F2] transition-colors group-hover:underline decoration-[#D4AF37]/50 underline-offset-4"
                    >
                      <span>{pillarLanguage === 'tr' ? 'Detayları İncele' : 'Explore Feature'}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                    </button>

                    {onOpenGallery && (
                      <button
                        onClick={() => onOpenGallery(getCardGalleryIndex(item.id))}
                        className="text-[11px] text-[#EDE8DE]/60 hover:text-[#D4AF37] transition-colors flex items-center space-x-1 p-1 hover:bg-[#200D3D] rounded-sm"
                        title={pillarLanguage === 'tr' ? 'Fotoğrafı tam boyutta incele' : 'View full-size photo'}
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>{pillarLanguage === 'tr' ? 'Büyüt' : 'Photo'}</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6 — BOOKING CTA / CONTACT
          ========================================================================= */}
      <section
        id="section-booking-cta"
        className="relative py-28 sm:py-36 overflow-hidden flex items-center justify-center"
      >
        {/* Dark purple luxury hotel image background with dark overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={HOTEL_IMAGES.hero}
            alt="Sürmeli Adana Night Facade"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0B0517]/90 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0517] via-[#210B3D]/70 to-[#0B0517]" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] block">
            Reservations & Inquiries
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#FAF7F2] tracking-wide leading-tight text-balance">
            Make Your Stay in Adana Memorable
          </h2>

          <p className="text-sm sm:text-base text-[#EDE8DE]/80 max-w-2xl mx-auto font-light leading-relaxed">
            “Plan your stay at Sürmeli Adana Hotel and experience comfort, elegance and Turkish hospitality.”
          </p>

          {/* Action buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm tracking-[0.15em] uppercase font-semibold text-[#0B0517] bg-gradient-to-r from-[#D4AF37] via-[#E8C766] to-[#C59A27] hover:brightness-110 rounded-sm shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Stay</span>
            </button>

            <a
              href={`tel:${HOTEL_INFO.phoneRaw}`}
              className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm tracking-[0.15em] uppercase font-semibold text-[#FAF7F2] border border-[#D4AF37]/50 hover:border-[#D4AF37] hover:bg-[#1E0F38]/80 rounded-sm transition-all flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>Call +90 322 352 36 00</span>
            </a>
          </div>

          {/* Hotel Address */}
          <div className="pt-8 text-xs text-[#EDE8DE]/70 flex items-center justify-center space-x-2">
            <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span className="tracking-wide">{HOTEL_INFO.address}</span>
          </div>

          {/* Finish with a luxurious golden divider */}
          <GoldDivider className="mt-12" />
        </div>
      </section>
    </div>
  );
};
