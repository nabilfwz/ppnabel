function Footer() {
  return (
    <footer className="bg-[#0a192f] border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              &lt;Nabel Iskandar /&gt;
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Full-Stack Developer dengan spesialisasi dalam sistem web modern, manajemen database, dan analisis data. Membangun solusi digital yang scalable dan efisien.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400">Navigasi</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Projects", href: "/projects" },
                { label: "Experience", href: "/experience" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400">Hubungi</h3>
            <div className="space-y-3 text-sm">
              <p className="text-gray-300">
                Email:{" "}
                <a
                  href="mailto:"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  nabel@example.com
                </a>
              </p>
              <p className="text-gray-300">
                Status:{" "}
                <span className="text-green-400 font-medium">Available for projects</span>
              </p>
              <p className="text-gray-400 italic text-xs">
                Saat ini mencari klien untuk project web development dan sistem informasi.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-cyan-500/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Nabel Iskandar. Dibuat dengan React + Vite.
          </p>
          
          {/* Social Links */}
          <div className="flex gap-4">
            {[
              { name: "GitHub", icon: "🐙", url: "https://github.com" },
              { name: "LinkedIn", icon: "💼", url: "https://linkedin.com" },
              { name: "Instagram", icon: "📸", url: "https://instagram.com" },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors hover:scale-110"
                title={social.name}
              >
                <span className="text-xl">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Glow effect */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30" />
      </div>
    </footer>
  );
}

export default Footer;
