import React, { useState } from 'react';
import {
  Utensils,
  Coffee,
  Wine,
  Bell,
  Building2,
  Clock,
  Sparkles,
  Check,
  Calendar,
  Eye,
} from 'lucide-react';
import { PageId, GalleryPhoto } from '../types';
import {
  HOTEL_IMAGES,
  DINING_FACILITIES,
  GALLERY_PHOTOS,
} from '../data/hotelData';
import { GoldDivider } from '../components/GoldDivider';

interface DiningFacilitiesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
  onOpenGallery: (index: number) => void;
}

export const DiningFacilitiesPage: React.FC<DiningFacilitiesPageProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenGallery,
}) => {
  const [activeGalleryTab, setActiveGalleryTab] = useState<string>('All');

  const galleryTabs = ['All', 'Hotel', 'Rooms', 'Dining', 'Lounge', 'Breakfast'];

  const filteredPhotos =
    activeGalleryTab === 'All'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.category === activeGalleryTab);

  return (
    <div className="w-full bg-[#0B0517] text-[#EDE8DE] pt-24 pb-20">
      {/* Hero Header */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden border-b border-[#D4AF37]/20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#180A2E]/80 via-[#0B0517] to-[#0B0517] -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#D4AF37]/5 blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] block">
            Culinary Craft & Hospitality
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#FAF7F2] tracking-wide">
            Dining & Facilities
          </h1>

          <p className="font-serif italic text-xl sm:text-2xl text-gold-gradient">
            Experience More Than a Stay
          </p>

          <p className="text-xs sm:text-sm text-[#EDE8DE]/70 max-w-xl mx-auto leading-relaxed font-light">
            Enjoy convenient services and comfortable spaces designed to make your stay effortless, from sumptuous Çukurova morning breakfasts to evening cocktails and full executive support.
          </p>
        </div>
      </section>

      {/* 1. RESTAURANT SECTION */}
      <section className="py-20 border-b border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image */}
            <div className="lg:col-span-6 relative group">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[#D4AF37]/30 shadow-[0_15px_45px_rgba(0,0,0,0.7)]">
                <img
                  src={HOTEL_IMAGES.diningRestaurant}
                  alt="Sürmeli Restaurant Fine Dining"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0517]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center space-x-2 text-xs text-[#FAF7F2]">
                  <Utensils className="w-4 h-4 text-[#D4AF37]" />
                  <span className="tracking-wider uppercase text-[11px] font-mono text-[#F3E5AB]">
                    A La Carte Service · 12:00 - 23:00
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] block">
                Gastronomy & Flavor
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF7F2]">
                Sürmeli Restaurant
              </h2>

              <p className="font-serif italic text-lg text-[#F3E5AB]">
                Refined Mediterranean & Turkish Regional Cuisine
              </p>

              <p className="text-xs sm:text-sm text-[#EDE8DE]/80 leading-relaxed font-light">
                At Sürmeli Restaurant, traditional flavors of Adana and the wider Mediterranean basin are prepared with delicate modern finesse. Crisp seasonal produce, tender slow-grilled meats, aromatic herbs, and hand-crafted desserts create an extraordinary dining ritual.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-center space-x-2 text-xs text-[#EDE8DE]/85">
                  <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  <span>Curated lunch and dinner menus designed by seasoned Turkish chefs</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-[#EDE8DE]/85">
                  <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  <span>Dedicated intimate seating for executive dinners and celebrations</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-[#EDE8DE]/85">
                  <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  <span>Extensive wine cellar featuring prestigious Turkish and Old World vintages</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="px-6 py-2.5 text-xs tracking-wider uppercase font-semibold text-[#0B0517] bg-gradient-to-r from-[#D4AF37] to-[#E8C766] hover:brightness-110 rounded-sm shadow-md transition-all"
                >
                  Reserve Table / Room
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BREAKFAST SECTION */}
      <section className="py-20 bg-[#0E061D] border-b border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Content first on desktop */}
            <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
              <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] block">
                Morning Tradition
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF7F2]">
                Traditional Turkish Breakfast
              </h2>

              <p className="font-serif italic text-lg text-[#F3E5AB]">
                An Abundant Culinary Celebration Every Morning
              </p>

              <p className="text-xs sm:text-sm text-[#EDE8DE]/80 leading-relaxed font-light">
                Turkish breakfast is an art form. Our morning salon presents a lavish buffet laden with artisanal sheep and goat cheeses, marinated Mediterranean olives, naturally harvested honeycombs with clotted cream, crisp seasonal vegetables, warm flaky borek, and freshly brewed samovar black tea.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 bg-[#170A2E] border border-[#D4AF37]/20 rounded-sm">
                  <span className="text-[#D4AF37] uppercase text-[10px] tracking-wider block font-semibold">Service Hours</span>
                  <span className="text-[#FAF7F2]">07:00 – 10:30 Daily</span>
                </div>
                <div className="p-3 bg-[#170A2E] border border-[#D4AF37]/20 rounded-sm">
                  <span className="text-[#D4AF37] uppercase text-[10px] tracking-wider block font-semibold">Atmosphere</span>
                  <span className="text-[#FAF7F2]">Sunlit Dining Salon</span>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="lg:col-span-6 relative group order-1 lg:order-2">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[#D4AF37]/30 shadow-[0_15px_45px_rgba(0,0,0,0.7)]">
                <img
                  src={HOTEL_IMAGES.breakfast}
                  alt="Lavish Turkish Breakfast Buffet"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0517]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center space-x-2 text-xs text-[#FAF7F2]">
                  <Coffee className="w-4 h-4 text-[#D4AF37]" />
                  <span className="tracking-wider uppercase text-[11px] font-mono text-[#F3E5AB]">
                    Fresh Organic Regional Produce
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LOUNGE & RELAXATION */}
      <section className="py-20 border-b border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image */}
            <div className="lg:col-span-6 relative group">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[#D4AF37]/30 shadow-[0_15px_45px_rgba(0,0,0,0.7)]">
                <img
                  src={HOTEL_IMAGES.loungeBar}
                  alt="Amber Lounge & Bar Interior"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0517]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center space-x-2 text-xs text-[#FAF7F2]">
                  <Wine className="w-4 h-4 text-[#D4AF37]" />
                  <span className="tracking-wider uppercase text-[11px] font-mono text-[#F3E5AB]">
                    Open Daily 11:00 – Midnight
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] block">
                Social Retreat
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF7F2]">
                Amber Lounge & Bar
              </h2>

              <p className="font-serif italic text-lg text-[#F3E5AB]">
                Unwind in Intimate, Golden-Lit Comfort
              </p>

              <p className="text-xs sm:text-sm text-[#EDE8DE]/80 leading-relaxed font-light">
                Whether you wish to read over a fresh Italian espresso in the afternoon or gather with colleagues for pre-dinner refreshments, the Amber Lounge is a sanctuary of relaxed elegance. Featuring plush velvet seating, ambient warm backlighting, and unobtrusive service.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-center space-x-2 text-xs text-[#EDE8DE]/85">
                  <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  <span>Artisanal signature cocktails and regional spirits</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-[#EDE8DE]/85">
                  <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  <span>High-speed fiber connectivity for working sessions</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-[#EDE8DE]/85">
                  <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  <span>Afternoon pastry and specialty Turkish coffee service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GUEST SERVICES & HOTEL FACILITIES */}
      <section className="py-20 bg-[#0E061D] border-b border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] block mb-2">
              Comfort & Care
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF7F2]">
              Guest Services & Facilities
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-[#EDE8DE]/75 leading-relaxed font-light">
              Enjoy convenient services and comfortable spaces designed to make your stay effortless.
            </p>
            <div className="w-16 h-[1.5px] bg-[#D4AF37]/40 mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service 1 */}
            <div className="p-6 bg-[#160A2D] border border-[#D4AF37]/20 rounded-sm space-y-3 hover:border-[#D4AF37]/50 transition-colors">
              <div className="w-10 h-10 rounded-sm bg-[#251047] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                <Bell className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-[#FAF7F2]">24/7 Front Desk & Concierge</h3>
              <p className="text-xs text-[#EDE8DE]/70 leading-relaxed font-light">
                Multilingual staff ready to coordinate transport, dinner reservations, and local recommendations at any hour.
              </p>
            </div>

            {/* Service 2 */}
            <div className="p-6 bg-[#160A2D] border border-[#D4AF37]/20 rounded-sm space-y-3 hover:border-[#D4AF37]/50 transition-colors">
              <div className="w-10 h-10 rounded-sm bg-[#251047] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-[#FAF7F2]">Secure Valet & Parking</h3>
              <p className="text-xs text-[#EDE8DE]/70 leading-relaxed font-light">
                On-site protected parking facility with valet assistance for hotel residents and restaurant guests.
              </p>
            </div>

            {/* Service 3 */}
            <div className="p-6 bg-[#160A2D] border border-[#D4AF37]/20 rounded-sm space-y-3 hover:border-[#D4AF37]/50 transition-colors">
              <div className="w-10 h-10 rounded-sm bg-[#251047] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-[#FAF7F2]">Airport Transfer Logistics</h3>
              <p className="text-xs text-[#EDE8DE]/70 leading-relaxed font-light">
                Chauffeured pickup and transfer to Adana Şakirpaşa Airport (ADA), located just 8 minutes away.
              </p>
            </div>

            {/* Service 4 */}
            <div className="p-6 bg-[#160A2D] border border-[#D4AF37]/20 rounded-sm space-y-3 hover:border-[#D4AF37]/50 transition-colors">
              <div className="w-10 h-10 rounded-sm bg-[#251047] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-[#FAF7F2]">Laundry & Dry Cleaning</h3>
              <p className="text-xs text-[#EDE8DE]/70 leading-relaxed font-light">
                Same-day professional dry cleaning, express laundering, and garment pressing for business travelers.
              </p>
            </div>

            {/* Service 5 */}
            <div className="p-6 bg-[#160A2D] border border-[#D4AF37]/20 rounded-sm space-y-3 hover:border-[#D4AF37]/50 transition-colors">
              <div className="w-10 h-10 rounded-sm bg-[#251047] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                <Coffee className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-[#FAF7F2]">24-Hour In-Room Dining</h3>
              <p className="text-xs text-[#EDE8DE]/70 leading-relaxed font-light">
                Freshly prepared meals and late-night supper menus delivered directly to your guest chamber.
              </p>
            </div>

            {/* Service 6 */}
            <div className="p-6 bg-[#160A2D] border border-[#D4AF37]/20 rounded-sm space-y-3 hover:border-[#D4AF37]/50 transition-colors">
              <div className="w-10 h-10 rounded-sm bg-[#251047] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-[#FAF7F2]">Executive Business Corner</h3>
              <p className="text-xs text-[#EDE8DE]/70 leading-relaxed font-light">
                Dedicated workstations with high-speed fiber internet, printing, and confidential scanning facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PHOTO GALLERY */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] block mb-2">
              Visual Tour
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF7F2]">
              Hotel Photography Gallery
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#EDE8DE]/75 leading-relaxed font-light">
              Explore our architecture, ambient lounges, and guest spaces through realistic photography.
            </p>

            {/* Filter tabs */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
              {galleryTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveGalleryTab(tab)}
                  className={`px-3.5 py-1 text-xs tracking-wider uppercase rounded-sm border transition-all ${
                    activeGalleryTab === tab
                      ? 'bg-[#D4AF37] text-[#0B0517] border-[#D4AF37] font-semibold'
                      : 'bg-[#150A2A] text-[#EDE8DE]/70 border-[#D4AF37]/20 hover:border-[#D4AF37]/50'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Photo Grid with Golden Hover Animation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredPhotos.map((photo, index) => {
              const fullIndex = GALLERY_PHOTOS.findIndex((p) => p.id === photo.id);
              return (
                <div
                  key={photo.id}
                  onClick={() => onOpenGallery(fullIndex)}
                  className="group relative aspect-[4/3] rounded-sm overflow-hidden bg-[#180A2E] border border-[#D4AF37]/25 hover:border-[#D4AF37] cursor-pointer shadow-md hover:shadow-[0_0_25px_rgba(212,175,55,0.25)] transition-all duration-300"
                >
                  <img
                    src={photo.image}
                    alt={photo.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0517]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <span className="text-[10px] uppercase tracking-wider text-[#D4AF37]">
                      {photo.category}
                    </span>
                    <h4 className="font-serif text-sm text-[#FAF7F2]">{photo.title}</h4>
                    <div className="mt-1 flex items-center space-x-1 text-[11px] text-[#F3E5AB]">
                      <Eye className="w-3 h-3" />
                      <span>View Photo</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="p-8 bg-[#180B33] border border-[#D4AF37]/30 rounded-sm text-center space-y-4">
          <h3 className="font-serif text-2xl text-[#FAF7F2]">
            Plan Your Dining or Overnight Experience
          </h3>
          <p className="text-xs text-[#EDE8DE]/70 max-w-lg mx-auto leading-relaxed">
            Contact our concierge to reserve private dining tables, request airport transfers, or book your preferred room category.
          </p>
          <div className="pt-2 flex justify-center space-x-4">
            <button
              onClick={onOpenBooking}
              className="px-6 py-2.5 text-xs tracking-wider uppercase font-semibold text-[#0B0517] bg-gradient-to-r from-[#D4AF37] to-[#E8C766] hover:brightness-110 rounded-sm shadow-md transition-all"
            >
              Book Your Stay
            </button>
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-2.5 text-xs tracking-wider uppercase text-[#EDE8DE] hover:text-[#F3E5AB] border border-[#D4AF37]/40 rounded-sm transition-colors"
            >
              Contact Hotel
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
