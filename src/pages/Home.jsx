// import { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Carousel from '../components/Carousel';

// const carouselImages = [
//   {
//     src: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
//     title: "Crafting Unforgettable Events",
//     subtitle: "From intimate gatherings to grand celebrations, we create experiences that last a lifetime.",
//     cta: "Explore Services",
//     ctaLink: "/services"
//   },
//   {
//     src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
//     title: "Dream Weddings Made Real",
//     subtitle: "Your perfect day deserves perfect planning. Let us handle every detail.",
//     cta: "Plan Your Wedding",
//     ctaLink: "/services/weddings"
//   },
//   {
//     src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
//     title: "Elevate Your Corporate Events",
//     subtitle: "Professional planning for conferences, meetings, and company celebrations.",
//     cta: "Get a Free Quote",
//     ctaLink: "/contact"
//   }
// ];

// const serviceCategories = [
//   {
//     title: "Weddings",
//     description: "Complete wedding planning services",
//     link: "/services/weddings",
//     image: "https://i.pinimg.com/736x/5d/4e/5d/5d4e5d31a3758c9d615f1041c4607457.jpg"
//   },
//   {
//     title: "Corporate Events",
//     description: "Professional meetings and conferences",
//     link: "/services/corporate",
//     image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80"
//   },
//   {
//     title: "Birthdays",
//     description: "Special celebration planning and making them memorable",
//     link: "/services/birthdays",
//     image: "https://i.pinimg.com/736x/02/0f/7d/020f7df65b41df2aaccb9856a74c8475.jpg"
//   },
//   {
//     title: "Baby Shower",
//     description: "Sweet baby shower celebrations",
//     link: "/services/babyshowers",
//     image: "https://i.pinimg.com/736x/79/4d/f1/794df182f86721165214e32d397a8a66.jpg"
//   },
// ];

// const Home = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="relative h-screen max-h-[90vh] min-h-[500px] overflow-hidden">
//         <Carousel images={carouselImages} />
//         <div className="absolute bottom-5 sm:bottom-10 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-full max-w-2xl px-4 sm:px-6 md:px-8 z-10">
//           <div className="bg-gradient-to-b from-black/80 to-black/60 backdrop-blur-md text-white text-center py-4 px-3 sm:py-6 sm:px-6 rounded-2xl shadow-lg animate-fade-in">
//             <p className="text-sm sm:text-base md:text-lg leading-relaxed">
//               We specialize in managing, planning, and organizing events from scratch—creating unforgettable experiences for every occasion.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Our Services Section */}
//       <section className="py-10 bg-light-purple">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-semibold font-playfair text-center mb-8">Our Services</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
//   {serviceCategories.map((service, index) => (
//     <div
//       key={index}
//       className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
//     >
//       <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
//         <img
//           src={service.image}
//           alt={service.title}
//           className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
//         />
//       </div>
//       <h3 className="text-xl font-semibold font-playfair mb-2">{service.title}</h3>
//       <p className="text-gray-600 mb-4">{service.description}</p>
//       <Link
//         to={service.link}
//         className="inline-block bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-all duration-300"
//       >
//         {service.cta} {/* Use the custom button text */}
//       </Link>
//     </div>
//   ))}
// </div>

//           <div className="text-center mt-10">
//             <Link
//               to="/services"
//               className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition duration-300 hover:shadow-md hover:-translate-y-1 transform"
//             >
//               Explore Services
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-10 bg-primary">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-playfair">
//             Ready to Create Your Perfect Event?
//           </h2>
//           <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
//             Let us help you plan your next unforgettable experience. From concept to execution, we'll be with you every step of the way.
//           </p>
//           <Link
//             to="/contact"
//             className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:bg-gray-100"
//           >
//             Book Your Event Now
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;



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
    image: "https://i.pinimg.com/736x/5d/4e/5d/5d4e5d31a3758c9d615f1041c4607457.jpg",
    cta: "Plan My Wedding Now"
  },
  {
    title: "Corporate Events",
    description: "Professional meetings and conferences",
    link: "/services/corporate",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
    cta: "Customize My Corporate Event"
  },
  {
    title: "Birthdays",
    description: "Special celebration planning and making them memorable",
    link: "/services/birthdays",
    image: "https://i.pinimg.com/736x/02/0f/7d/020f7df65b41df2aaccb9856a74c8475.jpg",
    cta: "Get My Party Quote"
  },
  {
    title: "Baby Shower",
    description: "Sweet baby shower celebrations",
    link: "/services/babyshowers",
    image: "https://i.pinimg.com/736x/79/4d/f1/794df182f86721165214e32d397a8a66.jpg",
    cta: "Design My Baby Shower"
  },
];

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen max-h-[90vh] min-h-[500px] overflow-hidden">
        <Carousel images={carouselImages} />
        <div className="absolute bottom-5 sm:bottom-10 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-full max-w-2xl px-4 sm:px-6 md:px-8 z-10">
          <div className="bg-gradient-to-b from-black/80 to-black/60 backdrop-blur-md text-white text-center py-4 px-3 sm:py-6 sm:px-6 rounded-2xl shadow-lg animate-fade-in">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              We specialize in managing, planning, and organizing events from scratch—creating unforgettable experiences for every occasion.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-10 bg-light-purple">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold font-playfair text-center mb-8">Our Services</h2>
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
                    className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold font-playfair mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-block bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-all duration-300"
                >
                  {service.cta} {/* Use the custom button text */}
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition duration-300 hover:shadow-md hover:-translate-y-1 transform"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-playfair">
            Ready to Create Your Perfect Event?
          </h2>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
            Let us help you plan your next unforgettable experience. From concept to execution, we'll be with you every step of the way.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:bg-gray-100"
          >
            Book Your Event Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
