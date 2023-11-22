import React from "react";
import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => {
    return (
        <Box
            sx={{
                bgcolor: "rgba(0, 0, 0, 0.7)", // Fond noir avec de l'opacité
                color: "white",
                textAlign: "center",
                py: 3, // Padding vertical
            }}
        >
            <Typography variant="subtitle1">
                Site créé entièrement par Miguel Boka 🤓
            </Typography>
        </Box>
    );
};

export default Footer;
