'use client';
import { useState } from 'react';
import Reveal from './Reveal';
import PdfModal from './PdfModal';

const projects = [
  {
    image: '/port-1.png',
    pdf: '/port-1.pdf',
    tag: 'Data Analytics',
    title: 'DEEP Bank Churn Rate Analysis',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tools: ['Google Collab (Python)', 'Tableau', 'Figma'],
  },
  {
    image: '/port-2.png',
    pdf: '/port-2.pdf',
    tag: 'Data Analytics',
    title: 'Business Rec. Analysis',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    tools: ['Google Collab (Python)'],
  },
  {
    image: '/port-3.png',
    pdf: '/port-3.pdf',
    tag: 'Data Analytics',
    title: 'DatViz RevoFinance Tableau Dashboard',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    tools: ['Tableau'],
  },
];

const toolIcons = {
  'Google Collab (Python)': 'fab fa-python',
  'Tableau': 'fas fa-chart-pie',
  'Figma': 'fab fa-figma',
};

export default function Portfolio() {
  const [activePdf, setActivePdf] = useState(null);

  return (
    <>
      <section id="portfolio" className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal>
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-3">
              My Work
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-5 text-txt-primary leading-tight">
              Portfolio
            </h2>
            <p className="text-txt-secondary text-lg max-w-[600px] leading-relaxed mb-12">
              Check out some of the projects I have worked on as a Data Analyst.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <Reveal key={project.title} delay={i * 150}>
                <div
                  className="group bg-bg-card border border-border rounded-[20px] overflow-hidden hover:-translate-y-2 hover:border-accent hover:shadow-[0_0_40px_rgba(108,99,255,0.1)] transition-all duration-400 cursor-pointer"
                  onClick={() => setActivePdf(project.pdf)}
                >
                  {/* Project image */}
                  <div className="h-[200px] bg-gradient-to-br from-bg-card-hover to-bg-secondary relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 flex items-center justify-center transition-all duration-300">
                      <div className="opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 bg-black/50 px-4 py-2 rounded-full">
                        <i className="fas fa-eye text-white text-sm" />
                        <span className="text-white text-sm font-medium">View Project</span>
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent-glow text-accent-light mb-3">
                      {project.tag}
                    </span>
                    <h3 className="font-heading text-lg font-semibold mb-2.5 leading-snug text-txt-primary">
                      {project.title}
                    </h3>
                    <p className="text-sm text-txt-secondary leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tools */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium bg-white/5 border border-white/10 text-txt-secondary group-hover:border-accent/30 group-hover:text-txt-primary transition-all duration-300"
                        >
                          <i className={`${toolIcons[tool] || 'fas fa-wrench'} text-accent text-[10px]`} />
                          {tool}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent group-hover:text-accent-light transition-colors">
                      <i className="fas fa-eye" /> View Project
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {activePdf && (
        <PdfModal src={activePdf} onClose={() => setActivePdf(null)} />
      )}
    </>
  );
}
