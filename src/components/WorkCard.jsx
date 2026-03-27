import PropTypes from 'prop-types';

function WorkCard({ content, imgSrc, name, classes = '' }) {
  return (
    <div
      className={`bg-zinc-800 p-5 rounded-xl flex flex-col
      w-[280px] md:w-[320px] lg:w-[360px] h-[360px] overflow-hidden
      transition duration-300 hover:bg-zinc-700 hover:scale-[1.02] ${classes}`}
    >
      <div className='text-zinc-400 mb-4 flex-shrink-0'>
        <p className='text-sm line-clamp-4'>{content.description}</p>
      </div>

      <ul className='text-zinc-400 list-disc pl-5 mb-4 flex-shrink-0 line-clamp-3'>
        {content.bullets.map((b, i) => (
          <li key={i} className='text-sm'>
            {b}
          </li>
        ))}
      </ul>

      <div className='mt-auto'>
        <p className='mb-3 text-xs font-medium uppercase tracking-[0.18em] text-sky-400/90'>
          Click for detailed experience
        </p>

        <div className='flex items-center gap-2'>
          <figure className='img-box rounded-lg'>
            <img
              src={imgSrc}
              alt={name}
              width={44}
              height={44}
              loading='lazy'
              className='img-cover'
            />
          </figure>

          <div>
            <p className='font-semibold text-white'>{name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

WorkCard.propTypes = {
  content: PropTypes.shape({
    description: PropTypes.string.isRequired,
    bullets: PropTypes.arrayOf(PropTypes.string).isRequired,
    details: PropTypes.string,
  }).isRequired,
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default WorkCard;
