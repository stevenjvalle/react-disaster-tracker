import React from 'react'
import LocationMarker from './LocationMarker'

const LocationInfoBox = ({info}) => {
    return (
        <div className="location-info">
            <h2> Event Location Info </h2>

            <ul>
                <li>ID: <strong> { info.id } </strong></li>
                <li> Title: <strong>{info.title} </strong> </li>
                {/* <li> Event Link: <a href={info.link}> {info.link} </a></li> */}
            </ul>
        </div>
    )
}

export default LocationInfoBox
