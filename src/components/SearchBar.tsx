import React, { ChangeEvent, useContext, useRef } from 'react'
import { PlacesContext } from '../context/places/PlacesContext';
import { SearchResult } from './';

export const SearchBar = () => {

    const {searchPlacesByQuery, places} = useContext(PlacesContext);

    const debounceRef = useRef<NodeJS.Timeout>();

    const onQueryChange = (e:ChangeEvent<HTMLInputElement>) => {

        if(debounceRef.current){
            clearTimeout(debounceRef.current);
        }

        debounceRef.current = setTimeout(() => {
            //Todo: ejecutar consulta
            console.log(e.target.value);
            searchPlacesByQuery(e.target.value);
        }, 400)

    }

    return (
        <div className="search-container"
            style={{
                overflowY: (places.length > 0) ? 'scroll' : 'auto'
            }}
        >

            <input type='text'
                className="form-control"
                placeholder='lugar'
                onChange={onQueryChange}
                style={{
                    margin: '8px auto',
                    width:'230px'
                }}
            ></input>

            <SearchResult/>

        </div>
    )
}
