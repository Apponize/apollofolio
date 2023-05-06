/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Apollo Nizeyimana",
  title: "Hi all, I'm Apollo Nizeyimana",
  subTitle: emoji(
    "A passionate Full Stack Mobile Apps and Enterprise Web Developper; 🚀 having an experience of building Web and Mobile applications with C# / JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/10DZCDpdi7uAJNgL4bFFvj1VZdqW9RvHU/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Apponize",
  linkedin: "https://www.linkedin.com/in/appolinaire-nizeyimana-eit-80b7a1143?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BghnsZ%2B4xRXWNcyL%2BO2p6tw%3D%3D",
  gmail: "mailto:apponize@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Full stack Mobile Apps and Enterprise Web Developper. I am passionate about exploring various technology stacks",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front End / User Interfaces and Back End for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
      },
      
      {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
      },
      
      {
      skillName: "SQLite",
      fontAwesomeClassname: "fas fa-database"
      }
      
      
      
      
      
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Trios College",
      logo: require("./assets/images/TriosLogo.png"),
      subHeader: "Mobile Apps and Enterprise Web Developer",
      duration: "Expected date of graduation: October 2023",
      desc: "Completed several projects of Back End and Front End Development.",
      website: "https://triosdevelopers.com/~A.Nizeyimana/",
      descBullets: [
        "Developed and delivered multiple projects involving both front-end and back-end web development.",
"Worked on a range of development tasks, including server-side scripting, database design, and user interface implementation.",
"Demonstrated proficiency in programming languages and frameworks commonly used in web development, such as JavaScript, HTML, CSS, and React.",
"Developed and deployed a range of mobile apps, including a simple chat application.",
      ],
      
    },
    {
      schoolName: "Conestoga College",
      logo: require("./assets/images/ConestogaLogo.png"),
      subHeader: "Advanced Diploma in Automated Manufacturing - Mechanical Engineering",
      duration: "September 2017 - August 2020",
      desc: "Ranked top 10% in the program.",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
    ,
    {
      schoolName: "Addis Ababa University",
      logo: require("./assets/images/AAULogo.jpeg"),
      subHeader: "Master of Science in Industrial Technology",
      duration: "September 2016 - March 2017",
      desc: "Ranked top 10% in the program.",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
    ,
    {
      schoolName: "Debre Zeit Engineering University",
      logo: require("./assets/images/DECLogo.jpeg"),
      subHeader: "Bachelor of Technology in Manufacturing Engineering",
      duration: "September 2011 - June 2015",
      desc: "Ranked number 1 in the program and received an outstanding student award.",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "85%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Product and Process Engineer / CAM Programmer",
      company: "Lubecore International Inc.",
      companylogo: require("./assets/images/LubecoreLogo.png"),
      date: "April 2018 – Present",
      desc: "As a Product and Process Engineer / CAM Programmer at Lubecore International Inc., I leveraged my expertise in CAD/CAM software and engineering principles to design and optimize manufacturing processes. I collaborated with cross-functional teams to develop innovative solutions and drive continuous improvement, resulting in cost savings and increased efficiency.",
      descBullets: [
        "Created and optimized CNC programs using CAM software to streamline the manufacturing process and increase efficiency.",
        "Worked closely with cross-functional teams to develop and implement design changes, resulting in cost savings and improved product quality.",
        "Conducted time studies and implemented lean manufacturing principles to reduce waste and improve production throughput.",
        "Developed and maintained process documentation, including work instructions and standard operating procedures, to ensure consistent quality and compliance with regulatory requirements."
      ]
    },
    {
      role: "Founder and CEO",
      company: "Mechamorphys Systems Inc.",
      companylogo: require("./assets/images/MechamorphysLogo.JPG"),
      date: "January 2020 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "IT Support Specialist",
      company: "LiquiLinx",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2020 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME PERSONAL PROJECTS AND COMPANY THAT I HELPED TO CREATE A WEBSITE",
  projects: [
    {
      image: require("./assets/images/LubecoreLogo.png"),
      projectName: "Digital Transformation ",
      projectDesc: "Creating an outstanding online presence through Website and Social Media",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://lubecore.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/TriosLogo.png"),
      projectName: "Mob Apps & Entps Web Dev.",
      projectDesc: "Learning through Projects",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://triosdevelopers.com/~A.Nizeyimana/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Contact Me 📞",
  subtitle:
  "Discuss a project or just want to say hi? My Inbox is open for all.",
  Phone_number: "+13437776950",
  email_address: "apponize@gmail.com",
  openForOpportunities: "Yes"
,
display: true
};


// Twitter Section

const twitterDetails = {
  userName: "Apponize2", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
