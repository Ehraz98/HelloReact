const SearchResults = (searchData, userData) =>{
    if(searchData === '')
    return userData;
    let result = [];
    userData.forEach(teammate =>{
        const nameArr = teammate.name.split(' ');
        for(x of nameArr)
        {
            if(x.toLowerCase() === searchData.toLowerCase())
            {
                result.push(teammate);
            }
        }
    })
    return result;
}

export default SearchResults;