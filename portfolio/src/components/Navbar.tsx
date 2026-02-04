import { NavLink } from "react-router-dom";

function Navbar() {
  const base = "px-5 py-2 rounded-full transition-all duration-300 font-medium";

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-[#0d1110] border border-green-500/20 shadow-[0_0_20px_rgba(34,197,94,0.15)] backdrop-blur-md px-6 py-3 rounded-full flex gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${base} ${
              isActive
                ? "bg-green-500 text-black shadow-[0_0_15px_rgba(34,197,94,0.5)]"
                : "text-gray-300 hover:text-green-400"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `${base} ${
              isActive
                ? "bg-green-500 text-black shadow-[0_0_15px_rgba(34,197,94,0.5)]"
                : "text-gray-300 hover:text-green-400"
            }`
          }
        >
          Projects
        </NavLink>

        {/* <NavLink
          to="/experience"
          className={({ isActive }) =>
            `${base} ${
              isActive
                ? "bg-green-500 text-black shadow-[0_0_15px_rgba(34,197,94,0.5)]"
                : "text-gray-300 hover:text-green-400"
            }`
          }
        >
          Experience
        </NavLink> */}

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${base} ${
              isActive
                ? "bg-green-500 text-black shadow-[0_0_15px_rgba(34,197,94,0.5)]"
                : "text-gray-300 hover:text-green-400"
            }`
          }
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
