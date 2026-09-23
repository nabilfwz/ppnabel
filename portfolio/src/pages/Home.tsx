import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import projects from "../data/projects.json";

function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f] text-white">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-8 overflow-hidden">
        {/* Animated background grid */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(#64ffda 1px, transparent 1px), linear-gradient(90deg, #64ffda 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Animated greeting */}
          <div className="mb-6 inline-block">
            <span className="text-cyan-400 text-lg font-mono tracking-wider animate-pulse">
              &lt;developer /&gt;
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-300 to-cyan-500 bg-clip-text text-transparent leading-tight">
            Nabel Iskandar
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
            Full-Stack Developer & Data Specialist
          </p>

          <p className="text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Membangun sistem web modern dengan Next.js, mengelola data dengan presisi, 
            dan mengimplementasikan solusi yang scalable untuk kebutuhan bisnis.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/projects"
              className="group relative bg-cyan-500 text-gray-900 px-8 py-4 rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
            >
              <span className="relative z-10">Lihat Portfolio</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <Link
              to="/contact"
              className="border-2 border-cyan-500/50 px-8 py-4 rounded-lg hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105"
            >
              Hubungi Saya
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-cyan-400 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto px-8 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Keahlian
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Web Development",
              desc: "Membangun aplikasi web modern dengan Next.js, React, dan TypeScript. Full-stack development dengan fokus pada performa dan user experience.",
              icon: "💻"
            },
            {
              title: "Database & Backend",
              desc: "Merancang dan mengimplementasikan database relasional dengan PostgreSQL, Prisma ORM, dan RESTful API architecture.",
              icon: "🗄️"
            },
            {
              title: "Data Management",
              desc: "Analisis data, data entry, dan ETL processes. Pengalaman dengan dataset besar dan integrasi data regional.",
              icon: "📊"
            }
          ].map((service, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-[#112240] to-[#1a2f4d] p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20"
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-cyan-400">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {service.desc}
              </p>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 rounded-2xl transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <Link
            to="/projects"
            className="text-cyan-400 hover:text-cyan-300 font-medium transition group"
          >
            Semua Project 
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 6).map((project, idx) => (
            <div
              key={project.id}
              className="group relative bg-[#112240] rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
              style={{
                animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`
              }}
            >
              {/* Image placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all duration-300" />
                <span className="text-6xl opacity-50 group-hover:scale-125 transition-transform duration-300">
                  {project.title.includes("Toko") ? "🛒" : 
                   project.title.includes("SIMPEG") ? "👥" :
                   project.title.includes("SSO") ? "🔐" :
                   project.title.includes("LMS") ? "📚" :
                   project.title.includes("NFStore") ? "🛍️" : "🌐"}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Status badge */}
                <div className="mb-3">
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                    project.status === "production" 
                      ? "bg-green-500/20 text-green-400 border border-green-500/50"
                      : project.status === "near-completion"
                      ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/50"
                      : "bg-blue-500/20 text-blue-400 border border-blue-500/50"
                  }`}>
                    {project.status === "production" ? "🟢 Live" : 
                     project.status === "near-completion" ? "⚡ Near Completion" : "🚧 In Development"}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs px-2 py-1 text-gray-500">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium group/link"
                  >
                    Live Demo 
                    <span className="ml-1 group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                )}
              </div>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/0 via-transparent to-transparent group-hover:from-cyan-500/10 transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-20 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent" />
        
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Tech Stack
          </span>
        </h2>

        <div className="relative">
          <div className="flex gap-16 animate-scroll">
            {[
              { name: "Next.js", icon: "⚡" },
              { name: "React", icon: "⚛️" },
              { name: "TypeScript", icon: "📘" },
              { name: "PostgreSQL", icon: "🐘" },
              { name: "Prisma", icon: "🔷" },
              { name: "Tailwind CSS", icon: "🎨" },
              { name: "Node.js", icon: "🟢" },
              { name: "Git", icon: "📦" },
            ].concat([
              { name: "Next.js", icon: "⚡" },
              { name: "React", icon: "⚛️" },
              { name: "TypeScript", icon: "📘" },
              { name: "PostgreSQL", icon: "🐘" },
              { name: "Prisma", icon: "🔷" },
              { name: "Tailwind CSS", icon: "🎨" },
              { name: "Node.js", icon: "🟢" },
              { name: "Git", icon: "📦" },
            ]).map((tech, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center min-w-[140px] group cursor-pointer"
              >
                <div className="text-5xl mb-3 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                  {tech.icon}
                </div>
                <span className="text-sm text-gray-400 group-hover:text-cyan-400 transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-8 py-24 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Mari Berkolaborasi
        </h2>

        <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
          Terbuka untuk project web development, sistem informasi, dan integrasi data. 
          Saat ini sedang mencari klien untuk membangun startup IT.
        </p>

        <Link
          to="/contact"
          className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-4 rounded-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
        >
          Mulai Diskusi Project
        </Link>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default Home;
