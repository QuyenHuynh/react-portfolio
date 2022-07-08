import {Route, Routes } from "react-router-dom"
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import NotFound from "./components/notfound/NotFound";

const Views = () => {
    return (
        <>
            <Routes>
                <Route index component={<Home />} />
                <Route path="/home" element={<Home />} component={<Home />} />
                <Route path="/about" element={<About />} component={<About />} />
                <Route path="/resume" element={<Resume />} component={<Resume />} />
                <Route path="/projects" element={<Projects />} component={<Projects />} />
                <Route path="/contact" element={<Contact />} component={<Contact />} />
                <Route path="*" element={<NotFound />} component={<NotFound />} />
            </Routes>
        </>
    );
};

export default Views;