import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import projects from "../data/projects.json";
function Projects() {
    return (_jsxs("section", { className: "max-w-7xl mx-auto px-8 py-20 text-white", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-12", children: _jsx("span", { className: "bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent", children: "All Projects" }) }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: projects.map((project, idx) => (_jsxs("div", { className: "group relative bg-[#112240] rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20", style: {
                        animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`
                    }, children: [_jsxs("div", { className: "relative h-48 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 flex items-center justify-center overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all duration-300" }), _jsx("span", { className: "text-6xl opacity-50 group-hover:scale-125 transition-transform duration-300", children: project.title.includes("Toko") ? "🛒" :
                                        project.title.includes("SIMPEG") ? "👥" :
                                            project.title.includes("SSO") ? "🔐" :
                                                project.title.includes("LMS") ? "📚" :
                                                    project.title.includes("NFStore") ? "🛍️" : "🌐" })] }), _jsxs("div", { className: "p-6", children: [_jsx("h3", { className: "text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors", children: project.title }), _jsx("p", { className: "text-gray-400 text-sm mb-4 leading-relaxed", children: project.description }), _jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: project.tech.map((tech, i) => (_jsx("span", { className: "text-xs px-2 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded text-cyan-400", children: tech }, i))) }), _jsxs("div", { className: "flex gap-3", children: [project.live && (_jsx("a", { href: project.live, target: "_blank", rel: "noopener noreferrer", className: "flex-1 text-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all", children: "Demo" })), project.repo && (_jsx("a", { href: project.repo, target: "_blank", rel: "noopener noreferrer", className: "flex-1 text-center border border-cyan-500/50 py-2 rounded-lg text-sm hover:bg-cyan-500/10 transition-all", children: "Repo" }))] })] })] }, project.id))) }), _jsx("style", { children: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      ` })] }));
}
export default Projects;
