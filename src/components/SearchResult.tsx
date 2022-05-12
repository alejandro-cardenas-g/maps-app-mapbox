import { useContext, useState } from "react"
import { MapContext } from "../context/map/MapContext"
import { PlacesContext } from "../context/places/PlacesContext"
import { Feature } from "../interfaces/places"
import { PlacesLoading } from "./"

export const SearchResult = () => {

    const {places, isLoadingPlaces, userLocation} = useContext(PlacesContext)
    const { map, getRouteBetweenPoint } = useContext(MapContext)

    const [activeId, setActiveId] = useState('');

    if(isLoadingPlaces) return <PlacesLoading/>

    if(places.length === 0) return <></>

    const onPlaceClick = (place: Feature) => {

        const [lng, lat] = place.center;

        map?.flyTo({
            zoom: 14,
            center: [lng,lat]
        });

        setActiveId(place.id);

    }

    const getRoute = (place: Feature) => {

        if(!userLocation) return;
        const [lng,lat] = place.center;
        getRouteBetweenPoint(userLocation, [lng,lat])

    }

    return (
        <ul className='list-group'
            style={{
                margin: '8px auto',
                width:'230px',
            }}
        >

            {   
                places.map(place => (
                    <li 
                        key={place.id}
                        onClick={() => onPlaceClick(place)}
                        className={`list-group-item list-group-item-action pointer ${(activeId === place.id) ? 'active' : ''} `}
                    >
                        <h6>{place.text_es}</h6>
                        <p className={`${(activeId === place.id) ? '' : 'text-muted'}`}
                            style={{
                                fontSize: '12px'
                            }}
                        >
                            {place.place_name}
                        </p>
                        <button className={`${(activeId === place.id) ? 'btn btn-outline-light btn-sm' : 'btn btn-outline-primary btn-sm'}`}
                            onClick={() => getRoute(place)}
                        >
                            Direcciones
                        </button>
    
                    </li>
                ))
            }


        </ul>
    )
}
