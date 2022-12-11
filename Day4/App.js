import ReactDOM from 'react-dom/client';
import CardComponent from './CardComponent.js';
import data from './data.json';
import { title } from './constants.js';
import SearchBar from './SearchBar.js';
import { useState } from 'react';

const HeadingComponent = () => (
    <div id="title" className="title-class" tabIndex="1">
        <h2>{title}</h2>
    </div>
);

const CardContainer = props => {
    const { filteredTeammates } = props;
    const cards = filteredTeammates.map(personData => {
        return <CardComponent personData={personData} key={personData.id} />;
    });
    return cards;
};

const BodyComponent = () => {
    const [filteredTeammates, setFilteredTeammates] = useState(data);
    return (
        <div className="card-container">
            <SearchBar setFilteredTeammates={setFilteredTeammates} />
            <CardContainer filteredTeammates={filteredTeammates} />
        </div>
    );
};

const AppLayout = () => (
    <>
        <HeadingComponent />
        <BodyComponent />
    </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
