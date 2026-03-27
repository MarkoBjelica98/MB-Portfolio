import { useState } from 'react';
import PropTypes from 'prop-types';

function ProjectCard({
  imgSrc,
  title,
  tags,
  projectLink,
  previewImg,
  hasOptions = false,
  details,
  classes = '',
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeView, setActiveView] = useState('menu');

  const handleCardClick = () => {
    if (hasOptions) {
      setIsModalOpen(true);
      setActiveView('menu');
      return;
    }

    window.open(projectLink, '_blank', 'noopener,noreferrer');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveView('menu');
  };

  return (
    <>
      <div
        className={
          'group relative overflow-hidden rounded-2xl bg-zinc-800 shadow-lg hover:bg-zinc-700/70 transition-all duration-300 cursor-pointer border border-zinc-700/50 hover:border-sky-400/30 hover:-translate-y-1 ' +
          classes
        }
        onClick={handleCardClick}
      >
        <figure className='relative overflow-hidden rounded-t-2xl'>
          <img
            src={imgSrc}
            alt={title}
            className='w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300'
          />

          <div className='absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
            <div className='px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white text-sm font-medium shadow-lg'>
              {hasOptions ? 'More details' : 'Open project'}
            </div>
          </div>
        </figure>

        <div className='p-5'>
          <h3 className='text-lg font-semibold text-white mb-3'>{title}</h3>

          <div className='flex flex-wrap gap-2 mb-4'>
            {tags.map((tag, index) => (
              <span
                key={index}
                className='text-xs px-3 py-1 rounded-full bg-zinc-700 text-zinc-200'
              >
                {tag}
              </span>
            ))}
          </div>

          <p className='text-sm text-zinc-400'>
            {hasOptions
              ? 'Klikni za više opcija o projektu.'
              : 'Klikni za otvaranje projekta.'}
          </p>
        </div>
      </div>

      {isModalOpen && (
        <div
          className='fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4'
          onClick={closeModal}
        >
          <div
            className='w-full max-w-3xl h-[85vh] bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden'
            onClick={(e) => e.stopPropagation()}
          >
            <div className='flex items-start justify-between p-6 border-b border-zinc-800 shrink-0'>
              <div className='pr-4'>
                <h3 className='text-2xl font-semibold text-white'>{title}</h3>
                <p className='text-sm text-zinc-400 mt-1'>
                  Pregled embedded projekta i dostupnih opcija
                </p>
              </div>

              <button
                onClick={closeModal}
                className='shrink-0 w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white text-xl transition-colors'
                aria-label='Zatvori modal'
              >
                ×
              </button>
            </div>

            <div
              data-lenis-prevent
              className='flex-1 min-h-0 overflow-y-auto overscroll-contain p-6 modal-scroll'
            >
              {activeView === 'menu' && (
                <div className='grid gap-3 sm:grid-cols-3'>
                  <a
                    href={projectLink}
                    target='_blank'
                    rel='noreferrer'
                    className='rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-center px-4 py-4 transition-colors font-medium'
                  >
                    GitHub kod
                  </a>

                  <button
                    onClick={() => setActiveView('image')}
                    className='rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-4 transition-colors font-medium border border-zinc-700'
                  >
                    Slika projekta
                  </button>

                  <button
                    onClick={() => setActiveView('details')}
                    className='rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-4 transition-colors font-medium border border-zinc-700'
                  >
                    Kako radi
                  </button>
                </div>
              )}

              {activeView === 'image' && (
                <div className='space-y-5'>
                  <div className='overflow-hidden rounded-xl border border-zinc-700 bg-zinc-950 flex items-center justify-center min-h-[260px]'>
                    <img
                      src={previewImg || imgSrc}
                      alt={`${title} preview`}
                      className='w-full max-h-[55vh] object-contain'
                    />
                  </div>

                  <div className='flex flex-col sm:flex-row gap-3'>
                    <button
                      onClick={() => setActiveView('menu')}
                      className='flex-1 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-3 transition-colors border border-zinc-700'
                    >
                      Nazad
                    </button>

                    <a
                      href={projectLink}
                      target='_blank'
                      rel='noreferrer'
                      className='flex-1 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-center px-4 py-3 transition-colors'
                    >
                      Otvori GitHub
                    </a>
                  </div>
                </div>
              )}

              {activeView === 'details' && (
                <div className='space-y-5'>
                  <div className='rounded-xl border border-zinc-800 bg-zinc-950/60 p-5'>
                    <h4 className='text-white text-lg font-semibold mb-3'>
                      O projektu
                    </h4>
                    <p className='text-zinc-300 leading-7'>
                      {details?.overview}
                    </p>
                  </div>

                  <div className='rounded-xl border border-zinc-800 bg-zinc-950/60 p-5'>
                    <h4 className='text-white text-lg font-semibold mb-3'>
                      Ključne funkcionalnosti
                    </h4>

                    <ul className='space-y-2 text-zinc-300'>
                      {details?.features?.map((item, index) => (
                        <li key={index} className='flex gap-3'>
                          <span className='text-sky-400 mt-1'>•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className='rounded-xl border border-zinc-800 bg-zinc-950/60 p-5'>
                    <h4 className='text-white text-lg font-semibold mb-3'>
                      Tech stack
                    </h4>

                    <div className='flex flex-wrap gap-2'>
                      {details?.tech?.map((item, index) => (
                        <span
                          key={index}
                          className='text-sm px-3 py-2 rounded-lg bg-zinc-800 text-zinc-200 border border-zinc-700'
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className='flex flex-col sm:flex-row gap-3'>
                    <button
                      onClick={() => setActiveView('menu')}
                      className='flex-1 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-3 transition-colors border border-zinc-700'
                    >
                      Nazad
                    </button>

                    <a
                      href={projectLink}
                      target='_blank'
                      rel='noreferrer'
                      className='flex-1 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-center px-4 py-3 transition-colors'
                    >
                      Otvori GitHub
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  projectLink: PropTypes.string.isRequired,
  previewImg: PropTypes.string,
  hasOptions: PropTypes.bool,
  details: PropTypes.shape({
    overview: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.string),
    tech: PropTypes.arrayOf(PropTypes.string),
  }),
  classes: PropTypes.string,
};

export default ProjectCard;
