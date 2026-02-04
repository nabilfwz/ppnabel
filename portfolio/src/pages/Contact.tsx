function Contact() {
  return (
    <section className="max-w-4xl  mx-auto px-8 py-24 text-white">
      <h2 className="text-4xl mt-10 font-bold mb-6 text-center">Get In Touch</h2>

      <p className="text-gray-400 text-center mb-12">
        Feel free to reach out for collaboration, freelance work, or
        professional opportunities.
      </p>

      <div className="bg-white/5 border border-green-500/10 rounded-2xl p-8 space-y-8">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/nabelfwz/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between hover:text-green-400 transition"
        >
          <div className="flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 text-gray-400"
            >
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM.21 8.98H4.8V24H.21zM8.98 8.98h4.41v2.05h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 6.99V24h-4.59v-7.42c0-1.77-.03-4.05-2.47-4.05-2.47 0-2.85 1.93-2.85 3.93V24H8.98z" />
            </svg>

            <span className="text-gray-300">linkedin.com/in/nabelfwz</span>
          </div>

          <span className="text-green-400">→</span>
        </a>

        {/* Email */}
        <a
          href="mailto:nabilfwz12@gmail.com"
          className="flex items-center justify-between hover:text-green-400 transition"
        >
          <div className="flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 text-gray-400"
            >
              <path d="M12 13.065 1.5 6.75V18a2 2 0 0 0 2 2h17a2 2 0 0 0 2-2V6.75L12 13.065z" />
              <path d="M12 10.935 22.5 4.5H1.5L12 10.935z" />
            </svg>

            <span className="text-gray-300">nabilfwz12@gmail.com</span>
          </div>

          <span className="text-green-400">→</span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/6282377276027"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between hover:text-green-400 transition"
        >
          <div className="flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 text-gray-400"
            >
              <path d="M20.52 3.48A11.91 11.91 0 0 0 12.03 0C5.39 0 .02 5.37.02 12c0 2.11.55 4.18 1.6 6.01L0 24l6.15-1.61A11.96 11.96 0 0 0 12.03 24C18.67 24 24 18.63 24 12c0-3.19-1.24-6.19-3.48-8.52z" />
            </svg>

            <span className="text-gray-300">0823-7727-6027</span>
          </div>

          <span className="text-green-400">→</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
