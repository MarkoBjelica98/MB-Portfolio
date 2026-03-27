export const workTechStack = [
  'React',
  'JavaScript',
  'REST APIs',
  'FastAPI',
  'SQLAlchemy',
  'PostgreSQL',
  'Recharts',
  'Async Programming',
  'Role-Based Access',
  'System Thinking',
];

const reviews = [
  {
    name: 'ML & Monitoring',
    content: {
      description:
        'Built and improved a production-oriented ML monitoring dashboard, including prediction analysis, evaluation metrics, and A/B testing to compare model performance in real scenarios.',

      bullets: [
        'Developed ML monitoring dashboards with real-time data visualization',
        'Analyzed ROC, Precision-Recall, and prediction distribution patterns',
        'Implemented A/B testing insights for model performance comparison',
      ],

      details:
        'During my internship, I worked on a production-like ML monitoring system where the focus was not only on displaying metrics, but on making them meaningful and actionable. I contributed to the ModelDetails page, which served as a central place for analyzing model performance through multiple perspectives. This included prediction trends over time, probability distributions, and evaluation metrics such as ROC and Precision-Recall curves. \n\nIn addition to monitoring, I worked on integrating A/B testing functionality that allowed comparison between different model behaviors in real-world scenarios. This involved visualizing test and prediction groups, calculating performance percentages, and ensuring that results were clearly presented and easy to interpret.\n\nA key part of my work was transforming raw backend data into clear and interpretable visualizations. I worked with APIs that returned aggregated statistics and ensured that the data was properly structured and displayed using charts. I also improved the frontend architecture by splitting functionality into modular components and implementing independent loading states for each panel.\n\nAdditionally, I optimized data fetching logic by reducing redundant API calls caused by improper useEffect dependencies, which improved performance and reduced unnecessary network load.',

      stack: [
        'React',
        'Recharts',
        'REST APIs',
        'FastAPI',
        'SQLAlchemy',
        'ML Monitoring',
        'A/B Testing',
        'Metrics Analysis',
      ],

      highlights: [
        'Built modular monitoring panels for trends, distributions, and metrics',
        'Implemented A/B testing visualization for model comparison',
        'Transformed raw model outputs into clear visual insights',
        'Improved performance by optimizing API calls and component structure',
      ],

      challenges: [
        {
          title: 'Making metrics actionable, not just visible',
          problem:
            'Simply displaying charts like ROC or Precision-Recall does not provide value unless users can understand what they mean in practice.',
          solution:
            'I connected multiple views (trends, distributions, evaluation curves, and A/B results) to provide a more complete picture of model behavior.',
          result:
            'This made the monitoring system more useful for understanding performance and detecting potential issues.',
        },
        {
          title: 'Handling inconsistent and complex data',
          problem:
            'Backend responses were not always aligned with frontend needs, especially when combining monitoring data with A/B testing statistics.',
          solution:
            'I implemented data transformation logic and ensured consistent formatting across different panels and chart types.',
          result:
            'Improved reliability of visualizations and reduced edge-case errors.',
        },
        {
          title: 'Accurate A/B testing representation',
          problem:
            'Incorrect percentage calculations or poor chart structure could lead to misleading conclusions about model performance.',
          solution:
            'I carefully calculated group-based percentages and designed charts that clearly separated test and prediction groups.',
          result:
            'Ensured accurate and trustworthy comparison between model variations.',
        },
        {
          title: 'Reducing redundant API calls',
          problem:
            'Improper useEffect dependencies caused multiple unnecessary requests, impacting performance.',
          solution:
            'Refactored data-fetching logic and controlled dependencies more precisely.',
          result:
            'Reduced duplicate requests and improved dashboard responsiveness.',
        },
      ],

      impact: [
        'Improved visibility into real-world model performance and behavior',
        'Enabled comparison of model variations through A/B testing',
        'Enhanced usability of monitoring tools with clearer data visualization',
        'Reduced frontend performance issues by optimizing API usage',
      ],

      learned: [
        'How to monitor ML models in a production-like environment',
        'How to interpret evaluation metrics in real-world scenarios',
        'How A/B testing is used to validate model performance',
        'How to combine backend data with frontend visualization effectively',
      ],
    },
    imgSrc: './imgs/ML.png',
  },
  {
    name: 'Backend & APIs',
    content: {
      description:
        'Designed and improved backend APIs for ML monitoring systems using FastAPI and SQLAlchemy, focusing on efficient data aggregation, async processing, and reliable frontend integration.',

      bullets: [
        'Built and optimized async REST APIs for ML monitoring dashboards',
        'Designed endpoints for prediction logs, metrics, and distributions',
        'Improved API performance and frontend-backend data consistency',
      ],

      details:
        'My backend work focused on building and improving APIs that powered ML monitoring dashboards. I worked with FastAPI and SQLAlchemy to develop endpoints responsible for fetching model data, prediction logs, evaluation metrics, and probability distributions.\n\nA key part of my work involved designing endpoints that aggregated data over time (daily, monthly, yearly) and returned structured responses optimized for frontend visualization. I also improved API design by introducing more efficient patterns, such as fetching data by model ID instead of retrieving large datasets and filtering on the frontend.\n\nI worked extensively with asynchronous endpoints to ensure responsiveness, especially for data-heavy operations. Additionally, I focused on shaping API responses in a consistent format so that frontend components could reliably consume and visualize the data.\n\nThroughout the process, I handled real-world backend issues such as authorization errors, validation mismatches, and performance bottlenecks, which helped me understand how to build more robust and production-ready APIs.',

      stack: [
        'FastAPI',
        'SQLAlchemy',
        'PostgreSQL',
        'REST APIs',
        'Async Endpoints',
        'Data Aggregation',
      ],

      highlights: [
        'Designed endpoints for trends, probability distributions, and model metrics',
        'Implemented time-based aggregation logic for prediction data',
        'Improved API efficiency by reducing unnecessary data transfer',
        'Built backend responses optimized for frontend chart rendering',
      ],

      challenges: [
        {
          title: 'Designing efficient data aggregation',
          problem:
            'Prediction logs and metrics datasets can become large and expensive to process, especially when dashboards require fast responses.',
          solution:
            'I implemented aggregation strategies (grouping by time periods) and structured responses to minimize data size while preserving meaningful insights.',
          result:
            'Reduced load on the frontend and improved performance of dashboard visualizations.',
        },
        {
          title: 'Frontend-backend contract mismatches',
          problem:
            'Differences between expected and actual API responses led to issues such as invalid parameters (422 errors) and inconsistent data formats.',
          solution:
            'I debugged requests, aligned API contracts, and ensured consistent response structures across endpoints.',
          result:
            'Improved stability of frontend integration and reduced runtime errors.',
        },
        {
          title: 'Authorization and access control issues',
          problem:
            'Some admin endpoints returned 403 errors due to incorrect scoping and authentication handling.',
          solution:
            'I investigated request flows and ensured proper authorization logic and usage of protected routes.',
          result:
            'Resolved access issues and improved security handling across endpoints.',
        },
        {
          title: 'Optimizing async behavior and performance',
          problem:
            'Improper handling of async operations could lead to slow responses or unnecessary load on the database.',
          solution:
            'I used async patterns and optimized query execution to ensure efficient data retrieval.',
          result:
            'Improved responsiveness of backend APIs and overall system performance.',
        },
      ],

      impact: [
        'Improved backend performance and scalability of monitoring features',
        'Enabled reliable and consistent data flow between backend and frontend',
        'Reduced unnecessary data processing through better API design',
        'Strengthened overall stability of dashboard functionality',
      ],

      learned: [
        'How to design APIs for data-heavy, real-time dashboards',
        'How to structure backend responses for frontend visualization needs',
        'How async processing improves performance in real applications',
        'How to debug and resolve full-stack integration issues',
      ],
    },
    imgSrc: './imgs/BE.png',
  },
  {
    name: 'Admin Dashboards',
    content: {
      description:
        'Developed and structured complex React-based admin dashboards for ML monitoring, focusing on modular architecture, data visualization, and optimized user experience.',

      bullets: [
        'Built modular React dashboards with multiple data panels',
        'Visualized metrics, prediction trends, and distributions',
        'Improved UX through better state management and loading behavior',
      ],

      details:
        'A major part of my work involved building and improving internal admin dashboards used for monitoring machine learning models and system behavior. I worked on the ModelDetails page, which acted as a central orchestrator connecting multiple independent panels.\n\nThese panels included prediction metadata, trends over time, probability distributions, A/B testing results, and evaluation metrics. I structured the dashboard into reusable components, ensuring that each panel handled its own data, state, and loading logic.\n\nI focused heavily on improving user experience by removing global loaders and introducing independent loading states for each section, allowing partial rendering and faster perceived performance.\n\nAdditionally, I worked on optimizing React state and useEffect logic to prevent unnecessary re-renders and duplicate API calls, which significantly improved responsiveness.\n\nUsing Recharts, I built dynamic and responsive visualizations, ensuring proper formatting, labeling, and handling of edge cases such as missing or inconsistent data.',

      stack: [
        'React',
        'Recharts',
        'Component Architecture',
        'State Management',
        'Data Visualization',
        'Responsive Design',
      ],

      highlights: [
        'Designed ModelDetails as a central orchestrator for multiple dashboard panels',
        'Built reusable components for trends, distributions, and metrics',
        'Implemented independent loading states for better UX',
        'Optimized useEffect logic to reduce redundant API calls',
      ],

      challenges: [
        {
          title: 'Managing complex dashboard state',
          problem:
            'Multiple panels with different data sources caused duplicated API calls and difficult state coordination.',
          solution:
            'I structured the dashboard into isolated components and carefully managed state and dependencies to control when data was fetched.',
          result:
            'Reduced unnecessary requests and improved overall dashboard performance.',
        },
        {
          title: 'Improving perceived performance',
          problem:
            'Using a global loader blocked the entire UI, even when only one part of the dashboard was loading.',
          solution:
            'I implemented panel-level loading states so each section could render independently.',
          result:
            'Faster and smoother user experience with more responsive UI behavior.',
        },
        {
          title: 'Handling inconsistent and complex data',
          problem:
            'Different charts required different data formats, and backend responses were not always consistent.',
          solution:
            'I transformed and normalized data on the frontend before rendering it.',
          result: 'More stable charts and fewer runtime errors.',
        },
        {
          title: 'Designing readable data-heavy interfaces',
          problem:
            'Dashboards can easily become cluttered and hard to navigate when displaying multiple datasets.',
          solution:
            'I improved layout structure, spacing, and component grouping to make the UI easier to scan.',
          result: 'Cleaner, more intuitive dashboards for internal users.',
        },
      ],

      impact: [
        'Improved usability and responsiveness of admin dashboards',
        'Reduced redundant API calls and improved frontend performance',
        'Enabled clearer visualization of complex model data',
        'Strengthened modular frontend architecture',
      ],

      learned: [
        'How to structure complex React applications into modular components',
        'How to manage state and side effects in data-heavy UIs',
        'How UX decisions directly impact usability of dashboards',
        'How to balance performance, readability, and functionality',
      ],
    },
    imgSrc: './imgs/AdminDash.png',
  },
  {
    name: 'User Management',
    content: {
      description:
        'Built and improved admin user management features, including role-based access control, secure API interactions, and reliable CRUD workflows.',

      bullets: [
        'Implemented user CRUD operations and role management',
        'Built role-based access control (RBAC) logic',
        'Ensured secure and consistent frontend-backend communication',
      ],

      details:
        'I worked on developing admin panel functionality for managing users and their permissions within the system. This included creating, updating, and deleting users, as well as assigning and removing roles through a role-based access control system.\n\nA key part of this work was ensuring that frontend actions were correctly synchronized with backend state. I handled API communication for user and role updates, making sure that UI state was only updated after confirmed backend responses to avoid inconsistencies.\n\nI also focused on designing clean and predictable user flows, including proper loading states, error handling, and immediate feedback for admin actions.\n\nAdditionally, I worked on aligning frontend requests with backend expectations, ensuring that payloads, endpoints, and responses were consistent and reliable across the application.',

      stack: [
        'React',
        'REST APIs',
        'Role-Based Access Control (RBAC)',
        'State Management',
        'Async Logic',
        'Authentication & Authorization',
      ],

      highlights: [
        'Implemented full user management flows (create, update, delete)',
        'Built role assignment and removal functionality',
        'Integrated RBAC logic with backend APIs',
        'Ensured consistent synchronization between UI and backend state',
      ],

      challenges: [
        {
          title: 'Role assignment inconsistencies',
          problem:
            'Frontend state sometimes did not reflect actual backend role assignments, causing mismatches in UI behavior.',
          solution:
            'I ensured state updates were triggered only after successful API responses and aligned request/response structures.',
          result:
            'Eliminated inconsistencies and improved reliability of role management.',
        },
        {
          title: 'Frontend-backend contract alignment',
          problem:
            'Mismatches in request formats and backend responses caused integration bugs.',
          solution:
            'I debugged API interactions, adjusted payloads, and ensured consistent data structures.',
          result: 'Improved stability and reduced integration-related issues.',
        },
        {
          title: 'Ensuring secure access control',
          problem:
            'Incorrect handling of roles or permissions could lead to unauthorized access or inconsistent behavior.',
          solution:
            'I carefully implemented role-based logic and verified access control through API interactions.',
          result: 'Maintained secure and predictable user management flows.',
        },
      ],

      impact: [
        'Improved reliability and security of admin user management features',
        'Reduced bugs related to roles and permissions',
        'Enhanced consistency between frontend and backend systems',
        'Strengthened overall access control logic within the application',
      ],

      learned: [
        'How role-based access control works in real-world applications',
        'How to design secure and reliable CRUD workflows',
        'How frontend and backend must stay aligned for stable systems',
      ],
    },
    imgSrc: './imgs/AdminUsers.png',
  },
  {
    name: 'System Thinking',
    content: {
      description:
        'Approached frontend and backend problems as part of a connected system, focusing on data flow, rendering behavior, and API interactions to improve performance and reliability.',

      bullets: [
        'Reduced unnecessary re-renders and duplicated API calls',
        'Improved consistency of state and data flow across components',
        'Debugged issues by analyzing full system behavior, not isolated parts',
      ],

      details:
        'One of the most valuable parts of my internship was learning to treat the application as a connected system rather than a collection of isolated components. While working on complex dashboards like ModelDetails, I encountered issues such as repeated API calls, unnecessary re-renders, and inconsistent state behavior.\n\nInstead of applying quick fixes, I focused on understanding the root causes. This included analyzing how React hooks (especially useEffect) were triggered, how state was shared across components, and how API calls were coordinated.\n\nI traced data flow from backend endpoints all the way to frontend rendering, identifying where inefficiencies or mismatches occurred. This allowed me to reduce duplicated requests, improve component isolation, and make the application more predictable and easier to maintain.\n\nI also learned how frontend decisions (such as dependency arrays, state ownership, and component structure) directly affect backend load and overall system performance.',

      stack: [
        'React Hooks',
        'useEffect',
        'State Management',
        'API Integration',
        'Debugging',
        'Performance Optimization',
      ],

      highlights: [
        'Identified and fixed repeated API calls caused by improper useEffect logic',
        'Improved data flow between backend and frontend components',
        'Applied system-level thinking to debug complex issues',
        'Reduced unnecessary rendering and improved app responsiveness',
      ],

      challenges: [
        {
          title: 'Repeated renders and duplicated API calls',
          problem:
            'Improper useEffect dependencies and shared state caused multiple unnecessary requests and re-renders.',
          solution:
            'I analyzed component relationships, controlled dependencies more precisely, and ensured that each request was triggered only when needed.',
          result:
            'Reduced redundant API calls and improved overall performance.',
        },
        {
          title: 'Frontend-backend flow inconsistencies',
          problem:
            'Data inconsistencies and mismatches between frontend expectations and backend responses caused unstable behavior.',
          solution:
            'I traced full data flow from API to UI and ensured consistent data handling and transformation.',
          result: 'Improved reliability and predictability of the application.',
        },
        {
          title: 'Debugging cross-component issues',
          problem:
            'Some bugs were not isolated but caused by interactions between multiple components and shared logic.',
          solution:
            'I approached debugging by analyzing the system as a whole instead of focusing on a single component.',
          result:
            'More effective debugging and deeper understanding of application architecture.',
        },
      ],

      impact: [
        'Improved performance by reducing unnecessary renders and API calls',
        'Made application behavior more predictable and easier to maintain',
        'Reduced backend load through better frontend data handling',
        'Strengthened overall system stability',
      ],

      learned: [
        'How to think about applications as interconnected systems',
        'How React hooks influence performance and data flow',
        'Why root-cause analysis is critical in real-world debugging',
        'How frontend decisions impact backend performance',
      ],
    },
    imgSrc: './imgs/System.png',
  },
];

export default reviews;
