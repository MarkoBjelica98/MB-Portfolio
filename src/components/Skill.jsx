import SkillCard from './SkillCard';

const skillGroups = [
  {
    title: 'Frontend',
    items: [
      {
        imgSrc: './imgs/react-2.svg',
        label: 'React',
        desc: 'Frontend',
        tooltip:
          'Built modular dashboards, reusable components, and dynamic UI panels.',
      },
      {
        imgSrc: './imgs/javascript-1.svg',
        label: 'JavaScript',
        desc: 'Core',
        tooltip:
          'Used for component logic, state handling, async flows, and interactivity.',
      },
      {
        imgSrc: './imgs/css-3.svg',
        label: 'CSS',
        desc: 'Styling',
        tooltip:
          'Used for layouts, responsive design, spacing, and UI polishing.',
      },
      {
        imgSrc: './imgs/tailwind-css-2.svg',
        label: 'TailwindCSS',
        desc: 'UI',
        tooltip:
          'Used for faster styling, responsive layouts, and cleaner component structure.',
      },
      {
        imgSrc: './imgs/recharts.png',
        label: 'Recharts',
        desc: 'Charts',
        tooltip:
          'Used for prediction trends, probability distributions, ROC/PR charts, and dashboard metrics.',
      },
    ],
  },
  {
    title: 'Backend',
    items: [
      {
        imgSrc: './imgs/python-5.svg',
        label: 'Python',
        desc: 'Backend',
        tooltip:
          'Used in backend-related work, data handling, and ML monitoring workflows.',
      },
      {
        imgSrc: './imgs/fastapi-1.svg',
        label: 'FastAPI',
        desc: 'API',
        tooltip:
          'Worked on async admin and monitoring endpoints used by dashboards.',
      },
      {
        imgSrc: './imgs/nodejs-3.svg',
        label: 'Node.js',
        desc: 'Server',
        tooltip:
          'Used in personal and full-stack projects for backend fundamentals.',
      },
      {
        imgSrc: './imgs/restapi.png',
        label: 'REST APIs',
        desc: 'Integration',
        tooltip:
          'Connected frontend dashboards with backend services and structured API responses.',
      },
    ],
  },
  {
    title: 'Database',
    items: [
      {
        imgSrc: './imgs/postgresql.svg',
        label: 'PostgreSQL',
        desc: 'DB',
        tooltip:
          'Worked with relational data, prediction logs, metrics, and admin-related records.',
      },
    ],
  },
  {
    title: 'Tools',
    items: [
      {
        imgSrc: './imgs/GitHub.png',
        label: 'GitHub',
        desc: 'Version Control',
        tooltip:
          'Used for source control, commits, pushing changes, and project collaboration.',
      },
      {
        imgSrc: './imgs/jira.png',
        label: 'Jira',
        desc: 'Tracking',
        tooltip:
          'Used for task tracking, ticket organization, and workflow management.',
      },
      {
        imgSrc: './imgs/Postman.png',
        label: 'Postman',
        desc: 'API Testing',
        tooltip:
          'Used for endpoint testing, request validation, and backend debugging.',
      },
      {
        imgSrc: './imgs/DBeaver.png',
        label: 'DBeaver',
        desc: 'DB Tool',
        tooltip:
          'Used for database inspection, querying, and verifying stored data.',
      },
      {
        imgSrc: './imgs/VSCode.png',
        label: 'VS Code',
        desc: 'Editor',
        tooltip:
          'Main editor used for frontend and general full-stack development.',
      },
      {
        imgSrc: './imgs/PyCharm.png',
        label: 'PyCharm',
        desc: 'IDE',
        tooltip: 'Used for Python-focused work and backend code navigation.',
      },
    ],
  },
];

function Skill() {
  return (
    <section className='section'>
      <div className='container'>
        <h2 className='headline-2 reveal-up'>Tech Stack</h2>

        <p className='text-zinc-400 mt-3 mb-10 max-w-[60ch] reveal-up'>
          Technologies and tools I use to build, debug, and maintain full-stack
          applications.
        </p>

        <div className='space-y-10'>
          {skillGroups.map((group, groupIndex) => (
            <div key={groupIndex} className='reveal-up'>
              <h3 className='text-xl font-semibold text-zinc-100 mb-4'>
                {group.title}
              </h3>

              <div className='grid gap-3 grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))]'>
                {group.items.map(
                  ({ imgSrc, label, desc, tooltip }, itemIndex) => (
                    <SkillCard
                      key={`${group.title}-${itemIndex}`}
                      imgSrc={imgSrc}
                      label={label}
                      desc={desc}
                      tooltip={tooltip}
                      classes='reveal-up'
                    />
                  ),
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
