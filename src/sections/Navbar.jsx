import { useState, useEffect } from 'react';

import { navLinks } from '../constants/index.js';

const NavItems = ({ activeLink, onClick = () => {} }) => (
  <ul className="nav-ul">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li">
        <a 
          href={item.href} 
          className={`nav-li_a ${activeLink === item.id ? 'text-white' : 'text-neutral-400'} hover:text-white transition-colors`} 
          onClick={onClick}
        >
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);

// Define the array of rotating roles
const roles = ["Software Developer", "Frontend Designer", "Full Stack Engineer", "UI/UX Enthusiast", "Creative Coder"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [activeLink, setActiveLink] = useState('home'); // Default active link

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  // Change the current role every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Handle scroll to update active link
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3 && pageYOffset < sectionTop + sectionHeight) {
          current = section.getAttribute('id');
        }
      });

      setActiveLink(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    setActiveLink(id);
    closeMenu();
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="#home"
            className="flex text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            Natoli Tesgera&nbsp;|&nbsp;
            <span
              className="text-white font-bold text-x"
              
            >
              {roles[currentRoleIndex]}
            </span>
          </a>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>

          <nav className="sm:flex hidden">
            <NavItems activeLink={activeLink} onClick={handleLinkClick} />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems activeLink={activeLink} onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
