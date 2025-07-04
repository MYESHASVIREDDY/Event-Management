
import React, { useRef } from "react";
import Slider from "react-slick";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";

// ✨ Replace these with your actual EmailJS values
const SERVICE_ID = "service_3nm566j";
const TEMPLATE_ID = "template_vqjvqp3";
const PUBLIC_KEY = "n9uR18YQL-KrfGM2x";

const testimonials = [
  {
    stars: 4,
    text: "Our wedding was stress-free thanks to Skyra Events. The floral work, lights, and coordination were beyond beautiful.",
    author: "Priya & Arjun – Wedding, Hyderabad",
  },
  {
    stars: 5,
    text: "Skyra brought elegance and warmth into our celebration. Guests are still talking about the decor!",
    author: "Sneha Reddy – Wedding, Gachibowli",
  },
  {
    stars: 3,
    text: "We were amazed by their attention to detail. The mandap setup and guest management were top-notch.",
    author: "Rohit & Neha – Wedding, Secunderabad",
  },
  {
    stars: 5,
    text: "Very professional and creative team. We didn’t have to think about a thing — they handled it all beautifully.",
    author: "Karthik & Swathi – Wedding, Kukatpally",
  },
  {
    stars: 4,
    text: "Skyra created an unforgettable birthday experience for my 6-year-old. It was magical and full of color!",
    author: "Pooja Mehta – Birthday, Hyderabad",
  },
  {
    stars: 4,
    text: "Everything from the theme setup to the entertainment was spot on. Highly recommend them for kids’ birthdays.",
    author: "Nisha V. – Birthday, Jubilee Hills",
  },
  {
    stars: 5,
    text: "They managed everything smoothly — games, décor, cake area, you name it. The kids had a blast!",
    author: "Siddharth Rao – Birthday, Banjara Hills",
  },
  {
    stars: 4,
    text: "Our baby shower was just magical. The pastel theme and personalized touches showed how much they care.",
    author: "Harika S. – Baby Shower, Begumpet",
  },
  {
    stars: 3,
    text: "From welcome signage to photo corners, Skyra made everything warm and lovely. My guests loved the vibe!",
    author: "Ananya Jain – Baby Shower, Tarnaka",
  },
  {
    stars: 4,
    text: "The whole setup looked Pinterest-worthy. Simple, soft, elegant — just what we imagined!",
    author: "Lakshmi R. – Baby Shower, Madhapur",
  },
  {
    stars: 4,
    text: "Skyra turned our home into a celebration space that looked absolutely grand. Everything was perfect.",
    author: "Srikanth & Renu – Cradle Ceremony, Ameerpet",
  },
  {
    stars: 4,
    text: "We were so happy with how the team managed the cradle ceremony. Professional, traditional, and beautifully styled.",
    author: "Meena Rao – Cradle Ceremony, Manikonda",
  },
  {
    stars: 4,
    text: "Skyra made our twin babies’ cradle ceremony so memorable. The colors, flowers, and cultural elements were blended beautifully.",
    author: "Vishal & Kavitha – Cradle Ceremony, Kondapur",
  },
  {
    stars: 4,
    text: "This was our second time with Skyra after our wedding, and they delivered again! Our baby shower setup was joyful and elegant.",
    author: "Deepa Rajan – Baby Shower, Miyapur",
  },
  {
    stars: 5,
    text: "Skyra Events is now our go-to for family functions. They handled my niece’s birthday and my cousin’s wedding — both looked stunning.",
    author: "Sumanth Rao – Birthday & Wedding Events, Hyderabad",
  },
];

const TestimonialsPage = () => {
  const form = useRef();

  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={`${className} !right-4 z-10 text-purple-500`} onClick={onClick} />
    );
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={`${className} !left-4 z-10 text-purple-500`} onClick={onClick} />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
    appendDots: (dots) => (
      <div>
        <ul className="slick-dots text-purple-500">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-purple-500 rounded-full mx-1"></div>
    ),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        toast.success("Thank you! Your story makes us better 💜", { position: "top-center" });
        form.current.reset();
      })
      .catch(() => {
        toast.error("Something went wrong. Please try again.", { position: "top-center" });
      });
  };

  return (
    <div className="font-serif">
      {/* Header */}
      <section className="bg-light-purple py-24 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 font-playfair">Testimonials</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-700 font-sans">
            Stories from our clients about their unforgettable celebrations.
          </p>
        </div>
      </section>

      {/* Testimonials Slider */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Slider {...settings}>
          {testimonials.map((item, idx) => (
            <div key={idx} className="px-2 sm:px-4 h-full">
              <div className="bg-white border shadow-xl rounded-xl p-4 sm:p-6 flex flex-col justify-between h-auto min-h-[280px] sm:h-[340px]">
                <div className="text-yellow-400 text-xl mb-2">
                  {"★".repeat(item.stars) + "☆".repeat(5 - item.stars)}
                  <span className="text-gray-600 ml-2">({item.stars}.0/5)</span>
                </div>
                <p className="italic text-gray-800 mb-4 line-clamp-5">
                  ❝{item.text}❞
                </p>
                <p className="text-sm font-semibold text-gray-700 mt-auto">{item.author}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Share Experience Form */}
      <div className="bg-white py-12 text-center">
        <h2 className="text-3xl font-bold font-serif mb-2">✍ Share Your Experience With Us</h2>
        <p className="text-gray-600 mb-6">We’d love to hear how we made your event special!</p>

        <div className="max-w-4xl mx-auto px-6">
          <form ref={form} onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input type="text" name="name" placeholder="Name" className="p-3 border rounded w-full" required />
              <input type="email" name="email" placeholder="Email" className="p-3 border rounded w-full" required />
              <select name="event_type" className="p-3 border rounded w-full" required>
                <option value="">Type of Event</option>
                <option>Wedding</option>
                <option>Birthday</option>
                <option>Baby Shower</option>
                <option>Cradle Ceremony</option>
                <option>Others</option>
              </select>
              <input type="date" name="event_date" className="p-3 border rounded w-full" required />
            </div>
            <textarea
              name="message"
              placeholder="message"
              className="w-full p-3 border rounded mb-4"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded"
            >
              Submit
            </button>
          </form>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default TestimonialsPage;
