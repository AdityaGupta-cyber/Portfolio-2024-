// --- 🎨 Site Styling ---

// Colors (recommendation: choose a color suitable for dark and light modes)
// Should be inputted as a hex value. Use https://g.co/kgs/XCcs7T for choosing colors with hex.
const colors = {
    buttonColor: "#4305ba",
    LinkHighlightColor: "#4305ba"
}

// Transitions
const transitions = {
    active: true, // activate for all sections
    onlyLanding: false, // activate only for initial load of landing page
    showOnce: true, // transition only once
    thresholdOption: 0.2 // indicates at what percentage of the sections visibility the transition should start
}

// Splash Screen
const splashScreen = true // recommended: for best behavior after refresh

// --- 👋 Greeting Section ---
const greeting = {
    intro: "Hello 👋, my name is",
    name: "Aditya Gupta",
    message: "I'm a computer science student and an aspiring software engineer. Currently working as a Software developer at BNP Paribas,India and building projects.",
    basedLocation: "Mumbai,IN",
    resumeLink: "https://docs.google.com/document/d/1MEi5M-uwGGj5oA6XbfC14wZshd688jvRMvt9CHNFHEM/edit?usp=sharing", // recommended: google drive file share link (change to "anyone on the internet can view")
    logo: {
        link: "images/initials.png", // use relative path from  parent directory -> ex: images/image.ext
        custom: true // takes precedence over image logo and allows for custom HTML logo (./components/Navbar.vue)
    },
    portraitLink: 'images/portrait.jpg'
}

const socialMediaLinks = {
    github: "https://github.com/AdityaGupta-cyber",
    linkedin: "https://www.linkedin.com/in/aditya-gupta-7890911b9/",
} // to add any additional social media links check out the README.md or src/icons.js file

// --- 😎 About Section ---
const about = {
    autobiography: [
        "My name is Aditya and I'm a computer science student at Amity University,Mumbai. I am a budding but dynamic Software Developer with a proven ability in JavaScript, known for crafting innovative and reliable software solutions. Experienced in both front-end and back-end development, utilizing React and Node.js to architect dynamic and interactive applications. Adept at problem-solving and skilled in collaborating with diverse teams to achieve superior outcomes. Proficient in agile practices, always seeking opportunities for growth and advancement. Passionate about exploring new technologies and dedicated to delivering exceptional results. In my free time, I enjoy immersing myself in literature, capturing moments through photography, and staying active with sports. Excited to bring my JavaScript expertise to cutting-edge projects and make a meaningful impact in a fast-paced environment."
    ], // Separated items are paragraphs
    techStack: [
        "React.js",
        "Python",
        "JavaScript",
        "Nodejs",
        "MongoDB",
        "Java",
        "DevOps",
        "Django",
        "MySQL"
    ],
    photo1Link: "images/portrait1.jpeg",
    photo2Link: "images/portrait2.jpeg",
    photo3Link: "images/portrait3.jpeg"
}

// --- 🛡️ Experience Section ---
const experiences = [
    {
        position: "Software developer Intern",
        company: {
            name: "BNP Paribas",
            link: "https://group.bnpparibas/en/"
        },
        duration: "Jan 2024 - Present",
        bulletPoints: [
            "•Proactively monitored trading applications using DynaTrace and Geneos to identify and diagnose performance issues.",
            "•Reduced application downtime by 30% through efficient issue resolution, ensuring seamless trading operations.",           
            "•Developed advanced troubleshooting procedures to increase efficiency and knowledge sharing within the support team, strengthening capabilities for future challenges.",
            "•Conducted a comprehensive analysis of the JIRA workflow, identifying inefficiencies and areas for improvement.",
            "•Led the design and development of a cutting-edge JIRA tracking application in collaboration with interns.",
            "•Utilized technologies such as React.js, Django (Python), and MySQL to create a robust solution.",
            "•Implemented key functionalities including priority segregation, task automation, and real-time data visualization.",
            "•Achieved a 40% reduction in JIRA management time, increasing team efficiency and project success.",
            "•Demonstrated exceptional collaboration skills within an Agile development team, fostering a culture of continuous improvement.",

        ],
        hashtags: [
            "JavaScript",
            "Geneos",
            "DynaTrace",
            "React",
            "Django",
            "Python",
            "Tailwind",
            "Ansible"
        ]
    },
    {
        position: "Full Stack Developer Intern",
        company: {
            name: "LTI MINDTREE",
            link: "https://www.ltimindtree.com/"
        },
        duration: "Jun 2023 - Aug 2022",
        bulletPoints: [
            "•Designed and developed a recruitment app that reduced manual efforts of the HR team by 40%, enhancing candidate sourcing and hiring efficiency.",
            "•Implemented a CV generation system within the app, streamlining candidate information management and ensuring data accuracy for recruiters.",
            "• Introduced candidate search functionalities to quickly identify and shortlist qualified candidates, optimizing talent acquisition process and saving time."
        ],
        hashtags: [
            "React.js",
            "Node.js",
            "Github",
            "MongoDB",
            "MERN"
        ]
    },
    {
        position: "React Developer Intern",
        company: {
            name: "Upkarak Tech Solutions Pvt. Ltd.",
            link: "https://www.upkarak.com/"
        },
        duration: "Jul 2022 - Sep 2022",
        bulletPoints: [
            "•Collaborated with the development team to design, develop, and maintain high-quality web applications utilizing React.js using TypeScript.",
            "•Implemented clean, reusable, and efficient code adhering to industry best practices and standards.",
            "•A 30% decrease in bounce rates and a marked increase in user engagement and conversions."
        ],
        hashtags: [
            "React.js",
            "Node.js",
            "Microsoft Azure",
            "Agile",
            "Tailwind",
            "TypeScript"
        ]
    }
]

// --- 💻 Work Section ---
const works = [
    {
        projectName: "CodeBolt Code Editor",
        yearCompleted: "2023",
        description: "An online code execution platform facilitates the writing and execution of code in multiple programming languages within a unified environment. This enables developers to quickly test code snippets or experiment with different languages without needing to switch between multiple tools. The platform provides real-time output feedback, allowing developers to immediately observe the results of their code execution, aiding in debugging and iterative development processes. Such a platform serves as a versatile resource for learning, prototyping, and collaborative coding endeavors.",
        techStack: "React.js, RapidAPI",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/AdityaGupta-cyber/codebolt.git"
            },
            {
                label: "",
                type: "external",
                url: "https://youtube.com"
            }
        ],
        imageLink: "images/code_editor.png",
        alignLeft: false
    },
  
]

const archiveLink = "https://github.com/feifyKike?tab=repositories"

// --- 📭 Contact Section ---
// 2 Options available - Choose 1
const contact = {
    externalLink: {
        shortTitle: "Get in Touch",
        note: [
            "Currently seeking web and software development positions in 2024.",
            "Also looking to build a team for projects & startup ideas or just make professional connections."
        ], // paragraph breaks will be entered after each item,
        link: {
            email: "", // email takes precedance
            other: "https://forms.gle/C4kiN1tA4ZwZNjYB8"
        },
        responseTimeMessage: "...and I'll resopnd As Soon As Possible!  "
    },
    formEmbedLink: "" // inclusion of this link will take precedance
}

export default {
    colors,
    transitions,
    splashScreen,
    greeting,
    socialMediaLinks,
    about,
    experiences,
    works,
    archiveLink,
    contact
}