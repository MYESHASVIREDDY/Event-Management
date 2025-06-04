import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import AutoCarousel from '../components/AutoCarousel';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { useForm } from 'react-hook-form';
import { cn } from '@/lib/utils';
import emailjs from 'emailjs-com'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_reruu0w',
  TEMPLATE_ID: 'template_ip4jhxj',
  PUBLIC_KEY: '_zM-EMpJARncQb-iU'
};

// Service data with Skyra packages
const serviceDetails = {
  // ... (your existing service details)
    weddings: {
    title: "Wedding Planning Services",
    image: "https://i.pinimg.com/736x/2d/53/3f/2d533f74690c34aec7887e556488b3b6.jpg",
    backgroundImage: "https://plus.unsplash.com/premium_photo-1682092597591-81f59c80d9ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGluZGlhbiUyMHdlZGRpbmdzfGVufDB8fDB8fHww",
    description: "Our wedding planning services are designed to make your special day truly memorable. We handle everything from photography to the final send-off, ensuring a stress-free experience for you and your loved ones.",
    features: [
      "Complete photography and videography coverage",
      "Custom theme décor and staging",
      "Catering services for all dietary preferences",
      "Professional event coordination",
      "Guest management and RSVP tracking",
      "Budget planning and vendor management",
      "Timeline creation and execution",
      "Pre-wedding and post-wedding shoots"
    ],
    pricing: {
      bliss: { 
         price: 162499, 
        name: "Bliss Package", 
        description: "Ideal for couples seeking elegant yet essential coverage with basic décor & catering.",
        details: [
          "📸 Photography & Video:",
          "• Engagement: Regular photo & video – 6 hrs",
          "• Wedding: Regular photography & videography – 6 hrs",
          "• Reception: Regular photography – 4 hrs",
          "• 1 Album (100 sheets – Bride OR Groom)",
          "• Edited Photo Gallery (up to 300 images)",
          "• Highlight Video (2–3 min)",
          "",
          "🎨 Décor & Catering:",
          "• Basic Themed Decoration (Standard floral/pastel setup – entry + stage)",
          "• Buffet Catering (Veg) – up to 100 guests (customizable menu)",
          "",
          "Decoration & catering options can be upgraded as per your theme & guest count"
        ]
      },
      premium: { 
        price: 297499, 
        name: " Premium Charm Package", 
        description: "For couples seeking cinematic storytelling, elegant ambiance, and great food.",
        details: [
          "📸 Photography & Video:",
          "• Pre-Wedding: Candid photo + cinematic video – 6 hrs",
          "• Engagement: Regular + Candid + Cinematic – 6 hrs",
          "• Haldi/Mehendi: Candid + Cinematic – 6 hrs each",
          "• Wedding: Full-day coverage – 12 hrs",
          "• Reception: Full coverage – 6 hrs",
          "• 2 Albums (Bride & Groom – 100 sheets each)",
          "• 3 Teasers: Wedding, Engagement & Haldi",
          "• Edited Gallery (500+ images)",
          "• LED Screen (1) – Wedding Day",
          "",
          "🎨 Décor & Catering:",
          "• Customizable Theme Décor (Choose: Boho, Royal, Minimalist, etc.)",
          "• Buffet Catering (Veg/Non-Veg) – up to 200 guests",
          "• Floral Couple Entry Setup",
          "",
          "Décor color palette, florals, and catering menus can be tailored to your preference"
        ]
      },
      luxury: { 
        price: 549999, 
        name: "Luxury Legacy Package", 
        description: "All-inclusive grand experience with luxury-level aesthetics & gourmet catering.",
        details: [
          "📸 Photography & Video:",
          "• All features of Premium Charm Package",
          "• Drone Coverage (Wedding)",
          "• Multi-cam Setup (up to 4 angles)",
          "• Customized Wedding Invitation Video",
          "• Full Cinematic Wedding Film (20–30 min)",
          "• Live Streaming Setup",
          "• Same-Day Edits for Reception",
          "• 3 Albums (Bride, Groom & Family)",
          "• LED Screens (2)",
          "• Dedicated Project Manager",
          "• Post-Wedding Couple Shoot – 1 hour",
          "",
          "🎨 Décor & Catering:",
          "• Luxury Theme Décor (Bollywood, Palace, Floral Dome, or Custom Theme)",
          "• Premium Multi-Cuisine Catering – up to 300 guests (mocktails, dessert bar, live counters)",
          "• Lounge Seating + Stage Styling",
          "",
          "Each element is customizable with a pre-event planning session with our design & culinary teams."
        ]
      }
    },
    gallery: [
      "https://media.istockphoto.com/id/2127644067/photo/family-and-friends-showering-floral-blessings-on-bride-and-groom-during-haldi-ceremony.webp?a=1&b=1&s=612x612&w=0&k=20&c=2zcZxLtGlErFf5mQIyn6h6RuJQcDY-ydgCi9qYDZSF8=",
      "https://media.istockphoto.com/id/992097166/photo/indian-women-showing-hand-with-henna-tattoo-art.jpg?s=612x612&w=0&k=20&c=RiU13Ei_eBW74ptC-LZZ8FYFwM9t9u4ISpPtoSC_UE0=",
      "https://plus.unsplash.com/premium_photo-1670524465634-93cf255ffa8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGluZGlhbiUyMHdlZGRpbmclMjBjZXJlbW9uaWVzfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1574017121722-2c8ead5a7e90?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://media.istockphoto.com/id/1186214696/photo/hindu-wedding-ritual-wherein-bride-and-groom-hand.webp?a=1&b=1&s=612x612&w=0&k=20&c=TDlfitfgP1f1Z2zp6WBW2Ezyk5Ed3BCeD9HcNEVoKzo="
    ]
  },
  birthdays: {
    title: "Birthday Party Planning",
    image: "https://i.pinimg.com/736x/f1/70/57/f17057c5c5d8431232a00372e6475666.jpg",
    backgroundImage: "https://i.pinimg.com/736x/79/b5/48/79b5489f26021dde7ad047fb9ac722a8.jpg",
    description: "Make your birthday celebration unforgettable with our custom party planning services. From intimate gatherings to extravagant celebrations, we create memorable experiences for all ages.",
    features: [
      "Creative theme development and execution",
      "Decoration and setup",
      "Entertainment planning and coordination", 
      "Custom cake and catering arrangements",
      "Party favors and gift coordination",
      "Photography and videography services",
      "Guest invitations and management",
      "Setup and cleanup services"
    ],
    pricing: {
      fun: { 
        price: 18749, 
        name: " Regular Fun Package", 
        description: " Perfect for small gatherings or cozy at-home celebrations.",
        details: [
          "Ideal for:",
          "• Kids' birthday at home",
          "• Close family-only parties",
          "",
          "Includes:",
          "• Event coordination (basic scheduling)",
          "• Simple theme decoration (balloons, backdrop)",
          "• Cake table setup",
          "• Background music or playlist",
          "• Basic photography (up to 2 hours)",
          "• Light snacks or cake catering (optional)"
        ]
      },
      premium: { 
        price: 31249, 
        name: " Premium Party Package", 
        description: " Ideal for stylish celebrations in banquet halls, terraces, or clubhouses.",
        details: [
          "Ideal for:",
          "• Themed birthdays (cartoon, jungle, etc.)",
          "• Children, teens, and adults",
          "",
          "Includes:",
          "• Complete planning & execution",
          "• Themed decor: Balloon arches, stage backdrop, welcome board",
          "• Game zone with 1–2 activities & party host",
          "• Cake table setup + themed props",
          "• Multi-cuisine catering (snacks + drinks)",
          "• DJ or music playlist",
          "• Professional photography (up to 4 hours)"
        ]
      },
      luxury: { 
        price: 56249, 
        name: "Luxury Bash Package", 
        description: " Premium experience with stunning décor, live acts, and gourmet food.",
        details: [
          "Ideal for:",
          "• Milestone birthdays (1st, 18th, 30th, 50th)",
          "• Large venue-based or surprise parties",
          "",
          "Includes:",
          "• Concept & theme development (e.g., Carnival, Hollywood, Neon)",
          "• Designer décor: Balloon art, arches, stage design, entry tunnel, lights",
          "• Photo booth & couple entry setup",
          "• Full sound + DJ + live entertainer/magician",
          "• Return gift planning",
          "• Choice of snacks, lunch, or dinner catering (veg/non-veg, multiple cuisines)",
          "• Cinematic videography + full photography team",
          "• Guest handling & RSVP coordination"
        ]
      }
    },
    gallery: [
      "https://i.pinimg.com/736x/f1/28/21/f1282163b51b4933423b295398cef6e6.jpg",
      "https://i.pinimg.com/736x/1f/82/63/1f826336474bf765eb6b6527ca61256f.jpg",
      "https://i.pinimg.com/736x/f7/8e/fb/f78efbb16f383d800da22b42ee042fed.jpg",
      "https://i.pinimg.com/736x/39/a4/61/39a4614015fad6e3aee6ea1d230882ca.jpg"
    ]
  },
  corporate: {
    title: "Corporate Event Management",
    image: "https://i.pinimg.com/736x/83/df/1d/83df1d516c0fba80261c19350c2e5a5a.jpg",
    backgroundImage: "https://i.pinimg.com/736x/73/3b/0e/733b0e4b1e67f4cfb7240927f92b752e.jpg",
    description: "Elevate your company events with our professional corporate event management services. From conferences and meetings to team building activities and company celebrations, we deliver polished, impactful events.",
    features: [
      "Strategic event planning and execution",
      "Registration and attendee management",
      "Audio-visual and technical support",
      "Speaker and VIP coordination",
      "Branded materials and signage",
      "Catering and accommodation arrangements",
      "Post-event reporting and analytics"
    ],
    pricing: {
      essential: { 
        price: 97499, 
        name: "Essential Meet Package", 
        description: "Perfect for small team meetings or internal gatherings.",
        details: [
          "Ideal for:",
          "• Board Meetings",
          "• Internal Team Huddles",
          "• Client Review Sessions",
          "",
          "Includes:",
          "• Event scheduling & planning support",
          "• Basic AV setup: projector, mic",
          "• Light refreshments (tea/snacks)",
          "• 1 coordinator on-site"
        ]
      },
      pro: { 
        price: 197499, 
        name: " Pro Launch Package", 
        description: " Designed for impactful mid-scale product launches and executive client events.",
        details: [
          "Ideal for:",
          "• Product Launches",
          "• Press Demos",
          "• CXO-level Client Meetings",
          "",
          "Includes:",
          "• Full event conceptualization",
          "• Branded venue decoration",
          "• AV setup + live demonstration support",
          "• Press/media coordination",
          "• Photography & highlight video",
          "• Light entertainment (host, anchor, musical act)",
          "• Mid-level catering (multi-cuisine snacks or lunch)"
        ]
      },
      executive: { 
        price: 297499, 
        name: "Executive Gala Package", 
        description: "A complete luxury package for formal annual gatherings or award nights.",
        details: [
          "Ideal for:",
          "• Annual Gala Dinners",
          "• Corporate Awards Night",
          "• Holiday or Year-End Events",
          "",
          "Includes:",
          "• Complete event planning & logistics",
          "• Premium venue with themed decor",
          "• Sit-down curated dinner (multi-course)",
          "• Live entertainment: music, dance, speakers",
          "• Red carpet experience or photo zone",
          "• Photographer + videographer team",
          "• Artist/speaker bookings",
          "• Mid-level catering (multi-cuisine snacks or lunch or dinner)"
        ]
      }
    },
    gallery: [
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      "https://images.unsplash.com/photo-1560523160-754a9e25c68f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://i.pinimg.com/736x/8a/5c/1d/8a5c1ded741ab3a3a3b05bc11f4bf048.jpg",
      "https://i.pinimg.com/736x/3e/f3/7b/3ef37b6667a660805ef9bb7869312e1d.jpg"
    ]
  },
  college: {
    title: "College Event Production",
    image: "https://i.pinimg.com/736x/13/9e/e1/139ee17ba0cbc9fd54cec9ce9b6b4cfc.jpg",
    backgroundImage: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    description: "Our college event production services bring your campus events to life. From cultural festivals and academic conferences to graduation ceremonies, we deliver exceptional experiences for students, faculty, and alumni.",
    features: [
      "Festival and event concept development",
      "Campus coordination",
      "Stage design and production",
      "Talent booking and management",
      "Security and crowd management",
      "Marketing and promotion support",
      "Technical production (sound, lighting, video)",
      "Event logistics and volunteer coordination"
    ],
    pricing: {
      spark: { 
        price: 197499, 
        name: "Campus Spark Package", 
        description: "Ideal for 1-day cultural fests or tech competitions with essential coverage.",
        details: [
          "Includes:",
          "• Planning & scheduling for competitions",
          "• Basic stage setup + banner backdrop + lighting",
          "• AV system with mic, speakers",
          "• Emcee / anchor for event hosting",
          "• Snacks catering (4 items + drink)",
          "• Photography (4 hrs)",
          "• Social media poster design (2–3 posts)"
        ]
      },
      pulse: { 
        price: 322499, 
        name: " Talent Pulse Package", 
        description: " Perfect for 1–2 day inter-college fests with mixed events.",
        details: [
          "Includes:",
          "• Full planning, coordination, guest & artist management",
          "• Themed decor: stage, entry gate, banners, prop zones",
          "• Stage lights, LED display, sound system",
          "• Snacks + Lunch catering (up to 150 students)",
          "• Professional host, DJ, and workshop facilitation",
          "• Photography + event highlights reel",
          "• Social media marketing support"
        ]
      },
      royale: { 
        price: 447499, 
        name: " Festival Royale Package", 
        description: " For large-scale fests or fests with celeb nights, DJs, or influencer hosts.",
        details: [
          "Includes:",
          "• Complete fest planning (2–3 days)",
          "• Designer stage setup with 3D decor, lighting truss",
          "• Entry gates, college branding, photo booths",
          "• Artist/influencer booking (celebrity night)",
          "• Buffet lunch + refreshments (custom menu)",
          "• Crowd management + security + ID pass support",
          "• Photography, drone + teaser video",
          "• Sponsorship deck support"
        ]
      }
    },
    gallery: [
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://i.pinimg.com/736x/27/2f/60/272f60eae8165346b45ac8da3a218e16.jpg",
      "https://i.pinimg.com/736x/d3/56/63/d3566319fd06a0cf9e7b90e71e78e214.jpg"
    ]
  },
  anniversaries: {
    title: "Anniversary Celebrations",
    image: "https://i.pinimg.com/736x/d3/0b/99/d30b99c8c8bbbaf61dfab7878eb6893a.jpg",
    backgroundImage: "https://i.pinimg.com/736x/c6/40/69/c64069fe181c69d6ea340d61ce2be61f.jpg",
    description: "Celebrate your love story with our anniversary celebration services. From intimate gatherings to grand milestone celebrations, we create memorable experiences that honor your journey together.",
    features: [
      "Custom anniversary theme development",
      "Decoration and setup",
      "Photography and videography services",
      "Catering and dining arrangements",
      "Entertainment coordination",
      "Guest management and invitations",
      "Memory displays and photo galleries",
      "Special surprise arrangements"
    ],
    pricing: {
      classic: { 
        price: 24999, 
        name: " Classic Love Package", 
        description: " A charming, cozy setup ideal for intimate anniversaries at home or a private hall.",
        details: [
          "Includes:",
          "• Event planning & coordination (half-day)",
          "• Basic themed decor (balloons, floral centerpiece, cake table)",
          "• Background music (playlist or soft instrumental)",
          "• Photography (up to 2 hours)",
          "• Snacks catering (fixed veg menu: 2 starters, 1 sweet, 1 beverage)",
          "• Cake table styling + name board"
        ]
      },
      eternal: { 
        price: 37499, 
        name: " Eternal Bond Package", 
        description: " A medium-scale anniversary celebration with personalization and curated ambiance.",
        details: [
          "Includes:",
          "• Event planning & logistics",
          "• Custom decor: Fairy lights, couple backdrop, photo wall, candles",
          "• Vow renewal zone or couple entry setup",
          "• Multi-cuisine catering (snacks + buffet dinner)",
          "• DJ or soft live music",
          "• Professional photography (4 hrs)",
          "• Toasts or guest tribute mic setup"
        ]
      },
      legacy: { 
        price:62499, 
        name: " Grand Legacy Package", 
        description: " Luxury experience for milestone anniversaries with an elegant venue-style setup.",
        details: [
          "Includes:",
          "• End-to-end anniversary event management",
          "• Premium designer decor: Canopy, LED initials, floral arch, welcome tunnel",
          "• Stage design for couple vows & speeches",
          "• DJ with sound system OR live instrumental band",
          "• Custom dinner menu (veg/non-veg) + dessert station",
          "• Cinematic photo & video team",
          "• Couple dance floor moment + spotlight",
          "• Guest handling & invite assistance",
          "• Return gifts for 30–50 guests (optional add-on)"
        ]
      }
    },
    gallery: [
      "https://i.pinimg.com/736x/44/c4/0b/44c40bfb9f7604b07a9d4a87b7cc95a1.jpg",
      "https://i.pinimg.com/736x/6a/83/6b/6a836bf925ddb2575060960b5c355ba7.jpg",
      "https://i.pinimg.com/736x/c4/28/c7/c428c7000033d7d6ec3f9fc09bc6630f.jpg",
      "https://i.pinimg.com/736x/87/57/a1/8757a1f2f345765affe53a946397a4c6.jpg"
    ]
  },
  babyshowers: {
    title: "Baby Shower Celebrations",
    image: "https://i.pinimg.com/736x/72/f7/61/72f76146d6b9ed04d72a0c509f69dd71.jpg",
    backgroundImage: "https://i.pinimg.com/736x/b9/46/d6/b946d6e3288ecc27edcf1438aac78f26.jpg",
    description: "Welcome the new arrival with our beautiful baby shower celebration services. We create sweet and memorable experiences that celebrate this special milestone in your family's journey.",
    features: [
      "Themed decoration and setup",
      "Baby shower games and activities",
      "Photography and memory capturing",
      "Catering and refreshment services",
      "Gift coordination and display",
      "Guest management and invitations",
      "Memory book and guest tribute setup",
      "Custom baby shower favors"
    ],
    pricing: {
      blossom: { 
        price: 18749, 
        name: " Blossom Package", 
        description: " A sweet and simple celebration for close friends and family.",
        details: [
          "Includes:",
          "• Event coordination (3-hour setup & support)",
          "• Basic themed decor: pastel balloon bunches, baby props, welcome signage",
          "• Light refreshments (veg menu: 2 snacks + beverage)",
          "• Blessing area setup with seating",
          "• Gift table + games table setup",
          "• Game kit (2–3 interactive games)",
          "• Photography (up to 2 hours)"
        ]
      },
      radiance: { 
        price: 31249, 
        name: "Radiance Package", 
        description: "Balanced experience with elegant decor, games, and more food options.",
        details: [
          "Includes:",
          "• Full event planning & flow management",
          "• Themed backdrop, balloon arch, table styling, cake zone, & baby name standee",
          "• Facilitator for fun baby-themed games & prize distribution",
          "• Snacks + light lunch (4 dishes + sweet + drinks)",
          "• Photography (up to 4 hours)",
          "• Memory board or guest wish corner"
        ]
      },
      grace: { 
        price: 49999, 
        name: " Glow & Grace Package", 
        description: " A premium, photo-worthy baby shower with immersive décor and full meal service.",
        details: [
          "Includes:",
          "• Custom decor concept: Floral theme / Woodland / Boho / Pink-Blue combo",
          "• Entry arch, name board, seating décor, balloon ceiling or canopy",
          "• Host for games, announcements, & blessing ceremony facilitation",
          "• Full-course lunch/dinner (veg/non-veg buffet, desserts)",
          "• Cinematic photography & short video highlights",
          "• Return gifts or thank-you table setup (optional add-on)",
          "• Gift-opening moment capture + parent tribute"
        ]
      }
    },
    gallery: [
      "https://i.pinimg.com/736x/a1/ec/8f/a1ec8f7bb3a97a7a1473b739368369a5.jpg",
      "https://i.pinimg.com/736x/9a/f7/a5/9af7a523a01a310f035f816b57e00b3d.jpg",
      "https://i.pinimg.com/736x/c4/97/f3/c497f38285586733a1ba9bc5a5a59390.jpg",
      "https://i.pinimg.com/736x/49/c3/ac/49c3ac031d1e7a20bc9e00174ba5f627.jpg"
    ]
  },
  
  housewarming: {
    title: "House Warming Celebrations",
    image:"https://i.pinimg.com/736x/49/ee/db/49eedb6fa68f52f23b22e8f593cd092a.jpg",
    backgroundImage: "https://i.pinimg.com/736x/53/00/5a/53005aeebe6d33753dffae8fa4102953.jpg",
    description: "Celebrate your new home with our house warming event services. We create warm, welcoming celebrations that mark the beginning of beautiful memories in your new space with family and friends.",
    features: [
      "Traditional and modern ceremony coordination",
      "Auspicious timing and ritual planning",
      "Home blessing ceremony arrangements",
      "Guest reception and hospitality management",
      "Traditional decoration and rangoli designs",
      "Catering services for all dietary preferences",
      "Photography and videography services",
      "Return gift coordination and presentation"
    ],
    pricing: {
      blessing: { 
        price: 25749, 
        name: " Sacred Start Package", 
        description: "A simple and soulful package ideal for intimate griha pravesh rituals with close family.",
        details: [
          "Includes:",
          "• Basic event coordination + pooja scheduling",
          "• Traditional decor: floral toran, banana leaves, diya stand, entrance garland",
          "• Seating for 20–30 guests",
          "• Snacks catering (veg: 2 starters + sweet + juice)",
          "• Photography (2 hours)",
          "• Puja samagri checklist (client-arranged or add-on)"
        ]
      },
      harmony: { 
        price: 39499, 
        name: " Auspicious Abode Package", 
        description: "Great for mid-sized home openings with both spiritual and celebratory elements.",
        details: [
          "Includes:",
          "• Ritual planning & priest coordination support",
          "• Decor setup: floral stage, rangoli, lamp stands, house entry arch, name board",
          "• Sound playlist or light instrumental setup",
          "• South Indian veg lunch buffet (4–5 items + sweets + beverages)",
          "• Return gift table arrangement",
          "• Professional photography (4 hours)"
        ]
      },
      prosperity: { 
        price: 59249, 
        name: " Divine Dwelling Package", 
        description: "A complete premium experience for new homes with elegance, tradition, and hospitality.",
        details: [
          "Includes:",
          "• End-to-end ceremony planning & guest flow management",
          "• Grand decor setup: floral mandap, LED couple name board, arch walkway, diya wall",
          "• Traditional welcome + live instrumental option",
          "• Full-course veg lunch or dinner catering (custom menu for up to 100 guests)",
          "• Photography + highlight video reel",
          "• Seating, priest stage setup, pooja zone",
          "• Optional: return gifts or token blessings"
        ]
      }
    },
    gallery: [
      "https://i.pinimg.com/736x/68/93/66/689366dc27201d058adc765778d725d4.jpg",
      "https://i.pinimg.com/736x/84/57/2a/84572aa667ff9930a9b87df6617396e2.jpg",
      "https://i.pinimg.com/736x/75/d2/ad/75d2ad6ddd6afc1e6864608858500d0b.jpg",
      "https://i.pinimg.com/736x/ae/75/c9/ae75c9af2bf0baff1c0f9f9eefc6781c.jpg"
    ]
  },
  cradleceremony: {
    title: "Cradle Ceremony (Jatakarma)",
    image: "https://i.pinimg.com/736x/83/37/9c/83379ccbb966bbb0f5afda1e5421ba21.jpg",
    backgroundImage: "https://i.pinimg.com/736x/95/9f/c9/959fc9e5dfa190e184048b2aa7929d29.jpg",
    description: "Honor your newborn with our traditional cradle ceremony services. We create sacred, beautiful celebrations that welcome your little one into the world with blessings, traditions, and joyful family gatherings.",
    features: [
      "Traditional ritual coordination and planning",
      "Sacred cradle decoration and setup",
      "Priest coordination for ceremonies",
      "Traditional music and chanting arrangements",
      "Photography and videography of precious moments",
      "Guest management and seating arrangements",
      "Traditional sweets and prasadam distribution",
      "Customized return gifts and blessing tokens"
    ],
    pricing: {
      sacred: { 
        price: 22499, 
        name: "Tender Moments Package", 
        description: "Perfect for intimate naming or cradle ceremonies at home or a small hall.",
        details: [
          "Includes:",
          "• Event coordination (3–4 hour support)",
          "• Simple floral decor around cradle and cake table",
          "• Traditional welcome board + backdrop",
          "• Snacks catering (veg: 3 starters + sweet + juice)",
          "• Background instrumental playlist",
          "• Photography (2 hours)"
        ]
      },
      divine: { 
        price: 47499, 
        name: " Cherished Celebration Package", 
        description: " Ideal for medium-sized gatherings with spiritual ambiance and playful decor.",
        details: [
          "Includes:",
          "• Full planning & ceremony coordination",
          "• Theme-based decor: cradle stage, baby name board, balloon arch, welcome signage",
          "• Seating setup for family & priest",
          "• South Indian lunch or high-tea snacks buffet (veg only)",
          "• Professional photography (4 hours)",
          "• Optional game or guest wish board"
        ]
      },
      celestial: { 
        price: 68749, 
        name: " Royal Blessings Package", 
        description: " A premium experience designed for grand celebrations in banquet halls or outdoor venues.",
        details: [
          "Includes:",
          "• End-to-end event management",
          "• Designer decor: floral arch, personalized LED nameplate, cradle canopy, walkway setup",
          "• Cradle swing / special chair setup",
          "• Full-course lunch or dinner (custom veg buffet with dessert station)",
          "• Cinematic photography + short video",
          "• Stage host/emcee for rituals & games",
          "• Return gift planning + guest welcome support"
        ]
      }
    },
    gallery: [
      "https://i.pinimg.com/736x/90/7a/33/907a33e2ed91de0c78f378cc6cc92ad5.jpg",
      "https://i.pinimg.com/736x/e4/dc/c1/e4dcc1026e061e73e864e61d929d49b6.jpg",
      "https://i.pinimg.com/736x/1d/e8/44/1de8440a8060985ed297a74a88c4c366.jpg",
      "https://i.pinimg.com/736x/aa/1d/93/aa1d930207151c97b8e2db9741d497ac.jpg"
    ]
  },
  surpriseparties: {
    title: "Surprise Party Planning",
    image: "https://i.pinimg.com/736x/cc/07/d6/cc07d6062013cd10e00b001cbebf1431.jpg",
    backgroundImage: "https://i.pinimg.com/736x/de/e8/46/dee846490a3db1071950f0c3ffd00816.jpg",
    description: "Create unforgettable moments with our surprise party planning services. We handle every detail in secret, ensuring your loved one experiences the perfect surprise celebration they'll treasure forever.",
    features: [
      "Secret planning and coordination",
      "Theme development and surprise elements",
      "Guest coordination and invitation management",
      "Venue decoration and setup",
      "Entertainment and activity planning",
      "Photography and videography to capture reactions",
      "Custom surprise reveals and presentations",
      "Complete event management from start to finish"
    ],
    pricing: {
      spark: { 
        price: 18749, 
        name: " Quick Surprise Package", 
        description: "Ideal for small, cozy, last-minute surprise parties at home or a private room.",
        details: [
          "Includes:",
          "• Basic party coordination & schedule",
          "• Simple decor: welcome board, balloons, cake table styling",
          "• Surprise moment cue coordination (lights off / music / reveal)",
          "• Background music or playlist",
          "• Snacks catering (veg menu: 2 starters + dessert + drink)",
          "• Photography (up to 2 hours)"
        ]
      },
      delight: { 
        price: 31249, 
        name: "Celebration Mode Package", 
        description: " Perfect for mid-sized surprise parties with a personalized touch.",
        details: [
          "Includes:",
          "• Complete event planning & guest coordination",
          "• Themed decor: balloon arch, backdrop, centerpiece, LED signage",
          "• Game session or host-led activities",
          "• Cake reveal coordination + live music or DJ playlist",
          "• Snacks + light dinner catering (veg/non-veg options)",
          "• Professional photography (up to 4 hours)"
        ]
      },
      spectacular: { 
        price: 49999, 
        name: " Grand Reveal Package", 
        description: "A luxury surprise party experience with cinematic moments and immersive ambiance.",
        details: [
          "Includes:",
          "• Custom decor concept (e.g., \"Hollywood Night,\" \"Retro 90s,\" \"Romantic Gold\")",
          "• Designer backdrop, LED initials or name lights, themed props",
          "• Surprise tunnel entry or curtain reveal moment",
          "• Game zone with host/emcee & music",
          "• Full-course dinner or lunch buffet (customizable menu)",
          "• Cinematic photo + highlight video",
          "• Return gifts table or thank-you setup",
          "• Dedicated surprise execution manager"
        ]
      }
    },
    gallery: [
      "https://i.pinimg.com/736x/38/0a/ae/380aae59042698e91ea4343a5dd8e884.jpg",
      "https://i.pinimg.com/736x/55/dc/4d/55dc4d2667ef563e95e5fc5bed224e9b.jpg",
      "https://i.pinimg.com/736x/0a/cb/35/0acb35327eda23b92beef78434da7caa.jpg",
      "https://i.pinimg.com/736x/4c/cf/27/4ccf277fbdd1dce18cce6a11a12e481f.jpg"
    ]
  },
  dhotisaree: {
    title: "Dhoti & Half Saree Ceremony",
    image: "https://i.pinimg.com/736x/07/40/65/074065ca915f287e031962e9246269e8.jpg",
    backgroundImage: "https://i.pinimg.com/736x/91/1e/a4/911ea4d63521fa7ec72752df5ded2fb6.jpg",
    description: "Celebrate coming-of-age milestones with our traditional dhoti and half saree ceremony services. We create meaningful celebrations that honor cultural traditions and mark important transitions in young lives.",
    features: [
      "Traditional ceremony planning and coordination",
      "Cultural ritual arrangements and guidance",
      "Traditional costume and jewelry coordination",
      "Photography and videography of ceremonies",
      "Guest reception and entertainment",
      "Traditional feast and catering services",
      "Cultural performance and music arrangements",
      "Memory preservation and documentation"
    ],
    pricing: {
      tradition: { 
        price:34999, 
        name: " Traditional Bliss Package", 
        description: "A simple and graceful package for small home or temple celebrations.",
        details: [
          "Includes:",
          "• Event coordination (half-day)",
          "• Traditional decor: marigold hangings, banana leaves, backdrop with fabric draping",
          "• Welcome board + puja stage setup",
          "• Snacks catering (veg menu: 3 items + 1 sweet + juice)",
          "• Photography (2 hours)",
          "• Sound playlist for background ambience"
        ]
      },
      cultural: { 
        price: 59999, 
        name: "Elegant Rituals Package", 
        description: "Ideal for medium-scale ceremonies in a hall or lawn setup with cultural detailing.",
        details: [
          "Includes:",
          "• Full planning & ritual coordination",
          "• Theme-based decor: backdrop with garlands, saree/dhoti-themed cutouts, lamp décor",
          "• Seating + stage layout for family and rituals",
          "• Snacks + South Indian lunch buffet (veg only)",
          "• Traditional nadaswaram or instrumental music",
          "• Photography & candid coverage (up to 4 hours)"
        ]
      },
      grandeur: { 
        price: 78999, 
        name: " Royal Sampradaya Package", 
        description: "A premium, heritage-rich experience with full decor, rituals, and catering.",
        details: [
          "Includes:",
          "• Ritual & program planning from start to finish",
          "• Designer decor: floral arch, LED name stand, brass lamps, custom stage",
          "• Saree/dhoti gifting table & welcome setup",
          "• Full traditional thali meal (customized South Indian veg buffet)",
          "• Optional return gift zone setup",
          "• Professional photography + cinematic videography",
          "• Live instrumental music (optional add-on)"
        ]
      }
    },
    gallery: [
      "https://i.pinimg.com/736x/ec/0b/81/ec0b81e603311073ee95b6abdf3b4b8d.jpg",
      "https://i.pinimg.com/736x/03/5e/13/035e135b6c2bd0108470f860f5e57a48.jpg",
      "https://i.pinimg.com/736x/91/1e/a4/911ea4d63521fa7ec72752df5ded2fb6.jpg",
      "https://i.pinimg.com/736x/92/47/81/924781ceb726210d2c82bbd5c3eb1c65.jpg"
    ]
  },
   maternity: {
    title: "Maternity Celebrations",
    image: "https://i.pinimg.com/736x/cd/ee/e1/cdeee13de6c31b1930ddec30b2629123.jpg",
    backgroundImage: "https://i.pinimg.com/736x/c6/a4/62/c6a46279faa8021664307b3f72887035.jpg",
    description: "Celebrate the beautiful journey of motherhood with our maternity celebration services. We create memorable moments that honor this special time in your life with elegant photoshoots and intimate celebrations.",
    features: [
      "Professional maternity photoshoot planning",
      "Beautiful backdrop and decor arrangements",
      "Personalized celebration themes",
      "Family and friends gathering coordination",
      "Memory preservation and documentation",
      "Gift presentation and blessing ceremonies",
      "Catering services for intimate gatherings",
      "Professional photography and videography"
    ],
    pricing: {
      glow: { 
        price: 12499, 
        name: "Glow Package", 
        description: "A simple and elegant package for intimate maternity photoshoots and small celebrations.",
        details: [
          "Includes:",
          "• 2-hour professional photoshoot session",
          "• Basic backdrop and prop setup",
          "• Simple floral decorations",
          "• Light refreshments for family",
          "• Digital photo gallery (20-30 edited photos)",
          "• Maternity blessing ceremony coordination"
        ]
      },
      radiance: { 
        price: 24999, 
        name: "Radiance Package", 
        description: "Perfect for medium-sized maternity celebrations with enhanced decor and services.",
        details: [
          "Includes:",
          "• 4-hour celebration and photoshoot",
          "• Designer backdrop with themed decorations",
          "• Professional makeup artist for mom-to-be",
          "• Light lunch or tea party setup for guests",
          "• Digital gallery + printed photo album",
          "• Baby shower games and activities coordination",
          "• Return gift arrangements"
        ]
      },
      bloom: { 
        price: 43749, 
        name: "Blooming Bliss Package", 
        description: "A premium experience with full celebration management and luxury amenities.",
        details: [
          "Includes:",
          "• Full-day celebration management",
          "• Premium decor with floral arrangements and lighting",
          "• Professional photographer + videographer",
          "• Complete catering service (lunch/dinner buffet)",
          "• Maternity blessing ceremony with priest coordination",
          "• Guest entertainment and activity planning",
          "• Luxury gift hamper for mom-to-be",
          "• Cinematic highlight video + photo album"
        ]
      }
    },
    gallery: [
      "https://i.pinimg.com/736x/72/35/53/72355311c56ff7192e9c520095479ce0.jpg",
      "https://i.pinimg.com/736x/43/ce/6a/43ce6aeef6db07f13f5b713245727416.jpg",
      "https://i.pinimg.com/736x/10/d7/d7/10d7d7d98a6d5380d6b9e1aba6ae9d27.jpg",
      "https://i.pinimg.com/736x/9b/85/40/9b8540b6030755b9ae20b145484b4049.jpg"
    ]
  }
};

// Terms and Conditions Modal Component
const TermsAndConditionsModal = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
     {/* <DialogTrigger asChild>
        <Button>View Terms and Conditions</Button>
      </DialogTrigger>*/}
      <DialogContent className="sm:max-w-2xl bg-white text-black max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Terms & Conditions & Payment Policy
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-4 text-sm leading-relaxed">
          <div>
            <h3 className="font-semibold">1. Booking & Agreement</h3>
            <ul className="list-disc list-inside">
              <li>All bookings must be made through direct communication (phone, WhatsApp, or in person).</li>
              <li>A written agreement must be signed by the client confirming the event date, services, pricing, and expectations.</li>
              <li>The client is responsible for choosing and booking the event venue. We do not offer venue selection services.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">2. Payments</h3>
            <ul className="list-disc list-inside">
              <li>A minimum of 50% advance payment is required to confirm any booking.</li>
              <li>The remaining 50% must be paid at least 15 days before the event date.</li>
              <li>We accept payments through cash, cheque, or UPI only. No online payment gateway or credit card facility is provided.</li>
              <li>A receipt will be issued upon each payment.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">3. Cancellations & Rescheduling</h3>
            <ul className="list-disc list-inside">
              <li>Cancellations must be made in writing and acknowledged by our team.</li>
              <li>If the event is cancelled more than 30 days before the event, 80% of the advance payment is refundable.</li>
              <li>If cancelled 15–30 days before the event, 50% of the advance will be refunded.</li>
              <li>Cancellations made less than 15 days before the event are non-refundable.</li>
              <li>Rescheduling is allowed once, subject to availability and mutual agreement. Any cost increase will be borne by the client.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">4. Client Responsibilities</h3>
            <ul className="list-disc list-inside">
              <li>Clients must ensure timely access to the venue for setup and dismantling.</li>
              <li>All required permissions from the venue, local authorities, or building management must be arranged by the client.</li>
              <li>Any delays caused by venue access, third-party vendors, or client-side logistics are not the responsibility of the company.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">5. Event Execution</h3>
            <ul className="list-disc list-inside">
              <li>The company will handle coordination, vendor management, and setup based on the agreed scope of work.</li>
              <li>Any last-minute changes must be communicated in writing and may incur additional charges.</li>
              <li>The client or their representative must be available for on-site approvals during event setup.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">6. Damages & Liability</h3>
            <ul className="list-disc list-inside">
              <li>The company is not responsible for any damages to property or personal injury caused by guests or third-party vendors.</li>
              <li>Any damage to equipment, decor, or materials caused by the client or guests will be charged to the client.</li>
              <li>Force majeure events (natural disasters, government bans, pandemics, etc.) will be handled on a case-by-case basis.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">7. Photography & Portfolio Use</h3>
            <ul className="list-disc list-inside">
              <li>We reserve the right to use non-personal photos and videos of the event for our marketing and portfolio unless explicitly denied by the client in writing.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">8. Confidentiality & Data Protection</h3>
            <ul className="list-disc list-inside">
              <li>Client details and event information will be kept confidential and not shared with third parties, except as required for event execution or legal obligations.</li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <Button onClick={onClose}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};


// PackageBookingModal Component
const PackageBookingModal = ({ packageData, serviceName }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false); // State for checkbox
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal
  const [notificationMessage, setNotificationMessage] = useState(''); // state to store messages
  const form = useForm({
    defaultValues: {
      name: '',
      phone: '',
      eventType: serviceName,
      selectedPackage: packageData.name,
      eventDate: undefined
    }
  });

const onSubmit = async (data) => {
  if (!isAgreed) {
    toast.error("You must agree to the terms and conditions to proceed."); // Show error toast
    return; // Prevent submission if not agreed
  }

  setIsSubmitting(true);
  try {
    const formattedData = {
      name: data.name,
      phone: data.phone,
      eventType: data.eventType,
      selectedPackage: data.selectedPackage,
      eventDate: data.eventDate ? format(data.eventDate, 'PPP') : 'Not specified',
      packagePrice: `₹${packageData.price.toLocaleString()}`,
      packageDescription: packageData.description
    };
    
    // EmailJS API call
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      formattedData,
      EMAILJS_CONFIG.PUBLIC_KEY
    );
    toast.success(`Thank you ${data.name}! Your booking request has been sent successfully. We'll contact you soon about your ${data.selectedPackage} for ${data.eventType}.`); 
    form.reset();
    setIsAgreed(false); // Reset checkbox after submission
    // setIsModalOpen(true); // Open notification modal
    
  } catch (error) {
    toast.error('Sorry, there was an error sending your booking request. Please try again or contact us directly.');
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-purple-50 to-pink-50">
      <DialogHeader className="border-b border-purple-100 pb-4">
        <DialogTitle className="text-2xl font-bold text-primary bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Book {packageData.name}
        </DialogTitle>
      </DialogHeader>
      
      <div className="space-y-6 pt-4">
        {/* Package Summary Card */}
        <div className="bg-white rounded-xl shadow-lg border border-purple-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className=" text-xl font-bold text-gray-800">{packageData.name}</h3>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full">
              <span className="text-lg font-bold">₹{packageData.price.toLocaleString()}</span>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">{packageData.description}</p>
          
          {/* Package Details */}
          <div className="bg-gray-50 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-gray-800 mb-2">Package Details:</h4>
            <div className="text-sm text-gray-700 space-y-1">
              {packageData.details.map((detail, index) => (
                <div key={index} className={detail === '' ? 'h-2' : ''}>
                  {detail && (
                    <div className={detail.startsWith('•') ? 'ml-4' : detail.includes(':') && !detail.startsWith('•') ? 'font-semibold text-purple-700' : ''}>
                      {detail}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg border border-purple-100 p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 5a1 1 0 112 0v3a1 1 0 11-2 0V5zM9 13a1 1 0 112 0 1 1 0 01-2 0z" clipRule="evenodd" />
                </svg>
                Your Details
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium">Full Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your full name" 
                          {...field} 
                          required 
                          className="border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium">Phone Number</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your phone number" 
                          {...field} 
                          required 
                          className="border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-purple-100 p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                Event Information
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <FormField
                  control={form.control}
                  name="eventType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium">Event Type</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          readOnly 
                          className="bg-purple-50 border-purple-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="selectedPackage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium">Selected Package</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          readOnly 
                          className="bg-purple-50 border-purple-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="eventDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-gray-700 font-medium">Preferred Event Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full pl-3 text-left font-normal border-purple-200 hover:border-purple-400",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick your event date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Terms and Conditions Checkbox */}
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="terms" 
                checked={isAgreed} 
                onChange={() => setIsAgreed(!isAgreed)} 
                className="mr-2"
              />
              <span className="text-gray-700">
                I agree to the <button type="button" onClick={() => setIsModalOpen(true)} className="text-blue-500 underline">terms and conditions</button>
              </span>
            </div>
            
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 text-lg font-semibold rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:transform-none"
            >
              {isSubmitting ? 'Sending Request...' : 'Submit Booking Request'}
            </Button>
          </form>
        </Form>
      </div>

      {/* Terms and Conditions Modal */}
      <TermsAndConditionsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </DialogContent>
  );
};

// ServiceDetail component
const ServiceDetail = () => {
  const { serviceType } = useParams();
  const [service, setService] = useState(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (serviceType && serviceDetails[serviceType]) {
      setService(serviceDetails[serviceType]);
    }
  }, [serviceType]);
  
  if (!service) {
    return (
      <div className="py-24 container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Service not found</h2>
        <p className="mb-8">The service you are looking for doesn't exist or has been removed.</p>
        <Link to="/services" className="btn-primary">
          View All Services
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section 
        className="relative py-24 md:py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${service.backgroundImage})`
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-white">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">{service.title}</h1>
              <p className="text-xl max-w-2xl">
                {service.description}
              </p>
            </div>
            <div className="mt-8 md:mt-0">
              <Link to="/contact" className="bg-primary text-white px-8 py-3 rounded hover:bg-purple-600 transition-colors">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Service Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - What's Offered */}
            <div>
              <h2 className="text-3xl font-bold mb-6 font-playfair">What's Offered</h2>
              <ul className="space-y-4 mb-10">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="ml-3">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Right Column - Main Image */}
            <div>
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
          {/* Portfolio/Gallery Section with Auto-moving Carousel */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 font-playfair text-center">Portfolio</h2>
            <AutoCarousel images={service.gallery} autoScrollInterval={2000} />
          </div>
          {/* Packages Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 font-playfair text-center">Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {Object.entries(service.pricing).map(([key, pkg]) => (
                <div key={key} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 text-center">
                  <h3 className="text-2xl font-bold mb-4 font-playfair">{pkg.name}</h3>
                  <div className="mb-4">
                    <div className="text-sm text-black mb-1">Starting at</div>
                    <div className="text-4xl font-bold text-primary">₹{pkg.price.toLocaleString()}</div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full">
                        Choose Package
                      </Button>
                                       </DialogTrigger>
                    <PackageBookingModal packageData={pkg} serviceName={service.title} />
                  </Dialog>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair text-white">Ready to Create Your Perfect {serviceType.charAt(0).toUpperCase() + serviceType.slice(1)} Event?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white">
            Let's bring your vision to life. Contact us today to start planning your unforgettable experience.
          </p>
          <Link 
            to="/contact"
            className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded font-medium transition-colors inline-block"
          >
            Start Planning Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
