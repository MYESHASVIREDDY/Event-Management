import { useEffect, useState } from 'react';
import ContactForm from '../components/ContactForm';
import { Phone, Mail, MapPin } from 'lucide-react';

const faqs = [
  {
    category: "General Questions",
    questions: [
      {
        question: "What types of events do you manage?",
        answer: "We plan and organize weddings, corporate events, birthday parties, conferences, exhibitions, baby showers, and more.",
      },
      {
        question: "How far in advance should I book an event?",
        answer: "We recommend booking at least 1–3 months in advance to ensure proper coordination and availability of services.",
      },
      {
        question: "Can I customize my event package?",
        answer: "Yes. Our packages are fully customizable—choose services like catering, decor, photography, and entertainment based on your preferences.",
      },
    ],
  },
  {
    category: "Booking & Payments",
    questions: [
      {
        question: "How do I book an event with your team?",
        answer: "You can reach out through our inquiry form, phone, WhatsApp, or visit us in person. After understanding your requirements, we proceed with booking and contract finalization.",
      },
      {
        question: "What is your payment policy?",
        answer: "We accept cash, cheque, or UPI payments. A minimum 50% advance payment is required to confirm the event, and the full amount must be paid at least 15 days before the event date.",
      },
      {
        question: "Will I receive a booking confirmation?",
        answer: "Yes. Once your advance is received and terms are agreed upon, we’ll issue a formal event confirmation.",
      },
    ],
  },
  {
    category: "Venue & Services",
    questions: [
      {
        question: "Do you provide venue selection?",
        answer: "No, we do not offer venue selection. The customer is responsible for choosing and booking the venue. We coordinate with the venue once it's confirmed.",
      },
      {
        question: "Will you coordinate with vendors and manage logistics?",
        answer: "Yes. We handle vendor coordination, logistics, and all on-site event setup based on your selected venue and chosen services.",
      },
      {
        question: "Are indoor and outdoor event setups supported?",
        answer: "Yes. We are experienced in managing both indoor and outdoor setups, depending on your venue and event type.",
      },
    ],
  },
  {
    category: "Support & Policies",
    questions: [
      {
        question: "What is your cancellation or rescheduling policy?",
        answer: "Policies vary based on the event date and how much preparation has been done. Please contact us directly to understand specific terms.",
      },
      {
        question: "Is there on-site support during the event?",
        answer: "Yes. Our team will be present during the event to handle coordination, troubleshoot issues, and ensure smooth execution.",
      },
      {
        question: "How can I contact you for bookings or queries?",
        answer: "You can get in touch via our website form, call, WhatsApp, or visit our office. We also offer live chat during working hours.",
      },
    ],
  },
];

const AccordionItem = ({ faq, isOpen, toggle }) => (
  <div className="border-b border-gray-200">
    <button
      onClick={toggle}
      className="w-full text-left py-4 font-semibold text-lg flex justify-between items-center"
    >
      {faq.question}
      <span>{isOpen ? '-' : '+'}</span>
    </button>
    {isOpen && <p className="pb-4 text-gray-600">{faq.answer}</p>}
  </div>
);

const AccordionSection = ({ category, questions, openIndex, setOpenIndex }) => (
  <div className="mb-8">
    <h3 className="text-2xl font-bold mb-4 text-primary">{category}</h3>
    {questions.map((faq, index) => (
      <AccordionItem
        key={index}
        faq={faq}
        isOpen={openIndex === `${category}-${index}`}
        toggle={() =>
          setOpenIndex(openIndex === `${category}-${index}` ? null : `${category}-${index}`)
        }
      />
    ))}
  </div>
);

const Contact = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-light-purple py-24 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-playfair">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-700 font-sans">
            We'd love to hear from you! Reach out to discuss your event needs, request a quote, or schedule a consultation.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 font-playfair">Get In Touch</h2>
            <p className="mb-8 text-lg">
              Fill out the form below, and one of our event specialists will get back to you within 24 hours.
            </p>
            <ContactForm />
            <br></br>
            <h2 className="text-3xl font-bold mb-6 font-playfair">Contact Info</h2>
            {/* Contact Info here like Phone, Email, Location (keep your existing code) */}
           
<div className="space-y-4 text-gray-700">
  <p className="flex items-center gap-3">
    <Phone className="w-5 h-5 text-primary" />
    <span className="font-semibold">Phone:</span>
    <p  className="text-primary hover:underline">+91 9010875478</p>
  </p>
  <p className="flex items-center gap-3">
    <Mail className="w-5 h-5 text-primary" />
    <span className="font-semibold">Email:</span>
    <p className="text-primary hover:underline">skyraevents@gmail.com</p>
  </p>
  <p className="flex items-center gap-3">
    <MapPin className="w-5 h-5 text-primary" />
    <span className="font-semibold">Location:</span>
    Mothinagar, Hyderabad, Telangana , 500018
  </p>
</div>


          </div>

          <div>

            {/* Accordion FAQs */}
            <h2 className="text-3xl font-bold mt-12 mb-6 font-playfair">Frequently Asked Questions (FAQ)</h2>
            {faqs.map((section, idx) => (
              <AccordionSection
                key={idx}
                category={section.category}
                questions={section.questions}
                openIndex={openIndex}
                setOpenIndex={setOpenIndex}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
