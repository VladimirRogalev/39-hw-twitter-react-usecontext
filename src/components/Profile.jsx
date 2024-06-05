import React, {useContext} from 'react';
import Avatar from "./Avatar.jsx";
import {UserContext} from "../utils/useContext.js";

const Profile = () => {
    const {name} =useContext(UserContext)
    // const {image, setImage} = useContext(UserContext)
    return (
        <div className={'user-stats'}>
            <Avatar  size={'big'}/>
            <h2>{name}</h2>
        </div>
    );
};

export default Profile;