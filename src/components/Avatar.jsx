import React, {useContext, useState} from 'react';
import {UserContext} from "../utils/useContext.js";

const Avatar = ({size}) => {
    const {image, setImage, setName} = useContext(UserContext);


    const handleClickLeft = () => {
        const name = prompt('Insert name for monster', '');
        if (name) {
            setName(name);
        }
    };

    const handleClickRight = (e) => {
        e.preventDefault();
        const randomMonster = `https://gravatar.com/avatar/${Math.floor(1 + Math.random() * 25)}?d=monsterid`;

        setImage(randomMonster);
    };

    return (
        <div>
            <img onClick={handleClickLeft} onContextMenu={handleClickRight} src={image}
                 className={`user-avatar ${size ?? ''}`} alt={'avatar'}/>
        </div>
    );
};

export default Avatar;