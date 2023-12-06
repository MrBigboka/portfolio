import React, { useEffect, useRef } from "react";
import { Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import "./styles/About.scss"; // Assurez-vous que le chemin est correct
import TechnologyGrids from "./TechnologyGrid";

interface AboutProps {
    onInView: () => void;
}

const About: React.FC<AboutProps> = ({ onInView }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    onInView();
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [onInView]);

    const floatAnimation = {
        initial: { y: -20 },
        animate: {
            y: [20, -20],
            transition: {
                repeat: Infinity,
                repeatType: "reverse" as const,
                duration: 2,
            },
        },
    };

    const floatAnimationText = {
        initial: { y: -10 },
        animate: {
            y: [10, -10],
            transition: {
                repeat: Infinity,
                repeatType: "reverse" as const,
                duration: 2,
            },
        },
    };

    return (
        <div id="about">
            <div ref={ref} className="about-container">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <motion.div
                            initial="initial"
                            animate="animate"
                            variants={floatAnimation}
                            className="about-motion-container"
                        >
                            <img
                                src="./images/miguel.jpg"
                                alt="Votre profil"
                                className="profile-image"
                            />
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <motion.div
                            initial="initial"
                            animate="animate"
                            variants={floatAnimationText}
                            className="about-motion-container"
                        >
                            <Typography variant="h3" className="about-header">
                                PRÉSENTATION
                            </Typography>
                        </motion.div>
                        <Typography
                            variant="h5"
                            className="about-description"
                            style={{ color: "white" }}
                        >
                            Mon nom est Miguel Boka, je suis un ancien athlète
                            de Sport-Étude Basketball 🏀. Aujourd'hui je me suis
                            reconverti en Développeur Analyste (Full-Stack). Je
                            suis Diplômé d'un DEC en informatique du Collège de
                            Maisonneuve, spécialisé en développement
                            d'applications web et mobile, j'applique la passion,
                            la rigueur et l'esprit d'équipe acquises sur les
                            terrains au monde de la technologie. Mon but est de
                            créer des solutions numériques innovatrices et
                            fonctionnelles, alliant esthétique et performance.
                            🚀🌐
                        </Typography>
                    </Grid>
                </Grid>
            </div>

            <div className="technology-grids-container">
                <TechnologyGrids />
            </div>

            {/* Section Distinctions */}
            <div className="distinctions-section">
                <Typography
                    variant="h1"
                    component="h2"
                    className="distinctions-title"
                >
                    DISTINCTIONS
                </Typography>

                <div className="distinction-item">
                    <Typography
                        variant="subtitle1"
                        className="distinction-description"
                    >
                        Titulaire d'une Bourse CPMT 🎓
                    </Typography>
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={floatAnimationText}
                        className="about-motion-container"
                    >
                        <img
                            src={"/images/diploma.png"}
                            alt="Bourse CPMT"
                            className="distinction-image"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
