
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();
  
//   return (
//     <footer className="bg-gray-900 text-white">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Company Info */}
//           <div>
//             <h3 className="text-2xl font-bold mb-4 font-playfair">Skyra Events</h3>
//             <p className="mb-4 text-gray-300">
//               Creating unforgettable experiences with heart, vision, and precision.
//             </p>
//             <div className="flex space-x-4">
              
//               <a href="https://www.instagram.com/skyraevent?igsh=NXcxZWYwcGo0ZDR2"target="_blank"
//                 rel="noopener noreferrer" className="hover:text-primary transition-colors">
//                 <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//                 </svg>
//               </a>
//               <div className="flex space-x-4">
//                       <a
//                 href="https://www.linkedin.com/company/skyra-events/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-primary transition-colors"
//               >
//                 <svg
//                   className="h-5 w-5"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 
//                     2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 
//                     19h-3v-10h3v10zm-1.5-11.268c-.966 
//                     0-1.75-.784-1.75-1.75s.784-1.75 
//                     1.75-1.75 1.75.784 
//                     1.75 1.75-.784 1.75-1.75 
//                     1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.869 
//                     0-2.155 1.46-2.155 2.966v5.701h-3v-10h2.879v1.367h.041c.401-.762 
//                     1.379-1.566 2.841-1.566 3.039 0 3.6 2.001 3.6 
//                     4.601v5.598z" />
//                 </svg>
//               </a>
              
//             </div>
              
//             </div>
//           </div>
          
//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Quick Links</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link to="/" className="text-gray-300 hover:text-primary transition-colors">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/services" className="text-gray-300 hover:text-primary transition-colors">
//                   Services
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/about-us" className="text-gray-300 hover:text-primary transition-colors">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>
          
//           {/* Our Services */}
//           <div>
//             <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Our Services</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link to="/services/weddings" className="text-gray-300 hover:text-primary transition-colors">
//                   Wedding Planning
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/services/birthdays" className="text-gray-300 hover:text-primary transition-colors">
//                   Birthday Parties
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/services/corporate" className="text-gray-300 hover:text-primary transition-colors">
//                   Corporate Events
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/services/college" className="text-gray-300 hover:text-primary transition-colors">
//                   College Events
//                 </Link>
//               </li>
//             </ul>
//           </div>
          
//           {/* Contact Info */}
//           <div>
//             <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Contact Info</h3>
//             <div className="space-y-4 text-gray-300">
//               <p className="flex items-start">
//                 <svg className="h-5 w-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                 </svg>
//                 Mothinagar, Hyderabad, Telangana , 500018
//               </p>
//               <p className="flex items-center">
//                 <svg className="h-5 w-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                 </svg>
//                 +91 9010875478
//               </p>
//               <p className="flex items-center">
//                 <svg className="h-5 w-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                 </svg>
//                 skyraevents@gmail.com
//               </p>
//             </div>
//           </div>
//         </div>
        
//         <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400">
//           <p>&copy; {currentYear} Skyra Events. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsInstagram } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-start">
            
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-playfair">Skyra Events</h3>
              <p className="text-gray-300">
                Creating unforgettable experiences with heart, vision, and precision.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/skyraevent?igsh=NXcxZWYwcGo0ZDR2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
                >
                  <BsInstagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/skyra-events/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
                >
                  <FaLinkedinIn className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold uppercase tracking-wider">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/" className="hover:text-primary">Home</Link></li>
                <li><Link to="/services" className="hover:text-primary">Services</Link></li>
                <li><Link to="/about-us" className="hover:text-primary">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
              </ul>
            </div>

            {/* Our Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold uppercase tracking-wider">Our Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/services/weddings" className="hover:text-primary">Wedding Planning</Link></li>
                <li><Link to="/services/birthdays" className="hover:text-primary">Birthday Parties</Link></li>
                <li><Link to="/services/corporate" className="hover:text-primary">Corporate Events</Link></li>
                <li><Link to="/services/college" className="hover:text-primary">College Events</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 text-gray-300">
              <h3 className="text-lg font-bold uppercase tracking-wider">Contact Info</h3>
              <div className="space-y-2">
                <p className="flex items-start">📍 Mothinagar, Hyderabad, Telangana, 500018</p>
                <p className="flex items-center">📞 +91 9010875478</p>
                <p className="flex items-center">📧 skyraevents@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-2">
            <p>&copy; {currentYear} Skyra Events. All rights reserved.</p>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setModalOpen(true);
              }}
              className="text-primary hover:underline"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
          <div className="bg-white max-w-2xl max-h-[80vh] overflow-y-auto p-6 rounded-lg relative">
            <button
              className="absolute top-2 right-4 text-gray-600 text-xl font-bold"
              onClick={() => setModalOpen(false)}
            >
              ×
            </button>
            <h2 className="text-xl font-semibold mb-4">Terms & Conditions & Payment Policy</h2>
            <div className="space-y-4 text-sm text-gray-800">
              {/* [Terms content unchanged] */}
              {/* Same content as your provided modal */}
              <div className="space-y-4 text-sm text-gray-800">
  <h3 className="font-semibold">1. Booking & Agreement</h3>
  <ul className="list-disc list-inside space-y-1">
    <li>All bookings must be made through direct communication (phone, WhatsApp, or in person).</li>
    <li>A written agreement must be signed by the client confirming the event date, services, pricing, and expectations.</li>
    <li>The client is responsible for choosing and booking the event venue. We do not offer venue selection services.</li>
  </ul>

  <h3 className="font-semibold">2. Payments</h3>
  <ul className="list-disc list-inside space-y-1">
    <li>A minimum of 50% advance payment is required to confirm any booking.</li>
    <li>The remaining 50% must be paid at least 15 days before the event date.</li>
    <li>We accept payments through cash, cheque, or UPI only. No online payment gateway or credit card facility is provided.</li>
    <li>A receipt will be issued upon each payment.</li>
  </ul>

  <h3 className="font-semibold">3. Cancellations & Rescheduling</h3>
  <ul className="list-disc list-inside space-y-1">
    <li>Cancellations must be made in writing and acknowledged by our team.</li>
    <li>If the event is cancelled more than 30 days before the event, 80% of the advance payment is refundable.</li>
    <li>If cancelled 15–30 days before the event, 50% of the advance will be refunded.</li>
    <li>Cancellations made less than 15 days before the event are non-refundable.</li>
    <li>Rescheduling is allowed once, subject to availability and mutual agreement. Any cost increase will be borne by the client.</li>
  </ul>

  <h3 className="font-semibold">4. Client Responsibilities</h3>
  <ul className="list-disc list-inside space-y-1">
    <li>Clients must ensure timely access to the venue for setup and dismantling.</li>
    <li>All required permissions from the venue, local authorities, or building management must be arranged by the client.</li>
    <li>Any delays caused by venue access, third-party vendors, or client-side logistics are not the responsibility of the company.</li>
  </ul>

  <h3 className="font-semibold">5. Event Execution</h3>
  <ul className="list-disc list-inside space-y-1">
    <li>The company will handle coordination, vendor management, and setup based on the agreed scope of work.</li>
    <li>Any last-minute changes must be communicated in writing and may incur additional charges.</li>
    <li>The client or their representative must be available for on-site approvals during event setup.</li>
  </ul>

  <h3 className="font-semibold">6. Damages & Liability</h3>
  <ul className="list-disc list-inside space-y-1">
    <li>The company is not responsible for any damages to property or personal injury caused by guests or third-party vendors.</li>
    <li>Any damage to equipment, decor, or materials caused by the client or guests will be charged to the client.</li>
    <li>Force majeure events (natural disasters, government bans, pandemics, etc.) will be handled on a case-by-case basis.</li>
  </ul>

  <h3 className="font-semibold">7. Photography & Portfolio Use</h3>
  <ul className="list-disc list-inside space-y-1">
    <li>We reserve the right to use non-personal photos and videos of the event for our marketing and portfolio unless explicitly denied by the client in writing.</li>
  </ul>

  <h3 className="font-semibold">8. Confidentiality & Data Protection</h3>
  <ul className="list-disc list-inside space-y-1">
    <li>Client details and event information will be kept confidential and not shared with third parties, except as required for event execution or legal obligations.</li>
  </ul>
</div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;

