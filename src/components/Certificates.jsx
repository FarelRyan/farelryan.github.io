'use client';
import { useState } from 'react';
import Reveal from './Reveal';
import PdfModal from './PdfModal';

export default function Certificates() {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <>
      <section id="certificates" className="py-24 bg-bg-secondary">
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal>
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-3">
              Achievements
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-5 text-txt-primary leading-tight">
              Certificates
            </h2>
            <p className="text-txt-secondary text-lg max-w-[600px] leading-relaxed mb-12">
              Certifications and programs I have completed to strengthen my data analytics skills.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div
              className="bg-bg-card border border-border rounded-[20px] p-8 flex flex-col sm:flex-row gap-6 items-start max-w-[700px] hover:border-accent hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(108,99,255,0.1)] transition-all duration-300 cursor-pointer group"
              onClick={() => setShowPdf(true)}
            >
              {/* RevoU icon */}
              <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 border border-border group-hover:border-accent transition-colors">
                <img
                  src="/revo-u.png"
                  alt="RevoU"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="font-heading text-lg font-semibold mb-2 text-txt-primary">
                  Full Stack Data Analytics
                </h3>
                <p className="text-txt-secondary text-sm leading-relaxed mb-3">
                  Completed the Full Stack Data Analytics program by RevoU, a comprehensive
                  bootcamp covering the end-to-end data analytics pipeline including data
                  collection, cleaning, analysis, visualization, and storytelling with data.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5 text-xs text-txt-muted">
                    <i className="far fa-calendar-alt" />
                    Issued by RevoU
                  </div>
                  <button
                    className="flex items-center gap-1.5 text-xs font-medium text-accent hover:text-accent-light transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowPdf(true);
                    }}
                  >
                    <i className="fas fa-file-pdf" />
                    View Certificate
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PDF Modal */}
      {showPdf && (
        <PdfModal src="/FSDA.pdf" onClose={() => setShowPdf(false)} />
      )}
    </>
  );
}
