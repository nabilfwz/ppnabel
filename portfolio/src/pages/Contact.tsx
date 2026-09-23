function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-8 py-24 text-white">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Get In Touch
        </span>
      </h2>

      <p className="text-gray-300 text-center mb-16 max-w-xl mx-auto">
        Terbuka untuk kolaborasi, freelance project, atau peluang kerja. 
        Mari bicarakan bagaimana saya bisa membantu bisnis Anda.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {[
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
        ].map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#112240] p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 text-center"
          >
            <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="font-semibold text-cyan-400 mb-1">{item.title}</h3>
            <p className="text-gray-400 text-xs truncate">{item.value}</p>
          </a>
        ))}
      </div>

      {/* Info Card */}
      <div className="bg-[#112240] p-8 rounded-2xl border border-cyan-500/20 text-center">
        <h3 className="text-xl font-bold mb-4 text-cyan-400">
          Status Ketersediaan
        </h3>
        <p className="text-gray-300 max-w-lg mx-auto mb-6">
          Saat ini sedang mencari klien freelance untuk membangun portfolio startup IT. 
          Siap untuk project baru dalam kurun waktu 1-2 minggu ke depan.
        </p>
        <a
          href="https://wa.me/6282377276027"
          className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105"
        >
          Chat via WhatsApp
        </a>
      </div>
    </section>
  );
}

export default Contact;
