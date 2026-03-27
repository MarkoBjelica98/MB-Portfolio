import { useEffect, useState } from 'react';
import { ButtonPrimary, ButtonOutline } from './Button';

const fullText = 'Building modern web, embedded, and mobile solutions';

function Hero() {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index += 1;

      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id='home' className='pt-28 lg:pt-36'>
      <div className='container items-center lg:grid lg:grid-cols-2 lg:gap-12'>
        <div className='reveal-up'>
          <div className='flex items-center gap-3'>
            <figure className='img-box h-9 w-9 rounded-lg'>
              <img
                src='./imgs/mb-logo.png'
                alt='MB Logo'
                className='img-cover'
              />
            </figure>

            <div className='flex items-center gap-2 text-sm tracking-wide text-zinc-400'>
              <span className='relative flex h-2 w-2'>
                <span className='absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping'></span>
                <span className='relative inline-flex h-2 w-2 rounded-full bg-emerald-500'></span>
              </span>
              Available for work
            </div>
          </div>

          <h1 className='mt-6 mb-6 min-h-[120px] text-3xl font-semibold leading-tight text-white sm:min-h-[140px] sm:text-4xl md:min-h-[160px] md:text-5xl lg:max-w-[14ch]'>
            <span className='bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent'>
              {typedText}
            </span>
            <span className='ml-1 inline-block h-[1em] w-[2px] translate-y-1 animate-pulse bg-sky-400'></span>
          </h1>

          <p className='mb-8 max-w-[58ch] text-zinc-400 md:text-lg md:leading-8 reveal-up'>
            I’m Marko, a junior developer focused on full-stack applications,
            backend APIs, embedded systems, and growing into mobile development.
            I enjoy building practical software that connects clean UI, strong
            backend logic, and real-world hardware integration.
          </p>

          <div className='flex flex-wrap items-center gap-3 reveal-up'>
            <ButtonPrimary
              href='/MarkoBjelicaCV(ENG).pdf'
              target='_blank'
              label='Download CV'
              icon='download'
              download={true}
            />

            <ButtonOutline
              href='#about'
              label='Scroll Down'
              icon='arrow_downward'
            />
          </div>
        </div>

        <div className='relative mt-12 hidden justify-center lg:flex lg:mt-0 reveal-up'>
          <div className='absolute h-[280px] w-[280px] rounded-full bg-sky-500/10 blur-3xl'></div>
          <div className='absolute translate-x-10 translate-y-10 h-[220px] w-[220px] rounded-full bg-blue-500/10 blur-2xl'></div>

          <figure className='relative w-[280px] overflow-hidden rounded-[40px] border border-zinc-700 bg-zinc-900 shadow-[0_0_30px_rgba(56,189,248,0.12)] xl:w-[320px]'>
            <img
              src='./imgs/Hero-img.png'
              alt='Marko Bjelica'
              className='w-full object-cover'
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Hero;
