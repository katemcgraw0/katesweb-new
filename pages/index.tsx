// pages/index.js
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "@/components/NavBar";
import { useState } from 'react';
import IconWithText from "@/components/IconWithText";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});




export default function Home() {
  return (
    <div
      className={`
        bg-green-900 text-white h-screen flex flex-col
        ${geistSans.variable} ${geistMono.variable}
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
              KATHERINE McGRAW,
            </h1>
            <p className="lg:text-3xl md:text-2xl text-lg font-semibold">
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
              <IconWithText src="/icons/hobbies-icon.png" alt="Hobbies Icon" text="//My hobbies include hiking, listening to a lot of music, and slacklining." />
            </div>
          </div>
        </section>

        <section id="projects" className="h-screen bg-gradient-to-b from-green-900 to-green-950 text-white flex flex-col items-center">
          <h1 className="pt-28 pb-4 text-4xl">PROJECTS</h1>
          <div className="bg-orange-500 h-1 w-24"></div>
        </section>
      </main>
    </div>
  );
}
