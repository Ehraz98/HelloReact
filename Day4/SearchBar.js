import { useState } from "react";
import SearchResults from "./SearchResults";

const SearchBar = (props) => {
    const {setFilteredTeammates, userData}= props;
    const [searchText, setSearchText] = useState("");
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
                <button>Search</button>
            </form>
        </div>
    );
};

export default SearchBar;