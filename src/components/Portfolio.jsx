'use client';
import { useState } from 'react';
import Reveal from './Reveal';
import PdfModal from './PdfModal';

const projects = [
  {
    image: '/port-1.png',
    pdf: '/port-1.pdf',
    tag: 'Data Analytics',
    title: 'Project One',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    github: '#', // Replace with actual GitHub link
  },
  {
    image: '/port-2.png',
    pdf: '/port-2.pdf',
    tag: 'Data Analytics',
    title: 'Project Two',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    github: '#', // Replace with actual GitHub link
  },
  {
    image: '/port-3.png',
    pdf: '/port-3.pdf',
    tag: 'Data Analytics',
    title: 'Project Three',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    github: '#', // Replace with actual GitHub link
  },
];

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
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 flex items-center justify-center transition-all duration-300">
                      <div className="opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 bg-black/50 px-4 py-2 rounded-full">
                        <i className="fas fa-file-pdf text-white text-sm" />
                        <span className="text-white text-sm font-medium">View PDF</span>
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
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-light transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <i className="fab fa-github" /> GitHub
                      </a>
                      <button
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-light transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActivePdf(project.pdf);
                        }}
                      >
                        <i className="fas fa-file-pdf" /> View PDF
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PDF Modal */}
      {activePdf && (
        <PdfModal src={activePdf} onClose={() => setActivePdf(null)} />
      )}
    </>
  );
}
