import React, { useState } from 'react';
import {
  Bed,
  Bath,
  Maximize,
  Users,
  Check,
  Calendar,
  Phone,
  Sparkles,
  ArrowRight,
  Info,
} from 'lucide-react';
import { PageId, RoomItem } from '../types';
import { HOTEL_INFO, ROOMS_DATA } from '../data/hotelData';
import { GoldDivider } from '../components/GoldDivider';

interface RoomsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (roomPref?: string) => void;
  onSelectRoom: (room: RoomItem) => void;
}

export const RoomsPage: React.FC<RoomsPageProps> = ({
  onNavigate,
  onOpenBooking,
  onSelectRoom,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Standard', 'Deluxe', 'Superior', 'Executive', 'Suite'];

  const filteredRooms =
    selectedCategory === 'All'
      ? ROOMS_DATA
      : ROOMS_DATA.filter((r) => r.category === selectedCategory);

  return (
    <div className="w-full bg-[#0B0517] text-[#EDE8DE] pt-24 pb-20">
      {/* Rooms Hero Header */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden border-b border-[#D4AF37]/20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#180A2E]/80 via-[#0B0517] to-[#0B0517] -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#D4AF37]/5 blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] block">
            Accommodations at Sürmeli Adana
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#FAF7F2] tracking-wide">
            Rooms & Suites
          </h1>

          <p className="font-serif italic text-xl sm:text-2xl text-gold-gradient">
            Elegant spaces designed for a comfortable stay.
          </p>

          <p className="text-xs sm:text-sm text-[#EDE8DE]/70 max-w-xl mx-auto leading-relaxed font-light">
            Each of our rooms and suites is furnished with acoustic soundproofing, refined walnut textures, and bespoke Egyptian cotton linens to guarantee quiet relaxation in downtown Adana.
          </p>

          {/* Interactive filter tabs (clean segmented controls per Section 1.A) */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 text-xs tracking-wider uppercase rounded-sm border transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-[#D4AF37] text-[#0B0517] border-[#D4AF37] font-semibold shadow-[0_0_12px_rgba(212,175,55,0.4)]'
                    : 'bg-[#150A2A] text-[#EDE8DE]/70 border-[#D4AF37]/20 hover:border-[#D4AF37]/50 hover:text-[#FAF7F2]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Listing Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {filteredRooms.map((room, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={room.id}
                className="purple-card rounded-sm overflow-hidden border border-[#D4AF37]/25 hover:border-[#D4AF37]/60 transition-all duration-300 shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Room Photography with Scrim */}
                  <div
                    className={`lg:col-span-6 relative aspect-[16/11] sm:aspect-[16/10] lg:aspect-auto overflow-hidden group cursor-pointer ${
                      isReversed ? 'lg:order-2' : 'lg:order-1'
                    }`}
                    onClick={() => onSelectRoom(room)}
                  >
                    <img
                      src={room.image}
                      alt={room.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0517]/90 via-[#0B0517]/20 to-transparent" />

                    {/* Price Pill / Badge alternative: clean unboxed price block */}
                    <div className="absolute bottom-4 left-4 bg-[#0B0517]/90 backdrop-blur-md border border-[#D4AF37]/40 px-3.5 py-1.5 rounded-sm">
                      <span className="text-[10px] text-[#EDE8DE]/60 uppercase tracking-wider block">Starting Rate</span>
                      <span className="font-mono text-base font-bold text-[#F3E5AB]">€{room.pricePerNight}</span>
                      <span className="text-[10px] text-[#EDE8DE]/60 ml-1">/ night</span>
                    </div>

                    {room.highlight && (
                      <div className="absolute top-4 left-4 bg-[#2C104D]/90 backdrop-blur-md border border-[#D4AF37]/60 px-3 py-1 rounded-sm text-[10px] uppercase tracking-widest text-[#F3E5AB] font-semibold flex items-center space-x-1">
                        <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                        <span>Featured Choice</span>
                      </div>
                    )}
                  </div>

                  {/* Room Details & Specifications */}
                  <div
                    className={`lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6 ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="space-y-4">
                      {/* Meta line */}
                      <div className="flex items-center space-x-3 text-xs text-[#D4AF37] uppercase tracking-[0.18em]">
                        <span>{room.category} Category</span>
                        <span aria-hidden="true">·</span>
                        <span>{room.size}</span>
                        <span aria-hidden="true">·</span>
                        <span>{room.occupancy}</span>
                      </div>

                      {/* Room Name */}
                      <h2 className="font-serif text-2xl sm:text-3xl text-[#FAF7F2] font-normal tracking-wide">
                        {room.name}
                      </h2>

                      {/* Tagline */}
                      <p className="font-serif italic text-sm text-[#F3E5AB]/90">
                        {room.tagline}
                      </p>

                      {/* Short Description */}
                      <p className="text-xs sm:text-sm text-[#EDE8DE]/75 leading-relaxed font-light">
                        {room.description}
                      </p>

                      {/* Key Comfort Highlights */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-[#D4AF37]/15 text-xs">
                        <div className="flex items-start space-x-2">
                          <Bed className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                          <div>
                            <span className="text-[#FAF7F2] font-semibold block text-[11px] uppercase tracking-wider">
                              Comfortable Bedding
                            </span>
                            <span className="text-[#EDE8DE]/70 text-[11px]">{room.bedding}</span>
                          </div>
                        </div>

                        <div className="flex items-start space-x-2">
                          <Bath className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                          <div>
                            <span className="text-[#FAF7F2] font-semibold block text-[11px] uppercase tracking-wider">
                              Modern Bathroom
                            </span>
                            <span className="text-[#EDE8DE]/70 text-[11px]">{room.bathroom}</span>
                          </div>
                        </div>
                      </div>

                      {/* Guest Amenities preview */}
                      <div className="pt-2">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-[#EDE8DE]/50 block mb-2">
                          Guest Amenities Included
                        </span>
                        <div className="grid grid-cols-2 gap-1.5 text-xs text-[#EDE8DE]/80">
                          {room.features.map((feature, i) => (
                            <div key={i} className="flex items-center space-x-1.5 text-[11px]">
                              <Check className="w-3 h-3 text-[#D4AF37] shrink-0" />
                              <span className="truncate">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Card CTA Buttons */}
                    <div className="pt-4 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row items-center gap-3">
                      <button
                        onClick={() => onOpenBooking(room.name)}
                        className="w-full sm:w-auto flex-1 px-6 py-2.5 text-xs tracking-wider uppercase font-semibold text-[#0B0517] bg-gradient-to-r from-[#D4AF37] via-[#E8C766] to-[#C59A27] hover:brightness-110 rounded-sm shadow-[0_0_15px_rgba(212,175,55,0.25)] transition-all flex items-center justify-center space-x-2"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Book This Room</span>
                      </button>

                      <button
                        onClick={() => onSelectRoom(room)}
                        className="w-full sm:w-auto px-5 py-2.5 text-xs tracking-wider uppercase font-medium text-[#EDE8DE] hover:text-[#FAF7F2] border border-[#D4AF37]/35 hover:border-[#D4AF37] rounded-sm transition-colors flex items-center justify-center space-x-1.5"
                      >
                        <Info className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>View Details</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA Block */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="relative p-10 sm:p-14 bg-gradient-to-r from-[#170A2E] via-[#240F47] to-[#170A2E] border border-[#D4AF37]/40 rounded-sm text-center space-y-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] block">
            Direct Reservation Advantage
          </span>

          <h3 className="font-serif text-3xl sm:text-4xl text-[#FAF7F2]">
            Book Your Stay at Sürmeli Adana Hotel
          </h3>

          <p className="text-xs sm:text-sm text-[#EDE8DE]/80 max-w-xl mx-auto leading-relaxed font-light">
            Enjoy our signature Turkish breakfast, dedicated concierge attention, and complimentary flexible cancellation options when booking directly.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-semibold text-[#0B0517] bg-gradient-to-r from-[#D4AF37] to-[#E8C766] hover:brightness-110 rounded-sm shadow-md transition-all flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Stay</span>
            </button>

            <a
              href={`tel:${HOTEL_INFO.phoneRaw}`}
              className="w-full sm:w-auto px-6 py-3.5 text-xs tracking-[0.2em] uppercase text-[#EDE8DE] hover:text-[#F3E5AB] border border-[#D4AF37]/40 rounded-sm transition-colors flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>Call +90 322 352 36 00</span>
            </a>
          </div>

          <GoldDivider className="mt-8" />
        </div>
      </section>
    </div>
  );
};
