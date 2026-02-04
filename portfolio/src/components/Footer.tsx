import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0d1110] to-[#0a0f0e] border-t border-green-500/10">
      <div className="max-w-6xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-3 gap-12">
          {/* LEFT - ABOUT */}
          <div>
            <h3 className="text-white text-xl font-bold mb-2">
              Muhammad Nabil F.
            </h3>

            <span className="text-green-400 text-sm tracking-widest">
              WEB • DATA ANALYSIS • DATA ENTRY
            </span>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Delivering web development solutions, structured data analysis,
              and accurate data entry services with attention to detail and
              efficiency.
            </p>
          </div>

          {/* MIDDLE - NAVIGATION */}
          <div>
            <h4 className="text-gray-300 font-semibold mb-4 tracking-wide">
              NAVIGATION
            </h4>

            <div className="space-y-3 text-gray-400">
              <Link to="/" className="block hover:text-green-400 transition">
                Home
              </Link>
              {/* <Link
                to="/experience"
                className="block hover:text-green-400 transition"
              >
                Experience
              </Link> */}
              <Link
                to="/projects"
                className="block hover:text-green-400 transition"
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="block hover:text-green-400 transition"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* RIGHT - CONTACT */}
          <div>
            <h4 className="text-gray-300 font-semibold mb-4 tracking-wide">
              CONTACT
            </h4>

            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:nabilfwz12@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M12 13.065 1.5 6.75V18a2 2 0 0 0 2 2h17a2 2 0 0 0 2-2V6.75L12 13.065z" />
                  <path d="M12 10.935 22.5 4.5H1.5L12 10.935z" />
                </svg>
                nabilfwz12@gmail.com
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/nabelfwz/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM.21 8.98H4.8V24H.21zM8.98 8.98h4.41v2.05h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 6.99V24h-4.59v-7.42c0-1.77-.03-4.05-2.47-4.05-2.47 0-2.85 1.93-2.85 3.93V24H8.98z" />
                </svg>
                linkedin.com/in/nabelfwz
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/6282377276027"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M20.52 3.48A11.91 11.91 0 0 0 12.03 0C5.39 0 .02 5.37.02 12c0 2.11.55 4.18 1.6 6.01L0 24l6.15-1.61A11.96 11.96 0 0 0 12.03 24C18.67 24 24 18.63 24 12c0-3.19-1.24-6.19-3.48-8.52z" />
                </svg>
                +62 823-7727-6027
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM LINE */}
        <div className="mt-16 pt-6 border-t border-green-500/10 flex flex-col md:flex-row justify-between text-sm text-gray-500">
          <div>© {new Date().getFullYear()} Nabil. All rights reserved.</div>

          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            Available for work
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
