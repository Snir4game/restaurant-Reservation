import { useState,useEffect } from "react";
import Homepage from "../home/homepage";
const Intro = () => {

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


    if(!showIntro)
        return(
           <Homepage />
        )

    return (
        <div className="Intro-Body">
            <div className="Intro-Text-name">
                <h1 className="restName"></h1>
                <p className="year"></p>
            </div>
        </div>
    )

};

export default Intro;