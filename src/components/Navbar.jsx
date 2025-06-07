// import { useState, useEffect } from 'react';
// import { Link, NavLink } from 'react-router-dom';

// const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768) {
//         setMobileMenuOpen(false);
//       }
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Styling
//   const purpleText = "text-[#6b1e8e]";
//   const gradientHover = "hover:bg-gradient-to-r hover:from-[#a149d4] hover:via-[#d44fa5] hover:to-[#ff5ca9] hover:bg-clip-text hover:text-transparent";
//   const gradientButton = "bg-gradient-to-r from-[#a149d4] via-[#d44fa5] to-[#ff5ca9]";
//   const buttonHover = "hover:bg-[#6b1e8e] hover:from-none hover:via-none hover:to-none";

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
//       <div className="container mx-auto px-4 py-3">
//         <div className="flex justify-between items-center">
//           <Link to="/" className="flex items-center gap-3 text-2xl md:text-3xl font-bold font-playfair">
//   <img
//     src="skyra.jpg"
//     alt="Skyra Logo"
//     className="h-10 w-10 object-contain"
//   />
//   <span className="text-[#6b1e8e] hover:bg-gradient-to-r hover:from-[#a149d4] hover:via-[#d44fa5] hover:to-[#ff5ca9] hover:bg-clip-text hover:text-transparent transition-colors duration-300">
//     Skyra Events
//   </span>
// </Link>


//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             {['/', '/services', '/about-us'].map((path, index) => {
//               const labels = ['Home', 'Services', 'About Us'];
//               return (
//                 <NavLink
//                   key={path}
//                   to={path}
//                   className={({ isActive }) =>
//                     `${purpleText} ${gradientHover} text-sm uppercase tracking-wider font-medium transition-all duration-300`
//                   }
//                 >
//                   {labels[index]}
//                 </NavLink>
//               );
//             })}
//             <Link
//               to="/contact"
//               className={`${gradientButton} ${buttonHover} text-white font-medium py-2 px-4 text-sm rounded-full shadow-md transition duration-300`}
//             >
//               Book Now
//             </Link>
//           </nav>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden focus:outline-none"
//             onClick={toggleMobileMenu}
//           >
//             <svg
//               className="h-6 w-6 text-[#6b1e8e]"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div className={`md:hidden bg-white shadow-lg transition-all duration-300 overflow-hidden ${
//         mobileMenuOpen ? 'max-h-64' : 'max-h-0'
//       }`}>
//         <div className="container mx-auto px-4 py-2">
//           <nav className="flex flex-col space-y-4 py-4">
//             {['/', '/services', '/about-us'].map((path, index) => {
//               const labels = ['Home', 'Services', 'About Us'];
//               return (
//                 <NavLink
//                   key={path}
//                   to={path}
//                   className={({ isActive }) =>
//                     `${purpleText} ${gradientHover} text-sm uppercase tracking-wider font-medium transition-all duration-300`
//                   }
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   {labels[index]}
//                 </NavLink>
//               );
//             })}
//             <Link
//               to="/contact"
//               className={`${gradientButton} ${buttonHover} text-white font-medium py-2 px-4 text-sm rounded-full text-center shadow-md transition duration-300`}
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               Book Now
//             </Link>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;


import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

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
  const purpleText = "text-[#6b1e8e]";
  const gradientHover =
    "hover:bg-gradient-to-r hover:from-[#a149d4] hover:via-[#d44fa5] hover:to-[#ff5ca9] hover:bg-clip-text hover:text-transparent";
  const gradientButton =
    "bg-gradient-to-r from-[#a149d4] via-[#d44fa5] to-[#ff5ca9]";
  const buttonHover =
    "hover:bg-[#6b1e8e] hover:from-none hover:via-none hover:to-none";

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo + Brand */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="skyra.png"
              alt="Skyra Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="text-2xl md:text-3xl font-bold font-playfair text-[#6b1e8e] hover:bg-gradient-to-r hover:from-[#a149d4] hover:via-[#d44fa5] hover:to-[#ff5ca9] hover:bg-clip-text hover:text-transparent transition-colors duration-300">
              Skyra Events
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['/', '/services', '/about-us'].map((path, index) => {
              const labels = ['Home', 'Services', 'About Us'];
              return (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `${purpleText} ${gradientHover} text-sm uppercase tracking-wider font-medium transition-all duration-300`
                  }
                >
                  {labels[index]}
                </NavLink>
              );
            })}
            <Link
              to="/contact"
              className={`${gradientButton} ${buttonHover} text-white font-medium py-2 px-4 text-sm rounded-full shadow-md transition duration-300`}
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="h-6 w-6 text-[#6b1e8e]"
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
        className={`md:hidden bg-white shadow-lg transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-4 py-2">
          <nav className="flex flex-col space-y-4 py-4">
            {['/', '/services', '/about-us'].map((path, index) => {
              const labels = ['Home', 'Services', 'About Us'];
              return (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `${purpleText} ${gradientHover} text-sm uppercase tracking-wider font-medium transition-all duration-300`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {labels[index]}
                </NavLink>
              );
            })}
            <Link
              to="/contact"
              className={`${gradientButton} ${buttonHover} text-white font-medium py-2 px-4 text-sm rounded-full text-center shadow-md transition duration-300`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Now
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
