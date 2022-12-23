import { useState } from "react";
import SearchResults from "./SearchResults";
import stateObj from '../utils/state-city.json'
import useCities from "./useCities";

const SearchBar = (props) => {
    const {setFilteredTeammates, userData}= props;
    const [searchText, setSearchText] = useState("");
    const [stateName, setStateName] = useState("Bihar");
    const [cityName, setCityName] = useState();
    const cityList = useCities(stateName);

    return (
        <div className="search">
            <form
            onSubmit={
                (e)=>{
                    e.preventDefault();
                    const searchTextResult = SearchResults(searchText, userData);
                    setFilteredTeammates(searchTextResult);
                }
            }
            >
                <input id="teammates" value={searchText} placeholder="teammates" 
                onChange={
                    (e) =>{
                        setSearchText(e.target.value);
                    }
                }
                />
                <select value={stateName} onChange={(e)=>{
                    setStateName(e.target.value);
                }}>
                    {Object.keys(stateObj).map((state)=> (
                     <option key={state} value={state}>
                        {state}
                     </option>   
                    ))}
                </select>

                <select value={cityName} onChange={(e)=>{
                    setCityName(e.target.value);
                }}>
                    {cityList.map((city)=> (
                     <option key={city} value={city}>
                        {city}
                     </option>   
                    ))}
                </select>
                <button>Search</button>
            </form>
        </div>
    );
};

export default SearchBar;