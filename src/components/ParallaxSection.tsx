import React from "react";
import { Parallax } from "react-parallax";
import { Box } from "@mui/material";

interface ParallaxSectionProps {
    image: string;
    children: React.ReactNode;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
    image,
    children,
}) => (
    <Parallax bgImage={image} strength={500}>
        <Box style={{ height: 500 }}>{children}</Box>
    </Parallax>
);

export default ParallaxSection;
