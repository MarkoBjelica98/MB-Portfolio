import { ButtonPrimary, ButtonOutline } from "./Button";
import CV from "../../public/MarkoBjelicaCV(eng).pdf";

function Hero() {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div
        className="container items-center lg:grid lg:grid-cols-2
        lg:gap-10"
      >
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/imgs/mb-logo.png"
                alt="MB Logo"
                className="img-cover"
              />
            </figure>

            <div
              className="flex items-center gap-1.5
            text-zinc-400 text-sm tracking-wide"
            >
              <span
                className="relative w-2 h-2 rounded-full 
              bg-emerald-500"
              >
                <span
                  className="absolute inset-0 w-2 h-2
                rounded-full bg-emerald-500 animate-ping"
                ></span>
              </span>
              Available for work
            </div>
          </div>

          <h2
            className="headline-1 max-w-[15ch]
          sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10"
          >
            I’m Marko, a developer working across web technologies and embedded
            systems. I combine frontend experience with hardware knowledge to
            build complete, end-to-end solutions.
          </h2>

          <div className="flex items-center gap-3">
            <ButtonPrimary
              href="https://MarkoBjelica98.github.io/MB-Portfolio/MarkoBjelicaCV(eng).pdf"
              target="_blank"
              label="Download CV"
              icon="download"
            />
            <ButtonOutline
              href="#about"
              label="Scroll Down"
              icon="arrow_downward"
            />
          </div>
        </div>
        <div className="hidden lg:block">
          <figure
            className="w-full max-w-[480px] ml-auto
          bg-gradient-to-t from-orange-600 via-25% via-orange-600/50
          to-65% rounded-[60px] overflow-hidden"
          >
            <img
              src="/imgs/Hero-img.png"
              width={600}
              height={800}
              alt="Marko Bjelica"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Hero;
