import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function WorkModal({
  selectedReview,
  isModalVisible,
  scrollProgress,
  showScrollHint,
  isScrolling,
  onClose,
  onScrollChange,
}) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!selectedReview) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedReview, onClose]);

  useEffect(() => {
    const el = modalRef.current;
    if (!el || !selectedReview) return;

    const handleScroll = () => {
      const scrollTop = el.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;

      onScrollChange(scrollTop, progress);
    };

    handleScroll();
    el.addEventListener('scroll', handleScroll);

    return () => {
      el.removeEventListener('scroll', handleScroll);
    };
  }, [selectedReview, onScrollChange]);

  if (!selectedReview) return null;

  return (
    <div className='fixed inset-0 z-50 flex justify-center px-4 py-6 md:py-10'>
      <div
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-all duration-200 ${
          isModalVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      <div
        ref={modalRef}
        data-lenis-prevent
        className={`modal-scroll relative z-10 my-auto w-full max-w-4xl max-h-[calc(100vh-3rem)] overflow-y-auto overscroll-contain rounded-2xl border border-zinc-700 bg-zinc-900 p-6 shadow-2xl transition-all duration-200 md:max-h-[calc(100vh-5rem)] md:p-7 ${
          isModalVisible
            ? 'translate-y-0 scale-100 opacity-100'
            : 'translate-y-3 scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className='sticky top-0 left-0 z-40 -mx-6 -mt-6 mb-4 md:-mx-7 md:-mt-7'>
          <div className='h-[3px] bg-zinc-900/95 backdrop-blur-md'>
            <div
              className={`h-full bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 transition-all duration-150 ${
                isScrolling
                  ? 'shadow-[0_0_14px_rgba(56,189,248,0.7),0_0_28px_rgba(168,85,247,0.35)]'
                  : 'shadow-[0_0_8px_rgba(56,189,248,0.35)]'
              }`}
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>

          <div className='pointer-events-none h-6 bg-gradient-to-b from-zinc-900 via-zinc-900/95 to-transparent' />
        </div>

        <button
          className='absolute right-4 top-3 z-40 text-2xl text-zinc-400 transition hover:text-white'
          onClick={onClose}
          aria-label='Close modal'
        >
          ×
        </button>

        <div className='relative'>
          <div
            className={`pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-16 bg-gradient-to-t from-zinc-900 via-zinc-900/85 to-transparent transition-opacity duration-300 ${
              scrollProgress > 0.94 ? 'opacity-0' : 'opacity-100'
            }`}
          />

          <div
            className={`pointer-events-none sticky bottom-3 z-30 mx-auto mt-2 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-zinc-800/85 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-300 backdrop-blur transition-all duration-300 ${
              showScrollHint
                ? 'translate-y-0 opacity-100'
                : 'translate-y-2 opacity-0'
            }`}
          >
            <span className='text-sky-400'>↓</span>
            <span>Scroll to explore</span>
          </div>

          <div className='mb-6 flex items-center gap-3 pr-8'>
            <img
              src={selectedReview.imgSrc}
              alt={selectedReview.name}
              width={56}
              height={56}
              className='rounded-lg'
            />
            <div>
              <p className='mb-1 text-xs font-medium uppercase tracking-[0.2em] text-sky-400'>
                Internship Experience
              </p>
              <h3 className='text-xl font-semibold text-white md:text-2xl'>
                {selectedReview.name}
              </h3>
            </div>
          </div>

          {selectedReview.content.stack && (
            <div className='mb-6 flex flex-wrap gap-2'>
              {selectedReview.content.stack.map((item, index) => (
                <span
                  key={index}
                  className='rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-xs text-zinc-300'
                >
                  {item}
                </span>
              ))}
            </div>
          )}

          <div className='mb-6'>
            <h4 className='mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-white/90'>
              Overview
            </h4>
            <p className='text-sm leading-7 text-zinc-300 md:text-[15px] whitespace-pre-line'>
              {selectedReview.content.details}
            </p>
          </div>

          <div className='mb-6'>
            <h4 className='mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-white/90'>
              What I Worked On
            </h4>
            <ul className='space-y-2 text-sm text-zinc-300 md:text-[15px]'>
              {selectedReview.content.bullets.map((b, i) => (
                <li key={i} className='flex gap-2'>
                  <span className='mt-[2px] text-zinc-500'>•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {selectedReview.content.highlights && (
            <div className='mb-6'>
              <h4 className='mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-white/90'>
                Key Highlights
              </h4>
              <ul className='space-y-2 text-sm text-zinc-300 md:text-[15px]'>
                {selectedReview.content.highlights.map((item, index) => (
                  <li key={index} className='flex gap-2'>
                    <span className='mt-[2px] text-sky-400'>✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {selectedReview.content.challenges && (
            <div className='mb-6'>
              <h4 className='mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-white/90'>
                Challenges & Problem Solving
              </h4>

              <div className='space-y-4'>
                {selectedReview.content.challenges.map((item, index) => (
                  <div
                    key={index}
                    className='rounded-xl border border-zinc-800 bg-zinc-800/60 p-4'
                  >
                    <h5 className='mb-2 text-sm font-semibold text-white md:text-[15px]'>
                      {item.title}
                    </h5>

                    <p className='mb-2 text-sm leading-6 text-zinc-300 md:text-[15px]'>
                      <span className='font-medium text-white'>Problem: </span>
                      {item.problem}
                    </p>

                    <p className='mb-2 text-sm leading-6 text-zinc-300 md:text-[15px]'>
                      <span className='font-medium text-white'>Solution: </span>
                      {item.solution}
                    </p>

                    <p className='text-sm leading-6 text-zinc-300 md:text-[15px]'>
                      <span className='font-medium text-white'>Result: </span>
                      {item.result}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedReview.content.impact && (
            <div className='mb-6'>
              <h4 className='mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-white/90'>
                Impact
              </h4>
              <ul className='space-y-2 text-sm text-zinc-300 md:text-[15px]'>
                {selectedReview.content.impact.map((item, index) => (
                  <li key={index} className='flex gap-2'>
                    <span className='mt-[2px] text-emerald-400'>↗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {selectedReview.content.learned && (
            <div>
              <h4 className='mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-white/90'>
                What I Learned
              </h4>
              <ul className='space-y-2 pb-4 text-sm text-zinc-400 md:text-[15px]'>
                {selectedReview.content.learned.map((item, index) => (
                  <li key={index} className='flex gap-2'>
                    <span className='mt-[2px] text-zinc-500'>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

WorkModal.propTypes = {
  selectedReview: PropTypes.object,
  isModalVisible: PropTypes.bool.isRequired,
  scrollProgress: PropTypes.number.isRequired,
  showScrollHint: PropTypes.bool.isRequired,
  isScrolling: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onScrollChange: PropTypes.func.isRequired,
};

export default WorkModal;
