import React, { useState } from 'react'
import Autocomplete from 'react-google-autocomplete'


const LocationSearch = () => {
    const [location, setLocation] = useState({lat: null, lon: null})

    const handleSearch = place => {
        const lat = place.geometry.location.lat()
        const lon = place.geometry.location.lng()
        // console.log(lat, lon)
        setLocation({lat, lon})
    }

    return (
        <div className="search-container">
            <Autocomplete
                style={{width: '90%'}}
                onPlaceSelected={(place) => {
                console.log(place);
                handleSearch(place)
                }}
                // types={['(regions)']}
                componentRestrictions={{country: "us"}}
            />
        </div>
    )
}


export default LocationSearch