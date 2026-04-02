'use client';
import { useEffect } from 'react';

export default function PdfModal({ src, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80"
      onClick={onClose}
    >
      {/* Popup — only the PDF, nothing else */}
      <div
        className="w-[90vw] h-[90vh] max-w-[1100px] rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={src}
          className="w-full h-full border-none"
          title="PDF Viewer"
        />
      </div>
    </div>
  );
}
