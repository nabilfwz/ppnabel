import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function Contact() {
    return (_jsxs("section", { className: "max-w-4xl mx-auto px-8 py-24 text-white", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6 text-center", children: _jsx("span", { className: "bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent", children: "Get In Touch" }) }), _jsx("p", { className: "text-gray-300 text-center mb-16 max-w-xl mx-auto", children: "Terbuka untuk kolaborasi, freelance project, atau peluang kerja. Mari bicarakan bagaimana saya bisa membantu bisnis Anda." }), _jsx("div", { className: "grid md:grid-cols-3 gap-6 mb-16", children: [
                    {
                        title: "LinkedIn",
                        value: "linkedin.com/in/nabelfwz",
                        href: "https://www.linkedin.com/in/nabelfwz/",
                        icon: "💼"
                    },
                    {
                        title: "Email",
                        value: "nabilfwz12@gmail.com",
                        href: "mailto:nabilfwz12@gmail.com",
                        icon: "📧"
                    },
                    {
                        title: "WhatsApp",
                        value: "0823-7727-6027",
                        href: "https://wa.me/6282377276027",
                        icon: "💬"
                    }
                ].map((item, idx) => (_jsxs("a", { href: item.href, target: "_blank", rel: "noopener noreferrer", className: "group bg-[#112240] p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 text-center", children: [_jsx("div", { className: "text-4xl mb-3 transform group-hover:scale-110 transition-transform", children: item.icon }), _jsx("h3", { className: "font-semibold text-cyan-400 mb-1", children: item.title }), _jsx("p", { className: "text-gray-400 text-xs truncate", children: item.value })] }, idx))) }), _jsxs("div", { className: "bg-[#112240] p-8 rounded-2xl border border-cyan-500/20 text-center", children: [_jsx("h3", { className: "text-xl font-bold mb-4 text-cyan-400", children: "Status Ketersediaan" }), _jsx("p", { className: "text-gray-300 max-w-lg mx-auto mb-6", children: "Saat ini sedang mencari klien freelance untuk membangun portfolio startup IT. Siap untuk project baru dalam kurun waktu 1-2 minggu ke depan." }), _jsx("a", { href: "https://wa.me/6282377276027", className: "inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105", children: "Chat via WhatsApp" })] })] }));
}
export default Contact;
