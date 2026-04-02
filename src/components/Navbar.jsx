'use client';
import { useState, useEffect } from 'react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#career', label: 'Career' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll('section[id]');
      let current = '#home';
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 120) {
          current = '#' + section.id;
        }
      });
      setActive(current);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 nav-blur transition-all duration-400 ${
        scrolled
          ? 'py-3 bg-bg-primary/90 border-b border-border'
          : 'py-5 bg-bg-primary/80 border-b border-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
        <a href="#" className="font-heading font-bold text-xl gradient-text">
          FRL.
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-9 list-none">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium relative transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:rounded after:gradient-bg after:transition-all after:duration-300 ${
                  active === link.href
                    ? 'text-txt-primary after:w-full'
                    : 'text-txt-secondary hover:text-txt-primary after:w-0 hover:after:w-full'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="flex md:hidden flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span className={`block w-6 h-[2px] bg-txt-primary rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-[2px] bg-txt-primary rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2px] bg-txt-primary rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-bg-primary/95 nav-blur border-b border-border px-6 py-5 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium transition-colors ${
                active === link.href ? 'text-txt-primary' : 'text-txt-secondary'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
