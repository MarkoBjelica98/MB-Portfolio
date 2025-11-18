import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "/imgs/c.svg",
    label: "C/C++",
    desc: "OOP",
  },
  {
    imgSrc: "/imgs/css-3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/imgs/javascript-1.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/imgs/nodejs-3.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/imgs/python-5.svg",
    label: "Python",
    desc: "Multipurpose",
  },
  {
    imgSrc: "/imgs/postgresql.svg",
    label: "PostgreSQL",
    desc: "Database",
  },
  {
    imgSrc: "/imgs/react-2.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "/imgs/tailwind-css-2.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
];

function Skill() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Tools I Use</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          My Toolkit
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
