export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background glows */}
      <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(108,99,255,0.15)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -bottom-[100px] -left-[100px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(78,205,196,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-[60px] items-center">
        {/* Content */}
        <div className="relative z-10 text-center lg:text-left">
          <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4 opacity-0 animate-fade-up-1">
            Hello, I&apos;m
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.1] mb-3 opacity-0 animate-fade-up-2">
            Farel Ryan
            <br />
            <span className="gradient-text">Laksmana</span>
          </h1>
          <p className="text-xl text-txt-secondary mb-6 opacity-0 animate-fade-up-3">
            Data Analyst
          </p>
          <p className="text-base text-txt-secondary leading-relaxed mb-8 max-w-[500px] mx-auto lg:mx-0 opacity-0 animate-fade-up-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="flex gap-4 flex-wrap justify-center lg:justify-start opacity-0 animate-fade-up-5">
            <a
              href="https://docs.google.com/document/d/1VdxYouYClqqWDIzBbmxls3k4ae2IRfVyS-BjeKogpnk/edit?tab=t.0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-heading text-sm font-semibold text-white gradient-bg shadow-[0_4px_20px_rgba(108,99,255,0.3)] hover:shadow-[0_8px_30px_rgba(108,99,255,0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <i className="fas fa-download" /> Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-heading text-sm font-semibold text-txt-primary border border-border hover:border-accent hover:bg-accent-glow hover:-translate-y-0.5 transition-all duration-300"
            >
              <i className="fas fa-envelope" /> Contact Me
            </a>
          </div>
        </div>

        {/* Avatar */}
        <div className="flex justify-center items-center relative opacity-0 animate-fade-in">
          <div className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-[40px] border border-accent-glow-strong rotate-6 pointer-events-none" />
          <div className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-[32px] overflow-hidden relative border-2 border-border shadow-[0_0_40px_rgba(108,99,255,0.1)] bg-bg-card flex items-center justify-center">
            <img src="/profile.png" alt="Farel Ryan Laksmana" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
