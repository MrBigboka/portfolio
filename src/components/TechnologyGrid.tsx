import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "./styles/TechnologyGrid.scss";
import TechnologyGridItem from "./TechnologyGridItems";
import { Technology } from "../types/Technology";

const TechnologyGrids: React.FC = () => {
    const masteredTechnologies: Technology[] = [
        { name: "React", image: "./images/react.png" },
        { name: "Node.js", image: "./images/node.png" },
        { name: "Typescript", image: "./images/typescript.png" },
        { name: "Jest", image: "./images/jest.png" },
        { name: "Cypress", image: "./images/cypress.png" },
        { name: "AWS", image: "./images/aws.png" },
        { name: "Socket.io", image: "./images/socketio.png" },
        { name: "Kotlin", image: "./images/kotlin.png" },
        { name: "DevOps", image: "./images/devops.png" },
        { name: "Firebase", image: "./images/firebase.png" },
        { name: "SASS", image: "./images/sass.png" },
        { name: "Vue.js", image: "./images/vuejs.png" },
        { name: "MongoDB", image: "./images/mongodb.png" },
        { name: "Git", image: "./images/git.png" },
    ];

    const touchedTechnologies: Technology[] = [
        { name: "Docker", image: "./images/docker.png" },
        { name: "Kubernetes", image: "./images/kurbenetes.png" },
        { name: "Python", image: "./images/python.png" },
        { name: "C#", image: "./images/c.png" },
        { name: "Visual Studio", image: "./images/vs.png" },
        { name: "Java", image: "./images/java.jpg" },
    ];

    const learningTechnologies: Technology[] = [
        { name: ".NET", image: "./images/net.png" },
    ];

    return (
        <Grid container spacing={3} className="container">
            <Grid item xs={12} md={4}>
                <Typography variant="h6" className="technology-grid-title">
                    Technologies Maîtrisées 💻🔧⚙️
                </Typography>
                {masteredTechnologies.map((tech) => (
                    <TechnologyGridItem key={tech.name} technology={tech} />
                ))}
            </Grid>
            <Grid item xs={12} md={4}>
                <Typography variant="h6" className="technology-grid-title">
                    Technologies Touchées 📚👩‍💻🧠
                </Typography>
                {touchedTechnologies.map((tech) => (
                    <TechnologyGridItem key={tech.name} technology={tech} />
                ))}
            </Grid>
            <Grid item xs={12} md={4}>
                <Typography variant="h6" className="technology-grid-title">
                    Technologies en Apprentissage 🖐️🤖🌐
                </Typography>
                {learningTechnologies.map((tech) => (
                    <TechnologyGridItem key={tech.name} technology={tech} />
                ))}
            </Grid>
        </Grid>
    );
};

export default TechnologyGrids;
