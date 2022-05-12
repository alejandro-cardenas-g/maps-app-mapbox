import { createContext } from "react";
import { Feature } from "../../interfaces/places";

export interface IPlacesContextProps{
    isLoading: boolean;
    userLocation?: [number, number];
    searchPlacesByQuery: (query: string) => Promise<Feature[]>;
    isLoadingPlaces: boolean;
    places: Feature[]
}

export const PlacesContext = createContext<IPlacesContextProps>({} as IPlacesContextProps);