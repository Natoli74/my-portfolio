const Footer = () => {
  return (
    <footer className="c-space pt-10 pb-6 border-t border-black-300">
      {/* Main footer content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Company Info */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold text-xl">About</h4>
          <p className="text-white-600 text-sm">
            Delivering innovative solutions and exceptional experiences through technology.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/Natoli74" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
            </a>
            <a href="https://www.instagram.com/natoli74_" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
            </a>
            <a href="https://www.linkedin.com/in/natoli-tesgera-68001a282/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src="/assets/linkedin.svg" alt="linkedin" className="w-1/2 h-1/2" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold text-xl">Quick Links</h4>
          <ul className="text-white-600 space-y-2 text-sm">
            <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
            <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold text-xl">Contact Us</h4>
          <div className="text-white-600 space-y-2 text-sm">
            <p>Email: <a href="mailto:fs.natoli@gmail.com" className="hover:text-white transition-colors">fs.natoli@gmail.com</a></p>
            <p>Phone: +1 612 499 6607</p>
            <p>Address: Eagan, Minnesota United States</p>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="pt-3 border-t border-black-400 flex sm:flex-row justify-between items-center">
          <p className="text-white-500 text-sm items-center m-auto">© 2025 Natoli Tesgera. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
