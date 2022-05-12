/* eslint import/no-webpack-loader-syntax: off */

//@ts-ignore
import { Map, Marker } from "!mapbox-gl";
import { createContext } from "react";

interface IMapContextProps{
    isMapReady: boolean;
    map?: Map,
    setMap: (map: Map) => void;
    markers: Marker[];
    getRouteBetweenPoint: (start: [number, number], end: [number, number]) => Promise<void>
}

export const MapContext = createContext({} as IMapContextProps);