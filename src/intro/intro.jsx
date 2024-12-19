import { useState,useEffect } from "react";

const intro = () => {

    const [showIntro, setShowIntro] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const fadeTimer = setTimeout(() => {
            setFadeOut(true);
        },2000);

        const hideTimer = setTimeout(() => {
            setShowIntro(false);
        },3000);
        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(hideTimer);
        };
    },[]);