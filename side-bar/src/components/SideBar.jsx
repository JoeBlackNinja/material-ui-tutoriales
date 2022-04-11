import React from 'react';
import '../App.css';
import {SideBarData} from './SideBarData';

function SideBar() {
  return (
    <div className='Sidebar'>
      <ul className='SideBarList'>
        {SideBarData.map( (val,key) => {
          return(
            <li key={key}
                className="listDeploye"
                id={window.location.pathname === val.link? 
                    "active" : ""}
                onClick={
                ()=>{window.location
                    .pathname = val.link}} 
            ><div
              id='divIcon'      
            >{val.icon}
            </div>
            <div
              id='divTitle'
            >
              {val.title}
            </div>           
            </li>            
          )
        })}
      </ul>      
    </div>
  )
}

export default SideBar;
