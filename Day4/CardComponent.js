const CardComponent = (props) => {
    const personData = props.personData;
    const {photo, name, place, Company, linkedin} = personData;
    return (
        <div id="card" className="card">
            <img src={photo}/>
            <h3>{name}</h3>
            <h5>{place}</h5>
            <h5>{Company}</h5>
            <div className="linkedin card-item-details">
                <img src="https://namaste-react-playground-ricz5c1x0-sumitarg.vercel.app/linkedin.4ce9be1b.svg" />
                <a
                    href={linkedin}
                    target="_blank"
                >
                    {name}
                </a>
            </div>
        </div>
    );
};

export default CardComponent;