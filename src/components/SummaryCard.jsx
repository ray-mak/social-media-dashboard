import React from "react";
import Facebook from "../assets/icon-facebook.svg";
import IconUp from "../assets/icon-up.svg";

export default function SummarCard(props) {
    return (
        <div className={`${props.platform} summary--card`}>
            <div className="user--container">
                <img src={props.img} alt={`${props.platform} icon`}/>
                <div className="username">{props.username}</div>
            </div>
            <p className="follower--count">{props.followers}</p>
            <p className="followers">{props.subscribers}</p>
            <div className="change--container">
                <img className="arrow" src={props.arrow} alt={`${props.countDirection}} icon`}/>
                <p className={`count ${props.countDirection}`}>{props.countChange}</p>
            </div>
        </div>
    )
}