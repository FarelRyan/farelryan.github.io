'use client';
import { useEffect } from 'react';

export default function PdfModal({ src, onClose }) {
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 nav-blur"
      onClick={onClose}
    >
      {/* Modal container */}
      <div
        className="relative w-[95vw] h-[92vh] max-w-[1200px] bg-bg-card border border-border rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-border bg-bg-secondary shrink-0">
          <span className="text-sm text-txt-secondary font-medium truncate mr-4">
            {src.split('/').pop()}
          </span>
          <div className="flex items-center gap-3">
            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-accent hover:text-accent-light transition-colors flex items-center gap-1.5"
            >
              <i className="fas fa-external-link-alt" />
              Open in new tab
            </a>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-bg-card border border-border flex items-center justify-center text-txt-secondary hover:text-txt-primary hover:border-accent transition-all"
              aria-label="Close"
            >
              <i className="fas fa-xmark text-sm" />
            </button>
          </div>
        </div>

        {/* PDF iframe */}
        <div className="flex-1 bg-bg-primary">
          <iframe
            src={src}
            className="w-full h-full border-none"
            title="PDF Viewer"
          />
        </div>
      </div>
    </div>
  );
}
