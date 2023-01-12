import { useEffect, useState } from 'react';
import stateMap from '../utils/state-city.json';

const useCities = state => {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        fetchCities(state,setCities);
    }, [state]);

    return cities;
};

const fetchCities = async(state,setCities) => {
    // const data = await fetch('api.ur.getCities?state={stateName}');
    const json =stateMap[state];
    setCities(json);
};

export default useCities;