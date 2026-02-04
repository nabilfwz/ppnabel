import { Link } from "react-router-dom";
import projects from "../data/projects.json"
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
              className="bg-white/5 border border-green-500/10 rounded-2xl overflow-hidden hover:border-green-400/40 transition group"
            >
              <div className="overflow-hidden">
                <img
                  src={
                    new URL(`../assets/${project.image}`, import.meta.url).href
                  }
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-green-400">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 font-medium"
                >
                  Live Demo →
                </a>
              </div>
            </div>
          ))}
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
