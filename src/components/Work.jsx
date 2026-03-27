import { useRef, useState } from 'react';
import { useLenis } from 'lenis/react';
import WorkCard from './WorkCard.jsx';
import WorkModal from './WorkModal.jsx';
import reviews, { workTechStack } from './WorkData.js';

function Work() {
  const sliderRef = useRef(null);
  const lenis = useLenis();
  const scrollTimeoutRef = useRef(null);

  const [selectedReview, setSelectedReview] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollHint, setShowScrollHint] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);

  const scroll = (direction) => {
    if (!sliderRef.current) return;

    const firstCard = sliderRef.current.children[0];
    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth + 6;

    sliderRef.current.scrollBy({
      left: direction === 'left' ? -cardWidth : cardWidth,
      behavior: 'smooth',
    });
  };

  const openModal = (review) => {
    if (lenis?.stop) lenis.stop();

    setSelectedReview(review);
    setScrollProgress(0);
    setShowScrollHint(true);
    setIsScrolling(false);

    requestAnimationFrame(() => {
      setIsModalVisible(true);
    });
  };

  const closeModal = () => {
    setIsModalVisible(false);

    setTimeout(() => {
      setSelectedReview(null);
      setScrollProgress(0);
      setShowScrollHint(true);
      setIsScrolling(false);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      if (lenis?.start) lenis.start();
    }, 200);
  };

  const handleModalScroll = (scrollTop, progress) => {
    setScrollProgress(progress);
    setIsScrolling(true);
    setShowScrollHint(scrollTop <= 24);

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, 140);
  };

  return (
    <>
      <section id='work' className='section relative z-0'>
        <div className='px-4 md:px-6 lg:px-8'>
          <h2 className='relative z-10 mb-10 text-left text-3xl font-bold tracking-tight text-white md:text-4xl reveal-up'>
            Work Experience
          </h2>

          <div className='mb-8 flex flex-wrap gap-2 reveal-up'>
            {workTechStack.map((tech, index) => (
              <span
                key={index}
                className='rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-xs text-zinc-300'
              >
                {tech}
              </span>
            ))}
          </div>

          <div className='relative reveal-up'>
            <button
              className='absolute left-[-16px] top-[180px] z-20 rounded-full bg-zinc-700 p-3 shadow-lg transition hover:bg-zinc-600'
              onClick={() => scroll('left')}
              aria-label='Scroll work cards left'
            >
              ‹
            </button>

            <button
              className='absolute right-[-16px] top-[180px] z-20 rounded-full bg-zinc-700 p-3 shadow-lg transition hover:bg-zinc-600'
              onClick={() => scroll('right')}
              aria-label='Scroll work cards right'
            >
              ›
            </button>

            <div
              ref={sliderRef}
              className='flex gap-[6px] overflow-x-auto whitespace-nowrap scrollbar-none'
            >
              {reviews.map((review, key) => (
                <div
                  key={key}
                  className='flex-shrink-0 cursor-pointer reveal-up'
                  onClick={() => openModal(review)}
                >
                  <WorkCard
                    name={review.name}
                    imgSrc={review.imgSrc}
                    content={review.content}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WorkModal
        selectedReview={selectedReview}
        isModalVisible={isModalVisible}
        scrollProgress={scrollProgress}
        showScrollHint={showScrollHint}
        isScrolling={isScrolling}
        onClose={closeModal}
        onScrollChange={handleModalScroll}
      />
    </>
  );
}

export default Work;
