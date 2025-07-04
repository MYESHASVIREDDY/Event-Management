

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { BsInstagram } from 'react-icons/bs';
// import { FaLinkedinIn } from 'react-icons/fa';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();
//   const [modalOpen, setModalOpen] = useState(false);

//   return (
//     <>
//       <footer className="bg-gray-900 text-white">
//         <div className="max-w-7xl mx-auto px-4 py-12">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-start">
            
//             {/* Company Info */}
//             <div className="space-y-4">
//               <h3 className="text-2xl font-bold font-playfair">Skyra Events</h3>
//               <p className="text-gray-300">
//                 Creating unforgettable experiences with heart, vision, and precision.
//               </p>
//               <div className="flex space-x-4">
//                 <a
//                   href="https://www.instagram.com/skyraevent?igsh=NXcxZWYwcGo0ZDR2"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-white text-black p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
//                 >
//                   <BsInstagram className="h-5 w-5" />
//                 </a>
//                 <a
//                   href="https://www.linkedin.com/company/skyra-events/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-white text-black p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
//                 >
//                   <FaLinkedinIn className="h-5 w-5" />
//                 </a>
//               </div>
//             </div>

//             {/* Quick Links */}
//             <div className="space-y-4">
//               <h3 className="text-lg font-bold uppercase tracking-wider">Quick Links</h3>
//               <ul className="space-y-2 text-gray-300">
//                 <li><Link to="/" className="hover:text-primary">Home</Link></li>
//                 <li><Link to="/services" className="hover:text-primary">Services</Link></li>
//                 <li><Link to="/about-us" className="hover:text-primary">About Us</Link></li>
//                 <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
//               </ul>
//             </div>

//             {/* Our Services */}
//             <div className="space-y-4">
//               <h3 className="text-lg font-bold uppercase tracking-wider">Our Services</h3>
//               <ul className="space-y-2 text-gray-300">
//                 <li><Link to="/services/weddings" className="hover:text-primary">Wedding Planning</Link></li>
//                 <li><Link to="/services/birthdays" className="hover:text-primary">Birthday Parties</Link></li>
//                 <li><Link to="/services/corporate" className="hover:text-primary">Corporate Events</Link></li>
//                 <li><Link to="/services/college" className="hover:text-primary">College Events</Link></li>
//               </ul>
//             </div>

//             {/* Contact Info */}
//             <div className="space-y-4 text-gray-300">
//               <h3 className="text-lg font-bold uppercase tracking-wider">Contact Info</h3>
//               <div className="space-y-2">
//                 <p className="flex items-start">📍 Mothinagar, Hyderabad, Telangana, 500018</p>
//                 <p className="flex items-center">📞 +91 9010875478</p>
//                 <p className="flex items-center">📧 skyraevents@gmail.com</p>
//               </div>
//             </div>
//           </div>

//           {/* Bottom Section */}
//           <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-2">
//             {/* <p>&copy; {currentYear} Skyra Events. All rights reserved.</p> */}
//             <p> copyright @skyraevents. All Rights Reserved.</p>
//             <a
//               href="#"
//               onClick={(e) => {
//                 e.preventDefault();
//                 setModalOpen(true);
//               }}
//               className="text-primary hover:underline"
//             >
//               Terms & Conditions
//             </a>
//           </div>
//         </div>
//       </footer>

//       {/* Modal */}
//       {modalOpen && (
//         <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
//           <div className="bg-white max-w-2xl max-h-[80vh] overflow-y-auto p-6 rounded-lg relative">
//             <button
//               className="absolute top-2 right-4 text-gray-600 text-xl font-bold"
//               onClick={() => setModalOpen(false)}
//             >
//               ×
//             </button>
//             <h2 className="text-xl font-semibold mb-4">Terms & Conditions & Payment Policy</h2>
//             <div className="space-y-4 text-sm text-gray-800">
//               {/* [Terms content unchanged] */}
//               {/* Same content as your provided modal */}
//               <div className="space-y-4 text-sm text-gray-800">
//   <h3 className="font-semibold">1. Booking & Agreement</h3>
//   <ul className="list-disc list-inside space-y-1">
//     <li>All bookings must be made through direct communication (phone, WhatsApp, or in person).</li>
//     <li>A written agreement must be signed by the client confirming the event date, services, pricing, and expectations.</li>
//     <li>The client is responsible for choosing and booking the event venue. We do not offer venue selection services.</li>
//   </ul>

//   <h3 className="font-semibold">2. Payments</h3>
//   <ul className="list-disc list-inside space-y-1">
//     <li>A minimum of 50% advance payment is required to confirm any booking.</li>
//     <li>The remaining 50% must be paid at least 15 days before the event date.</li>
//     <li>We accept payments through cash, cheque, or UPI only. No online payment gateway or credit card facility is provided.</li>
//     <li>A receipt will be issued upon each payment.</li>
//   </ul>

//   <h3 className="font-semibold">3. Cancellations & Rescheduling</h3>
//   <ul className="list-disc list-inside space-y-1">
//     <li>Cancellations must be made in writing and acknowledged by our team.</li>
//     <li>If the event is cancelled more than 30 days before the event, 80% of the advance payment is refundable.</li>
//     <li>If cancelled 15–30 days before the event, 50% of the advance will be refunded.</li>
//     <li>Cancellations made less than 15 days before the event are non-refundable.</li>
//     <li>Rescheduling is allowed once, subject to availability and mutual agreement. Any cost increase will be borne by the client.</li>
//   </ul>

//   <h3 className="font-semibold">4. Client Responsibilities</h3>
//   <ul className="list-disc list-inside space-y-1">
//     <li>Clients must ensure timely access to the venue for setup and dismantling.</li>
//     <li>All required permissions from the venue, local authorities, or building management must be arranged by the client.</li>
//     <li>Any delays caused by venue access, third-party vendors, or client-side logistics are not the responsibility of the company.</li>
//   </ul>

//   <h3 className="font-semibold">5. Event Execution</h3>
//   <ul className="list-disc list-inside space-y-1">
//     <li>The company will handle coordination, vendor management, and setup based on the agreed scope of work.</li>
//     <li>Any last-minute changes must be communicated in writing and may incur additional charges.</li>
//     <li>The client or their representative must be available for on-site approvals during event setup.</li>
//   </ul>

//   <h3 className="font-semibold">6. Damages & Liability</h3>
//   <ul className="list-disc list-inside space-y-1">
//     <li>The company is not responsible for any damages to property or personal injury caused by guests or third-party vendors.</li>
//     <li>Any damage to equipment, decor, or materials caused by the client or guests will be charged to the client.</li>
//     <li>Force majeure events (natural disasters, government bans, pandemics, etc.) will be handled on a case-by-case basis.</li>
//   </ul>

//   <h3 className="font-semibold">7. Photography & Portfolio Use</h3>
//   <ul className="list-disc list-inside space-y-1">
//     <li>We reserve the right to use non-personal photos and videos of the event for our marketing and portfolio unless explicitly denied by the client in writing.</li>
//   </ul>

//   <h3 className="font-semibold">8. Confidentiality & Data Protection</h3>
//   <ul className="list-disc list-inside space-y-1">
//     <li>Client details and event information will be kept confidential and not shared with third parties, except as required for event execution or legal obligations.</li>
//   </ul>
// </div>

//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Footer;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsInstagram } from 'react-icons/bs';
import { FaLinkedinIn, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <footer className="bg-gray-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-start">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-playfair">Skyra Events</h3>
              <p className="text-gray-300">Creating unforgettable experiences with heart, vision, and precision.</p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/skyraevent?igsh=NXcxZWYwcGo0ZDR2" target="_blank" rel="noopener noreferrer" className="bg-white text-black p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                  <BsInstagram className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/company/skyra-events/" target="_blank" rel="noopener noreferrer" className="bg-white text-black p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                  <FaLinkedinIn className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold uppercase tracking-wider">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/" className="hover:text-primary">Home</Link></li>
                <li><Link to="/services" className="hover:text-primary">Services</Link></li>
                <li><Link to="/about-us" className="hover:text-primary">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold uppercase tracking-wider">Our Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/services/weddings" className="hover:text-primary">Wedding Planning</Link></li>
                <li><Link to="/services/birthdays" className="hover:text-primary">Birthday Parties</Link></li>
                <li><Link to="/services/corporate" className="hover:text-primary">Corporate Events</Link></li>
                <li><Link to="/services/college" className="hover:text-primary">College Events</Link></li>
              </ul>
            </div>
            <div className="space-y-4 text-gray-300">
              <h3 className="text-lg font-bold uppercase tracking-wider">Contact Info</h3>
              <div className="space-y-2">
                <p>📍 Mothinagar, Hyderabad, Telangana, 500018</p>
                <p>📞 +91 9010875478</p>
                <p>📧 skyraevents@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-2">
            <p>© {currentYear} Skyra Events. All Rights Reserved.</p>
            <div className="flex gap-2">
              <button onClick={() => setTermsModalOpen(true)} className="hover:text-primary underline">Terms & Conditions</button>
              <span>.</span>
              <button onClick={() => setPrivacyModalOpen(true)} className="hover:text-primary underline">Privacy Policy</button>
            </div>
          </div>
        </div>
        {showScrollTop && (
          <button onClick={scrollToTop} className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-500 text-white p-3 rounded-lg shadow-lg z-50">
            <FaArrowUp />
          </button>
        )}
      </footer>

      {termsModalOpen && (
  <Modal onClose={() => setTermsModalOpen(false)} title="Terms & Conditions">
    <div className="whitespace-pre-wrap text-sm text-gray-800">
      <ul className="list-decimal list-inside text-purple-700">
        <li><strong>Scope of Services</strong><ul className="list-disc list-inside ml-4 text-gray-800">
          <li>Event planning, design, coordination, execution.</li>
          <li>Weddings, corporate, private, and social events.</li>
          <li>Extra services outside scope require new agreement.</li>
        </ul></li>
        <li><strong>Bookings and Payments</strong><ul className="list-disc list-inside ml-4 text-gray-800">
          <li>30% non-refundable advance to confirm booking.</li>
          <li>40% due 30 days before, 30% due 15 days before.</li>
          <li>Full payment required 10 days before event.</li>
        </ul></li>
        <li><strong>Cancellation and Refund Policy</strong><ul className="list-disc list-inside ml-4 text-gray-800">
          <li>Client cancels: charges vary based on notice period.</li>
          <li>Company cancels: full refund and vendor suggestions.</li>
        </ul></li>
        <li><strong>Client Responsibilities</strong><ul className="list-disc list-inside ml-4 text-gray-800">
          <li>Provide accurate details and timely approvals.</li>
          <li>Cooperate with vendors and staff during execution.</li>
        </ul></li>
        <li><strong>Third-Party Vendors</strong><ul className="list-disc list-inside ml-4 text-gray-800">
          <li>Skyra works with reliable partners, not liable unless agreed.</li>
          <li>External vendors allowed only with written agreement.</li>
        </ul></li>
        <li><strong>Force Majeure</strong><ul className="list-disc list-inside ml-4 text-gray-800">
          <li>No liability for events beyond control (e.g., natural disasters).</li>
          <li>Efforts will be made to reschedule or refund as applicable.</li>
        </ul></li>
        <li><strong>Intellectual Property and Media Rights</strong><ul className="list-disc list-inside ml-4 text-gray-800">
          <li>Event media may be used for promotion unless objected in writing.</li>
          <li>Designs and materials are intellectual property of Skyra.</li>
        </ul></li>
        <li><strong>Liability and Indemnity</strong><ul className="list-disc list-inside ml-4 text-gray-800">
          <li>Not liable for client delays or unrelated vendor issues.</li>
          <li>Client must indemnify Skyra for issues caused by their actions.</li>
        </ul></li>
        <li><strong>Dispute Resolution</strong><ul className="list-disc list-inside ml-4 text-gray-800">
          <li>Try amicable resolution first.</li>
          <li>If needed, arbitration in Hyderabad per Indian law.</li>
        </ul></li>
        <li><strong>Amendments</strong><ul className="list-disc list-inside ml-4 text-gray-800">
          <li>Terms can be updated anytime. Updates posted on website.</li>
        </ul></li>
        <li><strong>Contact Us</strong><ul className="list-disc list-inside ml-4 text-gray-800">
          <li>📧 skyraevents@gmail.com | 📞 +91-9010875478 | 🌐 skyraevents.netlify.app</li>
        </ul></li>
      </ul>
    </div>
  </Modal>
)}


  {privacyModalOpen && (
  <Modal onClose={() => setPrivacyModalOpen(false)} title="Privacy Policy">
    <div className="overflow-y-auto max-h-[70vh] px-4 text-sm text-gray-800 leading-relaxed space-y-4">
      <p><strong>Effective Date:</strong> 7th July 2025</p>

      <p>
        Skyra Events (“Company,” “we,” “us,” or “our”) values and respects your privacy. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you interact with us through our website <a href="https://skyraevents.netlify.app" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://skyraevents.netlify.app</a>, engage our services, attend our events, or communicate with our team.
      </p>

      <p>By accessing our website or using our services, you consent to the practices described in this Privacy Policy.</p>

      <ol className="list-decimal pl-6 space-y-2">
        <li>
          <strong>Definitions</strong>
          <ul className="list-disc pl-6">
            <li><strong>Personal Information:</strong> Any information that identifies you as an individual, such as your name, phone number, email address, etc.</li>
            <li><strong>Sensitive Personal Data:</strong> Includes financial data, health-related information, or any other data protected under applicable privacy laws.</li>
            <li><strong>Processing:</strong> Any operation performed on personal data, such as collection, recording, organization, structuring, storage, use, or deletion.</li>
          </ul>
        </li>

        <li>
          <strong>Information We Collect</strong>
          <ul className="list-disc pl-6">
            <li><strong>2.1 Information You Provide to Us</strong>
              <ul className="list-disc pl-6">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Postal address</li>
                <li>Event-related information (e.g., event type, date, venue)</li>
                <li>Company name (if applicable)</li>
                <li>Billing and payment details</li>
                <li>Preferences, reviews, or feedback</li>
                <li>Documents, images, and media shared for planning or promotional use</li>
              </ul>
            </li>
            <li><strong>2.2 Information We Automatically Collect</strong>
              <ul className="list-disc pl-6">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device type and operating system</li>
                <li>Website usage data (pages visited, time spent, etc.)</li>
              </ul>
            </li>
            <li><strong>2.3 Information from Third Parties</strong>
              <ul className="list-disc pl-6">
                <li>Social media platforms (when you interact with our content)</li>
                <li>Payment gateways</li>
                <li>Advertising and marketing partners</li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <strong>Purpose of Data Collection</strong>
          <ul className="list-disc pl-6">
            <li>To plan, manage, and execute your events effectively</li>
            <li>To respond to your inquiries or requests</li>
            <li>To process transactions and send invoices</li>
            <li>To send service-related updates, promotions, or newsletters (opt-out available)</li>
            <li>To improve our services, marketing strategies, and customer experience</li>
            <li>To comply with applicable legal obligations</li>
          </ul>
        </li>

        <li>
          <strong>Data Sharing and Disclosure</strong>
          <ul className="list-disc pl-6">
            <li>With our employees, trusted contractors, or vendors working on your event</li>
            <li>With payment gateways or processors for billing purposes</li>
            <li>With law enforcement, regulatory authorities, or legal advisors if required by law or to defend legal rights</li>
            <li>With third-party platforms (such as email marketing or CRM tools) for service-related communication</li>
          </ul>
          <p>All third parties are required to handle your data in accordance with this policy and applicable data protection laws.</p>
        </li>

        <li>
          <strong>Data Retention</strong>
          <ul className="list-disc pl-6">
            <li>Data is retained until the event is completed plus 12 months for reference, feedback, or legal compliance</li>
            <li>Financial records are retained in accordance with tax and accounting regulations</li>
          </ul>
        </li>

        <li>
          <strong>Data Security</strong>
          <p>We implement appropriate administrative, technical, and physical safeguards. This includes secure servers, encryption, access control, and audits. However, no method is 100% secure.</p>
        </li>

        <li>
          <strong>Cookies & Tracking Technologies</strong>
          <ul className="list-disc pl-6">
            <li>Analyze traffic and performance</li>
            <li>Remember your preferences and settings</li>
            <li>Enhance your user experience</li>
          </ul>
          <p>You may disable cookies via browser settings, though some features may not work properly.</p>
        </li>

        <li>
          <strong>Your Rights</strong>
          <ul className="list-disc pl-6">
            <li>Access and review your personal information</li>
            <li>Correct or update inaccurate data</li>
            <li>Withdraw your consent at any time</li>
            <li>Request deletion of your personal information</li>
            <li>Opt out of non-essential communications</li>
          </ul>
          <p>To exercise your rights, contact us at <a href="mailto:info@skyraevents.com" className="text-blue-600">info@skyraevents.com</a>.</p>
        </li>

        <li>
          <strong>Children's Privacy</strong>
          <p>Our services are not intended for individuals under 18. If a minor submitted data, please contact us to remove it.</p>
        </li>

        <li>
          <strong>Third-Party Links</strong>
          <p>We are not responsible for the privacy practices of external websites. Review their policies before sharing data.</p>
        </li>

        <li>
          <strong>Policy Updates</strong>
          <p>We may update this policy. Continued use of our services implies your acceptance of changes.</p>
        </li>

        <li>
          <strong>Contact Us</strong>
          <ul className="list-disc pl-6">
            <li>📧 Email: <a href="mailto:info@skyraevents.com" className="text-blue-600">info@skyraevents.com</a></li>
            <li>📞 Phone: +91-9010875478</li>
            <li>🌐 Website: <a href="https://skyraevents.netlify.app" className="text-blue-600" target="_blank" rel="noopener noreferrer">https://skyraevents.netlify.app</a></li>
          </ul>
        </li>
      </ol>
    </div>
  </Modal>
)}

    </>
  );
};

const Modal = ({ onClose, title, children }) => (
  <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
    <div className="bg-white max-w-3xl max-h-[90vh] overflow-y-auto p-6 rounded-lg relative">
      <button className="absolute top-2 right-4 text-gray-600 text-xl font-bold" onClick={onClose}>×</button>
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="text-gray-800 space-y-4 text-sm">{children}</div>
    </div>
  </div>
);

export default Footer;
