import ProjectCard from './ProjectCard.jsx';

const projects = [
  {
    imgSrc: './imgs/iot-site.png',
    title: 'IoT Dashboard',
    tags: ['Full Stack', 'API', 'Dashboard'],
    projectLink: 'https://iot-dashboard-seven-zeta.vercel.app/',
  },
  {
    imgSrc: './imgs/Compass.png',
    title: 'Digitalni Kompas',
    tags: ['Compass2', 'microC', 'Embedded'],
    projectLink: 'https://github.com/MarkoBjelica98/DigitalniKompas.git',
    previewImg: './imgs/Compass2.jpg',
    hasOptions: true,
    details: {
      overview:
        'Digitalni kompas je embedded projekat razvijen u microC okruženju na EasyPIC PRO v7 ploči uz korišćenje Compass 2 modula. Projekat je fokusiran na očitavanje orijentacije i prikaz smjera na osnovu podataka dobijenih sa senzora.',
      features: [
        'Komunikacija sa Compass 2 modulom preko I2C protokola',
        'Očitavanje podataka sa senzora i obrada vrijednosti',
        'Pretvaranje sirovih podataka u smjer/orijentaciju',
        'Prikaz rezultata rada projekta kroz funkcionalni embedded sistem',
      ],
      tech: ['EasyPIC PRO v7', 'Compass 2', 'microC', 'I2C'],
    },
  },
  {
    imgSrc: './imgs/MB-PortfolioV1.png',
    title: 'MB Portfolio V1',
    tags: ['React', 'CSS', 'Dark Mode'],
    projectLink: 'https://marko-b-portfolio.vercel.app/',
  },
];

function Projects() {
  return (
    <section id='projects' className='section'>
      <div className='container'>
        <h2 className='headline-2 mb-8 reveal-up'>Portfolio Highlights</h2>

        <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
          {projects.map(
            (
              {
                imgSrc,
                title,
                tags,
                projectLink,
                previewImg,
                hasOptions,
                details,
              },
              index,
            ) => (
              <ProjectCard
                key={index}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
                previewImg={previewImg}
                hasOptions={hasOptions}
                details={details}
                classes='reveal-up'
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
