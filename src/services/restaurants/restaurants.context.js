import React, {useState, createContext, useEffect, useMemo} from 'react';

import { restaurantsRequest, restaurantsTransform} from './restaurants.service';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({children}) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const retreiveRestaurants = () => {
        setIsLoading(true);
        setTimeout(()=> {
            restaurantsRequest().then(restaurantsTransform).then(res=> {
                setRestaurants(res)
                setIsLoading(false)
            }).catch(err=> {
                setError(err);
                setIsLoading(false)
            })
        }, 2000)
    }

    useEffect(()=>{
        retreiveRestaurants();
    }, [])

    return (
        <RestaurantsContext.Provider value={{restaurants, isLoading, error}}>
            {children}
        </RestaurantsContext.Provider>
    )
}