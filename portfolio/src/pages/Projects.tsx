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

      {Object.entries(types).map(([typeKey, typeLabel]) => {
        // ambil project berdasarkan type
        const typeProjects = projects.filter((p) => p.type === typeKey);

        // kalau kosong, skip
        if (typeProjects.length === 0) return null;

        return (
          <div key={typeKey} className="mb-20">
            <h3 className="text-3xl font-semibold mb-10 text-green-400">
              {typeLabel}
            </h3>

            {Object.entries(categories).map(([catKey, catLabel]) => {
              // filter berdasarkan category
              const filtered = typeProjects.filter(
                (p) => p.category === catKey,
              );

              // kalau kosong, skip category
              if (filtered.length === 0) return null;

              return (
                <div key={catKey} className="mb-12">
                  <h4 className="text-xl font-semibold mb-6 text-gray-300">
                    {catLabel}
                  </h4>

                  <div className="grid md:grid-cols-2 gap-6">
                    {filtered.map((project) => (
                      <div
                        key={project.id}
                        className="bg-white/5 border border-green-500/10 rounded-2xl overflow-hidden hover:border-green-400/40 transition group"
                      >
                        <div className="overflow-hidden">
                          <img
                            src={
                              new URL(
                                `../assets/${project.image}`,
                                import.meta.url,
                              ).href
                            }
                            alt={project.title}
                            className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                          />
                        </div>

                        <div className="p-6">
                          <h5 className="text-xl font-semibold mb-2">
                            {project.title}
                          </h5>

                          <p className="text-gray-400 mb-4">
                            {project.description}
                          </p>

                          {project.live !== "#" && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-green-400 hover:text-green-300 transition"
                            >
                              Live Demo →
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </section>
  );
}

export default Projects;
