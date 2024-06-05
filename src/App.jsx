import './App.css';

import React, {useState} from 'react';
import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import {UserContext} from "./utils/useContext.js";

const App = () => {
    const [followers, setFollowers] = useState(100);
    const [following, setFollowing] = useState(1000);
    const [image, setImage] = useState(`https://gravatar.com/avatar/12?d=monsterid`);
    const [name, setName] = useState('Monster');


    return (<div className={'app'}>
        <UserContext.Provider value={{
            image,
            setImage,
            name,
            setName
        }}>
            <Header/>
            <Content/>
        </UserContext.Provider>
    </div>);
};

export default App;
