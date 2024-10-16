// Website related settings
const settings = {
  isSplash: false,
};

//SEO Related settings
const seo = {
  title: "Akhil Devireddy",
  description:
    "Java Full Stack Developer focused on building scalable web applications, cloud-based solutions, and optimizing backend architectures.",
  og: {
    title: "Akhil Devireddy Portfolio",
    type: "website",
    url: "http://akhildevireddy.com/",
  },
};

// Home Page
const greeting = {
  title: "Akhil Devireddy",
  logo_name: "AkhilDevireddy",
  subTitle:
    "Skilled Full Stack Developer with expertise in Java, Spring Boot, AWS, and scalable cloud-based solutions.",
  resumeLink:
    "https://drive.google.com/file/d/your-resume-link", // Provide your actual resume link here
  githubProfile: "https://github.com/Akhil188",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Akhil188",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/akhil-devireddy-914795294/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:akhil889764@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

// Skills Section
const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive front end using Angular, React, and JavaScript frameworks",
        "⚡ Developing RESTful APIs and backend services using Java, Spring Boot, Hibernate, and microservices",
        "⚡ Proficient in integrating AWS (RDS, Lambda, S3) and Azure cloud solutions with back-end systems",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: { color: "#E34F26" },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: { color: "#1572B6" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { color: "#F7DF1E" },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: { color: "#007ACC" },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: { color: "#DD0031" },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos-java",
          style: { color: "#007396" },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:spring",
          style: { color: "#6DB33F" },
        },
        {
          skillName: "Hibernate",
          fontAwesomeClassname: "simple-icons:hibernate",
          style: { color: "#59666C" },
        },
        {
          skillName: "Node.js",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: { color: "#339933" },
        },
      ],
    },
    {
      title: "Cloud Infrastructure & DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experienced in AWS (RDS, Lambda, EC2, S3) and Azure for deploying scalable applications",
        "⚡ Expertise in managing microservices with Docker, Kubernetes, and Jenkins",
        "⚡ Implementing CI/CD pipelines using Jenkins, Maven, and AWS CodePipeline",
        "⚡ Proficient in cloud security and scaling cloud-based solutions",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: { color: "#FF9900" },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: { color: "#0089D6" },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#1488C6" },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: { color: "#326CE5" },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "simple-icons:jenkins",
          style: { color: "#D24939" },
        },
        {
          skillName: "Maven",
          fontAwesomeClassname: "simple-icons:apachemaven",
          style: { color: "#C71A36" },
        },
      ],
    },
    {
      title: "Database Management & Testing",
      fileName: "DataManagementImg",
      skills: [
        "⚡ Expertise in relational databases like PostgreSQL, MySQL, and AWS Aurora",
        "⚡ ORM experience with Hibernate for efficient database interaction",
        "⚡ Skilled in testing frameworks like JUnit and Mockito for Java-based applications",
      ],
      softwareSkills: [
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: { color: "#336791" },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: { color: "#4479A1" },
        },
        {
          skillName: "Hibernate",
          fontAwesomeClassname: "simple-icons:hibernate",
          style: { color: "#59666C" },
        },
        {
          skillName: "JUnit",
          fontAwesomeClassname: "simple-icons:junit5",
          style: { color: "#25A162" },
        },
        {
          skillName: "Mockito",
          fontAwesomeClassname: "simple-icons:mockito",
          style: { color: "#39A854" },
        },
      ],
    },
    {
      title: "Data Science & Analytics",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Expertise in data processing using Python, Pandas, and NumPy",
        "⚡ Proficient in data visualization using Power BI, Tableau, and Matplotlib",
        "⚡ Experienced in building machine learning models using Scikit-learn and TensorFlow",
        "⚡ Skilled in statistical analysis and predictive modeling using R and Databricks",
        "⚡ Deploying machine learning models on cloud platforms (AWS, Azure)",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: { backgroundColor: "transparent", color: "#3776AB" },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "simple-icons:r",
          style: { color: "#276DC3" },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: { color: "#150458" },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: { color: "#013243" },
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "logos-tensorflow",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "Scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: { color: "#F7931E" },
        },
        {
          skillName: "Matplotlib",
          fontAwesomeClassname: "simple-icons:matplotlib",
          style: { color: "#11557C" },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: { color: "#F2C811" },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "simple-icons:tableau",
          style: { color: "#E97627" },
        },
        {
          skillName: "Databricks",
          fontAwesomeClassname: "simple-icons:databricks",
          style: { color: "#FF3621" },
        },
      ],
    },
  ],
};


// Certifications Section
const certifications = {
  certifications: [
    {
      title: "AWS Developer Associate",
      subtitle: "Expected Oct 2024",
      logo_path: "aws_logo.png",
      certificate_link: "", // Add certificate link when available
      alt_name: "AWS",
      color_code: "#FF9900",
    },
    {
      title: "Software AG Certified webMethods Integration Associate",
      subtitle: "Certified via Credly",
      logo_path: "softwareag_logo.png", // Add the logo for Software AG
      certificate_link: "https://www.credly.com/badges/710d8561-0554-47cc-bc4f-a221f2d18308/public_url", // Add your actual certification link from Credly
      alt_name: "Software AG",
      color_code: "#0089D6",
    },
    {
      title: "Palantir Foundry Data Engineer Associate",
      subtitle: "Aug 2023 - Dec 2023",
      logo_path: "palantir_logo.png",
      certificate_link: "https://verify.skilljar.com/c/sbpqrg2vkjcn",
      alt_name: "Palantir Foundry",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship, and Volunteership",
  description:
    "I have worked as a Full Stack Developer and Data Scientist in various organizations, contributing to cloud-based solutions, scalable web applications, and data-driven platforms.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Full Stack Developer",
          company: "Keyologic",
          company_url: "https://www.keyologic.com",
          logo_path: "keyologic_logo.png",
          duration: "May 2021 - Aug 2022",
          location: "India",
          description: `
            ⚡ Developed RESTful APIs and backend services using Java Spring Boot and Hibernate, improving system performance by 20%.
            ⚡ Built responsive UIs with Angular and React, increasing user engagement by 30%.
            ⚡ Integrated AWS cloud solutions (RDS, S3, Lambda) for backend processing, ensuring scalability and efficient storage management.
            ⚡ Automated testing processes using JUnit and Mockito, achieving over 90% code coverage.
            ⚡ Automated CI/CD pipelines using Jenkins and AWS CodePipeline, reducing deployment times by 30%.
          `,
          color: "#fc1f20",
        },
      ],
    },
  ],
};
// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_photo.jpg", // Add your profile image here
    description:
      "Feel free to reach out to me on any of the platforms below. I am available on GitHub, LinkedIn, and via email.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Arlington, TX",
    locality: "Arlington",
    country: "USA",
    region: "Texas",
    postalCode: "76010",
    avatar_image_path: "address_image.svg", // Replace with an appropriate image
    location_map_link: "", // Add a Google Maps link if needed
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+1 (940) 842-9380", // Update with your number
  },
};
// Education Page
const degrees = {
  degrees: [
    {
      title: "University of Texas at Arlington",
      subtitle: "M.S. in Computer Science",
      logo_path: "uta_logo.png", // Replace with the actual university logo image path
      alt_name: "UTA",
      duration: "2022 - 2024",
      gpa: "GPA: 3.91",
      descriptions: [
        "⚡ Completed relevant coursework in Database Systems, Data Mining, Machine Learning, Software Engineering, Web Data Management, and Artificial Intelligence.",
        "⚡ Gained hands-on experience in cloud computing, full-stack development, and building scalable applications.",
        "⚡ Developed projects involving data science, deep learning, and RESTful APIs using AWS and Azure technologies.",
      ],
      website_link: "https://www.uta.edu/",
    },
    {
      title: "Velagapudi Ramakrishna Siddhartha Engineering College",
      subtitle: "B.Tech in Information Technology",
      logo_path: "vrsec_logo.png", // Replace with the actual logo image path
      alt_name: "VRSEC",
      duration: "2010 - 2014",
      gpa: "GPA: 8.95/10",
      descriptions: [
        "⚡ Specialized in information technology and built a strong foundation in programming, data structures, and databases.",
        "⚡ Worked on projects in web development and cloud technologies, gaining practical experience in real-world applications.",
        "⚡ Actively participated in coding competitions and hackathons.",
      ],
      website_link: "http://www.vrsiddhartha.ac.in/",
    },
  ],
};
// Projects Page Header
const projectsHeader = {
  title: "Projects",
  description:
    "A collection of projects ranging from cloud-based applications, API development, full-stack applications to machine learning models and data-driven solutions.",
  avatar_image_path: "projects_image.svg", // Ensure you have this image in the assets
};

// Projects Section
const projects = {
  data: [
    {
      id: "project1",
      name: "Bidrides",
      description: "A platform focused on enhancing ride-bidding experiences, developed with Angular and Django.",
      languages: [
        { name: "Angular", iconifyClass: "logos-angular" },
        { name: "Django", iconifyClass: "logos-django" },
      ],
      link: "https://github.com/Akhil188/bidrides", // Replace with the actual link
    },
    {
      id: "project2",
      name: "Smart Health",
      description: "A platform for managing healthcare appointments and patient information, developed using Laravel and React.",
      languages: [
        { name: "Laravel", iconifyClass: "logos-laravel" },
        { name: "React", iconifyClass: "logos-react" },
      ],
      link: "https://github.com/Akhil188/smart_health", // Replace with the actual link
    },
    {
      id: "project3",
      name: "Digital Asset Manager",
      description: "A secure platform for managing and protecting digital assets, developed using Angular and Spring Boot.",
      languages: [
        { name: "Angular", iconifyClass: "logos-angular" },
        { name: "Spring Boot", iconifyClass: "logos-spring" },
      ],
      link: "https://github.com/Akhil188/digital_asset_manager", // Replace with the actual link
    },
    {
      id: "project4",
      name: "Counseling Using SER",
      description: "A project analyzing and recognizing emotions from speech for counseling purposes using Python and TensorFlow.",
      languages: [
        { name: "Python", iconifyClass: "logos-python" },
        { name: "TensorFlow", iconifyClass: "logos-tensorflow" },
      ],
      link: "https://github.com/Akhil188/counselling-chatbot-SER-", // Replace with the actual link
    },
  ],
};



export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees, // If you're exporting degrees as well
  certifications,
  experience,
  projectsHeader,
  projects,
  contactPageData, // Add contactPageData here
};

