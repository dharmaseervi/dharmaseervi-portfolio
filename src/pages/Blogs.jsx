import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FaReact,
  FaNodeJs,
  FaNode,
  FaGit,
  FaDatabase,
  FaBootstrap,
  FaHtml5,
  FaCss3,
  FaLinux,
  FaApple,
  FaCode,
  FaAtom,
  FaSass,
  FaDocker,
  FaArrowDown,
} from "react-icons/fa";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export const technicalSkills = [
  {
    title: "ReactJS",
    subtitle: "Frontend Framework",
    content: "A powerful JavaScript library for building user interfaces.",
    details: {
      description: `React is a powerful JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update and render them.`,
      features: [
        "Declarative and efficient.",
        "Component-based architecture.",
        "Virtual DOM for optimal performance.",
        "One-way data binding.",
        "Supports both class and functional components.",
        "Large and active community.",
      ],
      ecosystem: [
        "React Router for navigation.",
        "State management with tools like Redux or Context API.",
        "React Hooks for functional component state and lifecycle methods.",
      ],
      useCases: [
        "Building single-page applications (SPAs).",
        "Creating interactive and dynamic user interfaces.",
        "Integrating with backend services and APIs.",
      ],
    },
    tips: [
      {
        title: "Tip 1",
        description: "Consider using React Hooks for state management.",
      },
      {
        title: "Tip 2",
        description: "Explore React Router for efficient navigation in SPAs.",
      },
    ],
    resources: {
      resource1: "React Documentation",
      resource2: "React Hooks Guide",
    },
    icon: <FaReact />,
  },
  {
    title: "NodeJS",
    subtitle: "Backend Framework",
    content: "An asynchronous event-driven JavaScript runtime.",
    details: {
      description: `Node.js is a powerful, asynchronous, event-driven JavaScript runtime that allows developers to build scalable and high-performance network applications.`,
      features: [
        "Uses the V8 JavaScript runtime engine.",
        "Designed to be lightweight and efficient.",
        "Well-suited for server-side development.",
        "Enables writing server-side applications using JavaScript.",
        "Facilitates a unified language across the entire development stack.",
        "Commonly used to create web servers and build backend services for web applications.",
      ],
      ecosystem: [
        "Has a large ecosystem of libraries and packages available via npm (Node Package Manager).",
        "Allows easy extension of functionality with npm packages.",
      ],
      useCases: [
        "Widely adopted for building scalable and real-time applications.",
        "Used in developing chat applications, streaming platforms, and APIs.",
      ],
    },
    tips: [
      {
        title: "Tip 1",
        description: "Utilize npm packages for extending NodeJS functionality.",
      },
      {
        title: "Tip 2",
        description: "Explore asynchronous programming with Promises.",
      },
    ],
    resources: {
      resource1: "Node.js Documentation",
      resource2: "npm Registry",
    },
    icon: <FaNodeJs />,
  },
  {
    title: "ExpressJS",
    subtitle: "Web Application Framework",
    content: "A minimal and flexible Node.js web application framework.",
    details: {
      description: `Express is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications.`,
      features: [
        "Lightweight and unopinionated.",
        "Supports middleware to handle requests and responses.",
        "Facilitates the building of RESTful APIs.",
        "Integrates with various template engines.",
        "Easily extensible with npm packages.",
      ],
      useCases: [
        "Building web and mobile applications.",
        "Creating RESTful APIs.",
        "Server-side rendering of web pages.",
      ],
    },
    tips: [
      {
        title: "Tip 1",
        description: "Master middleware for handling requests and responses.",
      },
      {
        title: "Tip 2",
        description: "Explore the use of template engines for dynamic views.",
      },
    ],
    resources: {
      resource1: "Express Documentation",
      resource2: "Middleware in Express",
    },
    icon: <FaNode />,
  },
  {
    title: "Git",
    subtitle: "Version Control System",
    content:
      "A distributed version control system for tracking changes in source code during software development.",
    details: {
      description: `Git is a distributed version control system that enables collaboration among developers by tracking changes in source code during software development.`,
      features: [
        "Distributed version control.",
        "Branching and merging capabilities.",
        "Supports non-linear development.",
        "Secure and fast.",
        "Integrates with platforms like GitHub and GitLab.",
      ],
      useCases: [
        "Tracking changes in source code.",
        "Collaborative software development.",
        "Managing project versions and releases.",
      ],
    },
    tips: [
      {
        title: "Tip 1",
        description:
          "Master branching and merging for effective collaboration.",
      },
      {
        title: "Tip 2",
        description:
          "Explore GitLab or GitHub for remote repositories and collaboration.",
      },
    ],
    resources: {
      resource1: "Git Documentation",
      resource2: "GitHub Guides",
    },
    icon: <FaGit />,
  },
  {
    title: "MongoDB",
    subtitle: "NoSQL Database",
    content:
      "A cross-platform document-oriented database program that uses a JSON-like format for storing data.",
    details: {
      description: `MongoDB is a cross-platform document-oriented database program that uses a JSON-like format for storing and querying data.`,
      features: [
        "Schema-less data model.",
        "Supports dynamic queries.",
        "Horizontal scalability through sharding.",
        "Geospatial indexing.",
        "Aggregation framework for data processing.",
      ],
      useCases: [
        "Storing and retrieving large amounts of unstructured data.",
        "Real-time applications with changing data structures.",
      ],
    },
    tips: [
      {
        title: "Tip 1",
        description:
          "Understand the benefits of NoSQL and schema-less data modeling.",
      },
      {
        title: "Tip 2",
        description: "Explore MongoDB Atlas for cloud-based database hosting.",
      },
    ],
    resources: {
      resource1: "MongoDB Documentation",
      resource2: "MongoDB Atlas",
    },
    icon: <FaDatabase />,
  },
  // Add similar objects for other skills with their respective icons
  {
    title: "Bootstrap",
    subtitle: "Frontend Framework",
    content:
      "A popular CSS framework for building responsive and mobile-first websites.",
    details: {
      description: `Bootstrap is a popular CSS framework for building responsive and mobile-first websites. It includes a set of pre-designed components and styles.`,
      features: [
        "Responsive grid system.",
        "Pre-styled components (buttons, forms, navigation).",
        "Extensive utility classes.",
        "Customizable with Sass variables.",
        "Compatible with modern browsers.",
      ],
      useCases: [
        "Rapid development of responsive web applications.",
        "Creating consistent and visually appealing UIs.",
      ],
    },
    tips: [
      {
        title: "Tip 1",
        description: "Use the responsive grid system for consistent layouts.",
      },
      {
        title: "Tip 2",
        description: "Explore Bootstrap components for rapid development.",
      },
    ],
    resources: {
      resource1: "Bootstrap Documentation",
      resource2: "Bootstrap Components",
    },
    icon: <FaBootstrap />,
  },
  {
    title: "HTML",
    subtitle: "Markup Language",
    content:
      "The standard markup language for documents designed to be displayed in a web browser.",
    details: {
      description: `HTML (Hypertext Markup Language) is the standard markup language for creating web pages and web applications.`,
      features: [
        "Defines the structure of web content.",
        "Consists of elements represented by tags.",
        "Semantic markup for better accessibility.",
      ],
      useCases: [
        "Building the structure of web pages.",
        "Creating accessible and SEO-friendly content.",
      ],
    },
    tips: [
      {
        title: "Tip 1",
        description:
          "Follow semantic markup practices for better accessibility.",
      },
      {
        title: "Tip 2",
        description:
          "Understand the use of HTML5 elements for modern web development.",
      },
    ],
    resources: {
      resource1: "MDN Web Docs - HTML",
      resource2: "W3Schools HTML Tutorial",
    },
    icon: <FaHtml5 />,
  },
  {
    title: "CSS",
    subtitle: "Stylesheet Language",
    content:
      "A style sheet language used for describing the presentation of a document written in HTML or XML.",
    details: {
      description: `CSS (Cascading Style Sheets) is a stylesheet language used for describing the presentation of a document written in HTML or XML.`,
      features: [
        "Style definition for web documents.",
        "Controls the layout and appearance of elements.",
        "Cascading nature allows overriding styles.",
        "Selectors for targeting specific elements.",
        "Responsive design with media queries.",
      ],
      useCases: [
        "Styling HTML elements to create visually appealing layouts.",
        "Ensuring consistency in the design of web pages.",
        "Implementing responsive design for various screen sizes.",
      ],
    },
    tips: [
      {
        title: "Tip 1",
        description:
          "Leverage CSS flexbox and grid for advanced layout options.",
      },
      {
        title: "Tip 2",
        description:
          "Explore CSS preprocessors like Sass for enhanced stylesheets.",
      },
    ],
    resources: {
      resource1: "MDN Web Docs - CSS",
      resource2: "CSS Tricks",
    },
    icon: <FaCss3 />,
  },
  {
    title: "Linux",
    subtitle: "Operating System",
    content:
      "An open-source, Unix-like operating system kernel used by a wide variety of devices and platforms.",
    details: {
      description: `Linux is an open-source, Unix-like operating system kernel used by a wide variety of devices and platforms.`,
      features: [
        "Free and open-source.",
        "Multitasking and multiuser capabilities.",
        "Stable and reliable.",
        "Wide range of distributions catering to various needs.",
        "Command-line interface for system administration.",
      ],
      useCases: [
        "Server environments.",
        "Development and programming.",
        "Embedded systems.",
        "Networking applications.",
      ],
    },
    tips: [
      {
        title: "Tip 1",
        description:
          "Explore different Linux distributions to find one that suits your needs.",
      },
      {
        title: "Tip 2",
        description:
          "Learn basic command-line operations for efficient system administration.",
      },
    ],
    resources: {
      resource1: "Linux Documentation",
      resource2: "Ubuntu Official Documentation",
    },
    icon: <FaLinux />,
  },
  {
    title: "MacOS",
    subtitle: "Operating System",
    content:
      "The operating system designed and built exclusively for Apple's Macintosh computers.",
    details: {
      description: `macOS is the operating system designed and built exclusively for Apple's Macintosh computers.`,
      features: [
        "User-friendly interface.",
        "Seamless integration with Apple ecosystem.",
        "Unix-based system with a graphical interface.",
        "App Store for software distribution.",
        "High-quality multimedia capabilities.",
      ],
      useCases: [
        "Graphic design and multimedia production.",
        "Software development with Xcode.",
        "Content creation.",
        "General computing tasks.",
      ],
    },
    tips: [
      {
        title: "Tip 1",
        description:
          "Take advantage of the macOS interface for seamless user experience.",
      },
      {
        title: "Tip 2",
        description:
          "Explore the App Store for a variety of software and tools.",
      },
    ],
    resources: {
      resource1: "MacOS Documentation",
      resource2: "Mac App Store",
    },
    icon: <FaApple />,
  },
  {
    title: "VS Code",
    subtitle: "Code Editor",
    content:
      "A free source-code editor that is lightweight yet powerful and highly customizable.",
    details: {
      description: `Visual Studio Code (VS Code) is a free source-code editor that is lightweight yet powerful and highly customizable.`,
      features: [
        "Intelligent code completion.",
        "Built-in Git version control.",
        "Extensive extensions marketplace.",
        "Multi-language support.",
        "Integrated terminal for command-line access.",
      ],
      useCases: [
        "Coding, debugging, and version control.",
        "Support for a wide range of programming languages.",
        "Customization with themes and extensions.",
      ],
    },
    tips: [
      {
        title: "Tip 1",
        description:
          "Install useful extensions for enhanced productivity and language support.",
      },
      {
        title: "Tip 2",
        description:
          "Customize settings and keybindings to fit your coding preferences.",
      },
    ],
    resources: {
      resource1: "VS Code Documentation",
      resource2: "VS Code Extensions Marketplace",
    },
    icon: <FaCode />,
  },
  {
    title: "Atom",
    subtitle: "Text Editor",
    content:
      "A text editor that's modern, approachable, yet hackable to the core—a tool you can customize to do anything.",
    details: {
      description: `Atom is a text editor that's modern, approachable, yet hackable to the core—a tool you can customize to do anything.`,
      features: [
        "Built-in package manager.",
        "Smart autocompletion.",
        "Cross-platform support.",
        "Highly customizable.",
        "Built with web technologies (HTML, CSS, JavaScript).",
      ],
      useCases: [
        "Coding and text editing.",
        "Extending functionality through packages.",
        "Community-driven development.",
      ],
    },
    tips: [
      {
        title: "Tip 1",
        description:
          "Explore and install packages to extend Atom's functionality.",
      },
      {
        title: "Tip 2",
        description:
          "Customize themes and styles for a personalized coding environment.",
      },
    ],
    resources: {
      resource1: "Atom Documentation",
      resource2: "Atom Packages",
    },
    icon: <FaAtom />,
  },
  {
    title: "GraphQL",
    subtitle: "Query Language",
    content:
      "A query language for APIs and a runtime for executing those queries with your existing data.",
    details: {
      description: `GraphQL is a query language for APIs and a runtime for executing those queries with your existing data.`,
      features: [
        "Efficient and precise data retrieval.",
        "Single request for multiple resources.",
        "Strongly-typed schema for APIs.",
        "Introspection for self-documenting APIs.",
        "Real-time data with subscriptions.",
      ],
      useCases: [
        "API development with a focus on efficient data fetching.",
        "Building flexible and scalable APIs.",
        "Replacing or complementing REST APIs.",
      ],
    },
    tips: [
      {
        title: "Tip 1",
        description:
          "Understand GraphQL schemas and queries for effective API development.",
      },
      {
        title: "Tip 2",
        description:
          "Explore GraphQL subscriptions for real-time data fetching.",
      },
    ],
    resources: {
      resource1: "GraphQL Documentation",
      resource2: "How to GraphQL",
    },
    icon: <FaAtom />,
  },
  {
    title: "SASS",
    subtitle: "CSS Preprocessor",
    content:
      "A scripting language that is interpreted or compiled into Cascading Style Sheets (CSS).",
    details: {
      description: `SASS is a scripting language that is interpreted or compiled into Cascading Style Sheets (CSS).`,
      features: [
        "Variables and mixins for reusability.",
        "Nested syntax for improved readability.",
        "Functions and control directives.",
        "Modular and maintainable code.",
        "Compatible with CSS.",
      ],
      useCases: [
        "Enhancing CSS with variables and reusable components.",
        "Streamlining the styling process.",
        "Managing large and complex stylesheets.",
      ],
    },
    tips: [
      {
        title: "Tip 1",
        description:
          "Organize your stylesheets using SASS features like variables and mixins.",
      },
      {
        title: "Tip 2",
        description:
          "Leverage SASS functions for more dynamic and maintainable styles.",
      },
    ],
    resources: {
      resource1: "SASS Documentation",
      resource2: "SASS Guidelines",
    },
    icon: <FaSass />,
  },
  {
    title: "Webpack",
    subtitle: "Module Bundler",
    content: "A static module bundler for modern JavaScript applications.",
    details: {
      description: `Webpack is a static module bundler for modern JavaScript applications.`,
      features: [
        "Module bundling for JavaScript, CSS, and more.",
        "Code splitting for optimized loading.",
        "Built-in development server.",
        "Extensible through plugins.",
        "Hot module replacement for live reloading.",
      ],
      useCases: [
        "Bundle and optimize assets for web applications.",
        "Manage dependencies and assets.",
        "Enable efficient code splitting.",
      ],
    },
    tips: [
      {
        title: "Tip 1",
        description:
          "Utilize code splitting for optimized loading of resources.",
      },
      {
        title: "Tip 2",
        description:
          "Explore webpack plugins for additional functionalities in your build process.",
      },
    ],
    resources: {
      resource1: "Webpack Documentation",
      resource2: "SurviveJS - Webpack Guide",
    },
    icon: <FaAtom />,
  },
  {
    title: "Jest",
    subtitle: "JavaScript Testing Framework",
    content:
      "A delightful JavaScript Testing Framework with a focus on simplicity.",
    details: {
      description: `Jest is a delightful JavaScript Testing Framework with a focus on simplicity.`,
      features: [
        "Fast and zero-config setup.",
        "Snapshot testing for UI components.",
        "Mocking capabilities for functions and modules.",
        "Parallel test execution for speed.",
        "Comprehensive test suite coverage reports.",
      ],
      useCases: [
        "Unit and integration testing for JavaScript applications.",
        "Ensuring code reliability with automated tests.",
        "React and JavaScript project testing.",
      ],
    },
    tips: [
      {
        title: "Tip 1",
        description:
          "Write clear and concise test cases for better maintainability.",
      },
      {
        title: "Tip 2",
        description: "Explore Jest snapshots for UI component testing.",
      },
    ],
    resources: {
      resource1: "Jest Documentation",
      resource2: "Testing JavaScript with Jest",
    },
    icon: <FaAtom />,
  },
  {
    title: "Redux",
    subtitle: "State Management",
    content: "A predictable state container for JavaScript apps.",
    details: {
      description: `Redux is a predictable state container for JavaScript apps.`,
      features: [
        "Centralized state management.",
        "Predictable state changes with actions.",
        "Middleware for side effects.",
        "DevTools for debugging.",
        "Community-supported ecosystem.",
      ],
      useCases: [
        "Managing complex state in large applications.",
        "Predictable state changes in response to actions.",
        "Time-travel debugging with DevTools.",
      ],
    },
    tips: [
      {
        title: "Tip 1",
        description:
          "Understand the principles of Redux, including actions and reducers.",
      },
      {
        title: "Tip 2",
        description:
          "Explore middleware for handling asynchronous actions in Redux.",
      },
    ],
    resources: {
      resource1: "Redux Documentation",
      resource2: "Redux Essentials",
    },
    icon: <FaAtom />,
  },
  {
    title: "Firebase",
    subtitle: "Backend as a Service (BaaS)",
    content:
      "A mobile and web application development platform that helps you build, improve, and grow your app.",
    details: {
      description: `Firebase is a mobile and web application development platform that helps you build, improve, and grow your app.`,
      features: [
        "Real-time database.",
        "Authentication and authorization.",
        "Cloud Functions for serverless computing.",
        "Hosting and file storage.",
        "Analytics and performance monitoring.",
      ],
      useCases: [
        "Rapid development of mobile and web applications.",
        "Authentication and user management.",
        "Real-time data synchronization.",
      ],
    },
    tips: [
      {
        title: "Tip 1",
        description:
          "Leverage Firebase Realtime Database for dynamic and responsive applications.",
      },
      {
        title: "Tip 2",
        description:
          "Explore Firebase Authentication for user management in your app.",
      },
    ],
    resources: {
      resource1: "Firebase Documentation",
      resource2: "Firebase Authentication",
    },
    icon: <FaAtom />,
  },
  {
    title: "RESTful API",
    subtitle: "API Design",
    content: "An architectural style for designing networked applications.",
    details: {
      description: `RESTful API (Representational State Transfer) is an architectural style for designing networked applications.`,
      features: [
        "Stateless communication between client and server.",
        "Resource-based interactions with CRUD operations.",
        "Uniform interface constraints.",
        "Scalability and simplicity.",
        "Widely adopted in web development.",
      ],
      useCases: [
        "Building scalable and interoperable web services.",
        "Standardized communication in distributed systems.",
        "Integration with various client applications.",
      ],
    },
    tips: [
      {
        title: "Tip 1",
        description:
          "Follow REST principles for designing clear and scalable APIs.",
      },
      {
        title: "Tip 2",
        description:
          "Use tools like Swagger for API documentation and testing.",
      },
    ],
    resources: {
      resource1: "RESTful API Design Guide",
      resource2: "Swagger Documentation",
    },
    icon: <FaAtom />,
  },
  {
    title: "Docker",
    subtitle: "Containerization",
    content:
      "A platform for automating the deployment, scaling, and management of applications.",
    details: {
      description: `Docker is a platform for automating the deployment, scaling, and management of applications.`,
      features: [
        "Containerization for applications and dependencies.",
        "Isolation and consistency across environments.",
        "Efficient resource utilization.",
        "Docker Compose for multi-container applications.",
        "Integration with orchestration tools like Kubernetes.",
      ],
      useCases: [
        "Containerizing applications for portability.",
        "Simplifying deployment and scaling processes.",
        "Consistent development and production environments.",
      ],
    },
    tips: [
      {
        title: "Tip 1",
        description:
          "Containerize your applications for consistent deployment across environments.",
      },
      {
        title: "Tip 2",
        description:
          "Explore Docker Compose for managing multi-container applications.",
      },
    ],
    resources: {
      resource1: "Docker Documentation",
      resource2: "Docker Compose Documentation",
    },
    icon: <FaDocker />,
  },
];

const Banner = () => (
  <div className="relative bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 h-64 flex items-center justify-center text-white">
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="text-center z-10">
      <h1 className="text-4xl font-extrabold tracking-tight mb-2">
        Welcome to Dharma's Developer Blog
      </h1>
      <p className="text-lg">
        Exploring the world of software engineering and innovation.
      </p>
    </div>
  </div>
);

const Card = ({ title, subtitle, content, icon, index }) => (
  <div className="bg-violet-700 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
    <Link
      key={index}
      to={`/blog/${index}`}
      className="flex flex-col items-center text-center"
    >
      <div className="text-4xl text-white mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      {subtitle && <p className="text-gray-300 mb-2">{subtitle}</p>}
      <p className="text-gray-300">{content}</p>
    </Link>
  </div>
);

const FancyIcon = ({ icon, label }) => (
  <div className="flex items-center justify-center">
    <div className="bg-white rounded-full p-4">
      <FontAwesomeIcon icon={icon} size="2x" className="text-blue-500" />
    </div>
    <p className="ml-2">{label}</p>
  </div>
);

const Blogs = () => {
  const [itemsToShow, setItemsToShow] = useState(8);
  const { index } = useParams();
  const handleShowMore = () => {
    // Increase the number of items to show
    setItemsToShow((prevItems) => prevItems + 8); // You can adjust the increment as needed
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <header>
        <Banner />
      </header>
      <main className="container mx-auto p-4">
        <section className="mb-8">
         
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {technicalSkills.slice(0, itemsToShow).map((skill, index) => (
              <Card
                className="w-full h-full"
                key={index}
                title={skill.title}
                subtitle={skill.subtitle}
                content={skill.content}
                icon={skill.icon}
                index={index}
              />
            ))}
          </div>
        </section>

        {itemsToShow < technicalSkills.length && (
          <div className="flex justify-center">
            <button
              onClick={handleShowMore}
              className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              <FaArrowDown size={30} />
            </button>
          </div>
        )}
      </main>
    </motion.div>
  );
};

export default Blogs;
