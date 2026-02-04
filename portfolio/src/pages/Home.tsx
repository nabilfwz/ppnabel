import { Link } from "react-router-dom";
import projects from "../data/projects.json";
function Home() {
  return (
    <div className="min-h-screen bg-[#0d1110] text-white pt-32">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-8 pb-16">
        <span className="text-green-400 border border-green-400/30 px-4 py-1 rounded-full text-sm">
          Web Developer • Data Analyst • Data Entry
        </span>

        <h1 className="text-6xl md:text-7xl font-bold mt-6 leading-tight">
          Building Web Systems <br />& Managing Data with Precision
        </h1>

        <p className="text-gray-400 mt-6 max-w-2xl text-lg leading-relaxed">
          I develop modern web applications, analyze structured data to generate
          insights, and ensure accurate data management for reliable business
          operations.
        </p>

        <div className="mt-8 flex gap-6">
          <Link
            to="/projects"
            className="bg-green-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition"
          >
            View Projects
          </Link>

          <Link
            to="/contact"
            className="border border-green-500/30 px-6 py-3 rounded-full hover:border-green-400 hover:text-green-400 transition"
          >
            Contact Me
          </Link>
        </div>
      </section>
      {/* SERVICES / EXPERTISE */}
      <section className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 border border-green-500/10 p-8 rounded-2xl hover:border-green-400/40 transition">
            <h3 className="text-xl font-semibold mb-3 text-green-400">
              Web Development
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Developing responsive and scalable web applications using modern
              technologies and clean architecture.
            </p>
          </div>

          <div className="bg-white/5 border border-green-500/10 p-8 rounded-2xl hover:border-green-400/40 transition">
            <h3 className="text-xl font-semibold mb-3 text-green-400">
              Data Analysis
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Cleaning, processing, and analyzing structured datasets to produce
              accurate and actionable insights.
            </p>
          </div>

          <div className="bg-white/5 border border-green-500/10 p-8 rounded-2xl hover:border-green-400/40 transition">
            <h3 className="text-xl font-semibold mb-3 text-green-400">
              Data Entry
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Ensuring precise and well-organized data input with strong
              attention to detail and efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="max-w-6xl mx-auto px-8 py-16">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-semibold">Featured Projects</h2>

          <Link
            to="/projects"
            className="text-green-400 hover:text-green-300 font-medium transition"
          >
            View All Projects →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gradient-to-b from-[#111827] to-[#0f172a] rounded-3xl overflow-hidden shadow-lg"
            >
              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={
                    new URL(`../assets/${project.image}`, import.meta.url).href
                  }
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* TECH STACK BADGE */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-green-500/10 border border-green-400/30 rounded-full text-sm text-green-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 text-black px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition"
                    >
                      Demo
                    </a>
                  )}

                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 px-6 py-3 rounded-xl text-gray-300 hover:bg-white/20 transition"
                    >
                      Repository
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section className="w-full overflow-hidden py-20 bg-[#0d1110] text-white">
        <h2 className="text-3xl font-bold text-center mb-16">
          Tools & Technologies
        </h2>

        <div className="relative w-full overflow-hidden">
          <div className="flex gap-12 animate-scroll whitespace-nowrap">
            {[
              {
                name: "Vite",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
              },
              {
                name: "React",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
              },
              {
                name: "PHP",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
              },
              {
                name: "Tailwind",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
              },
              {
                name: "TypeScript",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
              },
              {
                name: "Git",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
              },
              {
                name: "GitHub",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
              },
              {
                name: "Express",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
              },
              {
                name: "Node.js",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
              },
              {
                name: "MySQL",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
              },
              {
                name: "PostgreSQL",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
              },
            ]
              .concat([
                {
                  name: "Vite",
                  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
                },
                {
                  name: "React",
                  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                },
                {
                  name: "PHP",
                  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
                },
                {
                  name: "Tailwind",
                  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
                },
                {
                  name: "TypeScript",
                  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
                },
                {
                  name: "Git",
                  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
                },
                {
                  name: "GitHub",
                  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
                },
                {
                  name: "Express",
                  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
                },
                {
                  name: "Node.js",
                  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                },
                {
                  name: "MySQL",
                  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
                },
                {
                  name: "PostgreSQL",
                  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
                },
              ])

              .map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center min-w-[120px]"
                >
                  <img src={tech.logo} alt={tech.name} className="h-12 mb-3" />
                  <span className="text-sm text-gray-400">{tech.name}</span>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-8 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Let’s Work Together</h2>

        <p className="text-gray-400 mb-6">
          Available for web development, data analysis, and data management
          projects.
        </p>

        <Link
          to="/contact"
          className="bg-green-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition"
        >
          Get In Touch
        </Link>
      </section>
    </div>
  );
}

export default Home;
