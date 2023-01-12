import CardContainer from "./CardContainer";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";

const BodyComponent = () => {
    const [filteredTeammates, setFilteredTeammates] = useState([]);
    const [userData, setUsersData] = useState([]);
    useEffect(() => {
        fetchData(setFilteredTeammates, setUsersData);
    }, []);
    return (
        <div className="card-container">
            <SearchBar
                setFilteredTeammates={setFilteredTeammates}
                userData={userData}
            />
            <CardContainer filteredTeammates={filteredTeammates} />
        </div>
    );
};

fetchData = async (setFilteredTeammates, setUsersData) => {
    const userIds = [
        'Ehraz98',
        'ketanmalik',
        'SumitARG',
        'aravindFrontEnd',
        'pandeymeenakshi',
    ];
    const usersData = [];
    for (const user of userIds) {
        const data = await fetch(`https://api.github.com/users/${user}`);
        const json = await data.json();
        usersData.push(json);
    }
    setFilteredTeammates(usersData);
    setUsersData(usersData);
};

export default BodyComponent;