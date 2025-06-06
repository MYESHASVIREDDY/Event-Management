import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  const currentImage = images[currentIndex];

  return (
    <div className="relative h-full w-full overflow-hidden bg-black">
      {/* Only render current image */}
      <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out opacity-100">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <img
          src={currentImage.src}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-playfair">{currentImage.title}</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">{currentImage.subtitle}</p>
            <Link to={currentImage.ctaLink} className="btn-primary">
              {currentImage.cta}
            </Link>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-8 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
