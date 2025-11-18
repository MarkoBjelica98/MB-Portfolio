const aboutItems = [
  {
    label: "Project done",
    number: 5,
  },
  {
    label: "Years of experience",
    number: 0,
  },
];

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div
          className="bg-zinc-800/50 p-7 rounded-2xl
        md:p-12 reveal-up"
        >
          <p
            className="text-zinc-300 mb-4 md:mb-8
          md:text-xl md:max-w-[60ch]"
          >
            Motivated beginner in embedded and web development, with a strong
            interest in building software solutions that connect hardware and
            online services. Focused on learning and improving in modern web
            application development and backend APIs, as well as integrating
            microcontrollers and IoT devices with web systems. Looking for an
            opportunity to grow in a professional environment, contribute
            through hands-on work and teamwork, and gradually develop into a
            reliable full-stack and embedded engineer.
          </p>
          <div
            className="flex flex-wrap items-center
          gap-4 md:gap-7"
          >
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-800 font-semibold md:text-3xl">
                    +
                  </span>
                </div>

                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <img
              src="/imgs/mb-logo.png"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
