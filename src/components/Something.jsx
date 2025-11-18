import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

import ReviewCard from "./SomethinCard.jsx";

const reviews = [
  {
    content: "Coming...",
    name: "",
    imgSrc: "/",
  },
  {
    content: "Coming...",
    name: "",
    imgSrc: "/",
  },
  {
    content: "Coming...",
    name: "",
    imgSrc: "/",
  },
];

function Review() {
  useGSAP(() => {
    gsap.to(".scrub-slide", {
      x: "-1000",
      ease: "none",
      scrollTrigger: {
        trigger: ".scrub-slide",
        start: "top 80%",
        end: "+=300%",
        scrub: true,
        // markers: true
      },
    });
  });

  return (
    <section id="something" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Moja interesovanja</h2>
        <div className="scrub-slide flex items-stretch gap-3 w-fit">
          {reviews.map(({ content, name, imgSrc }, key) => (
            <ReviewCard
              key={key}
              name={name}
              imgSrc={imgSrc}
              content={content}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Review;
