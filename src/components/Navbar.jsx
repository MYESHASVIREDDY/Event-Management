

// export default Navbar;
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaRegCalendarAlt } from 'react-icons/fa';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Styling
  const purpleText = "text-[#3C0080]";
  const gradientHover =
    "hover:bg-gradient-to-r hover:from-[#a149d4] hover:via-[#d44fa5] hover:to-[#ff5ca9] hover:bg-clip-text hover:text-transparent";
  const gradientButton = "bg-gradient-to-r from-[#6A11CB] to-[#FF6FD8]";
  const buttonHover = "hover:brightness-110";
  const buttonClasses =
    `${gradientButton} ${buttonHover} text-white font-bold py-[10px] px-6 text-[14px] rounded-full shadow-md transition duration-300 flex items-center justify-center gap-2 transform hover:scale-105 min-w-[140px]`;

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'Get Quote', path: '/contact', isButton: true },
    {
      label: 'Book Now',
      path: '/services',
      isButton: true,
      icon: <FaRegCalendarAlt className="text-white text-base" />
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="skyra.png"
              alt="Skyra Logo"
              className="h-10 md:h-12 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-10">
            {navItems.map(({ label, path, isButton, icon }) =>
              isButton ? (
                <Link key={label} to={path} className={buttonClasses}>
                  {icon && icon}
                  {label}
                </Link>
              ) : (
                <NavLink
                  key={label}
                  to={path}
                  className={({ isActive }) =>
                    `${purpleText} ${gradientHover} text-sm uppercase tracking-wider font-medium transition-all duration-300`
                  }
                >
                  {label}
                </NavLink>
              )
            )}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="h-6 w-6 text-[#3C0080]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-96 shadow-md" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-4 py-2">
          <nav className="flex flex-col space-y-4 py-4">
            {navItems.map(({ label, path, isButton, icon }) =>
              isButton ? (
                <Link
                  key={label}
                  to={path}
                  className={buttonClasses + " w-full"}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {icon && icon}
                  {label}
                </Link>
              ) : (
                <NavLink
                  key={label}
                  to={path}
                  className={({ isActive }) =>
                    `${purpleText} ${gradientHover} text-sm uppercase tracking-wider font-medium transition-all duration-300`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </NavLink>
              )
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

