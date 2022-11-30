import React from 'react';
import ReactDOM from 'react-dom/client';

// Nested Header using React.createElement

// const heading = React.createElement("div",{id: "title"},[
//     React.createElement("h1", {} , "Heading1"),
//     React.createElement("h2", {} , "Heading2"),
//     React.createElement("h3", {} , "Heading3"),
// ])

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

// Nested Header using JSX

const h1=1;
const h2=2;
const h3=3;
const HeaderComponent = () => (
    <>
        <h1>Heading{h1}</h1>
        <h2>Heading{h2}</h2>
        <h3>Heading{h3}</h3>
    </>
);

const TitleComponent = () => (
    <div id="title" className='title-class'>
        <HeaderComponent />
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TitleComponent />);
