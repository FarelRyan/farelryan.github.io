'use client';
import Reveal from './Reveal';

const experiences = [
  {
    role: 'Operational Staff',
    company: 'Eggy Elektronik',
    period: 'Feb 2025 – Present',
    industry: 'Electronics & Houseware Retail',
    current: true,
    achievements: [
      'Conducted weekly stock opname, validating and double-checking availability to keep inventory data accurate for sales operations.',
      'Developed a real-time online inventory stock system, eliminating inventory loss from 33% down to 0% and improving data retrieval efficiency for staff.',
      'Created daily sales reports using Excel, increasing data accuracy by 20% and enabling faster data processing for decision-making.',
    ],
  },
  {
    role: 'Marketing Staff',
    company: 'Agres ID',
    location: 'Yogyakarta',
    period: 'Oct 2024 – Jan 2025',
    industry: 'Computer Distributor & Retail',
    current: false,
    achievements: [
      'Executed a flyering campaign that increased local customer awareness, reaching 1,800 new potential customers during the campaign period.',
      'Developed and implemented a promotional lottery campaign rewarding customers with prize draws for purchases above a spending threshold, resulting in a 17% increase in month-over-month sales.',
    ],
  },
];

export default function Career() {
  return (
    <section id="career" className="py-24 bg-bg-secondary">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal>
          <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-3">
            My Journey
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-5 text-txt-primary leading-tight">
            Career
          </h2>
          <p className="text-txt-secondary text-lg max-w-[600px] leading-relaxed mb-14">
            The path that shaped my skills in data, marketing, and operations.
          </p>
        </Reveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;

            return (
              <Reveal key={exp.role + exp.company} delay={i * 150}>
                <div
                  className={`relative flex flex-col md:flex-row items-start mb-16 last:mb-0 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline node */}
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full -translate-x-1/2 top-2 z-10 border-2 border-accent bg-bg-primary shadow-[0_0_12px_rgba(108,99,255,0.4)]">
                    {exp.current && (
                      <span className="absolute inset-0 rounded-full bg-accent/40 animate-ping" />
                    )}
                  </div>

                  {/* Content card */}
                  <div
                    className={`ml-14 md:ml-0 md:w-[calc(50%-40px)] ${
                      isLeft ? 'md:pr-0 md:mr-auto' : 'md:pl-0 md:ml-auto'
                    }`}
                  >
                    <div className="group bg-bg-card border border-border rounded-2xl p-7 hover:border-accent hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(108,99,255,0.1)] transition-all duration-300">
                      {/* Period badge */}
                      <div className="flex items-center gap-3 mb-4 flex-wrap">
                        {exp.current && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            Current
                          </span>
                        )}
                        <span className="inline-flex items-center gap-1.5 text-xs text-txt-muted">
                          <i className="far fa-calendar-alt" />
                          {exp.period}
                        </span>
                      </div>

                      {/* Role & company */}
                      <h3 className="font-heading text-lg font-bold text-txt-primary mb-1 leading-snug">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-accent font-semibold text-sm">
                          {exp.company}
                        </span>
                        {exp.location && (
                          <span className="text-txt-muted text-xs">
                            · {exp.location}
                          </span>
                        )}
                      </div>
                      <span className="inline-block text-xs text-txt-muted mb-5 italic">
                        {exp.industry}
                      </span>

                      {/* Achievements */}
                      <div className="space-y-3">
                        {exp.achievements.map((achievement, j) => (
                          <div key={j} className="flex gap-3 items-start">
                            <div className="w-5 h-5 rounded-md bg-accent-glow flex items-center justify-center shrink-0 mt-0.5">
                              <i className="fas fa-check text-accent text-[9px]" />
                            </div>
                            <p className="text-sm text-txt-secondary leading-relaxed">
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Arrow pointing to timeline — hidden on mobile */}
                    <div
                      className={`hidden md:block absolute top-4 w-3 h-3 rotate-45 bg-bg-card border border-border ${
                        isLeft
                          ? 'right-[calc(50%-46px)] border-l-0 border-b-0'
                          : 'left-[calc(50%-46px)] border-r-0 border-t-0'
                      }`}
                    />
                  </div>
                </div>
              </Reveal>
            );
          })}

          {/* Journey start marker */}
          <Reveal delay={300}>
            <div className="relative flex items-center justify-center mt-4">
              <div className="absolute left-6 md:left-1/2 w-8 h-8 -translate-x-1/2 rounded-full bg-bg-card border-2 border-border flex items-center justify-center">
                <i className="fas fa-rocket text-accent text-xs" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
