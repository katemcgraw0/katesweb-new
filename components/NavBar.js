import Image from "next/image";


export default function NavBar() {
    return (
      <header className="fixed top-0 w-full bg-green-800 text-white z-50">
        <div className="flex items-center justify-between py-4 lg:px-36 md:px-24 px-12">
          <div className="h-14 w-auto">
            <Image
              src="/me.jpeg"
              alt="Profile Photo"
              className="rounded-full h-full"
              width={0}          
              height={0}          
              sizes="100vw"      
              style={{ 
                width: "auto", 
                height: "100%" 
              }}
            />
          </div>
          <nav>
            <ul className="flex space-x-4 font-bold text-lg gasoek-one-regular">
            <a href="#about">ABOUT</a>
            <a href="#projects">PROJECTS</a>
            </ul>
          </nav>
        </div>
          <div className="relative">
          <div className="absolute bottom-0 left-0 w-full h-[4px] bg-orange-500" />
        </div>
      </header>
    );
  }
  