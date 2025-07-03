

import { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

// Main Skyra services
const mainServices = [
  {
    title: "Weddings",
    slug: "weddings",
    image: "https://i.pinimg.com/736x/5d/4e/5d/5d4e5d31a3758c9d615f1041c4607457.jpg",
    features: ["Complete wedding planning services with photography, décor, and catering"],
    startingPrice: 162499,
    cta: "Plan My Wedding Now"
  },
  {
    title: "Birthday Parties",
    slug: "birthdays",
    image: "https://i.pinimg.com/736x/36/87/39/3687396ec96fdc93e47a65650c42f028.jpg",
    features: ["Themed birthday celebrations with décor, entertainment, and photography"],
    startingPrice: 18749,
    cta: "Get My Party Quote"
  },
  {
    title: "Corporate Events",
    slug: "corporate",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
    features: ["Professional corporate events, meetings, and gala dinners"],
    startingPrice: 97499,
    cta: "Customize My Corporate Event"
  },
  {
    title: "College Fests",
    slug: "college",
    image: "https://i.pinimg.com/736x/52/89/f5/5289f57659c0d2352a815219520d5120.jpg",
    features: ["Cultural and technical college festivals with stage setup and entertainment"],
    startingPrice: 197499,
    cta: "Organize My Campus Event"
  },
  {
    title: "Anniversary Celebrations",
    slug: "anniversaries",
    image: "https://i.pinimg.com/736x/ed/30/a0/ed30a00e907e816d72385c5e7f398ca3.jpg",
    features: ["Intimate to grand anniversary celebrations with custom décor and entertainment"],
    startingPrice: 24999,
    cta: "Celebrate Our Anniversary in Style"
  },
  {
    title: "Baby Showers",
    slug: "babyshowers",
    image: "https://i.pinimg.com/736x/79/4d/f1/794df182f86721165214e32d397a8a66.jpg",
    features: ["Sweet baby shower celebrations with themed décor and memory capturing"],
    startingPrice: 18749,
    cta: "Design My Baby Shower"
  }
];

// Expandable additional services
const additionalServices = [
  {
    title: "House Warming Ceremonies",
    slug: "housewarming",
    image: "https://i.pinimg.com/736x/5c/ea/55/5cea5593007d7fe4a9bffb3761c31520.jpg",
    features: ["Traditional housewarming celebrations with puja arrangements and feast"],
    startingPrice: 25749,
    cta: "Plan My House Warming Ceremony"
  },
  {
    title: "Cradle Ceremonies",
    slug: "cradleceremony",
    image: "https://i.pinimg.com/736x/b3/bb/95/b3bb954f4ff08fd9651b087530753fb6.jpg",
    features: ["Beautiful cradle ceremony arrangements with traditional décor and rituals"],
    startingPrice: 22499,
    cta: "Decorate My Cradle Ceremony"
  },
  {
    title: "Surprise Parties",
    slug: "surpriseparties",
    image: "https://media.istockphoto.com/id/599887432/photo/friends-know-just-how-to-make-you-feel-special.webp?a=1&b=1&s=612x612&w=0&k=20&c=kfuLnDZFwA2AlNSzMQGRTUWg2FZLfM3NwB6-SmHpU9E=",
    features: ["Secret planning and execution for memorable surprise celebrations"],
    startingPrice: 18749,
    cta: "Plan a Surprise Party"
  },
  {
    title: "Dhoti & Half Saree Ceremonies",
    slug: "dhotisaree",
    image: "https://i.pinimg.com/736x/b6/29/02/b62902d59ca87b73764f13773b204e36.jpg",
    features: ["Traditional coming-of-age ceremonies with authentic cultural arrangements"],
    startingPrice: 34999,
    cta: "Style My Traditional Ceremony"
  },
  {
    title: "Maternity Celebrations",
    slug: "maternity",
    image: "https://i.pinimg.com/736x/5c/02/f2/5c02f223582d01ca26556a80f63f1263.jpg",
    features: ["Special maternity photoshoots and celebration arrangements"],
    startingPrice: 12499,
    cta: "Start My Maternity Shower Setup"
  }
];

const Services = () => {
  const [showMoreServices, setShowMoreServices] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleMoreServices = () => {
    setShowMoreServices(!showMoreServices);
  };

  return (
    <div>
      {/* Hero Section */}
<section className="bg-light-purple py-24 md:py-32 text-center">
  <div className="container mx-auto px-4">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair mb-6">
      Our Skyra Event Services
    </h1>
    <p className="text-xl max-w-3xl mx-auto text-gray-700 font-sans">
      From weddings to corporate gatherings, we offer comprehensive event planning and management services tailored to your unique needs and vision.
    </p>
  </div>
</section>





      {/* Main Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-playfair">Popular Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Toggle Button */}
      <section className="py-8 text-center">
        <button
          onClick={toggleMoreServices}
          className="inline-flex items-center gap-2 bg-primary text-white hover:bg-primary-dark px-8 py-3 rounded-lg font-medium transition-transform transform hover:scale-105"
        >
          {showMoreServices ? "Show Less Services" : "Explore More Services"}
          {showMoreServices ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </section>

      {/* More Services Section */}
      {showMoreServices && (
        <section className="py-16 bg-gray-50 animate-fadeIn">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 font-playfair">More Specialized Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalServices.map((service, index) => (
                <ServiceCard key={`additional-${index}`} service={service} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Extra Services Section */}
      <section className="py-16 bg-light-purple">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center font-bold font-playfair mb-12">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Entertainment",
                description:
                  "From live bands to DJs, we provide top-notch entertainment services to keep your guests engaged and entertained.",
                iconPath: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
              },
              {
                title: "Photography",
                description:
                  "Capture the best moments with our professional photographers and videographers.",
                iconPath: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
              },
              {
                title: "Decoration Services",
                description:
                  "Elegant and thematic decorations to create the perfect ambiance for your event.",
                iconPath: "M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z"
              }
            ].map((extra, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:bg-purple-50 hover:scale-105"
              >
                <div className="h-16 w-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={extra.iconPath}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">{extra.title}</h3>
                <p className="text-gray-700 text-center">{extra.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
