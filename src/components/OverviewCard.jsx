import React from "react";

export default function OverviewCard(props) {
    return (
        <div className="overview--card">
            <div className="subtitle">{props.label}</div>
            <img className="icon" src={props.img} alt={`${props.platform} icon`}/>
            <div className="overview--count">{props.count}</div>
            <div className="overview--change-container">
                <img className="arrow" src={props.arrow} alt={`${props.arrowDirection} icon`}/>
                <div className={`count ${props.arrowDirection}`}>{props.change}</div>
            </div>
        </div>
    )
}