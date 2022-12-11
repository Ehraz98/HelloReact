import { useState } from "react";
import SearchResults from "./SearchResults";

const SearchBar = (props) => {
    const {setFilteredTeammates}= props;
    const [searchText, setSearchText] = useState("Ehraz");
    return (
        <div className="search">
            <form
            onSubmit={
                (e)=>{
                    e.preventDefault();
                    const searchTextResult = SearchResults(searchText);
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
                <button>Search</button>
            </form>
        </div>
    );
};

export default SearchBar;