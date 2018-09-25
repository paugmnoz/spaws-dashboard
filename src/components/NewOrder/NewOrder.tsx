import * as React from "react";
import './NewOrder.scss';
import { observer } from 'mobx-react';

import { store } from '../../store/Store';

const NewOrder = observer (() => {

    return (
      <div className="new-order">
        <h1>Nueva Cita</h1>
        <p>Cliente</p>
        <input type="text" placeholder="Nombre de la mascota"  onChange={(e) => store.handlePetname(e.target.value)}/>
        <p><strong>Tamaño</strong></p>
        <ul>
                {store.petSize.map((elem: string, index: number) => 
                    <li key={elem}
                        onClick={(e) => {store.onSizeSelected(elem, index); store.handleWaste(elem, index)}}
                        className = { (store.selected === elem) ? 'active' : null}
                       
                        >
                        {elem}
                    </li>
                )}
        </ul>
        <p><strong>Encargado </strong></p>
        <ul>
                {store.oncharged.map((elem: string, index: number) => 
                    <li key={elem}
                        onClick={() => {store.onChargedSelected(elem, index); store.handleIncharge(elem, index)}}
                        className = { (store.chargeSelected === elem) ? 'active' : null}
                        >
                        {elem} 
                    </li>
                )}
        </ul>


        <button className="dark"  onClick={(e) => store.createOrder(e)}> Agendar</button>
      </div>
    );
  
});

export default NewOrder;
