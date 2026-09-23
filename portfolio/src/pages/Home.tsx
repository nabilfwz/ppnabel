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
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans selection:bg-[#58a6ff] selection:text-black">
      {/* FLOATING CAPSULE NAVBAR */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-6 bg-[#161b22]/90 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/10 shadow-xl text-sm">
        <a href="#about" className="hover:text-white transition-colors">Tentang</a>
        <a href="#projects" className="hover:text-white transition-colors">Project</a>
        <a href="#experience" className="hover:text-white transition-colors">Pengalaman</a>
        <a href="#contact" className="hover:text-white transition-colors">Kontak</a>
      </nav>

      {/* HERO SECTION */}
      <section id="about" className="min-h-screen flex flex-col justify-center px-6 md:px-16 max-w-6xl mx-auto pt-24 relative">
        <div className="space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#21262d] border border-white/10 px-4 py-1.5 rounded-full text-xs text-emerald-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for freelance & collaboration
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
            Hai, saya <span className="text-[#58a6ff]">Muhammad Nabil Fawwaz</span>.
          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
            Full-stack developer yang biasa ngerjain aplikasi web fungsional dari awal sampai production. Suka bikin sistem yang rapi, efisien, dan beneran dipakai untuk kebutuhan bisnis maupun operasional sehari-hari.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="bg-[#238636] hover:bg-[#2ea043] text-white font-medium px-6 py-3 rounded-xl transition-all shadow-lg text-sm flex items-center gap-2"
            >
              Lihat Project <span>↓</span>
            </a>
            <a
              href="https://github.com/nabilfwz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#21262d] hover:bg-[#30363d] border border-white/10 text-white font-medium px-6 py-3 rounded-xl transition-all text-sm"
            >
              Buka GitHub
            </a>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-xs text-gray-500 font-mono uppercase tracking-wider mb-4">Stack yang biasa dipakai:</p>
          <div className="flex flex-wrap gap-2">
            {["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS", "Supabase"].map((tech, i) => (
              <span key={i} className="bg-[#161b22] border border-white/10 px-3 py-1.5 rounded-lg text-xs font-mono text-gray-300">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="min-h-screen py-24 px-6 md:px-16 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Project Pilihan</h2>
            <p className="text-gray-400 text-sm">Beberapa aplikasi dan sistem yang udah selesai dibikin.</p>
          </div>

          {/* Category Tabs */}
          <div className="flex gap-2 bg-[#161b22] p-1.5 rounded-xl border border-white/10 w-fit">
            {[
              { id: "all", label: "Semua" },
              { id: "production", label: "Production" },
              { id: "personal", label: "Eksperimen/Personal" },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-[#21262d] text-white shadow"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#161b22] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-white/30 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-mono px-2.5 py-1 rounded-md uppercase tracking-wider ${
                    project.status === "production" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" :
                    project.status === "near-completion" ? "bg-amber-500/10 text-amber-400 border border-amber-500/20" :
                    "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                  }`}>
                    {project.status}
                  </span>
                  <span className="text-2xl">
                    {project.title.includes("Toko") ? "🛒" :
                     project.title.includes("SIMPEG") ? "👥" :
                     project.title.includes("SSO") ? "🔐" :
                     project.title.includes("LMS") ? "📚" : "💻"}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#58a6ff] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="text-[11px] font-mono bg-[#21262d] px-2.5 py-1 rounded text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#58a6ff] hover:underline"
                  >
                    Buka Demo Website <span>→</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-24 bg-[#161b22]/50 border-t border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 md:px-16">
          <h2 className="text-3xl font-bold text-white mb-8">Pengalaman & Perjalanan</h2>
          <div className="space-y-6">
            {[
              {
                period: "2026",
                role: "Full-Stack Developer",
                company: "BPVP",
                desc: "Membangun sistem SIMPEG dan SSO Auth Server dengan Next.js dan PostgreSQL untuk integrasi data instansi."
              },
              {
                period: "2026",
                role: "Full-Stack Developer",
                company: "Toko Frozen Food (Production)",
                desc: "Membuat aplikasi e-commerce operasional mandiri yang saat ini aktif digunakan untuk transaksi harian."
              },
              {
                period: "2025 - 2026",
                role: "Full-Stack Developer",
                company: "LMS & Personal Projects",
                desc: "Mengembangkan platform pembelajaran online dan berbagai aplikasi web berbasis React & Node.js."
              }
            ].map((exp, idx) => (
              <div key={idx} className="bg-[#161b22] border border-white/10 p-6 rounded-2xl">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-bold text-white">{exp.role} <span className="text-[#58a6ff]">@ {exp.company}</span></h3>
                  <span className="text-xs font-mono text-gray-400 bg-[#21262d] px-2.5 py-1 rounded-md">{exp.period}</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 max-w-4xl mx-auto px-6 md:px-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-3">Mau Ngobrol atau Kolaborasi?</h2>
        <p className="text-gray-400 text-sm max-w-lg mx-auto mb-8">
          Kalau ada ide project, diskusi teknis, atau sekadar mau nanya-nanya seputar web development, silakan kontak langsung.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
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
              className="bg-[#161b22] hover:bg-[#21262d] border border-white/10 px-5 py-3 rounded-xl text-sm font-medium flex items-center gap-2 transition-all hover:scale-105"
            >
              <span>{c.icon}</span>
              <span>{c.name}</span>
            </a>
          ))}
        </div>

        <div className="text-xs text-gray-500 mt-16 pt-8 border-t border-white/10">
          © {new Date().getFullYear()} Muhammad Nabil Fawwaz. Built with React & Tailwind CSS.
        </div>
      </section>
    </div>
  );
}

export default Home;
