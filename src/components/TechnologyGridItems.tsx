import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import "./styles/TechnologyGridItem.scss";
import { TechnologyGridItemProps } from "../types/Technology";

const TechnologyGridItem: React.FC<TechnologyGridItemProps> = ({
    technology,
}) => {
    return (
        <Paper className="technology-item" elevation={3}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={4}>
                    <img
                        src={technology.image}
                        alt={technology.name}
                        className="technology-logo"
                    />
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="subtitle1">
                        {technology.name}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default TechnologyGridItem;
