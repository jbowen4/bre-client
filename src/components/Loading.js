import React from 'react';
import { motion } from 'framer-motion';

const containerStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
}

const circleStyle = {
    position: "absolute",
    width: "20px",
    height: "20px",
    border: "5px solid #e9e9e9",
    borderTop: "5px solid #3498db",
    borderRadius: "50%",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)"
}

const spinTransition = {
    loop: Infinity,
    duration: 1,
    ease: "linear"
}

export default function Loading() {
    return (
        <div style={containerStyle}>
            <motion.span
                style={circleStyle}
                animate={{ rotate: 360 }}
                transition={spinTransition}
            />
        </div>
    )
}