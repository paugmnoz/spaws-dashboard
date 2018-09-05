import * as React from "react";
import '../Header/Header.scss';

const HeaderNav = () => {

    return (
      <div className="header-nav">
           
           <p className="active">Dashboard</p>
           <p>Pets</p>
           <p>Team</p>
           <p>Messages</p>
      </div>
    );
  
}

export default HeaderNav;
