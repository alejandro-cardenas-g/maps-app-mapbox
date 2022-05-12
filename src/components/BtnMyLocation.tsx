import { useContext } from "react";
import { MapContext } from "../context/map/MapContext";
import { PlacesContext } from "../context/places/PlacesContext";

export const BtnMyLocation = () => {

    const {userLocation} = useContext(PlacesContext);
    const {isMapReady, map} = useContext(MapContext);

    const handleOnClick = () => {

        if(!isMapReady) throw new Error('Mapa no está listo');
        if(!userLocation) throw new Error('No hay ubicación de usuario');

        map?.flyTo({
            zoom: 14,
            center: userLocation
        })

    }

    return (
        <button
            onClick={handleOnClick} 
            className="btn btn-primary"
            style={{
                position: 'fixed',
                top: '20px',
                right: '20px',
                zIndex: '999'
            }}
        >My Ubicación</button>
    )
}
