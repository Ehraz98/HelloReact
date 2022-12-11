import data from './data.json';

const SearchResults = (searchData) =>{
    if(searchData === '')
    return data;
    let result = [];
    data.forEach(teammate =>{
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