import React, {createContext, useState, useEffect} from 'react';

import { locationRequest, locationTransform } from './location.service';

export const LocationContext = createContext();
export const LocationContextProvider = ({children}) => {
    const [location, setLocation] = useState(null);
    const [keyword, setKeyword] = useState('san francisco');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSearch = (searchKeyword) => {
        setIsLoading(true)
        locationRequest(keyword).then(locationTransform)
        .then(res => {
            setIsLoading(false);
            setLocation(res);
        }) .catch(err => {
            setIsLoading(false)
            setError(error)
        })
    }

    useEffect(()=>{}, [])

    return (
        <LocationContext.Provider value={{
            isLoading, 
            error, 
            location, 
            search: ()=> null,
            keyword 
            }}>
            {children}
            </LocationContext.Provider>
    )
}