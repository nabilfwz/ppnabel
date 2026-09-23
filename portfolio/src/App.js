import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
function App() {
    return (_jsx(Router, { children: _jsxs("div", { className: "min-h-screen bg-black text-white", children: [_jsx(ScrollToTop, {}), _jsx(Navbar, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/projects", element: _jsx(Projects, {}) }), _jsx(Route, { path: "/experience", element: _jsx(Experience, {}) }), _jsx(Route, { path: "/contact", element: _jsx(Contact, {}) })] }), _jsx(Footer, {})] }) }));
}
export default App;
