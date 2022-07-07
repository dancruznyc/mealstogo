import React, {useState, createContext, useEffect, useMemo, useContext} from 'react';
import { LocationContext } from '../location/location.context';

import { restaurantsRequest, restaurantsTransform} from './restaurants.service';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({children}) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const {location} = useContext(LocationContext);

    const retreiveRestaurants = (loc) => {
        setIsLoading(true);
        setRestaurants([]);
        setTimeout(()=> {
            restaurantsRequest(loc).then(restaurantsTransform).then(res=> {
                setRestaurants(res)
                setIsLoading(false)
            }).catch(err=> {
                setError(err);
                setIsLoading(false)
            })
        }, 2000)
    }

    useEffect(()=>{
        if(location){
        const locationString = `${location.lat},${location.lng}`
        retreiveRestaurants(locationString);
    }
    }, [location])

    return (
        <RestaurantsContext.Provider value={{restaurants, isLoading, error}}>
            {children}
        </RestaurantsContext.Provider>
    )
}