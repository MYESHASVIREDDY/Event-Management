

import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
<section className="bg-light-purple py-24 md:py-32">
  <div className="container mx-auto px-4 text-center">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-playfair">
      About Us
    </h1>
    <p className="text-xl max-w-3xl mx-auto text-gray-700 font-sans">
      Crafting unforgettable experiences with heart, vision, and precision.
    </p>
  </div>
</section>




      

      {/* Our Story */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-4">Our Story – Why Skyra Events Was Born</h2>
              <p className="mb-4">
                Skyra Events was born from a deep realization — that most events focus only on logistics,
                not emotions. Our founder attended a lavish wedding that looked great on the outside but
                lacked soul, connection, and flow.
              </p>
              <p className="mb-4 text-2xl italic text-primary font-semibold border-l-4 border-primary pl-4">
                “We don't just organize events — we curate unforgettable experiences where emotion meets execution.”
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Blend creative storytelling with intentional design</li>
                <li>Approach every event with heart and precision</li>
                <li>Make each celebration meaningful, flowing, and full of joy</li>
              </ul>
              <p className="font-medium">
                Every event is a story — and we help you tell yours with beauty, meaning, and lasting impact.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt="Event celebration"
                className="rounded-xl shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-14 bg-light-purple">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Mission */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-4 font-playfair">Our Mission</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Craft meaningful, memorable experiences</li>
              <li>Transform visions into reality through creativity and care</li>
              <li>Deliver joy through flawless execution</li>
              <li>Build relationships based on trust and transparency</li>
            </ul>
          </div>

          {/* Vision */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-4 font-playfair">Our Vision</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Become India's most trusted event brand</li>
              <li>Set standards with innovation and professionalism</li>
              <li>Expand across cities while staying personalized</li>
              <li>Make every life milestone magical with Skyra</li>
            </ul>
          </div>
        </div>
      </section>

      {/* About Skyra Services */}
      <section className="py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title">About Skyra Event Management</h2>
          <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
            Skyra Events is a full-service event management company offering bespoke planning
            for weddings, corporate events, birthdays, and more — ensuring every detail is perfectly executed.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: "Weddings & Pre-wedding",
                desc: "From engagement to vows, we handle every celebration detail.",
                img: "https://i.pinimg.com/736x/2d/53/3f/2d533f74690c34aec7887e556488b3b6.jpg"
              },
              {
                title: "Corporate Events",
                desc: "Professional planning for meetings, launches, and more.",
                img: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80"
              },
              {
                title: "Birthday & Surprise Parties",
                desc: "Celebrate every age with custom themes and joy.",
                img: "https://i.pinimg.com/736x/fd/9c/5e/fd9c5e54c2b1e3b3aeed88508e26a3e4.jpg"
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/services"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition transform hover:scale-105"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-playfair">
            Let's Create Something Amazing Together
          </h2>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
            Ready to bring your event vision to life? Contact us today and let's start planning your perfect occasion.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all transform hover:-translate-y-1 hover:scale-105 hover:shadow-xl"
          >
            Book Your Event
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
