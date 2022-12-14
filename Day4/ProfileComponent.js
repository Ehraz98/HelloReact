import { Component } from 'react';
class ProfileComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: {}
        };
    }

    async componentDidMount(){
        const data = await fetch(`https://api.github.com/users/Ehraz98`);
        const json = await data.json();
        this.setState({
            userInfo: json
        });
    }

    render() {
        const {login,company,avatar_url} = this.state.userInfo;
        return (
            <div>
                <img src={avatar_url}/>
                <p>{login}</p>
                <p>{company}</p>
            </div>
        );
    }
    
}

export default ProfileComponent;
