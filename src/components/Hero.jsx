'use client';
import { useState, useRef, useCallback } from 'react';
import GamingModal from './GamingModal';

export default function Hero() {
  const [showGaming, setShowGaming] = useState(false);
  const [clicks, setClicks] = useState(0);
  const [ripples, setRipples] = useState([]);
  const timerRef = useRef(null);

  const handleProfileClick = useCallback((e) => {
    // Add ripple effect at click position
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples((prev) => [...prev, { id, x, y }]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 600);

    setClicks((prev) => {
      const next = prev + 1;
      // Reset counter after 2s of inactivity
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setClicks(0), 2000);

      if (next >= 5) {
        setShowGaming(true);
        clearTimeout(timerRef.current);
        return 0;
      }
      return next;
    });
  }, []);

  return (
    <>
      <section id="home" className="min-h-screen flex items-center relative pt-20 overflow-x-clip">
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
              Data Analyst | Marketing Enthusiast
            </p>
            <p className="text-base text-txt-secondary leading-relaxed mb-8 max-w-[500px] mx-auto lg:mx-0 opacity-0 animate-fade-up-4">
              My name Farel Ryan Laksmana, but most people call me Ryan. I&apos;m an aspiring Marketing Analyst with a strong interest in understanding how data can improve marketing performance and customer experience. I previously worked as a Marketing Staff, where I helped analyze campaign performance, track customer engagement, and support marketing strategies. I enjoy exploring data to uncover insights about consumer behavior and turning those insights into ideas that can improve marketing decisions. I&apos;m always eager to keep learning, build new projects, and grow as a data-driven marketer.
            </p>
            <div className="flex gap-4 flex-wrap justify-center lg:justify-start opacity-0 animate-fade-up-5">
              <a
                href="https://drive.google.com/file/d/1Xf4ihRD0JiDSWqkJgxBax7cB1wL-tay5/view?usp=sharing"
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

          {/* Avatar — image inside blob, overflowing top */}
          <div className="flex justify-center items-end relative opacity-0 animate-fade-in pt-28 lg:pt-10">

            {/* Blob 1 — background glow layer, slow drift */}
            <div
              className="absolute bottom-[-20px] left-1/2 w-[340px] h-[300px] md:w-[430px] md:h-[380px] opacity-25 pointer-events-none blur-sm"
              style={{
                background: 'linear-gradient(135deg, #6c63ff 0%, #4ecdc4 100%)',
                animation: 'blobMorph1 8s ease-in-out infinite',
              }}
            />

            {/* Blob 2 — secondary glow, offset rhythm */}
            <div
              className="absolute bottom-[-10px] left-1/2 w-[300px] h-[260px] md:w-[380px] md:h-[340px] opacity-15 pointer-events-none blur-sm"
              style={{
                background: 'linear-gradient(135deg, #c471ed 0%, #6c63ff 100%)',
                animation: 'blobMorph2 6s ease-in-out infinite',
              }}
            />

            {/* Sizing wrapper — static, no animation */}
            <div className="relative w-[300px] h-[280px] md:w-[400px] md:h-[340px]">

              {/* Blob background — animates shape and sway */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(160deg, rgba(108,99,255,0.25) 0%, rgba(26,26,38,0.95) 40%, #1a1a26 100%)',
                  animation: 'blobContainerMorph 8s ease-in-out infinite, blobMorph3 10s ease-in-out infinite',
                  borderRadius: '45% 55% 50% 50% / 40% 40% 60% 60%',
                  border: '1.5px solid rgba(108,99,255,0.2)',
                  boxShadow: '0 0 60px rgba(108,99,255,0.12), inset 0 -20px 40px rgba(10,10,15,0.5)',
                }}
              />

              {/* Image clip container — static ellipse, 200% tall so top is way out of view
                  but bottom curves clip the image. Image inside is completely still. */}
              <div
                className="absolute left-0 right-0 bottom-0 overflow-hidden pointer-events-none"
                style={{
                  height: '200%',
                  borderRadius: '50% 50% 48% 52% / 40% 40% 58% 58%',
                }}
              >
                <img
                  src="/profile.png"
                  alt="Farel Ryan Laksmana"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[400px] h-auto max-h-[460px] md:max-h-[540px] object-contain drop-shadow-[0_8px_30px_rgba(0,0,0,0.6)] select-none"
                />
              </div>

              {/* Invisible click target over the image area */}
              <div
                className="absolute inset-0 z-20 cursor-pointer"
                onClick={handleProfileClick}
                style={{ top: '-60%' }}
              >
                {/* Click ripple effects */}
                {ripples.map((ripple) => (
                  <span
                    key={ripple.id}
                    className="absolute w-16 h-16 rounded-full pointer-events-none"
                    style={{
                      left: ripple.x,
                      top: ripple.y,
                      background: 'radial-gradient(circle, rgba(108,99,255,0.4) 0%, transparent 70%)',
                      animation: 'secretRipple 0.6s ease-out forwards',
                    }}
                  />
                ))}
              </div>

              {/* Click counter hint — shows after 2 clicks */}
              {clicks >= 2 && (
                <div
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/20 border border-accent/30"
                  style={{ animation: 'gamingCardIn 0.3s ease forwards' }}
                >
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                        i < clicks ? 'bg-accent scale-125' : 'bg-white/20'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Blob outline ring */}
            <div
              className="absolute bottom-[5px] left-1/2 w-[320px] h-[295px] md:w-[420px] md:h-[355px] border border-accent-light/20 opacity-50 pointer-events-none"
              style={{
                animation: 'blobRingMorph 12s ease-in-out infinite',
                borderRadius: '50% 50% 45% 55% / 45% 55% 50% 50%',
              }}
            />
          </div>
        </div>
      </section>

      {/* Gaming Easter Egg Modal */}
      {showGaming && <GamingModal onClose={() => setShowGaming(false)} />}
    </>
  );
}
