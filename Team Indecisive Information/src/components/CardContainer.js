import CardComponent from "./CardComponent";
import NoResultsComponent from "./NoResultsComponent";
import { Link } from "react-router-dom";

const CardContainer = props => {
    const { filteredTeammates } = props;
    if (filteredTeammates.length) {
        const cards = filteredTeammates.map(personData => {
            return (
                <Link to={`/user/${personData.login}`} key={personData.id}>
                    <CardComponent personData={personData} />
                </Link>
            );
        });
        return cards;
    } else {
        return <NoResultsComponent />;
    }
};

export default CardContainer;