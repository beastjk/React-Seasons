import React from 'react'
import './SeasonDisplay.css'


function getSeason(lat, month){
    if(month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter'
    }
    else{
        return lat > 0 ? 'winter' : 'summer'
    }
}

const seasonConfig = {
    summer : {
        text: "Let's hit the beach",
        iconName: 'sun'
    },
    winter : {
        text: "Burr, it is chilly",
        iconName: 'snowflake'
    }
}

function SeasonDisplay({latitude}) {
    const season = getSeason(latitude, new Date().getMonth());
    const {text, iconName} = seasonConfig[season]
    return (
        <div className = {`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}></i>
            <h2>{text}</h2>
            <i className={`icon-right massive ${iconName} icon`}></i>
        </div>
    )
}

export default SeasonDisplay
