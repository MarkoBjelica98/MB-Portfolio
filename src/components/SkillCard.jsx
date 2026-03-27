import { useState } from 'react';
import PropTypes from 'prop-types';

function SkillCard({ imgSrc, label, desc, tooltip, classes = '' }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className={`group relative flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 
        hover:bg-zinc-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(255,255,255,0.05)] ${classes}`}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <figure
        className='bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2
        group-hover:bg-zinc-900 transition-colors duration-300 shrink-0'
      >
        <img
          src={imgSrc}
          width={32}
          height={32}
          alt={label}
          className='w-full h-full object-contain'
          onError={(e) => {
            e.currentTarget.src = './imgs/default.svg';
          }}
        />
      </figure>

      <div className='min-w-0'>
        <h3 className='text-zinc-100 font-medium'>{label}</h3>
        <p className='text-zinc-400 text-sm'>{desc}</p>
      </div>

      {tooltip && (
        <div
          className={`pointer-events-none absolute left-1/2 top-0 z-20 w-max max-w-[240px]
          -translate-x-1/2 -translate-y-[calc(100%+12px)]
          rounded-xl border border-zinc-700 bg-zinc-900/95 px-3 py-2 text-xs text-zinc-200
          shadow-lg backdrop-blur-md transition-all duration-200
          ${showTooltip ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        >
          {tooltip}
          <div className='absolute left-1/2 top-full h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 border-r border-b border-zinc-700 bg-zinc-900/95' />
        </div>
      )}
    </div>
  );
}

SkillCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  tooltip: PropTypes.string,
  classes: PropTypes.string,
};

export default SkillCard;
