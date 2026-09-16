export const siteConfig = {
  name: "London Arms",
  tagline: "British Charm Meets Indian Soul",
  description: "The Largest Indian Dining Experience in Melbourne’s Historic 1854 Building",
  
  // Centralized OpenTable reservation URL
  bookingUrl: "https://www.opentable.com.au/r/london-arms-reservations-south-melbourne?restref=302801&lang=en-AU&ot_source=Restaurant%20website",
  
  // Contact details
  phone: "+61 421 620 706",
  phoneRaw: "+61421620706",
  email: "info@londonarms.com.au",
  eventsEmail: "events@londonarms.com.au",
  address: "160 Clarendon St, South Melbourne VIC 3205",
  addressUrl: "https://maps.google.com/?q=160+Clarendon+St,+South+Melbourne+VIC+3205",
  
  // Operating Hours
  hours: "Monday to Sunday : 5PM to 10PM",
  
  // Social links
  instagram: "https://www.instagram.com/londonarms_restaurant?igsh=NDkxN3pmOTR2bHh6",
  facebook: "https://facebook.com/londonarmsrestaurant",

  // Navigation Links
  navLinks: [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about-us" },
    { 
      label: "Menus", 
      path: "/menus",
      subItems: [
        { label: "Dinner Menu", path: "/menus?tab=dinner" },
        { label: "Spirit Menu", path: "/menus?tab=spirit" },
        { label: "Catering Menu", path: "/menus?tab=catering" }
      ]
    },
    { label: "Gallery", path: "/gallery" },
    { label: "What's On", path: "/whats-on" },
    { label: "First Floor", path: "/first-floor" },
    { label: "Private Dining", path: "/private-dining" },
    { label: "Rooftop Bar", path: "/rooftop" },
    { label: "Event Booking", path: "/events" },
    { label: "Contact Us", path: "/contact-us" }
  ]
};
