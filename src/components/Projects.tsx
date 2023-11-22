import React, { forwardRef, useEffect, useRef } from "react";
import { Typography, Grid, CardMedia, Button } from "@mui/material";
import "./styles/Projects.scss";
import { motion } from "framer-motion";

const Projects = forwardRef<HTMLDivElement, { onInView: () => void }>(
    ({ onInView }) => {
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

            if (ref && ref.current) {
                observer.observe(ref.current);
            }

            return () => {
                if (ref && ref.current) {
                    observer.unobserve(ref.current);
                }
            };
        }, [ref, onInView]);

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

        const projectData = [
            {
                title: "📹 Wadoo (Projet d'école)",
                description:
                    "Wadoo est une plateforme de clavardage, conçue pour permettre aux utilisateurs de communiquer avec des personnes au hasard, inspirée par des services similaires comme Omegle. Elle offre une expérience unique de chat grâce à des chatrooms générés aléatoirement ou créés manuellement, offrant ainsi une variété de rencontres et d'échanges. La plateforme est développée en utilisant des technologies de pointe, notamment React pour une interface utilisateur interactive, socket.io pour une communication en temps réel, et MUI Framework pour un design élégant et réactif du front-end. Wadoo se distingue par sa facilité d'utilisation et son approche moderne du chat en ligne.",
                imageUrl: "/images/wadoo.png",
                reverse: false,
            },
            {
                title: "🍽️ FoodKeeper (Projet d'école)",
                description:
                    "Foodkeeper est une plateforme de gestion de réservations conçue pour les restaurants et leurs clients. Elle est développée avec React/Typescript, offrant ainsi une interface utilisateur intuitive et visuellement attrayante. Pour le back-end, Foodkeeper utilise Express, garantissant une performance fiable et rapide. L'intégration d'une API MSSQL assure une gestion efficace des données, permettant aux restaurants de gérer leurs réservations de manière fluide et aux clients de réserver facilement leurs tables. Cette solution tout-en-un vise à optimiser l'expérience de réservation en restaurant, en combinant technologie de pointe et facilité d'utilisation.",
                imageUrl: "/images/foodkeeper.png",
                reverse: true,
            },
            // Ajoutez d'autres projets ici
        ];

        return (
            <div ref={ref} id="projects">
                <Typography
                    variant="h2"
                    component="h2"
                    className="projectsHeader"
                >
                    MES PROJETS
                </Typography>
                {projectData.map((project, index) => (
                    <Grid
                        container
                        spacing={2}
                        key={index}
                        direction={project.reverse ? "row-reverse" : "row"}
                    >
                        <Grid item xs={12} md={6}>
                            <motion.div
                                initial="initial"
                                animate="animate"
                                variants={floatAnimationText}
                                className="about-motion-container"
                            >
                                <CardMedia
                                    component="img"
                                    image={project.imageUrl}
                                    alt={project.title}
                                    className={
                                        project.reverse
                                            ? "projectImageRight"
                                            : "projectImageLeft"
                                    }
                                />
                            </motion.div>
                        </Grid>
                        <Grid item xs={12} md={6} className="projectText">
                            <div className="textContainer">
                                <Typography
                                    variant="h5"
                                    className="projectTitle"
                                >
                                    {project.title}
                                </Typography>
                                <Typography className="projectDescription">
                                    {project.description}
                                </Typography>
                                <Button
                                    style={{
                                        marginTop: "20px",
                                        backgroundColor: "#d100d1",
                                        color: "black",
                                        opacity: 0.5,
                                        borderRadius: "20px",
                                        padding: "10px 20px",
                                        fontSize: "16px",
                                    }}
                                    disabled
                                >
                                    Visite Indisponible
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                ))}
            </div>
        );
    }
);

export default Projects;
