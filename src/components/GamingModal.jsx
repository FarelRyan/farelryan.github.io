'use client';
import { useEffect } from 'react';

const games = [
  {
    name: 'Counter-Strike 2',
    image: '/games/cs2.jpg',
    rank: 'Your Rank Here',
    rankIcon: '/games/cs2-rank.png',
    color: '#f5a623',
    gradient: 'from-amber-900/80 via-yellow-900/60 to-black/90',
    description: 'Tactical FPS',
  },
  {
    name: 'Valorant',
    image: '/games/valorant.jpg',
    rank: 'Your Rank Here',
    rankIcon: '/games/valorant-rank.png',
    color: '#ff4655',
    gradient: 'from-red-900/80 via-rose-900/60 to-black/90',
    description: 'Tactical Shooter',
  },
  {
    name: 'DOTA 2',
    image: '/games/dota2.jpg',
    rank: 'Your Rank Here',
    rankIcon: '/games/dota2-rank.png',
    color: '#e23c2f',
    gradient: 'from-red-950/80 via-orange-950/60 to-black/90',
    description: 'MOBA',
  },
];

export default function GamingModal({ onClose }) {
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
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 nav-blur p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[900px] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'gamingModalIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
            <i className="fas fa-gamepad text-accent text-sm" />
            <span className="text-xs font-semibold tracking-widest uppercase text-accent">
              Secret Unlocked
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-2">
            When I&apos;m Not Analyzing Data...
          </h2>
          <p className="text-txt-secondary text-sm">
            I&apos;m probably grinding ranked in one of these.
          </p>
        </div>

        {/* Game cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {games.map((game, i) => (
            <div
              key={game.name}
              className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-default"
              style={{
                animation: `gamingCardIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${150 + i * 100}ms forwards`,
                opacity: 0,
                minHeight: '380px',
              }}
            >
              {/* Background game image */}
              <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${game.color}30, #0a0a0f)` }}>
                <img
                  src={game.image}
                  alt={game.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                {/* Dark overlay gradient */}
                <div className={`absolute inset-0 bg-gradient-to-t ${game.gradient}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                {/* Game genre badge */}
                <span
                  className="inline-block self-start px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase mb-auto mt-4"
                  style={{
                    background: `${game.color}20`,
                    color: game.color,
                    border: `1px solid ${game.color}40`,
                  }}
                >
                  {game.description}
                </span>

                {/* Rank section */}
                <div className="mt-auto">
                  <div
                    className="w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center overflow-hidden border transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `${game.color}15`,
                      borderColor: `${game.color}30`,
                      boxShadow: `0 0 30px ${game.color}15`,
                    }}
                  >
                    <img
                      src={game.rankIcon}
                      alt={`${game.name} rank`}
                      className="w-14 h-14 object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentNode.innerHTML = '<i class="fas fa-trophy text-2xl" style="opacity:0.4"></i>';
                      }}
                    />
                  </div>

                  {/* Rank text */}
                  <div className="text-center">
                    <h3 className="font-heading text-lg font-bold text-white mb-1">
                      {game.name}
                    </h3>
                    <p
                      className="text-sm font-semibold tracking-wide"
                      style={{ color: game.color }}
                    >
                      {game.rank}
                    </p>
                  </div>
                </div>
              </div>

              {/* Shine effect on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `linear-gradient(105deg, transparent 40%, ${game.color}08 45%, ${game.color}15 50%, ${game.color}08 55%, transparent 60%)`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Close button */}
        <div className="text-center mt-8">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium text-txt-secondary border border-white/10 hover:border-white/25 hover:text-white hover:bg-white/5 transition-all duration-300"
          >
            <i className="fas fa-xmark" /> Close
          </button>
        </div>
      </div>
    </div>
  );
}
