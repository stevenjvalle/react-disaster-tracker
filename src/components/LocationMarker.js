import {Icon} from '@iconify/react'
import fireIcon from '@iconify/icons-mdi/fire-alert' 
import hurricaneIcon from '@iconify/icons-mdi/hurricane.js'
import severeStormIcon from '@iconify/icons-mdi/storm-advisory'
import defaultIcon from '@iconify/icons-mdi/hamburger'
const LocationMarker = ({lat, lng, eventId, onClick}) => {
    const locationIcons = {
        8: fireIcon,
        10: severeStormIcon
    }
    const locationIconNames = {
        8: "fire-icon",
        10: "storm-icon"
    }
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={locationIcons[eventId]} className={locationIconNames[eventId]} />
        </div>
    )
}

export default LocationMarker
