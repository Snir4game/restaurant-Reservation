import { useState,useEffect} from "react";
import Homepage from "../home/homepage";
import "./intro.css";
const Intro = () => {

    const [showIntro, setShowIntro] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const fadeTimer = setTimeout(() => {
            setFadeOut(true);
        },4000);

        const hideTimer = setTimeout(() => {
            setShowIntro(false);
        },4000);
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
                <h1 className="restName">Manelo</h1>
                <p className="year">Establish 1993</p>
            </div>
        </div>
    )

};

export default Intro;