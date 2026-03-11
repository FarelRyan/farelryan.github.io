export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border py-10">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-sm text-txt-muted">
          &copy; {new Date().getFullYear()} Farel Ryan Laksmana. All rights reserved.
        </span>
        <div className="flex gap-6">
          {['Home', 'About', 'Portfolio', 'Contact'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-txt-muted hover:text-accent transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
