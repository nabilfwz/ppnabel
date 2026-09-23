import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function Experience() {
    const experiences = [
        {
            period: "2026",
            role: "Full-Stack Developer",
            company: "BPVP (Balai Pelatihan Vokasi dan Produktivitas)",
            description: "Mengembangkan SIMPEG (Sistem Informasi Kepegawaian) dan SSO (Single Sign-On) Auth Server menggunakan Next.js, Prisma ORM, dan PostgreSQL. Mengintegrasikan data wilayah se-Indonesia (38 provinsi, 514 kab/kota, 7.288 kecamatan, 83.971 desa/kelurahan).",
            tags: ["Next.js", "Prisma", "PostgreSQL", "SSO", "Data Integration"]
        },
        {
            period: "2026",
            role: "Full-Stack Developer",
            company: "Toko Frozen Food",
            description: "Membangun sistem e-commerce full-stack dari nol dengan Next.js dan Prisma. Sistem saat ini berjalan live di toko sendiri untuk mengelola inventaris, transaksi, dan autentikasi pengguna.",
            tags: ["Next.js", "Prisma", "NextAuth", "Tailwind CSS", "Production"]
        },
        {
            period: "2025 - 2026",
            role: "Frontend & Backend Developer",
            company: "Learning Management System (LMS)",
            description: "Mengembangkan platform LMS lengkap dengan frontend interaktif dan backend API. Menyediakan fitur manajemen kursus, kuis, dan tracking progres belajar.",
            tags: ["React", "Express", "Node.js", "MongoDB", "REST API"]
        },
        {
            period: "2025 - Sekarang",
            role: "Freelance Developer & Data Specialist",
            company: "Self-Employed",
            description: "Menyediakan jasa pembuatan website, integrasi sistem, dan manajemen data untuk berbagai klien. Membangun fondasi untuk mendirikan startup IT.",
            tags: ["Web Dev", "Data Entry", "Consulting", "Freelance"]
        }
    ];
    return (_jsxs("section", { className: "max-w-4xl mx-auto px-8 py-20 text-white", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-12 text-center", children: _jsx("span", { className: "bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent", children: "Pengalaman & Project History" }) }), _jsx("div", { className: "relative border-l-2 border-cyan-500/30 pl-8 ml-4 space-y-12", children: experiences.map((exp, idx) => (_jsxs("div", { className: "relative group", children: [_jsx("div", { className: "absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#0a192f] border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:scale-125 transition-all duration-300" }), _jsxs("div", { className: "bg-[#112240] p-6 rounded-2xl border border-cyan-500/20 group-hover:border-cyan-400/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/10", children: [_jsxs("div", { className: "flex flex-wrap justify-between items-center mb-2", children: [_jsx("span", { className: "text-cyan-400 text-sm font-mono font-semibold", children: exp.period }), _jsx("span", { className: "text-gray-400 text-xs", children: exp.company })] }), _jsx("h3", { className: "text-xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors", children: exp.role }), _jsx("p", { className: "text-gray-300 text-sm leading-relaxed mb-4", children: exp.description }), _jsx("div", { className: "flex flex-wrap gap-2", children: exp.tags.map((tag, i) => (_jsx("span", { className: "text-xs px-2 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded text-cyan-400", children: tag }, i))) })] })] }, idx))) })] }));
}
export default Experience;
