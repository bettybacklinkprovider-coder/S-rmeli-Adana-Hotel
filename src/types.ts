export type PageId = 'home' | 'rooms' | 'dining' | 'contact';

export interface RoomItem {
  id: string;
  name: string;
  category: 'Standard' | 'Deluxe' | 'Superior' | 'Executive' | 'Suite';
  tagline: string;
  description: string;
  detailedDescription: string;
  size: string;
  occupancy: string;
  bedding: string;
  bathroom: string;
  features: string[];
  amenities: string[];
  image: string;
  pricePerNight: number;
  highlight?: boolean;
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  roomPreference: string;
  specialRequest: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  turkishTitle: string;
  badge: string;
  turkishBadge: string;
  highlightTag: string;
  description: string;
  turkishDescription: string;
  icon: string;
  image: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  category: 'Dining' | 'Wellness' | 'Service' | 'Facility';
  subtitle: string;
  description: string;
  details: string[];
  image?: string;
  iconName: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'Hotel' | 'Rooms' | 'Dining' | 'Lounge' | 'Breakfast';
  image: string;
  caption: string;
}
