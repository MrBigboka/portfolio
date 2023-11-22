import React, { useEffect, useRef, useState } from "react";
import "./styles/Home.scss";
import { Typography } from "@mui/material";
import underlineImage from "./images/underline.png";

const Home: React.FC<{ onInView: () => void }> = ({ onInView }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [animateImage, setAnimateImage] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    onInView();
                    // Démarrer l'animation de l'image après que les textes sont animés
                    setTimeout(() => {
                        setAnimateImage(true);
                    }, 1100); // Ajustez ce temps selon la durée de l'animation de votre texte
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

    return (
        <div ref={ref} className="home-container" id="home">
            <div className="home-content">
                <Typography variant="h4" className="name-text animated-element">
                    Miguel Boka
                </Typography>
                <Typography variant="h4" className="role-text animated-element">
                    Developpeur
                </Typography>
                <Typography variant="h4" className="role-text animated-element">
                    Full-Stack
                </Typography>
                <Typography variant="h4" className="role-text animated-element">
                    Portfolio
                </Typography>
                <img
                    src={underlineImage}
                    alt="underline"
                    className={`underline-image ${
                        animateImage ? "animate" : ""
                    }`}
                    style={{ width: "500px", height: "auto" }}
                />
            </div>
        </div>
    );
};

export default Home;
