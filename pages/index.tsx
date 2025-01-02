import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

// Example font imports (optional)
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
      {/* Top Nav */}
      <header className="flex items-center justify-between p-4">
        {/* Profile Image */}
        <div className="w-12 h-12">
          {/* Replace "/profile.jpg" with your actual image path */}
          <Image
            src="/me.jpeg"
            alt="Profile Photo"
            width={48}
            height={48}
            className="rounded-full"
          />
        </div>

        {/* Nav Links */}
        <nav>
          <ul className="flex space-x-4 font-bold text-lg gasoek-one-regular">
            <li>ABOUT</li>
            <li>PROJECTS</li>
          </ul>
        </nav>
      </header>

      {/* Orange Divider */}
      <div className="h-[4px] bg-orange-500 mx-4" />

      {/* Main Content */}
      
      <main className="flex-1 flex flex-col justify-center  gasoek-one-regular">
      <section className="h-screen bg-gradient-to-b from-green-900 to-green-950 text-white flex flex-col justify-center">
        <div className="lg:px-36 md:px-24 px-12">
        <h2 className="lg:text-3xl md:text-2xl text-lg font-bold uppercase mb-2">
          HI, I’M
        </h2>
        <h1 className="lg:text-8xl md:text-6xl text-4xl mb-4">
          KATHERINE McGRAW,
        </h1>
        <p className="lg:text-3xl md:text-2xl text-lg font-semibold">
          SOFTWARE ENGINEER, FULL STACK DEVELOPER, ...
        </p>
        </div>
        </section>
        <section className="h-screen bg-gradient-to-b from-green-900 to-green-950 text-white flex flex-col items-center ">
        <h1 className = "pt-12 pb-4 text-4xl">ABOUT ME</h1>
        <div className="bg-orange-500 h-1 w-24"></div>
        </section>
        
        <section className="h-screen bg-gradient-to-b from-green-900 to-green-950 text-white flex flex-col items-center ">
        <h1 className = "pt-12 pb-4 text-4xl">PROJECTS</h1>
        <div className="bg-orange-500 h-1 w-24"></div>
        </section>
      </main>
    </div>
  );
}
