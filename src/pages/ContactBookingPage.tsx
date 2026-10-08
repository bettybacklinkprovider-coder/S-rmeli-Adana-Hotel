import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  Mail,
  Calendar,
  Users,
  Clock,
  Compass,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Building,
  Navigation,
} from 'lucide-react';
import { BookingFormData } from '../types';
import { HOTEL_INFO, ROOMS_DATA } from '../data/hotelData';
import { GoldDivider } from '../components/GoldDivider';

export const ContactBookingPage: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    checkIn: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    checkOut: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
    guests: 2,
    roomPreference: 'Deluxe Room',
    specialRequest: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid Email is required';
    if (!formData.phone.trim() || formData.phone.length < 8) errs.phone = 'Valid Phone is required';
    if (!formData.checkIn) errs.checkIn = 'Check-in date is required';
    if (!formData.checkOut) errs.checkOut = 'Check-out date is required';
    if (new Date(formData.checkOut) <= new Date(formData.checkIn)) {
      errs.checkOut = 'Check-out must be after check-in';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const ref = `SUR-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setSubmitted(true);
  };

  const nights = Math.max(
    1,
    Math.round(
      (new Date(formData.checkOut).getTime() - new Date(formData.checkIn).getTime()) /
        (1000 * 60 * 60 * 24)
    ) || 1
  );

  const selectedRoom = ROOMS_DATA.find((r) => r.name === formData.roomPreference) || ROOMS_DATA[0];
  const totalCost = selectedRoom.pricePerNight * nights;

  // Directions Google Maps Link for Kuruköprü, Sefa Özler Cd. No:49, Adana
  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=S%C3%BCrmeli+Adana+Hotel+Sefa+%C3%96zler+Cd+No+49+Adana';

  return (
    <div className="w-full bg-[#0B0517] text-[#EDE8DE] pt-24 pb-20">
      {/* Hero Header */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden border-b border-[#D4AF37]/20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#180A2E]/80 via-[#0B0517] to-[#0B0517] -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#D4AF37]/5 blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] block">
            Direct Reservations & Inquiries
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#FAF7F2] tracking-wide">
            Plan Your Stay
          </h1>

          <p className="font-serif italic text-xl sm:text-2xl text-gold-gradient">
            We look forward to welcoming you to Sürmeli Adana Hotel.
          </p>

          <p className="text-xs sm:text-sm text-[#EDE8DE]/70 max-w-xl mx-auto leading-relaxed font-light">
            Whether organizing corporate accommodation, long-term visits, or weekend leisure in historic Seyhan, our concierge desk is at your service 24 hours a day.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Info & Quick Actions */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 bg-[#150A2A] border border-[#D4AF37]/30 rounded-sm space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] block">
                  Property Information
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#FAF7F2] mt-1">
                  {HOTEL_INFO.name}
                </h2>
                <p className="font-serif italic text-sm text-[#F3E5AB] mt-1">
                  Kuruköprü, Seyhan / Adana
                </p>
              </div>

              {/* Direct Details */}
              <div className="space-y-4 text-xs leading-relaxed border-t border-[#D4AF37]/15 pt-5">
                <div className="flex items-start space-x-3.5">
                  <Phone className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#EDE8DE]/50 block uppercase text-[10px] tracking-wider">
                      Telephone
                    </span>
                    <a
                      href={`tel:${HOTEL_INFO.phoneRaw}`}
                      className="font-mono text-base font-semibold text-[#FAF7F2] hover:text-[#F3E5AB] transition-colors"
                    >
                      {HOTEL_INFO.phone}
                    </a>
                    <p className="text-[11px] text-[#EDE8DE]/60 mt-0.5">
                      Available 24 hours daily for reservations & guest services
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#EDE8DE]/50 block uppercase text-[10px] tracking-wider">
                      Physical Address
                    </span>
                    <p className="text-[#FAF7F2] font-medium text-xs leading-relaxed">
                      {HOTEL_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <Mail className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#EDE8DE]/50 block uppercase text-[10px] tracking-wider">
                      Reservations Email
                    </span>
                    <a
                      href={`mailto:${HOTEL_INFO.email}`}
                      className="text-[#FAF7F2] hover:text-[#F3E5AB] transition-colors"
                    >
                      {HOTEL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <Clock className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#EDE8DE]/50 block uppercase text-[10px] tracking-wider">
                      Check-In & Check-Out
                    </span>
                    <p className="text-[#FAF7F2]">Check-in from 14:00 · Check-out until 12:00</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions: Call Hotel & Get Directions */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${HOTEL_INFO.phoneRaw}`}
                  className="flex-1 py-3 text-xs tracking-wider uppercase font-semibold text-[#0B0517] bg-gradient-to-r from-[#D4AF37] to-[#E8C766] hover:brightness-110 rounded-sm shadow-md transition-all flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Hotel</span>
                </a>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 text-xs tracking-wider uppercase font-medium text-[#FAF7F2] border border-[#D4AF37]/40 hover:border-[#D4AF37] hover:bg-[#1E0F38] rounded-sm transition-all flex items-center justify-center space-x-2"
                >
                  <Navigation className="w-4 h-4 text-[#D4AF37]" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3 text-[#EDE8DE]/50" />
                </a>
              </div>
            </div>

            {/* Strategic Landmarks in Adana */}
            <div className="p-6 bg-[#120724] border border-[#D4AF37]/20 rounded-sm space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] block font-semibold">
                Strategic Distances
              </span>
              <p className="text-xs text-[#EDE8DE]/70 leading-relaxed font-light">
                Centrally located in Kuruköprü, within fast driving and walking access to all key destinations in Adana:
              </p>
              <div className="space-y-2 text-xs">
                {HOTEL_INFO.adanaLandmarks.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-1.5 border-b border-[#D4AF37]/10"
                  >
                    <span className="text-[#EDE8DE]/85">{item.name}</span>
                    <span className="font-mono text-[#F3E5AB] font-semibold">
                      {item.distance} · {item.driveTime}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Booking Request Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 bg-[#160A2D] border border-[#D4AF37]/35 rounded-sm shadow-[0_15px_45px_rgba(0,0,0,0.7)]">
              {submitted ? (
                <div className="text-center py-8 space-y-6 animate-fadeIn">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#271047] border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.3)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                      Booking Inquiry Confirmed
                    </span>
                    <h3 className="font-serif text-3xl text-[#FAF7F2] mt-1">
                      Reservation Request Received
                    </h3>
                    <p className="font-mono text-xl text-[#F3E5AB] font-bold mt-2">
                      Reference #{bookingRef}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#EDE8DE]/80 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#FAF7F2]">{formData.fullName}</strong>. Our front office desk at Sürmeli Adana Hotel has recorded your inquiry. A formal confirmation itinerary has been prepared for <span className="text-[#F3E5AB] font-semibold">{formData.email}</span>.
                  </p>

                  {/* Summary voucher card */}
                  <div className="p-5 bg-[#120724] border border-[#D4AF37]/25 text-left text-xs space-y-2.5 rounded-sm max-w-md mx-auto">
                    <div className="flex justify-between py-1 border-b border-[#D4AF37]/15">
                      <span className="text-[#EDE8DE]/60">Hotel:</span>
                      <span className="text-[#FAF7F2] font-semibold">Sürmeli Adana Hotel</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#D4AF37]/15">
                      <span className="text-[#EDE8DE]/60">Room Type:</span>
                      <span className="text-[#FAF7F2] font-semibold">{formData.roomPreference}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#D4AF37]/15">
                      <span className="text-[#EDE8DE]/60">Dates:</span>
                      <span className="text-[#FAF7F2]">
                        {formData.checkIn} to {formData.checkOut} ({nights} {nights === 1 ? 'night' : 'nights'})
                      </span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#D4AF37]/15">
                      <span className="text-[#EDE8DE]/60">Guests:</span>
                      <span className="text-[#FAF7F2]">{formData.guests} Guest(s)</span>
                    </div>
                    <div className="flex justify-between pt-1">
                      <span className="text-[#EDE8DE]/60">Estimated Room Total:</span>
                      <span className="font-mono text-[#D4AF37] font-bold text-sm">
                        €{totalCost} (VAT included)
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 text-xs tracking-wider uppercase font-semibold text-[#0B0517] bg-gradient-to-r from-[#D4AF37] to-[#E8C766] rounded-sm transition-all shadow-md"
                    >
                      Make Another Inquiry
                    </button>
                    <a
                      href={`tel:${HOTEL_INFO.phoneRaw}`}
                      className="px-6 py-2.5 text-xs tracking-wider uppercase text-[#EDE8DE] border border-[#D4AF37]/40 rounded-sm hover:text-[#F3E5AB] transition-colors"
                    >
                      Call Front Desk
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-[#D4AF37]/20 pb-4">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                      Reservation Form
                    </span>
                    <h3 className="font-serif text-2xl text-[#FAF7F2] mt-1">
                      Request Your Room Reservation
                    </h3>
                    <p className="text-xs text-[#EDE8DE]/70 mt-1">
                      Direct booking guarantees lowest rates and priority room allocation.
                    </p>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#EDE8DE]/80 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Mehmet Can"
                        className={`w-full bg-[#120724] border ${
                          errors.fullName ? 'border-red-400' : 'border-[#D4AF37]/30 focus:border-[#D4AF37]'
                        } rounded-sm px-3.5 py-2.5 text-sm text-[#FAF7F2] placeholder-[#EDE8DE]/30 focus:outline-none`}
                      />
                      {errors.fullName && <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#EDE8DE]/80 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. mehmet@example.com"
                        className={`w-full bg-[#120724] border ${
                          errors.email ? 'border-red-400' : 'border-[#D4AF37]/30 focus:border-[#D4AF37]'
                        } rounded-sm px-3.5 py-2.5 text-sm text-[#FAF7F2] placeholder-[#EDE8DE]/30 focus:outline-none`}
                      />
                      {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Phone & Number of Guests */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#EDE8DE]/80 mb-1">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+90 322 352 36 00"
                        className={`w-full bg-[#120724] border ${
                          errors.phone ? 'border-red-400' : 'border-[#D4AF37]/30 focus:border-[#D4AF37]'
                        } rounded-sm px-3.5 py-2.5 text-sm text-[#FAF7F2] placeholder-[#EDE8DE]/30 focus:outline-none`}
                      />
                      {errors.phone && <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#EDE8DE]/80 mb-1">
                        Number of Guests
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                        className="w-full bg-[#120724] border border-[#D4AF37]/30 focus:border-[#D4AF37] rounded-sm px-3.5 py-2.5 text-sm text-[#FAF7F2] focus:outline-none"
                      >
                        <option value={1} className="bg-[#120824]">1 Guest (Single Occupancy)</option>
                        <option value={2} className="bg-[#120824]">2 Guests (Double Occupancy)</option>
                        <option value={3} className="bg-[#120824]">3 Guests (Triple / Extra Bed)</option>
                        <option value={4} className="bg-[#120824]">4 Guests (Suite)</option>
                      </select>
                    </div>
                  </div>

                  {/* Check-In & Check-Out */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#EDE8DE]/80 mb-1">
                        Check-in Date *
                      </label>
                      <input
                        type="date"
                        value={formData.checkIn}
                        onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                        className={`w-full bg-[#120724] border ${
                          errors.checkIn ? 'border-red-400' : 'border-[#D4AF37]/30 focus:border-[#D4AF37]'
                        } rounded-sm px-3.5 py-2.5 text-sm text-[#FAF7F2] focus:outline-none`}
                      />
                      {errors.checkIn && <p className="text-[11px] text-red-400 mt-1">{errors.checkIn}</p>}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#EDE8DE]/80 mb-1">
                        Check-out Date *
                      </label>
                      <input
                        type="date"
                        value={formData.checkOut}
                        onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                        className={`w-full bg-[#120724] border ${
                          errors.checkOut ? 'border-red-400' : 'border-[#D4AF37]/30 focus:border-[#D4AF37]'
                        } rounded-sm px-3.5 py-2.5 text-sm text-[#FAF7F2] focus:outline-none`}
                      />
                      {errors.checkOut && <p className="text-[11px] text-red-400 mt-1">{errors.checkOut}</p>}
                    </div>
                  </div>

                  {/* Room Preference */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#EDE8DE]/80 mb-1">
                      Room Preference
                    </label>
                    <select
                      value={formData.roomPreference}
                      onChange={(e) => setFormData({ ...formData, roomPreference: e.target.value })}
                      className="w-full bg-[#120724] border border-[#D4AF37]/30 focus:border-[#D4AF37] rounded-sm px-3.5 py-2.5 text-sm text-[#FAF7F2] focus:outline-none"
                    >
                      {ROOMS_DATA.map((room) => (
                        <option key={room.id} value={room.name} className="bg-[#120824]">
                          {room.name} ({room.size}) - from €{room.pricePerNight} / night
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Special Request */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#EDE8DE]/80 mb-1">
                      Special Request
                    </label>
                    <textarea
                      rows={3}
                      value={formData.specialRequest}
                      onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                      placeholder="e.g. Flight arrival time, airport transfer assistance, high floor, non-smoking preference..."
                      className="w-full bg-[#120724] border border-[#D4AF37]/30 focus:border-[#D4AF37] rounded-sm px-3.5 py-2.5 text-sm text-[#FAF7F2] placeholder-[#EDE8DE]/30 focus:outline-none"
                    />
                  </div>

                  {/* Summary row */}
                  <div className="p-3 bg-[#110722] border border-[#D4AF37]/20 rounded-sm flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[#EDE8DE]/60">Duration: </span>
                      <span className="text-[#FAF7F2] font-semibold">{nights} Night(s)</span>
                    </div>
                    <div>
                      <span className="text-[#EDE8DE]/60">Estimated Total: </span>
                      <span className="font-mono text-base font-bold text-[#F3E5AB]">€{totalCost}</span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 text-xs tracking-[0.2em] uppercase font-semibold text-[#0B0517] bg-gradient-to-r from-[#D4AF37] via-[#E8C766] to-[#C59A27] hover:brightness-110 rounded-sm shadow-[0_0_20px_rgba(212,175,55,0.35)] transition-all flex items-center justify-center space-x-2"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Request Booking</span>
                    </button>
                  </div>

                  <div className="flex items-center space-x-2 text-[11px] text-[#EDE8DE]/60 justify-center">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Direct reservation inquiry. No upfront credit card deduction required today.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Styled Interactive Location & Map Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="p-8 bg-[#140828] border border-[#D4AF37]/30 rounded-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                Location & Accessibility
              </span>
              <h3 className="font-serif text-2xl text-[#FAF7F2] mt-1">
                How to Reach Sürmeli Adana Hotel
              </h3>
              <p className="text-xs text-[#EDE8DE]/70 mt-1">
                Kuruköprü, Sefa Özler Cd. No:49, 01060 Seyhan/Adana, Türkiye
              </p>
            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 text-xs tracking-wider uppercase font-semibold text-[#0B0517] bg-[#D4AF37] hover:bg-[#E8C766] rounded-sm transition-colors whitespace-nowrap self-start md:self-auto"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </div>

          {/* Interactive Stylized Map Card */}
          <div className="relative aspect-[16/7] w-full rounded-sm overflow-hidden border border-[#D4AF37]/25 bg-[#0e061d] flex items-center justify-center">
            {/* Background grid simulation of map */}
            <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
            
            {/* Seyhan river curve graphic */}
            <svg
              className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
              preserveAspectRatio="none"
              viewBox="0 0 800 400"
            >
              <path
                d="M 100,0 Q 250,150 400,200 T 700,400"
                fill="none"
                stroke="#60A5FA"
                strokeWidth="16"
              />
            </svg>

            {/* Map center marker */}
            <div className="relative z-10 text-center p-6 bg-[#160A2D]/95 backdrop-blur-md border border-[#D4AF37]/60 rounded-sm shadow-2xl max-w-md mx-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#271047] border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] mb-3 shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                <MapPin className="w-6 h-6 animate-bounce" />
              </div>
              <h4 className="font-serif text-lg text-[#FAF7F2] font-semibold">
                Sürmeli Adana Hotel
              </h4>
              <p className="text-xs text-[#EDE8DE]/80 mt-1">
                Sefa Özler Caddesi No:49, Kuruköprü, Seyhan
              </p>
              <p className="text-[11px] font-mono text-[#D4AF37] mt-2">
                Coordinates: 36.9897° N, 35.3256° E
              </p>
              <div className="mt-4 pt-3 border-t border-[#D4AF37]/20 flex items-center justify-around text-[11px] text-[#EDE8DE]/70">
                <span>Airport: ~8 mins</span>
                <span>·</span>
                <span>Stone Bridge: ~4 mins</span>
                <span>·</span>
                <span>Valet On-Site</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
