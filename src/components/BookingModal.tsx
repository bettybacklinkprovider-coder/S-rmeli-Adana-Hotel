import React, { useState } from 'react';
import { X, Calendar, Phone, CheckCircle2, User, Mail, Users, FileText } from 'lucide-react';
import { BookingFormData } from '../types';
import { HOTEL_INFO, ROOMS_DATA } from '../data/hotelData';
import { GoldDivider } from './GoldDivider';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRoom?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultRoom = 'Deluxe Room',
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    checkIn: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    checkOut: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
    guests: 2,
    roomPreference: defaultRoom,
    specialRequest: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email is required';
    if (!formData.phone.trim() || formData.phone.length < 8) errs.phone = 'Valid contact phone number is required';
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

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  const nights = Math.max(
    1,
    Math.round(
      (new Date(formData.checkOut).getTime() - new Date(formData.checkIn).getTime()) /
        (1000 * 60 * 60 * 24)
    ) || 1
  );

  const selectedRoom = ROOMS_DATA.find((r) => r.name === formData.roomPreference) || ROOMS_DATA[0];
  const estimatedCost = selectedRoom.pricePerNight * nights;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#120824] border border-[#D4AF37]/35 rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#D4AF37]/25 bg-[#1A0C33]">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">
              Sürmeli Adana Hotel · Reservation Engine
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-[#FAF7F2] tracking-wide">
              {submitted ? 'Booking Request Received' : 'Reserve Your Luxury Stay'}
            </h3>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-1.5 text-[#EDE8DE]/70 hover:text-[#FAF7F2] hover:bg-[#251047] rounded-sm transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-4 space-y-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#2B104A] border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                  Reservation Reference Number
                </span>
                <p className="font-mono text-2xl font-bold text-[#F3E5AB] mt-1 tracking-wider">
                  {bookingRef}
                </p>
                <p className="text-sm text-[#EDE8DE]/80 mt-2 max-w-md mx-auto">
                  Thank you, <strong className="text-[#FAF7F2]">{formData.fullName}</strong>. Our front office desk has received your booking inquiry for Sürmeli Adana Hotel.
                </p>
              </div>

              {/* Summary card */}
              <div className="p-4 bg-[#180C30] border border-[#D4AF37]/25 text-left text-xs space-y-2 rounded-sm max-w-lg mx-auto">
                <div className="flex justify-between py-1 border-b border-[#D4AF37]/15">
                  <span className="text-[#EDE8DE]/60">Room Selection:</span>
                  <span className="font-semibold text-[#FAF7F2]">{formData.roomPreference}</span>
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
                <div className="flex justify-between py-1 border-b border-[#D4AF37]/15">
                  <span className="text-[#EDE8DE]/60">Contact Email & Phone:</span>
                  <span className="text-[#FAF7F2]">{formData.email} · {formData.phone}</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-[#EDE8DE]/60">Estimated Room Rate:</span>
                  <span className="font-mono text-[#D4AF37] font-semibold text-sm">
                    €{estimatedCost} (Taxes included)
                  </span>
                </div>
              </div>

              <div className="p-3 bg-[#130726] border border-[#D4AF37]/15 text-xs text-[#EDE8DE]/70 max-w-lg mx-auto">
                <p>
                  A confirmation email with check-in instructions has been generated. For urgent inquiries or custom arrangements, please call our 24/7 reception desk directly at{' '}
                  <a href={`tel:${HOTEL_INFO.phoneRaw}`} className="text-[#D4AF37] font-semibold underline underline-offset-2">
                    {HOTEL_INFO.phone}
                  </a>.
                </p>
              </div>

              <div className="pt-2 flex justify-center space-x-4">
                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 text-xs tracking-wider uppercase font-semibold text-[#0B0517] bg-gradient-to-r from-[#D4AF37] to-[#E8C766] hover:brightness-110 rounded-sm shadow-md transition-all"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#EDE8DE]/80 mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#D4AF37] absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Ahmet Yılmaz"
                      className={`w-full bg-[#180B30] border ${
                        errors.fullName ? 'border-red-400' : 'border-[#D4AF37]/30 focus:border-[#D4AF37]'
                      } rounded-sm pl-10 pr-3 py-2 text-sm text-[#FAF7F2] placeholder-[#EDE8DE]/30 focus:outline-none`}
                    />
                  </div>
                  {errors.fullName && <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#EDE8DE]/80 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#D4AF37] absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. ahmet@example.com"
                      className={`w-full bg-[#180B30] border ${
                        errors.email ? 'border-red-400' : 'border-[#D4AF37]/30 focus:border-[#D4AF37]'
                      } rounded-sm pl-10 pr-3 py-2 text-sm text-[#FAF7F2] placeholder-[#EDE8DE]/30 focus:outline-none`}
                    />
                  </div>
                  {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#EDE8DE]/80 mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#D4AF37] absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+90 5XX XXX XX XX"
                      className={`w-full bg-[#180B30] border ${
                        errors.phone ? 'border-red-400' : 'border-[#D4AF37]/30 focus:border-[#D4AF37]'
                      } rounded-sm pl-10 pr-3 py-2 text-sm text-[#FAF7F2] placeholder-[#EDE8DE]/30 focus:outline-none`}
                    />
                  </div>
                  {errors.phone && <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>}
                </div>

                {/* Number of Guests */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#EDE8DE]/80 mb-1">
                    Number of Guests
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-[#D4AF37] absolute left-3 top-3 pointer-events-none" />
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                      className="w-full bg-[#180B30] border border-[#D4AF37]/30 focus:border-[#D4AF37] rounded-sm pl-10 pr-3 py-2 text-sm text-[#FAF7F2] focus:outline-none"
                    >
                      <option value={1} className="bg-[#120824]">1 Guest</option>
                      <option value={2} className="bg-[#120824]">2 Guests</option>
                      <option value={3} className="bg-[#120824]">3 Guests</option>
                      <option value={4} className="bg-[#120824]">4 Guests (Suite / Family)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Check-In */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#EDE8DE]/80 mb-1">
                    Check-in Date *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#D4AF37] absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="date"
                      value={formData.checkIn}
                      onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                      className={`w-full bg-[#180B30] border ${
                        errors.checkIn ? 'border-red-400' : 'border-[#D4AF37]/30 focus:border-[#D4AF37]'
                      } rounded-sm pl-10 pr-3 py-2 text-sm text-[#FAF7F2] focus:outline-none`}
                    />
                  </div>
                  {errors.checkIn && <p className="text-[11px] text-red-400 mt-1">{errors.checkIn}</p>}
                </div>

                {/* Check-Out */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#EDE8DE]/80 mb-1">
                    Check-out Date *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#D4AF37] absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="date"
                      value={formData.checkOut}
                      onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                      className={`w-full bg-[#180B30] border ${
                        errors.checkOut ? 'border-red-400' : 'border-[#D4AF37]/30 focus:border-[#D4AF37]'
                      } rounded-sm pl-10 pr-3 py-2 text-sm text-[#FAF7F2] focus:outline-none`}
                    />
                  </div>
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
                  className="w-full bg-[#180B30] border border-[#D4AF37]/30 focus:border-[#D4AF37] rounded-sm px-3 py-2 text-sm text-[#FAF7F2] focus:outline-none"
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
                  Special Request or Arrival Details (Optional)
                </label>
                <div className="relative">
                  <FileText className="w-4 h-4 text-[#D4AF37] absolute left-3 top-3 pointer-events-none" />
                  <textarea
                    rows={2}
                    value={formData.specialRequest}
                    onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                    placeholder="e.g. Airport transfer requested, quiet high-floor preference, dietary preferences..."
                    className="w-full bg-[#180B30] border border-[#D4AF37]/30 focus:border-[#D4AF37] rounded-sm pl-10 pr-3 py-2 text-sm text-[#FAF7F2] placeholder-[#EDE8DE]/30 focus:outline-none"
                  />
                </div>
              </div>

              {/* Estimate Summary */}
              <div className="p-3 bg-[#1B0B36] border border-[#D4AF37]/25 rounded-sm flex items-center justify-between text-xs">
                <div>
                  <span className="text-[#EDE8DE]/70">Duration: </span>
                  <span className="font-semibold text-[#FAF7F2]">{nights} Night(s)</span>
                </div>
                <div className="text-right">
                  <span className="text-[#EDE8DE]/70">Est. Total: </span>
                  <span className="font-mono text-base font-bold text-[#F3E5AB]">€{estimatedCost}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href={`tel:${HOTEL_INFO.phoneRaw}`}
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 px-4 py-2.5 text-xs tracking-wider uppercase border border-[#D4AF37]/30 text-[#EDE8DE] hover:text-[#F3E5AB] rounded-sm transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Or Call +90 322 352 36 00</span>
                </a>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-2.5 text-xs tracking-wider uppercase font-semibold text-[#0B0517] bg-gradient-to-r from-[#D4AF37] via-[#E8C766] to-[#C59A27] hover:brightness-110 rounded-sm shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all"
                >
                  Request Booking
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
