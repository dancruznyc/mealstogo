import React, {createContext, useState, useEffect} from 'react';

import { locationRequest, locationTransform } from './location.service';

export const LocationContext = createContext();
export const LocationContextProvider = ({children}) => {
    const [keyword, setKeyword] = useState('san francisco');
    const [location, setLocation] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSearch = (searchKeyword) => {
        
        setIsLoading(true);
        setKeyword(searchKeyword);
        console.log(searchKeyword)
        if(!searchKeyword.length) {return;}
        locationRequest(searchKeyword.toLowerCase())
        .then(locationTransform)
        .then(res => {
            setIsLoading(false);
            setLocation(res);
            console.log(res)
        }) .catch(err => {
            setIsLoading(false);
            setError(err);
            console.log(err)
        })
    }

    // useEffect(()=>{
    //     onSearch(keyword);
    // }, [])

    return (
        <LocationContext.Provider 
            value={{
                isLoading, 
                error, 
                location, 
                search: onSearch,
                keyword 
            }}>
            {children}
        </LocationContext.Provider>
    )
}