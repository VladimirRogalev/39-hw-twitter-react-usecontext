import React from 'react';
import Feed from "./Feed.jsx";
import SideBar from "./SideBar.jsx";

const Content = ({}) => {
    return (
        <div className={'body'}>
            <Feed/>
            <SideBar/>

        </div>
    );
};

export default Content;