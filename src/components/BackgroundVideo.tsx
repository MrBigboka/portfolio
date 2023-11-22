import React from "react";
import "./BackgroundVideo.scss";

type BackgroundVideoProps = {
    videoSource: string;
    children: React.ReactNode;
};

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
    videoSource,
    children,
}) => (
    <div className="video-background-container">
        <video autoPlay loop muted className="video-background">
            <source src={videoSource} type="video/mp4" />
        </video>
        <div className="video-content">{children}</div>
    </div>
);

export default BackgroundVideo;
