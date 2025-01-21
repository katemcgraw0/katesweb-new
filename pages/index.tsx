// pages/index.tsx
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useState } from "react";
import IconWithText from "@/components/IconWithText";
import RotatingImages from "@/components/RotatingImages";
import ProjectCard from "@/components/ProjectCard";
import { FC, ReactElement } from "react";
import { SiTailwindcss, SiNextdotjs, SiSqlite, SiCplusplus, SiNetlify, SiJinja,SiApachehadoop,SiFlask, SiTypescript } from "react-icons/si"; // Import additional icons
import { FaAws, FaReact, FaNodeJs, FaPython, FaFigma} from "react-icons/fa";
import { RiSupabaseFill, RiJavascriptFill } from "react-icons/ri"

// Define the structure of a Link
interface Link {
  href: string;
  text: string;
}

interface Project {
  imageSrc?: string;
  title: string;
  description: string;
  technologies: ReactElement[]; // Updated to array of ReactNode for icons
  links?: Link[];
  customComponent?: ReactElement;
}

const Home: FC = () => {
  const projects: Project[] = [
    {
      customComponent: <RotatingImages />,
      title: "Theta Tau Website",
      description: `A website I helped build to showcase my professional engineering fraternity. It serves to inform prospective members of our fraternity's values and purpose. Members can sign in using Google OAuth to access additional features such as viewing internal events, pledging progress, and other internal features. I got the opportunity to lead a team of developers in this project, and help them learn the basics of web dev. This was an extremely rewarding project as it was a simple way to give back to my fraternity. This is definitely the project that I am most proud of.`,
      technologies: [
        <FaReact key="react" />,
        <SiNextdotjs key="nextjs" />,
        <SiTailwindcss key="tailwind" />,
        <FaNodeJs key="nodejs" />,
        <SiNetlify key="netlify" />,
        <RiSupabaseFill key="supabase" />,
      ],
      links: [
        { href: "https://thetatau-umich.org/", text: "View Live" },
        {
          href: "https://github.com/thetatauthetagamma/THT-Website",
          text: "Github Repo",
        },
      ],
    },
    {
      imageSrc: "/Insta485.png",
      title: "Insta485",
      description: `I created a full-stack mock instagram for my web dev class! On the front end, I used React to ensure seamless and responsive client-side interactions, and on the server side, I implemented custom REST API enpoints, which used Flask to access my SQLite database. SQLite allowed the application to have the ability to handle real-time user interactions, including account creation, post publication, commenting functionality, an infinite scroll feature. This was the first time that I manually implemented security measures such as password salting and hashing techniques to safeguard passwords stored within the SQLite database, as previously I had used Google OAuth or other secure login tools to avoid writing vulnerable code. I didn't put as much work into the front-end of this project, as I was more focused on learning new back-end technologies, but I am excited to use these new technologies in my projects moving fowards!`,
      technologies: [
        <FaReact key="react" />,
        <RiJavascriptFill key="js" />,
        <FaPython key="python" />,
        <SiFlask key="flask"/>,
        <SiJinja key="jinja" />,
        <SiSqlite key = "sql"/>,
        <FaAws key="aws" />,
      ],
    },
    {
      
      imageSrc: "/pager.png",
      title: "Pager",
      description: `For my advanced operating systems class, I designed and implemented a memory manager, or "pager," to manage virtual memory for application processes. This pager handles critical functions such as memory allocation, process switching, and page fault handling by maintaining virtual memory backed by swap space or files. The system uses a single-level page table and simulates memory management hardware, enabling complex memory operations like copy-on-write and eviction with a second-chance FIFO algorithm. This project emphasized efficient resource use and robust fault handling, and I developed extensive test cases to verify the pager’s functionality and performance.`,
      technologies: [
        <SiCplusplus key="cplusplus" />,
        
      ],
    },
    {
      imageSrc: "/fileserver.png",
      title: "Network File Server",
      description: `I developed a multi-threaded network file server that provides a hierarchical file system accessible to clients via network requests. The server supports creating, reading, writing, and deleting files or directories while enforcing access control based on ownership. I implemented socket-based communication and used Boost threads with reader/writer locks to handle concurrency safely and efficiently. The project emphasized fault tolerance, secure handling of untrusted client input, and maintaining file system consistency during crashes, giving me hands-on experience in systems programming, concurrency, and client-server architecture.`,
      technologies: [
        <SiCplusplus key="cplusplus" />,

      ],
    },
    
   
    {
      imageSrc: "/mapreduce.png",
      title: "MapReduce",
      description: `I built a multi-worker and fault-tolerant MapReduce server in Python which can process user-submitted tasks. This project was a deep dive into distributed systems, aiming to implement a framework capable of executing MapReduce programs across a cluster of computers. Our framework comprised two main components: a Manager and multiple Workers. The Manager accepted user-submitted MapReduce jobs and distributed tasks among the Workers. Each Worker executed map and reduce tasks on the given data. The Manager ensured fault tolerance, task distribution, and system concurrency using OS-provided facilities such as threads and sockets for networking. One of the key challenges was ensuring efficient communication between the Manager and Workers while maintaining system robustness. We tackled this by implementing a reliable heartbeat mechanism, to monitor Worker status and reassign tasks if any Worker failed. To do this, we used UDP to send heartbeats and TCP for registration and ackowledgement communication. This experience not only strengthened my understanding of distributed systems but also enhanced my skills in Python programming, concurrency, and network communication`,
      technologies: [
        <FaPython key="python" />,
        <SiFlask key="flask"/>,
        <FaAws key="aws" />,
      ],
    },
   
    
    {
      imageSrc: "/ask485.png",
      title: "ask485",
      description: `For my web systems class, my team and I developed a scalable search engine akin to Google. This project involved several key learning goals, including information retrieval concepts like text analysis using tf-idf, link analysis with PageRank, and parallel data processing using MapReduce. We built a segmented inverted index of web pages using MapReduce programs. This involved parsing, cleaning text, and calculating tf-idf scores. Our index server used a REST API that returns search results in JSON format. It loads inverted index segments, PageRank data, and stopwords into memory. Each server instance handles different index segments. For the search server, we created a user interface for querying the search engine. It aggregates results from multiple Index servers and displays the top 10 results. The UI includes a query input and a PageRank weight slider.
      
    `,
    technologies: [
      <FaPython key="python" />,
      <SiApachehadoop key="hadoop" />,
      <SiFlask key="flask"/>,
      <SiSqlite key = "sql"/>,
      <FaAws key="aws" />,
    ],
    },
    {
      imageSrc: "/Zodiacify.png",
      title: "Zodiacify",
      description: `A website I built that uses the Spotify API to access users' data and uses the OpenAI API to predict their zodiac sign based on this data. I also implemented features to display users' favorite artists and to give them song and artist recommendations. This was my first personal project, and I learned a lot about web dev and options for choosing my tech stack. This project was really fun for me because it engaged a lot of my friends in what I was working on and I got a lot of positive feedback:)`,
      technologies: [
        <FaReact key="react" />,
        <SiNextdotjs key="nextjs" />,
        <SiTailwindcss key="tailwind" />,
        <FaNodeJs key="nodejs" />,
        <FaAws key="aws" />,
      ],
      links: [
        { href: "https://zodiacify.vercel.app/", text: "View Live" },
        { href: "https://github.com/katemcgraw0/Zodiacify", text: "Github Repo" },
      ],
    },
    {
      imageSrc: "/trendee2.png",
      title: "Trendee.ai Frontend",
      description: `Collaborated with Trendee.ai, a company specializing in curating personalized feeds of TikTok videos for efficient content discovery by social media managers. My role centered on refining the application's front-end, where I translated the design from Figma into a seamless and user-friendly interface. This project was a unique experience for me as I navigated working with limited creative autonomy, implementing features precisely as depicted in Figma, and adapting to a predefined Tech Stack over which I had no control.`,
      technologies: [
        <FaReact key="react" />,
        <SiTypescript key="ts"/>,
        <SiNextdotjs key="nextjs" />,
        <FaNodeJs key="nodejs" />,
        <FaFigma key="figma" />,
      ],
      links: [],
    },

  ];

  const projectRows: Project[][] = [];
  for (let i = 0; i < projects.length; i += 2) {
    projectRows.push(projects.slice(i, i + 2));
  }

  return (
    <div className={`bg-green-900 text-white h-screen flex flex-col`}>
      <NavBar />

      <main className="pt-20 flex-1 flex flex-col justify-center gasoek-one-regular">
        <section className="h-screen bg-gradient-to-b from-green-900 to-green-950 text-white flex flex-col justify-center">
          <div className="lg:px-36 md:px-24 px-12">
            <h2 className="lg:text-3xl md:text-2xl text-lg font-bold uppercase mb-2">
              HI, I’M
            </h2>
            <h1 className="lg:text-8xl md:text-6xl text-4xl mb-4">
              KATHERINE McGRAW
            </h1>
            <p className="lg:text-3xl md:text-2xl text-lg">
              SOFTWARE ENGINEER, FULL STACK DEVELOPER, BUILDER.
            </p>
          </div>
        </section>

        <section
          id="about"
          className="min-h-screen bg-gradient-to-b from-green-900 to-green-950 text-white flex flex-col items-center"
        >
          <h1 className="pt-28 pb-4 text-4xl">ABOUT ME</h1>
          <div className="bg-orange-500 h-1 w-24"></div>
          <div className="px-24 py-12 lg:w-1/2 md:w-3/4">
            <p className="sm:text-2xl text-lg mb-4">
              Hover on the icons below to learn more about me!
            </p>
            <div>
              <IconWithText
                src="/icons/coding-icon.png"
                alt="Coding Icon"
                text="//I am an aspiring Software Engineer, previously interning at Walmart Global Tech working with the Data Ventures team. I am graduating in 2025 and searching for a post-grad job to pursue my passions!"
              />
              <IconWithText
                src="/icons/home-icon.png"
                alt="Home Icon"
                text="//I am from San Diego, CA-—born and raised."
              />
              <IconWithText
                src="/icons/school-icon.png"
                alt="School Icon"
                text="//I am studying CS at UMich. Go Blue!!!!"
              />
              <IconWithText
                src="/icons/teaching-icon.png"
                alt="Teacher Icon"
                text="//I am a TA for a CS Theory class,  <a href='https://eecs376.org/' target='_blank' rel='noopener noreferrer className ='font-blue' '>EECS 376</a>, and I love sharing my passion for learning with others."
              />
              <IconWithText
                src="/icons/hobbies-icon.png"
                alt="Hobbies Icon"
                text="//My hobbies include hiking, listening to a lot of music, slacklining, and sustainable fashion."
              />
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="min-h-screen bg-gradient-to-b from-green-900 to-green-950 text-white flex flex-col items-center"
        >
          <h1 className="pt-28 pb-4 text-4xl">PROJECTS</h1>
          <div className="bg-orange-500 h-1 w-24 mb-8"></div>

          <div className="flex flex-col gap-8 mt-5 mb-5">
            {projectRows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex md:flex-row flex-col gap-8 justify-center"
              >
                {row.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
            ))}
          </div>
        </section>
        <Footer></Footer>
      </main>
    </div>
  );
};

export default Home;
