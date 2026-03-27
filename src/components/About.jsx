import { FaCode, FaLaptopCode, FaMobileAlt, FaBriefcase } from 'react-icons/fa';

const aboutItems = [
  {
    label: 'Projects Completed',
    number: '5',
    suffix: '+',
    icon: <FaCode />,
  },
  {
    label: 'Internship Experience',
    number: '3',
    suffix: 'm',
    icon: <FaBriefcase />,
  },
  {
    label: 'Core Focus',
    number: '3',
    suffix: '',
    extra: 'Web, Embedded & Mobile',
    icon: <FaLaptopCode />,
  },
  {
    label: 'Mobile Dev',
    number: '1',
    suffix: '+',
    extra: 'Growing focus',
    icon: <FaMobileAlt />,
  },
];

function About() {
  return (
    <section id='about' className='section'>
      <div className='container'>
        <div className='grid gap-8 rounded-2xl bg-zinc-800/50 p-7 reveal-up md:p-10 lg:grid-cols-[1.35fr_0.95fr] lg:items-center'>
          <div>
            <p className='mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-400'>
              About Me
            </p>

            <h2 className='mb-5 text-3xl font-semibold text-white md:text-4xl md:leading-tight'>
              Building practical software across web, embedded, and mobile
              development
            </h2>

            <p className='max-w-[62ch] text-zinc-300 md:text-lg md:leading-8'>
              I am a junior software developer focused on full-stack web
              development, embedded systems, and gradually expanding into mobile
              development. I have worked on admin panels, monitoring dashboards,
              backend APIs, and IoT-oriented projects, gaining practical
              experience with React, FastAPI, SQL, and hardware-software
              integration. I am especially interested in building reliable,
              well-structured applications, learning from real-world challenges,
              and growing into a strong engineer across multiple development
              areas.
            </p>
          </div>

          <div className='mx-auto grid max-w-[460px] gap-4 sm:grid-cols-2 lg:mx-0 lg:max-w-none'>
            {aboutItems.map(({ label, number, suffix, extra, icon }, key) => (
              <div
                key={key}
                className='group flex min-h-[160px] md:min-h-[150px] flex-col justify-between rounded-2xl border border-zinc-700/60 bg-zinc-900/70 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition duration-300 hover:scale-[1.02] hover:border-sky-400/30 hover:bg-zinc-900 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)]'
              >
                <div className='flex items-center justify-between'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-sky-400/10 text-lg text-sky-400 transition duration-300 group-hover:scale-110 group-hover:bg-sky-400/15'>
                    {icon}
                  </div>
                </div>

                <div>
                  <div className='mb-2 flex items-end'>
                    <span className='text-3xl font-semibold text-white transition duration-300 group-hover:text-sky-100 md:text-4xl'>
                      {number}
                    </span>

                    {suffix && (
                      <span className='ml-1 text-lg font-semibold text-sky-400 transition duration-300 group-hover:translate-y-[-1px] md:text-2xl'>
                        {suffix}
                      </span>
                    )}
                  </div>

                  <p className='text-sm font-medium text-zinc-300'>{label}</p>

                  {extra && (
                    <p className='mt-1 text-xs text-zinc-500 md:text-sm'>
                      {extra}
                    </p>
                  )}
                </div>
              </div>
            ))}

            <div className='col-span-full flex items-center justify-end pt-1'>
              <img
                src='./imgs/mb-logo.png'
                alt='Logo'
                width={36}
                height={36}
                className='opacity-90 transition duration-300 hover:scale-105 md:h-[42px] md:w-[42px]'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
