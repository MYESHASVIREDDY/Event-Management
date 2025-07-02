
// import { useState, useEffect } from 'react';
// import { Outlet } from 'react-router-dom';
// import Navbar from './Navbar';
// import Footer from './Footer';

// const Layout = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar scrolled={scrolled} />
//       <main className="flex-grow">
//         <Outlet />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Layout;

import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Navbar with scroll state passed as prop */}
      <Navbar scrolled={scrolled} />

      {/* Add padding-top to offset fixed navbar height */}
      <main className="flex-grow pt-[90px]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
