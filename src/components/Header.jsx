import React from "react";
import { useState, useEffect } from "react";
import Facebook from "../assets/icon-facebook.svg";
import IconUp from "../assets/icon-up.svg";
import IconDown from "../assets/icon-down.svg";
import SummaryCard from "./SummaryCard";
import Instagram from "../assets/icon-instagram.svg";
import Twitter from "../assets/icon-twitter.svg";
import Youtube from "../assets/icon-youtube.svg";

function Header() {
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkmode") === "enabled");

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("darkmode");
            localStorage.setItem("darkmode", "enabled");
        } else {
            document.body.classList.remove("darkmode");
            localStorage.setItem("darkmode", "disabled")
        }
    }, [darkMode])

    function toggleDarkmode() {
        setDarkMode(prevDarkMode => !prevDarkMode)
    }

    
    return (
        <header>
            <div className="top--container">
                <div className="title--container">
                    <h1 className="title">Social Media Dashboard</h1>
                    <p className="subtitle">Total Followers: 23,004</p>
                </div>
                <div className="title--divider"></div>
                <div className="darkmode--container">
                    <p className="subtitle">Dark Mode</p>
                    <div id="darkmode--btn" type="button" onClick={toggleDarkmode}>
                        <div className="slider"></div>
                    </div>
                </div>
            </div>
            <div className="summary--container">
                <SummaryCard 
                    platform="facebook"
                    img={Facebook}
                    username="@nathanf"
                    followers="1987"
                    subscribers="FOLLOWERS"
                    arrow={IconUp}
                    countDirection="up"
                    countChange="12 today"
                />
                <SummaryCard 
                    platform="twitter"
                    img={Twitter}
                    username="@nathanf"
                    followers="1044"
                    subscribers="FOLLOWERS"
                    arrow={IconUp}
                    countDirection="up"
                    countChange="99 today"
                />
                <SummaryCard 
                    platform="instagram"
                    img={Instagram}
                    username="@realnathanf"
                    followers="11K"
                    subscribers="FOLLOWERS"
                    arrow={IconUp}
                    countDirection="up"
                    countChange="1099 today"
                />
                <SummaryCard 
                    platform="youtube"
                    img={Youtube}
                    username="@Nathan F."
                    followers="8239"
                    subscribers="SUBSCRIBERS"
                    arrow={IconDown}
                    countDirection="down"
                    countChange="144 today"
                />
            </div>
        </header>
    )
}

export default Header;