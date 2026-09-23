import { useState } from "react";
import projects from "../data/projects.json";

function Home() {
  const [activeTab, setActiveTab] = useState<"all" | "production" | "personal">("all");

  const filteredProjects = projects.filter(p => {
    if (activeTab === "production") return p.status === "production" || p.status === "near-completion";
    if (activeTab === "personal") return p.status === "in-development" || !p.live;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#f59e0b] selection:text-black">
      {/* FLOATING CAPSULE NAVBAR */}
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-6 bg-[#121212]/90 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-2xl">
        <a href="#about" className="text-xs sm:text-sm font-semibold hover:text-[#f59e0b] transition-colors">About</a>
        <a href="#projects" className="text-xs sm:text-sm font-semibold hover:text-[#f59e0b] transition-colors">Projects</a>
        <a href="#experience" className="text-xs sm:text-sm font-semibold hover:text-[#f59e0b] transition-colors">Experience</a>
        <a href="#contact" className="text-xs sm:text-sm font-semibold hover:text-[#f59e0b] transition-colors">Contact</a>
      </nav>

      {/* HERO / ESSENCE SECTION */}
      <section id="about" className="min-h-screen flex flex-col justify-between pt-24 relative overflow-hidden">
        {/* Top Header Bar */}
        <div className="w-full bg-[#161616] py-4 px-8 md:px-16 flex items-center justify-between border-b border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          <h1 className="text-xl md:text-2xl font-black uppercase tracking-wider text-[#f59e0b]">
            Hola, I'm Muhammad Nabil Fawwaz 👋🏼
          </h1>
          <div className="hidden md:flex gap-2 opacity-30">
            <div className="w-16 h-[2px] bg-white rounded-full" />
            <div className="w-8 h-[2px] bg-white rounded-full" />
            <div className="w-3 h-[2px] bg-white rounded-full" />
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-2 gap-12 items-center relative z-10 w-full flex-1">
          {/* Open to Work Badge */}
          <div className="absolute -left-6 top-10 bg-[#f59e0b] text-black font-black uppercase text-xs py-2 px-8 rotate-[-12deg] shadow-lg tracking-widest z-20">
            Open to Freelance & Clients
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-[#f59e0b]">
              WHO AM I?
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
              Full-Stack Developer & Data Specialist dengan pengalaman dalam membangun aplikasi web production-ready, sistem informasi kepegawaian (SIMPEG), Single Sign-On (SSO), hingga e-commerce. Ahli dalam menggunakan Next.js, TypeScript, Prisma, dan PostgreSQL.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="#contact"
                className="bg-[#f59e0b] hover:bg-[#e08e09] text-black font-bold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-[#f59e0b]/20 flex items-center gap-2"
              >
                Let's Talk <span>↓</span>
              </a>
              <a
                href="https://github.com/nabilfwz"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-white/10 border border-white/20 text-white font-bold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                GitHub Profile
              </a>
            </div>
          </div>

          {/* Right Visual / Tech Stack Highlight */}
          <div className="bg-[#121212] border border-white/10 p-8 rounded-3xl relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 bg-[#f59e0b]/10 w-32 h-32 rounded-full blur-2xl pointer-events-none" />
            <h3 className="text-lg font-bold mb-4 text-[#f59e0b]">Core Expertise</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Next.js / React", desc: "Frontend & SSR" },
                { name: "PostgreSQL & Prisma", desc: "Database & ORM" },
                { name: "SSO & Auth", desc: "Security Systems" },
                { name: "Data Processing", desc: "ETL & Large Dataset" },
              ].map((item, idx) => (
                <div key={idx} className="bg-black/40 border border-white/5 p-4 rounded-xl">
                  <h4 className="font-bold text-white text-sm">{item.name}</h4>
                  <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full border-t border-white/10 bg-[#121212] py-4 px-8 flex justify-between items-center text-xs text-gray-400">
          <span>Scroll to explore projects</span>
          <span className="text-[#f59e0b] font-bold">Muhammad Nabil Fawwaz Portfolio</span>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="min-h-screen py-24 px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-[#f59e0b]">FEATURED PROJECTS</h2>
          <p className="text-gray-400 text-sm md:text-base">Kumpulan project nyata yang sudah dibangun, digunakan, dan di-deploy.</p>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-3 mb-12 flex-wrap">
          {[
            { id: "all", label: "All Projects" },
            { id: "production", label: "Production & Client" },
            { id: "personal", label: "Personal & Development" },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                activeTab === tab.id
                  ? "bg-[#f59e0b] text-black shadow-lg shadow-[#f59e0b]/20"
                  : "bg-[#121212] border border-white/10 text-white/70 hover:text-white hover:border-white/30"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#121212] border border-white/10 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-[#f59e0b]/50 transition-all duration-300 hover:-translate-y-1 shadow-xl"
            >
              <div>
                {/* Header banner / icon */}
                <div className="h-40 bg-gradient-to-br from-[#1c1c1c] to-[#121212] flex items-center justify-center relative overflow-hidden border-b border-white/10">
                  <div className="absolute top-3 left-3">
                    <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                      project.status === "production" ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" :
                      project.status === "near-completion" ? "bg-amber-500/20 text-amber-400 border border-amber-500/30" :
                      "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <span className="text-5xl group-hover:scale-125 transition-transform duration-300">
                    {project.title.includes("Toko") ? "🛒" :
                     project.title.includes("SIMPEG") ? "👥" :
                     project.title.includes("SSO") ? "🔐" :
                     project.title.includes("LMS") ? "📚" : "🌐"}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#f59e0b] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="text-[10px] font-mono bg-white/5 border border-white/10 px-2 py-0.5 rounded text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-white/5 hover:bg-[#f59e0b] hover:text-black border border-white/10 hover:border-[#f59e0b] py-2 rounded-xl text-xs font-bold transition-all"
                  >
                    Visit Live Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-24 bg-[#121212] border-t border-b border-white/10">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl md:text-5xl font-black mb-12 text-[#f59e0b]">EXPERIENCE</h2>
          <div className="space-y-8 border-l border-white/20 pl-6 ml-2">
            {[
              {
                period: "2026",
                role: "Full-Stack Developer",
                company: "BPVP (Balai Pelatihan Vokasi dan Produktivitas)",
                desc: "Mengembangkan SIMPEG dan SSO Auth Server dengan Next.js, Prisma, dan PostgreSQL. Mengintegrasikan data wilayah se-Indonesia."
              },
              {
                period: "2026",
                role: "Full-Stack Developer",
                company: "Toko Frozen Food (Production)",
                desc: "Membangun sistem e-commerce full-stack live untuk operasional toko sendiri."
              },
              {
                period: "2025 - 2026",
                role: "Full-Stack Developer",
                company: "LMS & Digital Products",
                desc: "Membuat platform Learning Management System lengkap dengan manajemen kursus dan RESTful API."
              }
            ].map((exp, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[#f59e0b] ring-4 ring-[#121212]" />
                <span className="text-xs font-mono text-[#f59e0b] font-bold">{exp.period}</span>
                <h3 className="text-lg font-bold text-white mt-1">{exp.role} — <span className="text-gray-400 font-normal">{exp.company}</span></h3>
                <p className="text-sm text-gray-400 mt-2 leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 max-w-4xl mx-auto px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-black mb-6 text-[#f59e0b]">HIT ME UP</h2>
        <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-12">
          Punya project, ingin diskusi teknologi, atau butuh developer untuk kolaborasi? Hubungi saya kapan saja.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { name: "WhatsApp", url: "https://wa.me/6282377276027", icon: "💬" },
            { name: "Email", url: "mailto:nabilfwz12@gmail.com", icon: "📧" },
            { name: "LinkedIn", url: "https://www.linkedin.com/in/nabelfwz/", icon: "💼" },
            { name: "GitHub", url: "https://github.com/nabilfwz", icon: "🐙" },
          ].map((c, idx) => (
            <a
              key={idx}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#121212] border border-white/10 hover:border-[#f59e0b] p-6 rounded-2xl flex flex-col items-center justify-center gap-2 group transition-all hover:scale-105 shadow-xl"
            >
              <span className="text-3xl group-hover:scale-110 transition-transform">{c.icon}</span>
              <span className="text-xs font-bold text-white group-hover:text-[#f59e0b] transition-colors">{c.name}</span>
            </a>
          ))}
        </div>

        <div className="text-xs text-gray-500 pt-8 border-t border-white/10">
          © {new Date().getFullYear()} Muhammad Nabil Fawwaz. All rights reserved.
        </div>
      </section>
    </div>
  );
}

export default Home;
