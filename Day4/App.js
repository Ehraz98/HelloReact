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
    const { filteredRestaurants } = props;
    const cards = filteredRestaurants.map(personData => {
        return <CardComponent personData={personData} key={personData.id} />;
    });
    return cards;
};

const BodyComponent = () => {
    const [filteredRestaurants, setFilteredRestaurants] = useState(data);
    return (
        <div className="card-container">
            <SearchBar setFilteredRestaurants={setFilteredRestaurants} />
            <CardContainer filteredRestaurants={filteredRestaurants} />
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
