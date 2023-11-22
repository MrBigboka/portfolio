import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import LinkedInImage from "./images/linkedin.webp";
import { Link as ScrollLink } from "react-scroll";

type HeaderProps = {
    currentSection: string;
};

const Header: React.FC<HeaderProps> = ({ currentSection }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    const sections = {
        home: "Accueil",
        about: "Présentation",
        projects: "Projets",
        contact: "Contact", // Ajoutez ou mettez à jour selon vos sections
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const getButtonColor = (sectionId: string) => {
        return currentSection === sectionId ? "#9c27b0" : "inherit";
    };

    return (
        <AppBar
            className="header"
            position="sticky"
            style={{
                backgroundColor: isScrolled
                    ? "rgba(0, 0, 0, 0.7)"
                    : "transparent",
                backdropFilter: "blur(10px)",
                transition: "background-color 0.3s",
            }}
        >
            <Toolbar
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                {/* Nom et Titre à Gauche */}
                <Typography variant="h6" color="inherit" noWrap>
                    MON PORTFOLIO
                </Typography>

                {/* Sections Centrées */}
                <Box style={{ display: "flex", alignItems: "center" }}>
                    {Object.entries(sections).map(
                        ([sectionId, sectionName]) => (
                            <ScrollLink
                                key={sectionId}
                                to={sectionId}
                                smooth={true}
                                duration={500}
                                style={{ textDecoration: "none" }}
                                onSetActive={() => {}}
                            >
                                <Button
                                    color="inherit"
                                    style={{ color: getButtonColor(sectionId) }}
                                >
                                    {sectionName}
                                </Button>
                            </ScrollLink>
                        )
                    )}
                </Box>

                {/* Bouton LinkedIn avec image aligné à droite */}
                <a
                    href="https://www.linkedin.com/in/miguel-boka-51b407223/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginLeft: "10px" }} // Espace entre les boutons
                >
                    <img
                        src={LinkedInImage}
                        alt="LinkedIn"
                        style={{ width: "30px", height: "30px" }}
                    />
                </a>
                {/* Fin du bouton LinkedIn avec image */}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
