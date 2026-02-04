import projects from "../data/projects.json";

function Projects() {
  const types = {
    personal: "Personal Projects",
    work: "Work Projects",
  };

  const categories = {
    web: "Web",
    data: "Data",
  };

  return (
    <section className="max-w-6xl mx-auto px-8 py-16 text-white">
      <h2 className="text-4xl mt-20 font-bold mb-16">Projects</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gradient-to-b from-[#111827] to-[#0f172a] rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300"
          >
            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={
                  new URL(`../assets/${project.image}`, import.meta.url).href
                }
                alt={project.title}
                className="w-full h-56 object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>

              <p className="text-gray-400 mb-5 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-green-500/10 border border-green-400/30 rounded-full text-xs text-green-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="flex gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-green-500 text-black py-2 rounded-lg text-sm font-semibold hover:bg-green-600 transition"
                  >
                    Demo
                  </a>
                )}

                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-white/10 py-2 rounded-lg text-sm hover:bg-white/20 transition"
                  >
                    Repo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
