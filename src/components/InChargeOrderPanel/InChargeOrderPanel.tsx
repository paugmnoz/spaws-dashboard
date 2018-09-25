import * as React from "react";
import { observer } from 'mobx-react';
import './InChargeOrderPanel.scss'

import { store } from '../../store/Store';
const InChargeOrderPanel = observer(() => {

    return (
      <div className="inChargePanel">
        <h1 className="report">Orders per employee</h1>
        <div className="report row-report">
        
        <div className="employee-report">
            <h2>{store.sebOrder}</h2>
            <p>Sebastián</p>
        </div>
        <div className="employee-report">
            <h2>{store.lauOrder}</h2>
            <p>Laura</p>
        </div>
        <div className="employee-report">
            <h2>{store.isaOrder}</h2>
            <p>Isabella</p>
            </div>
            </div>
            </div>
    

    );
  
})

export default InChargeOrderPanel;
