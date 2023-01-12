import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import ErrorComponent from './ErrorComponent.js';
// import UserComponent from './UserComponent.js';
import ProfileComponent from './ProfileComponent.js';
import BodyComponent from './BodyComponent.js';
import HeadingComponent from './HeadingComponent.js';
// import AboutUs from './AboutUs';

const AboutUs = lazy(() => import('./AboutUs'));
const UserComponent = lazy(() => import('./UserComponent'));

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
                element: (
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <UserComponent />
                    </Suspense>
                ),
            },
            {
                path: '/aboutus',
                element: (
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <AboutUs />
                    </Suspense>
                ),
                children: [
                    {
                        path: '/aboutus/profile',
                        element: <ProfileComponent />,
                    },
                ],
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
