'use client';
import { useState } from 'react';
import Reveal from './Reveal';

const socials = [
  { icon: 'fab fa-github', href: 'https://github.com/FarelRyan', label: 'GitHub' },       // Replace #
  { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/farelryan/', label: 'LinkedIn' }, // Replace #
  { icon: 'fab fa-instagram', href: 'https://www.instagram.com/frlryn14/?hl=en', label: 'Instagram' },  // Replace #
  { icon: 'fab fa-whatsapp', href: 'https://wa.me/+6281770545533', label: 'WhatsApp' }, // Add number after wa.me/
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal>
          <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-3">
            Get In Touch
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-5 text-txt-primary leading-tight">
            Contact Me
          </h2>
          <p className="text-txt-secondary text-lg max-w-[600px] leading-relaxed mb-12">
            Feel free to reach out for collaborations, questions, or just to say hello.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Info Card */}
          <Reveal>
            <div className="bg-bg-card border border-border rounded-[20px] p-10">
              {/* Email */}
              <div className="flex items-center gap-4 mb-7">
                <div className="w-12 h-12 rounded-xl bg-accent-glow flex items-center justify-center shrink-0">
                  <i className="fas fa-envelope text-accent" />
                </div>
                <div>
                  <h4 className="text-sm text-txt-muted font-medium mb-0.5">Email</h4>
                  <a
                    href="mailto:farelryan9@gmail.com"
                    className="text-txt-primary hover:text-accent transition-colors"
                  >
                    farelryan9@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-glow flex items-center justify-center shrink-0">
                  <i className="fas fa-map-marker-alt text-accent" />
                </div>
                <div>
                  <h4 className="text-sm text-txt-muted font-medium mb-0.5">Location</h4>
                  <p className="text-txt-primary">Indonesia</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 mt-8">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    className="w-12 h-12 rounded-xl border border-border flex items-center justify-center text-txt-secondary hover:border-accent hover:bg-accent-glow hover:text-accent hover:-translate-y-1 transition-all duration-300"
                  >
                    <i className={s.icon} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Contact Form */}
          <Reveal delay={200}>
            <div className="bg-bg-card border border-border rounded-[20px] p-10">
              <h3 className="font-heading text-xl font-semibold mb-2 text-txt-primary">
                Send a Message
              </h3>
              <p className="text-txt-secondary text-sm mb-7">
                I&apos;ll get back to you as soon as possible.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <label className="block text-sm font-medium text-txt-secondary mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3.5 bg-bg-secondary border border-border rounded-xl text-txt-primary font-body outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div className="mb-5">
                  <label className="block text-sm font-medium text-txt-secondary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3.5 bg-bg-secondary border border-border rounded-xl text-txt-primary font-body outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div className="mb-5">
                  <label className="block text-sm font-medium text-txt-secondary mb-2">
                    Message
                  </label>
                  <textarea
                    placeholder="Write your message here..."
                    rows={4}
                    className="w-full px-4 py-3.5 bg-bg-secondary border border-border rounded-xl text-txt-primary font-body outline-none focus:border-accent transition-colors resize-y"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-heading text-sm font-semibold text-white gradient-bg shadow-[0_4px_20px_rgba(108,99,255,0.3)] hover:shadow-[0_8px_30px_rgba(108,99,255,0.4)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  {submitted ? (
                    <>
                      <i className="fas fa-check" /> Message Sent!
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane" /> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
