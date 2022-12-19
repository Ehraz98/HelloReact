import ReactDOM from 'react-dom/client';
import CardComponent from './CardComponent.js';
import { title } from './constants.js';
import SearchBar from './SearchBar.js';
import { useEffect, useState } from 'react';
import NoResultsComponent from './NoResultsComponent.js';
import { createBrowserRouter, RouterProvider, Outlet, Link } from 'react-router-dom';
import ErrorComponent from './ErrorComponent.js';
import UserComponent from './UserComponent.js';

const HeadingComponent = () => (
    <div id="title" className="title-class" tabIndex="1">
        <h2>{title}</h2>
    </div>
);

const CardContainer = props => {
    const { filteredTeammates } = props;
    if (filteredTeammates.length) {
        const cards = filteredTeammates.map(personData => {
            return (
                <Link to={`/user/${personData.login}`} key={personData.id}>
                    <CardComponent
                        personData={personData}
                    />
                </Link>
            );
        });
        return cards;
    } else {
        return <NoResultsComponent />;
    }
};

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

const AppLayout = () => (
    <>
        <HeadingComponent />
        <Outlet />
    </>
);

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <ErrorComponent />,
        children: [
            {
                path: '/',
                element: <BodyComponent />,
            },
            {
                path: '/user/:githubId',
                element: <UserComponent />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
