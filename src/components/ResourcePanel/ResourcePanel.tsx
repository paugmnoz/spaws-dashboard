import * as React from "react";
import { observer } from 'mobx-react';
import './ResourcePanel.scss'

import { store } from '../../store/Store';
const ResourcePanel = () => {

    return (
      <div className="resourcePanel">
        <h1 className="flex-child">Disponibilidad de recursos</h1>
       
        <div className="flex-child row-flex">
        <div className="flex-child">
        <h1>100ml</h1>
        <p>Shampoo</p>
        </div>
        <div className="flex-child">
        <h1>150gr</h1>
        <p>Talco</p>
        </div>
        <div className="row-flex-child">
        <h1>80ml</h1>
        <p>Acondicionador</p>
        </div>
      </div>
    </div>
    );
}

export default ResourcePanel;
