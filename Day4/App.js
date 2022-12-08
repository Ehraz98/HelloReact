import ReactDOM from 'react-dom/client';
import CardComponent from './CardComponent.js';

const title = 'Indecisive';
const altImg =
    'https://www.pngitem.com/pimgs/m/661-6619328_default-avatar-png-blank-person-transparent-png.png';

const data = [
    {
        photo: altImg,
        name: 'Ehraz Ahmad',
        place: 'Hoodi, Bangalore',
        Company: 'Full Stack Developer,Symphony Talent',
        linkedin: 'https://www.linkedin.com/in/ehraz-ahmad-2b416a24a/',
        id: 1
    },
    {
        photo: altImg,
        name: 'Sumit Gokhale',
        place: 'Brookfield, Bangalore',
        Company: 'Ciena, Software Engineer 2',
        linkedin: 'https://www.linkedin.com/in/sumit-gokhale/',
        id: 2
    },
    {
        photo: 'https://aravind-g-portfolio.netlify.app/images/aravind-mall.jpg',
        name: 'Aravind Ganesh',
        place: 'Thiruvallur , TamilNadu',
        Company: 'Epsilon',
        Designation: 'Front End Developer 2',
        linkedin: 'https://www.linkedin.com/in/aravind-g-frontend/',
        'discord-id': 'AravindGanesh#4021',
        id: 3
    },
    {
        photo: 'https://scontent.fdel27-5.fna.fbcdn.net/v/t1.6435-9/120300090_1401917953339744_4526160489616159108_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=vf01-5emDmEAX-A_b6P&tn=cOTsm3FbCjEH4WMU&_nc_ht=scontent.fdel27-5.fna&oh=00_AfA-HYnJL6dh8lVSiv1kfJyVhldGgo-Jz4JVVohCYD3V_g&oe=63A84959',
        name: 'Meenakshi Pandey',
        place: 'Electronic City, Bangalore ',
        Company: 'Siemens Healthineers',
        Designation: 'Full Stack Developer',
        linkedin: 'www.linkedin.com/in/meenakshi-pandey-590b3079',
        'discord-id': 'meenakshipandey#1422',
        id: 4
    },
    {
        photo: altImg,
        name: 'Sudhanshu Kansal',
        place: 'Ghaziabad',
        College: 'Lovely Professional University ',
        Designation: 'Aspiring Software Engineer ',
        linkedin: 'https://www.linkedin.com/in/sudhanshukansal09/',
        'discord-id': 'sudhanshukansal#6088',
        id: 5
    },
    {
        photo: altImg,
        name: 'Ketan Malik',
        place: 'Delhi',
        Company: 'Amazon',
        Designation: 'Software Dev Engineer 1',
        linkedin: 'https://www.linkedin.com/in/ketanmalik/',
        'discord-id': 'ketanmalik#2207',
        id: 6
    },
];

const HeadingComponent = () => (
    <div id="title" className="title-class" tabIndex="1">
        <h2>{title}</h2>
    </div>
);


const CardContainer = () => {
    const cards = data.map((personData) => {
        return (<CardComponent personData={personData} key={personData.id}/>);
    }); 
    return cards;
};

const BodyComponent = () => (
    <div className="card-container">
        <CardContainer/>
    </div>
);

const AppLayout = () => (
    <>
        <HeadingComponent />
        <BodyComponent />
    </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
