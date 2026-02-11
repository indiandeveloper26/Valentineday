'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export default function ValentineForNidhi() {
    const [isAccepted, setIsAccepted] = useState(false);
    const [noPos, setNoPos] = useState({ top: "65%", left: "50%" });

    const handleYes = () => {
        setIsAccepted(true);
        // Premium Hearts & Gold Confetti
        const end = Date.now() + 4 * 1000;
        const colors = ["#ff4b2b", "#ff9a9e", "#ffd700", "#ffffff"];

        (function frame() {
            confetti({
                particleCount: 4,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: colors,
            });
            confetti({
                particleCount: 4,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: colors,
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    };

    const moveNo = () => {
        // Nidhi pakad na paye, isliye fast aur random movement
        const top = Math.random() * 60 + 20 + "%";
        const left = Math.random() * 50 + 25 + "%";
        setNoPos({ top, left });
    };

    return (
        <div style={{
            height: "100dvh",
            width: "100%",
            background: isAccepted
                ? "linear-gradient(135deg, #ff0844 0%, #ffb199 100%)"
                : "linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)", // Pehle ek soft blue-pink mix
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            overflow: "hidden",
            position: "relative",
            transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)"
        }}>

            <AnimatePresence mode="wait">
                {!isAccepted ? (
                    <motion.div
                        key="ask-nidhi"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.2 }}
                        style={{
                            width: "100%",
                            textAlign: "center",
                            zIndex: 10,
                            background: "rgba(255, 255, 255, 0.4)",
                            backdropFilter: "blur(15px)",
                            padding: "40px 20px",
                            borderRadius: "40px",
                            border: "1px solid rgba(255, 255, 255, 0.5)",
                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)"
                        }}
                    >
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 2.5 }}
                            style={{ fontSize: "70px", marginBottom: "15px" }}
                        >
                            🌸
                        </motion.div>

                        <h1 style={{
                            fontSize: "clamp(2rem, 9vw, 3rem)",
                            margin: "10px 0",
                            color: "#c2185b",
                            fontWeight: "800"
                        }}>
                            Hello <span style={{ color: "#ff4b2b" }}>Nidhi</span> ✨
                        </h1>
                        <p style={{
                            fontSize: "1.2rem",
                            color: "#5c5c5c",
                            lineHeight: "1.5"
                        }}>
                            Sahil has a very special <br /> question for you...
                        </p>
                        <h2 style={{ color: "#d81b60", marginTop: "20px", fontSize: "1.5rem" }}>
                            Will you be my Valentine? ❤️
                        </h2>

                        <div style={{ marginTop: "50px", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
                            {/* YES BUTTON */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={handleYes}
                                style={{
                                    width: "90%",
                                    maxWidth: "280px",
                                    padding: "18px",
                                    fontSize: "22px",
                                    borderRadius: "50px",
                                    border: "none",
                                    background: "linear-gradient(45deg, #ee0979, #ff6a00)",
                                    color: "white",
                                    fontWeight: "bold",
                                    boxShadow: "0 10px 30px rgba(238, 9, 121, 0.4)",
                                    cursor: "pointer",
                                    zIndex: 20
                                }}
                            >
                                Yes, I'd love to! 🥰
                            </motion.button>

                            {/* NO BUTTON */}
                            <motion.button
                                animate={{ top: noPos.top, left: noPos.left }}
                                transition={{ type: "spring", stiffness: 600, damping: 25 }}
                                onMouseEnter={moveNo}
                                onTouchStart={moveNo}
                                style={{
                                    position: "absolute",
                                    padding: "12px 30px",
                                    fontSize: "16px",
                                    borderRadius: "50px",
                                    border: "1px solid #ccc",
                                    background: "white",
                                    color: "#888",
                                    transform: "translateX(-50%)",
                                    cursor: "not-allowed"
                                }}
                            >
                                No
                            </motion.button>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="success-nidhi"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        style={{ textAlign: "center", zIndex: 10 }}
                    >
                        <motion.div
                            animate={{
                                y: [0, -20, 0],
                                rotateY: [0, 360]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            style={{ fontSize: "120px" }}
                        >
                            ❤️
                        </motion.div>
                        <h1 style={{
                            fontSize: "clamp(2.5rem, 12vw, 4.5rem)",
                            color: "white",
                            fontWeight: "900",
                            textShadow: "0 5px 15px rgba(0,0,0,0.2)"
                        }}>
                            Sahil ❤️ Nidhi
                        </h1>
                        <p style={{
                            fontSize: "1.5rem",
                            color: "white",
                            marginTop: "10px",
                            fontStyle: "italic",
                            letterSpacing: "1px"
                        }}>
                            Happy Valentine's Day! <br /> You're the best! 🌹✨
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Background Floating Decor */}
            <div style={{ position: "absolute", top: "10%", left: "10%", opacity: 0.2, fontSize: "30px" }}>💖</div>
            <div style={{ position: "absolute", bottom: "15%", right: "15%", opacity: 0.2, fontSize: "40px" }}>✨</div>
        </div>
    );
}