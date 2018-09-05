import * as React from "react";
import { observer } from 'mobx-react';
import './Today.scss'

import { store } from '../../store/Store';
const InChargeOrderPanel = () => {

    return (
      <div className="todayPanel">
        <h1 className="flex-child">Today Summary</h1>
        <div className="flex-child">
         <h1>20%</h1>
         <p>Total Done</p>
        </div>
        <div className="flex-child row-flex">
        
        <div className="flex-child">
        <h1>2</h1>
        <p>Done</p>
        </div>
        <div className="flex-child">
        <h1>2</h1>
        <p>Pending</p>
        </div>
        <div className="row-flex-child">
        <h1>2</h1>
        <p>Total</p>
            </div>
            </div>
            </div>
    

    );
  
}

export default InChargeOrderPanel;
