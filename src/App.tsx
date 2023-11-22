import React, { useState, useRef } from "react";
import { Container } from "@mui/material";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Footer from "./components/Footer";

const App: React.FC = () => {
    const [currentSection, setCurrentSection] = useState<string>("");
    const homeRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    const handleSectionChange = (section: string) => {
        setCurrentSection(section);
        switch (section) {
            case "home":
                homeRef.current?.scrollIntoView({ behavior: "smooth" });
                break;
            case "about":
                aboutRef.current?.scrollIntoView({ behavior: "smooth" });
                break;
            case "projects":
                projectsRef.current?.scrollIntoView({ behavior: "smooth" });
                break;
            case "contact":
                contactRef.current?.scrollIntoView({ behavior: "smooth" });
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <video autoPlay loop muted className="background-video">
                <source src="/videos/galaxie.mp4" type="video/mp4" />
            </video>
            <Header currentSection={currentSection} />
            <Container maxWidth="xl">
                <div ref={homeRef}>
                    <Home onInView={() => handleSectionChange("home")} />
                </div>
                <div ref={aboutRef}>
                    <About onInView={() => handleSectionChange("about")} />
                </div>
                <div ref={projectsRef}>
                    <Projects
                        onInView={() => handleSectionChange("projects")}
                    />
                </div>
                <div ref={contactRef}>
                    <Contact onInView={() => handleSectionChange("contact")} />
                </div>
                {/* autres sections si nécessaire */}
            </Container>
            <Footer />
        </div>
    );
};

export default App;
