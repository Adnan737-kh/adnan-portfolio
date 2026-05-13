"use client";

import {
  Code2,
  Github,
  Instagram,
  Linkedin,
  Send,
  Twitter,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#2b2c33] text-white overflow-x-hidden scroll-smooth">
      {/* NAVBAR */}
{/* NAVBAR */}
<header className="w-full h-[70px] md:h-[76px] bg-[#2d2e35] border-b border-[#3a3b42] fixed top-0 z-50">
  <div className="max-w-[1400px] mx-auto h-full px-4 md:px-10 flex items-center justify-between">

    {/* LOGO */}
    <h1
      className="text-white text-[18px] sm:text-[24px] md:text-[34px] italic font-extralight tracking-[1px] whitespace-nowrap leading-none"
      style={{ fontFamily: "cursive" }}
    >
      <span>&lt;</span>
      <span className="mx-1">Adnan</span>
      <span>Malik</span>
      <span>&nbsp;/&gt;</span>
    </h1>

    {/* MENU (desktop only) */}
    <nav className="hidden md:flex items-center gap-10 lg:gap-14 text-[14px] lg:text-[15px] text-[#c8cad4] font-light">
      <a href="#about" className="hover:text-white duration-300">About</a>
      <a href="#tech" className="hover:text-white duration-300">Tech</a>
      <a href="#projects" className="hover:text-white duration-300">Projects</a>
      <a href="#experience" className="hover:text-white duration-300">Experience</a>
      <a href="#community" className="hover:text-white duration-300">Community</a>
      <a href="#blog" className="hover:text-white duration-300">Blog</a>
    </nav>

    <div className="w-[40px] md:w-[120px]" />
  </div>
</header>


{/* HERO SECTION */}
<section className="max-w-[1400px] mx-auto min-h-screen pt-[90px] px-4 md:px-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

  {/* LEFT */}
  <div className="text-center lg:text-left">

    <div className="inline-block px-5 py-2 rounded bg-[#67f0a8] text-black text-sm mb-8">
      Software Engineer
    </div>

    <h2 className="text-[38px] sm:text-[50px] md:text-[72px] leading-tight font-light tracking-[3px]">
      Adnan
    </h2>

    <h3 className="text-[40px] sm:text-[55px] md:text-[74px] font-bold -mt-2">
      Malik
    </h3>

    <div className="mt-6 flex items-center justify-center lg:justify-start gap-3 text-[18px] md:text-[28px]">
      <span className="text-[#67f0a8]">▶</span>
      <span className="border-r-2 border-[#67f0a8] pr-2 animate-pulse">
        Flutter Developer
      </span>
    </div>

    {/* SOCIAL */}
    <div className="mt-8 flex items-center justify-center lg:justify-start gap-3 md:gap-4 flex-wrap">

      <div className="w-14 md:w-20 h-[1px] bg-gray-500" />

      {[
         <a href="https://www.linkedin.com/in/adnan-malik-54b08a374" 
        target="_blank"><Linkedin size={16} />
        </a>,

        <a href="https://github.com/Adnan737-kh" 
        target="_blank"><Github size={16} />
        </a>,

         <a href="https://github.com/Adnan737-kh" 
        target="_blank"><Instagram size={16} />
        </a>,

            <a href="https://github.com/Adnan737-kh" 
        target="_blank"><Twitter size={16} />
        </a>,
      ].map((icon, i) => (
        <div
          key={i}
          className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#23242b] flex items-center justify-center text-[#67f0a8] hover:scale-110 duration-300 cursor-pointer"
        >
          {icon}
        </div>
      ))}
    </div>

  </div>

  {/* RIGHT */}
  <div className="relative flex justify-center items-center lg:items-end h-[350px] sm:h-[450px] md:h-[600px] lg:h-[700px]">

    {/* BACK CIRCLE */}
    <div className="absolute w-[250px] sm:w-[350px] md:w-[500px] lg:w-[620px] h-[250px] sm:h-[350px] md:h-[500px] lg:h-[620px] rounded-full bg-[#23242b] bottom-0"></div>

    {/* IMAGE */}
    <img
      src="/profile.jpg"
      alt="profile"
      className="relative z-10 h-[300px] sm:h-[400px] md:h-[550px] lg:h-[620px] object-contain"
      style={{
        mixBlendMode: "multiply",
        filter: "grayscale(100%) contrast(110%)",
      }}
    />

  </div>

</section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="max-w-[1400px] mx-auto min-h-screen px-10 py-24 flex items-center"
      >
        <div className="grid grid-cols-2 gap-16 items-center w-full">
          {/* Left */}
          <div>
            <p className="text-[#67f0a8] text-sm tracking-[3px] mb-3">
              ABOUT ME
            </p>

            <h2 className="text-5xl font-bold mb-8">
              Passionate Flutter Developer
            </h2>

            <p className="text-gray-300 text-lg leading-8">
              I am Adnan Malik, a passionate mobile app developer with strong
              experience in Flutter, Firebase, Java and UI/UX design.
              I build fast, modern and scalable mobile applications with
              premium interfaces.
            </p>

            <p className="text-gray-400 mt-6 leading-8">
              I have completed multiple real-world projects including
              eCommerce apps, service apps, admin panels and custom business
              solutions.
            </p>

        <a
  href="/Adnan Resume.pdf"
  download
  className="mt-10 inline-block px-8 py-3 bg-[#67f0a8] text-black rounded font-semibold hover:scale-105 duration-300"
>
  Download CV
</a>
          </div>

          {/* Right */}
          <div className="bg-[#23242b] rounded-3xl p-10 border border-[#3a3b42]">
            <h3 className="text-2xl font-semibold mb-8">My Skills</h3>

            <div className="space-y-5">
              {[
                "Flutter / Dart",
                "Firebase",
                "Java / Android",
                "REST APIs",
                "UI / UX Design",
                "State Management",
              ].map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-2">
                    <span>{skill}</span>
                    <span>95%</span>
                  </div>
                  <div className="w-full h-2 bg-[#2b2c33] rounded-full">
                    <div className="w-[95%] h-2 bg-[#67f0a8] rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

  
{/* PROJECT SECTION */}

<section
  id="projects"
  className="max-w-[1400px] mx-auto min-h-screen px-10 py-24"
>
  {/* Heading */}
  <div className="text-center mb-16">
    <p className="text-[#67f0a8] tracking-[3px] text-sm mb-3">
      MY WORK
    </p>

    <h2 className="text-5xl font-bold">Featured Projects</h2>

    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
      Some premium mobile apps and software solutions I built
      using Flutter, Firebase and modern technologies.
    </p>
  </div>

  {/* Cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      {
        title: "Property Management App",
        tech: "Flutter • Firebase • Maps",
        img: "/project1.jpg",
        link: "https://github.com/your-repo",
      },
      {
        title: "Service Booking App",
        tech: "Flutter • Provider • API",
        img: "/project2.jpg",
        link: "https://github.com/your-repo",
      },
      {
        title: "Ecommerce Mobile App",
        tech: "Flutter • Stripe • Admin",
        img: "/project3.jpg",
        link: "https://github.com/your-repo",
      },
      {
        title: "Tailor Booking System",
        tech: "Flutter • Firestore",
        img: "/project4.jpg",
        link: "https://github.com/your-repo",
      },
      {
        title: "Parking Management App",
        tech: "Flutter • Dashboard",
        img: "/project5.jpg",
        link: "https://github.com/Adnan737-kh/speed_park_app",
      },
      {
        title: "Currency Detector App",
        tech: "Flutter • AI • OCR",
        img: "/project6.jpg",
        link: "https://github.com/your-repo",
      },
    ].map((project, i) => (
      <div
        key={i}
        className="group bg-[#23242b] rounded-3xl overflow-hidden border border-[#3a3b42] hover:-translate-y-2 duration-300"
      >
        {/* Image */}
        <div className="h-[230px] overflow-hidden">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 duration-500 pointer-events-none"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-3">
            {project.title}
          </h3>

          <p className="text-gray-400 text-sm mb-5">
            {project.tech}
          </p>

          <div className="flex gap-3">
            <button className="px-5 py-2 rounded bg-[#67f0a8] text-black text-sm font-semibold hover:scale-105 duration-300">
              Live Demo
            </button>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded border border-[#67f0a8] text-[#67f0a8] text-sm hover:bg-[#67f0a8] hover:text-black duration-300 inline-block"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
{/* EXPERIENCE SECTION */}
<section
  id="experience"
  className="max-w-[1400px] mx-auto min-h-screen px-10 py-24"
>
  {/* Heading */}
  <div className="text-center mb-20">
    <p className="text-[#67f0a8] tracking-[3px] text-sm mb-3">
      MY JOURNEY
    </p>

    <h2 className="text-5xl font-bold">Work Experience</h2>

    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
      My professional experience building mobile apps, business
      solutions and premium user experiences.
    </p>
  </div>

  {/* Timeline */}
  <div className="relative max-w-5xl mx-auto">
    {/* Center Line */}
    <div className="absolute left-1/2 top-0 h-full w-[2px] bg-[#3a3b42] -translate-x-1/2"></div>

    {[
      {
       year: "2026 - Present",
       role: "Senior Flutter Developer",
       company: "The Propertier",
       desc: "Developing a full-scale property management platform with Flutter, featuring tenant and landlord modules, property listings, booking system, maintenance requests, real-time chat, admin dashboard, and integrated service marketplace where users can request plumbers, electricians, and other professionals through bidding and booking features.",
      },
      {
        year: "2023 - 2024",
        role: "Mobile App Developer",
        company: "Startup Projects",
        desc: "Developed booking apps, service platforms, ecommerce systems and real-time dashboards using Flutter.",
      },
      {
        year: "2022 - 2023",
        role: "Android Developer",
        company: "Java Projects",
        desc: "Created native Android apps with Java, Firebase authentication and custom business logic.",
      },
      {
        year: "2021 - 2022",
        role: "Junior Developer",
        company: "Learning & Practice",
        desc: "Focused on UI design, programming fundamentals, APIs, databases and real-world mobile app architecture.",
      },
    ].map((item, i) => (
      <div
        key={i}
        className={`relative grid grid-cols-2 gap-12 mb-16 ${
          i % 2 === 0 ? "" : ""
        }`}
      >
        {/* Left Side */}
        <div
          className={`${
            i % 2 === 0 ? "text-right pr-12" : "order-2 text-left pl-12"
          }`}
        >
          <p className="text-[#67f0a8] text-sm tracking-[2px] mb-2">
            {item.year}
          </p>

          <h3 className="text-2xl font-semibold">{item.role}</h3>

          <p className="text-gray-400 mt-2">{item.company}</p>

          <p className="text-gray-500 mt-4 leading-7 text-sm">
            {item.desc}
          </p>
        </div>

        {/* Empty Side */}
        <div className={`${i % 2 === 0 ? "" : "order-1"}`}></div>

        {/* Circle Dot */}
        <div className="absolute left-1/2 top-6 w-5 h-5 bg-[#67f0a8] rounded-full -translate-x-1/2 border-4 border-[#2b2c33]"></div>
      </div>
    ))}
  </div>
</section>

{/* GET IN TOUCH - PREMIUM VERSION */}

<section
  id="contact"
  className="max-w-[1200px] mx-auto px-6 md:px-10 py-28"
>
  {/* Heading */}
  <div className="text-center mb-16">
    <p className="text-[#67f0a8] tracking-[4px] text-sm mb-3">
      CONTACT
    </p>

    <h2 className="text-4xl md:text-5xl font-bold">
      Let’s Build Something Amazing
    </h2>

    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
      I’m available for freelance work, collaborations, or full-time opportunities.
      Let’s connect and make ideas real.
    </p>
  </div>

  {/* Contact Cards */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

    {/* Email Card */}
    <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:-translate-y-2 duration-300 shadow-lg">
      <div className="text-[#67f0a8] text-4xl mb-4">📧</div>

      <h3 className="text-xl font-semibold mb-2">Email</h3>

      <p className="text-gray-400 break-all mb-4">
        adnanimalik737@gmail.com
      </p>

      <div className="flex justify-center gap-3">
        <a
          href="mailto:adnanimalik737@gmail.com"
          className="px-4 py-2 rounded-full bg-[#67f0a8] text-black text-sm font-semibold hover:scale-105 duration-300"
        >
          Send Mail
        </a>

        <button
          onClick={() =>
            navigator.clipboard.writeText("adnanimalik737@gmail.com")
          }
          className="px-4 py-2 rounded-full border border-[#67f0a8] text-[#67f0a8] text-sm hover:bg-[#67f0a8] hover:text-black duration-300"
        >
          Copy
        </button>
      </div>
    </div>

    {/* Phone / WhatsApp */}
    <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:-translate-y-2 duration-300 shadow-lg">
      <div className="text-[#67f0a8] text-4xl mb-4">📱</div>

      <h3 className="text-xl font-semibold mb-2">Phone / WhatsApp</h3>

      <p className="text-gray-400 mb-4">
        +92 309 9658512
      </p>

      <div className="flex justify-center gap-3">
        <a
          href="tel:+923099658512"
          className="px-4 py-2 rounded-full bg-[#67f0a8] text-black text-sm font-semibold hover:scale-105 duration-300"
        >
          Call
        </a>

        <a
          href="https://wa.me/923099658512"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-full border border-[#67f0a8] text-[#67f0a8] text-sm hover:bg-[#67f0a8] hover:text-black duration-300"
        >
          WhatsApp
        </a>
      </div>
    </div>

    {/* Location */}
    <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:-translate-y-2 duration-300 shadow-lg">
      <div className="text-[#67f0a8] text-4xl mb-4">📍</div>

      <h3 className="text-xl font-semibold mb-2">Location</h3>

      <p className="text-gray-400">
        Shabqadar, Khyber Pakhtunkhwa, Pakistan
      </p>
    </div>
  </div>

  {/* Social Links */}
  <div className="mt-20 text-center">
    <h3 className="text-2xl font-semibold mb-6">
      Connect With Me
    </h3>

    <div className="flex flex-wrap justify-center gap-4">

      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 rounded-full border border-[#67f0a8] text-[#67f0a8] hover:bg-[#67f0a8] hover:text-black duration-300 hover:scale-105"
      >
        GitHub
      </a>

      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 rounded-full border border-[#67f0a8] text-[#67f0a8] hover:bg-[#67f0a8] hover:text-black duration-300 hover:scale-105"
      >
        LinkedIn
      </a>

      <a
        href="mailto:adnanimalik737@gmail.com"
        className="px-6 py-3 rounded-full border border-[#67f0a8] text-[#67f0a8] hover:bg-[#67f0a8] hover:text-black duration-300 hover:scale-105"
      >
        Gmail
      </a>
    </div>
  </div>
</section>

    </main>
  );
}