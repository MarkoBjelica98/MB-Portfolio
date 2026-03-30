import ProjectCard from './ProjectCard.jsx';

const projects = [
  {
    imgSrc: './imgs/iot-site.png',
    title: 'IoT Dashboard',
    tags: ['Full Stack', 'API', 'Dashboard', 'Arduino'],
    projectLink: 'https://iot-dashboard-seven-zeta.vercel.app/',
  },
  {
    imgSrc: './imgs/Compass.png',
    title: 'Digital Compass',
    tags: ['Compass2', 'microC', 'Embedded'],
    projectLink: 'https://github.com/MarkoBjelica98/DigitalniKompas.git',
    previewImg: './imgs/Compass2.jpg',
    hasOptions: true,
    details: {
      overview:
        'The digital compass is an embedded project developed in the microC environment on the EasyPIC PRO v7 board using the Compass 2 module. The project is focused on orientation reading and direction display based on data obtained from sensors.',
      features: [
        'Communication with Compass 2 module via I2C protocol',
        'Reading data from sensors and processing values',
        'Converting raw data to direction/orientation',
        'Presentation of the results of the project work through a functional embedded system',
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
