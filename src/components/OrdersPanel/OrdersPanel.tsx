import * as React from "react";
import { observer } from 'mobx-react';

import { store } from '../../store/Store';

const OrdersPanel = observer (() => {

    var orderArray =  JSON.parse(localStorage.getItem('orderArray'));
    
    return (
      <div className="col-flex">
        <h1 className="flex-child">Orders</h1>
        <ul>
            {
                (orderArray != null) ? orderArray.map((elem: any)=> {
                  return  (!elem.ended) ? <li key={elem.orderId}> {elem.petname} <button onClick={(e) => {store.handleDone(true)}} >x</button> </li> : null
                   }) : <li>No hay órdenes</li>
            }
        </ul>
            </div>
    

    );
  
})

export default OrdersPanel;
