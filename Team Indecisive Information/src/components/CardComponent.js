const CardComponent = props => {
    const personData = props.personData;
    const { avatar_url, name, location, bio, company, html_url } = personData;
    const companydesignation = `${bio}, ${company}`;
    return (
        <div id="card" className="card">
            <img src={avatar_url} />
            <h3>{name}</h3>
            <h5>{location}</h5>
            <h5>{companydesignation}</h5>
            <div className="card-item-details" onClick={(event) => {
                        event.stopPropagation();
                        window.open(html_url , '_blank');
                    }}>
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
                <span>
                    {name}
                </span>
            </div>
        </div>
    );
};

export default CardComponent;
