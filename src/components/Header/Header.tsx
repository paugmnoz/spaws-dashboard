import * as React from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";
import './Header.scss';

const Header = () => {
   
    const notification = (
        <div>
          <i className="fa fa-globe" />
          <b className="caret" />
          <span className="notification">5</span>
          <p className="hidden-lg hidden-md">Notification</p>
        </div>
      );

    return (
      <div className="header-user">
           <img src="" alt=""/>
               <h1>SPAWS</h1>
               <p>Paula García</p>
     
       
      </div>
    );
  
}

export default Header;
