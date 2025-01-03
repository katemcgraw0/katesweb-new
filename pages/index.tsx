// pages/index.js
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "@/components/NavBar";
import { useState } from 'react';
import IconWithText from "@/components/IconWithText";




export default function Home() {
  return (
    <div
      className={`
        bg-green-900 text-white h-screen flex flex-col
        
      `}
    >
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
            <p className="lg:text-3xl md:text-2xl text-lg ">
              SOFTWARE ENGINEER, FULL STACK DEVELOPER, BUILDER.
            </p>
          </div>
        </section>

        <section id="about" className="min-h-screen bg-gradient-to-b from-green-900 to-green-950 text-white flex flex-col items-center">
          <h1 className="pt-28 pb-4 text-4xl">ABOUT ME</h1>
          <div className="bg-orange-500 h-1 w-24"></div>
          <div className="px-24 py-12 lg:w-1/2 md:w-3/4">
            <p className="sm:text-2xl text-lg mb-4 ">
              Hover on the icons below to learn more about me!
            </p>
            <div className="">
              <IconWithText src="/icons/coding-icon.png" alt="Coding Icon" text="//I am an aspiring Software Engineer, previously interning at Walmart Global Tech working with the Data Ventures team. I am graduating in 2025 and searching for a post-grad job to pursue my passions!" />
              <IconWithText src="/icons/home-icon.png" alt="Home Icon" text="//I am from San Diego, CA-—born and raised." />
              <IconWithText src="/icons/school-icon.png" alt="School Icon" text="//I am studying CS at UMich. Go Blue!!!!" />
              <IconWithText src="/icons/teaching-icon.png" alt="Teacher Icon" text="//I am a TA for a CS Theory class,  <a href='https://eecs376.org/' target='_blank' rel='noopener noreferrer className ='font-blue' '>EECS 376</a>, and I love sharing my passion for learning with others." />
              <IconWithText src="/icons/hobbies-icon.png" alt="Hobbies Icon" text="//My hobbies include hiking, listening to a lot of music, slacklining, and sustainable fashion." />
            </div>
          </div>
        </section>

        <section id="projects" className="min-h-screen bg-gradient-to-b from-green-900 to-green-950 text-white flex flex-col items-center">
          <h1 className="pt-28 pb-4 text-4xl">PROJECTS</h1>
          <div className="bg-orange-500 h-1 w-24 mb-8"></div>

          <div className="sm:px-24 px-4 flex flex-col w-full ">
            <div className="flex flex-col w-full">
              <div className="flex w-full lg:p-8 lg:flex-row flex-col lg:items-start">
                <div className="lg:w-1/3 w-full flex-shrink-0 self-center">
                  <img
                    src="/tht0.png"
                    alt="Profile Photo"
                    className="rounded-xl w-full h-auto"
                  />
                </div>
                <div className="flex flex-col lg:px-8 lg:w-2/3 w-full mt-4 lg:mt-0">
                  <h1 className=" text-3xl lg:text-3xl">THETA TAU WEBSITE</h1>
                  <p className="font-gayathri text-sm md:text-md lg:text-lg">
                    A website I helped build to showcase my professional engineering fraternity. It serves to inform prospective members of our fraternity's values and purpose. Members can sign in using Google OAuth to access additional features such as viewing internal events, pledging progress, and other internal features. I got the opportunity to lead a team of developers in this project, and help them learn the basics of web dev. This was an extremely rewarding project as it was a simple way to give back to my fraternity. This is definitely the project that I am most proud of.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-orange-500 h-1 w-full self-center"></div>


            <div className="flex md:flex-row flex-col w-full  my-4">
              <div className="flex flex-col md:w-1/2 lg:w-1/3 w-full lg:px-8 md:pr-8 lg:py-8">
                <h1 className=" text-3xl lg:text-3xl">NETWORK FILE SERVER</h1>
                <p className="font-gayathri text-sm md:text-md lg:text-lg">
                  I developed a multi-threaded network file server that provides a hierarchical file system accessible to clients via network requests. The server supports creating, reading, writing, and deleting files or directories while enforcing access control based on ownership. I implemented socket-based communication and used Boost threads with reader/writer locks to handle concurrency safely and efficiently. The project emphasized fault tolerance, secure handling of untrusted client input, and maintaining file system consistency during crashes, giving me hands-on experience in systems programming, concurrency, and client-server architecture.
                </p>
              </div>
              <div className="bg-orange-500 md:h-full md:w-1 h-1 w-full "></div>

              <div className="flex flex-col md:w-1/2 lg:w-2/3 w-full lg:px-8 md:pl-8 py-8">
                <div className="flex flex-row w-full">
                  <div className="w-1/2">
                    <h1 className=" text-3xl lg:text-3xl">ask485</h1>
                    <p className="font-gayathri text-sm md:text-md lg:text-lg">
                    For my web systems class, my team and I developed a scalable search engine akin to Google. This project involved several key learning goals, including information retrieval concepts like text analysis using tf-idf, link analysis with PageRank, and parallel data processing using MapReduce. We built a segmented inverted index of web pages using MapReduce programs. This involved parsing, cleaning text, and calculating tf-idf scores. Our index server used a REST API that returns search results in JSON format. It loads inverted index segments, PageRank data, and stopwords into memory. Each server instance handles different index segments. For the search server, we created a user interface for querying the search engine. It aggregates results from multiple Index servers and displays the top 10 results. The UI includes a query input and a PageRank weight slider.
                    </p>
                  </div>
                  <div className="w-1/2  ">
                    <img
                      src="/tht0.png"
                      alt="Profile Photo"
                      className="rounded-xl w-full h-auto"
                    />
                  </div>

                </div>
              </div>
            </div>
            <div className="bg-orange-500 h-1 w-full self-center"></div>
            


            <div className="flex md:flex-row flex-col w-full  my-4">
            <div className="flex flex-col md:w-1/2 lg:w-2/3 w-full lg:px-8 md:pl-8 py-8">
                <div className="flex flex-row w-full">
                  <div className="w-5/12">
                    <h1 className=" text-3xl lg:text-3xl">Trendee.ai Frontend</h1>
                    <p className="font-gayathri text-sm md:text-md lg:text-lg">
                    Collaborated with Trendee.ai, a startup specializing in curating personalized feeds of TikTok videos for efficient content discovery by social media managers. My role centered on refining the application's front-end, where I translated the design from Figma into a seamless and user-friendly interface. This project was a unique experience for me as I navigated working with limited creative autonomy, implementing features precisely as depicted in Figma, and adapting to a predefined Tech Stack over which I had no control.
                    </p>
                  </div>
                  <div className="w-7/12">
                    <img
                      src="/tht0.png"
                      alt="Profile Photo"
                      className="rounded-xl w-full h-auto"
                    />
                  </div>

                </div>
              </div>
              <div className="bg-orange-500 md:h-full md:w-1 h-1 w-full "></div>
              <div className="flex flex-col md:w-1/2 lg:w-1/3 w-full lg:px-8 md:pr-8 lg:py-8">
                <h1 className=" text-3xl lg:text-3xl">Pager</h1>
                <p className="font-gayathri text-sm md:text-md lg:text-lg">
                For my advanced operating systems class, I designed and implemented a memory manager, or "pager," to manage virtual memory for application processes. This pager handles critical functions such as memory allocation, process switching, and page fault handling by maintaining virtual memory backed by swap space or files. The system uses a single-level page table and simulates memory management hardware, enabling complex memory operations like copy-on-write and eviction with a second-chance FIFO algorithm. This project emphasized efficient resource use and robust fault handling, and I developed extensive test cases to verify the pager’s functionality and performance.
                </p>
              </div>



            </div>



            <div className="bg-orange-500 h-1 w-full self-center"></div>

            <div className="flex flex-col w-full">
              <div className="flex w-full lg:p-8 lg:flex-row flex-col lg:items-start">
                <div className="lg:w-1/3 w-full flex-shrink-0 self-center">
                  <img
                    src="/tht0.png"
                    alt="Profile Photo"
                    className="rounded-xl w-full h-auto"
                  />
                </div>
                <div className="flex flex-col lg:px-8 lg:w-2/3 w-full mt-4 lg:mt-0">
                  <h1 className=" text-3xl lg:text-3xl">Zodiacify</h1>
                  <p className="font-gayathri text-sm md:text-md lg:text-lg">
                  A website I built that uses the Spotify API to access users' data and uses the OpenAI API to predict their zodiac sign based on this data. I also implemented features to display users' favorite artists and to give them song and artist recommendations. This was my first personal project, and I learned a lot about web dev and options for choosing my tech stack. This project was really fun for me because it engaged a lot of my friends in what I was working on and I got a lot of positive feedback:)
                  </p>
                </div>
              </div>
            </div>
          </div>



        </section>
      </main>
    </div>
  );
}
