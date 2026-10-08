/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId, RoomItem } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { RoomsPage } from './pages/RoomsPage';
import { DiningFacilitiesPage } from './pages/DiningFacilitiesPage';
import { ContactBookingPage } from './pages/ContactBookingPage';
import { BookingModal } from './components/BookingModal';
import { RoomDetailModal } from './components/RoomDetailModal';
import { GalleryModal } from './components/GalleryModal';
import { GALLERY_PHOTOS } from './data/hotelData';

export default function App() {
  // Sync page state with window.location.hash
  const getInitialPage = (): PageId => {
    const hash = window.location.hash.replace('#', '');
    if (['home', 'rooms', 'dining', 'contact'].includes(hash)) {
      return hash as PageId;
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageId>(getInitialPage);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [defaultBookingRoom, setDefaultBookingRoom] = useState<string>('Deluxe Room');
  const [selectedRoomForDetail, setSelectedRoomForDetail] = useState<RoomItem | null>(null);
  const [galleryPhotoIndex, setGalleryPhotoIndex] = useState<number | null>(null);

  // Sync hash changes with state
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'rooms', 'dining', 'contact'].includes(hash)) {
        setCurrentPage(hash as PageId);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (roomPref?: string) => {
    if (roomPref) {
      setDefaultBookingRoom(roomPref);
    }
    setIsBookingModalOpen(true);
  };

  const handleSelectRoom = (room: RoomItem) => {
    setSelectedRoomForDetail(room);
  };

  const handleBookFromRoomDetail = (roomName: string) => {
    setSelectedRoomForDetail(null);
    handleOpenBooking(roomName);
  };

  return (
    <div className="min-h-screen bg-[#0B0517] text-[#EDE8DE] flex flex-col font-sans selection:bg-[#D4AF37]/30 selection:text-[#F3E5AB]">
      {/* Sticky Luxury Navigation Bar */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Page Area — 4 Distinct Pages */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
            onSelectRoom={handleSelectRoom}
            onOpenGallery={(index) => setGalleryPhotoIndex(index ?? 0)}
          />
        )}

        {currentPage === 'rooms' && (
          <RoomsPage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
            onSelectRoom={handleSelectRoom}
          />
        )}

        {currentPage === 'dining' && (
          <DiningFacilitiesPage
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
            onOpenGallery={(index) => setGalleryPhotoIndex(index)}
          />
        )}

        {currentPage === 'contact' && <ContactBookingPage />}
      </main>

      {/* Universal Luxury Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Booking Engine Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        defaultRoom={defaultBookingRoom}
      />

      {/* Room Detail Modal */}
      <RoomDetailModal
        room={selectedRoomForDetail}
        onClose={() => setSelectedRoomForDetail(null)}
        onBook={handleBookFromRoomDetail}
      />

      {/* Lightbox Gallery Modal */}
      <GalleryModal
        photos={GALLERY_PHOTOS}
        currentIndex={galleryPhotoIndex}
        onClose={() => setGalleryPhotoIndex(null)}
        onNavigate={(index) => setGalleryPhotoIndex(index)}
      />
    </div>
  );
}
