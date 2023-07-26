import React from 'react';
import building from './assets/images/building.webp';
import './building.css';

const Building = ()=>{
    return(
        <div className='building'>
        <div className='foricon'><img src={building} className='cardicon' height='100px'></img></div>
        <div className='headingone'>BUILDING</div>
        <div className='contentfive'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</div>
        <div className='forbutton'><button className='btntwo'><a href='##' className='linktwo'>MORE</a></button></div>
        </div>
    );
};
export default Building;