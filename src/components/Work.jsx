import ProjectCard from "./ProjectCard.jsx";

const works = [
  {
    imgSrc: "/imgs/IoT.png",
    title: "IoT charting data APP",
    tags: ["IoT", "WebDev", "Microcnotrollers"],
    projectLink: "https://github.com/MarkoBjelica98/IoT-Web-Projekat.git",
  },
  {
    imgSrc: "/imgs/Compass.png",
    title: "Digitalni Kompass",
    tags: ["Compass2", "MicroC"],
    projectLink: "https://github.com/MarkoBjelica98/DigitalniKompas.git",
  },
  {
    imgSrc: "/imgs/MB-PortfolioV1.png",
    title: "MB-PortfolioV1",
    tags: ["React", "Vanilla CSS", "Dark Mode"],
    projectLink: "https://github.com/MarkoBjelica98/MarkoB-Portfolio.git",
  },
  {
    imgSrc: "",
    title: "Full-Stack APP Coming....",
    tags: ["Development", "API"],
    projectLink: "",
  },
];

function Work() {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Portfolio Highlights</h2>
        <div
          className="grid gap-x-4 gap-y-5 
          grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]"
        >
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classess="reveal-up"
            />
          ))}
          Portfolio Card
        </div>
      </div>
    </section>
  );
}

export default Work;
