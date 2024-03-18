import React from "react";
import Instagram from "../assets/icon-instagram.svg";
import Twitter from "../assets/icon-twitter.svg";
import Youtube from "../assets/icon-youtube.svg";
import Facebook from "../assets/icon-facebook.svg";
import IconUp from "../assets/icon-up.svg";
import IconDown from "../assets/icon-down.svg";
import OverviewCard from "./OverviewCard";

export default function MainContainer() {
    return (
        <main>
            <h2 className="overview--text">Overview - Today</h2>
            <div className="overview--container">
                <OverviewCard
                    label="Page Views"
                    img={Facebook}
                    platform="facebook"
                    count="87"
                    arrow={IconUp}
                    arrowDirection="up"
                    change="3%" 
                />
                <OverviewCard
                    label="Likes"
                    img={Facebook}
                    platform="facebook"
                    count="52"
                    arrow={IconDown}
                    arrowDirection="down"
                    change="2%" 
                />
                <OverviewCard
                    label="Likes"
                    img={Instagram}
                    platform="instagram"
                    count="5462"
                    arrow={IconUp}
                    arrowDirection="up"
                    change="2257%" 
                />
                <OverviewCard
                    label="Profile Views"
                    img={Instagram}
                    platform="instagram"
                    count="52K"
                    arrow={IconUp}
                    arrowDirection="up"
                    change="1375%" 
                />
                <OverviewCard
                    label="Retweets"
                    img={Twitter}
                    platform="twitter"
                    count="117"
                    arrow={IconUp}
                    arrowDirection="up"
                    change="303%" 
                />
                <OverviewCard
                    label="Likes"
                    img={Twitter}
                    platform="twitter"
                    count="507"
                    arrow={IconUp}
                    arrowDirection="up"
                    change="553%" 
                />
                <OverviewCard
                    label="Likes"
                    img={Youtube}
                    platform="youtube"
                    count="107"
                    arrow={IconDown}
                    arrowDirection="down"
                    change="19%" 
                />
                <OverviewCard
                    label="Total Views"
                    img={Youtube}
                    platform="youtube"
                    count="1407"
                    arrow={IconDown}
                    arrowDirection="down"
                    change="12%" 
                />
            </div>
        </main>
    )
}