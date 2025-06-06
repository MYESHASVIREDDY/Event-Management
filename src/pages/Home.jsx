import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';

const carouselImages = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Crafting Unforgettable Events",
    subtitle: "From intimate gatherings to grand celebrations, we create experiences that last a lifetime.",
    cta: "Explore Services",
    ctaLink: "/services"
  },
  {
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
    title: "Dream Weddings Made Real",
    subtitle: "Your perfect day deserves perfect planning. Let us handle every detail.",
    cta: "Plan Your Wedding",
    ctaLink: "/services/weddings"
  },
  {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Elevate Your Corporate Events",
    subtitle: "Professional planning for conferences, meetings, and company celebrations.",
    cta: "Get a Free Quote",
    ctaLink: "/contact"
  }
];

const serviceCategories = [
  {
    title: "Weddings",
    description: "Complete wedding planning services",
    link: "/services/weddings",
    image: "https://i.pinimg.com/736x/5d/4e/5d/5d4e5d31a3758c9d615f1041c4607457.jpg"
  },
  {
    title: "Corporate Events",
    description: "Professional meetings and conferences",
    link: "/services/corporate",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80"
  },
  {
    title: "Birthdays",
    description: "Special celebration planning",
    link: "/services/birthdays",
    image: "https://i.pinimg.com/736x/fd/9c/5e/fd9c5e54c2b1e3b3aeed88508e26a3e4.jpg"
  },
  {
    title: "Baby Shower",
    description: "Sweet baby shower celebrations",
    link: "/services/babyshowers",
    image: "https://i.pinimg.com/736x/79/4d/f1/794df182f86721165214e32d397a8a66.jpg"
  },
];

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      {/* Hero Section */}



      {/* Our Services Section */}
      <section className="py-16 bg-light-purple">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {serviceCategories.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to={service.link}
                  className="text-primary hover:underline font-medium"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-primary">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-playfair">Ready to Create Your Perfect Event?</h2>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
            Let us help you plan your next unforgettable experience. From concept to execution, we'll be with you every step of the way.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded font-medium transition-colors"
          >
            Book Your Event Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;