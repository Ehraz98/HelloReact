import { title } from '../utils/constants';
import { Link } from 'react-router-dom';

const HeadingComponent = () => (
    <div id="title" className="title-class" tabIndex="1">
        <Link to="/">
            <h2>{title}</h2>
        </Link>
        <Link to="/aboutus">
            <span>About Us</span>
        </Link>
        <Link to="/aboutus/profile">
            <span>Profile</span>
        </Link>
    </div>
);

export default HeadingComponent;
