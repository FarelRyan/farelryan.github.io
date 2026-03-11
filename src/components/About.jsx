'use client';
import Reveal from './Reveal';
import { useReveal } from '@/hooks/useReveal';

const stats = [
  { number: '3+', label: 'Projects' },
  { number: '1', label: 'Certificate' },
  { number: '2025', label: 'Year Started' },
  { number: '∞', label: 'Passion' },
];

const skills = [
  { name: 'Python', percent: 80 },
  { name: 'SQL', percent: 85 },
  { name: 'Excel', percent: 90 },
  { name: 'Power BI / Tableau', percent: 75 },
  { name: 'Data Visualization', percent: 85 },
];

function SkillBar({ name, percent }) {
  const [ref, isVisible] = useReveal(0.5);

  return (
    <div className="mb-5" ref={ref}>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-txt-primary">{name}</span>
        <span className="text-sm font-semibold text-accent">{percent}%</span>
      </div>
      <div className="h-1.5 bg-bg-card rounded-full overflow-hidden">
        <div
          className="h-full gradient-bar rounded-full transition-all duration-[1500ms] ease-out"
          style={{ width: isVisible ? `${percent}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-bg-secondary">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Text side */}
          <Reveal>
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-3">
              About Me
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-5 text-txt-primary leading-tight">
              Data-Driven &amp; Dedicated
            </h2>
            <p className="text-txt-secondary mb-5 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio
              vitae vestibulum vestibulum. Cras vehicula, mi eget laoreet venenatis, justo
              arcu faucibus erat, nec tristique neque ante vel odio. Morbi nec velit in
              ipsum sagittis maximus.
            </p>
            <p className="text-txt-secondary mb-5 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
              in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="text-txt-secondary mb-8 leading-relaxed">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
              sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-bg-card border border-border rounded-2xl p-6 text-center hover:border-accent hover:bg-bg-card-hover hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(108,99,255,0.1)] transition-all duration-300"
                >
                  <div className="font-heading text-3xl font-extrabold gradient-text">
                    {stat.number}
                  </div>
                  <div className="text-sm text-txt-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Skills side */}
          <Reveal delay={200}>
            <h3 className="font-heading text-lg font-semibold mb-6 text-txt-primary">
              Technical Skills
            </h3>
            {skills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} percent={skill.percent} />
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
