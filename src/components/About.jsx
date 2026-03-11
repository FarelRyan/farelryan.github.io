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
            <p className="text-txt-secondary mb-8 leading-relaxed">
              Aspiring Marketing Analyst with hands-on experience executing and evaluating marketing campaigns in the technology retail industry. While working as a Marketing Staff at Agres ID, I analyzed campaign performance and customer engagement to support marketing strategy and increase sales while handling administrative datasets, ensuring accuracy, consistency, and completeness of records using Excel and basic data visualization. I further strengthened my analytical capabilities through a Full-Stack Data Analytics Bootcamp at RevoU, where I developed skills in SQL, Python, Excel, Tableau, and Power BI. I am passionate about using data to understand consumer behavior and optimize marketing performance through data-driven insights.
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
