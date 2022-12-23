import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardComponent from "./CardComponent";
const UserComponent = () =>{
    const { githubId } = useParams();
    const [userInfo, setUserInfo] = useState({});
    useEffect(()=>{
        fetchUserInfo(githubId,setUserInfo);
    }, []);
    return <CardComponent personData = {userInfo}/>;
}


const fetchUserInfo = async(githubId, setUserInfo)=>{
    const data = await fetch(`https://api.github.com/users/${githubId}`);
    const json =  await data.json();
    setUserInfo(json);
}
export default UserComponent;