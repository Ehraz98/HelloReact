import React from 'react';
import { Outlet } from 'react-router-dom';
class AboutUs extends React.Component {
    render() {
        return (
            <>
                <h1>About Us</h1>
                <Outlet />
            </>
        );
    }
}

export default AboutUs;
