import * as React from "react";
import './NewOrder.scss';
import { observer } from 'mobx-react';

import { store } from '../../store/Store';

const NewOrder = observer (() => {

    return (
      <div className="new-order">
        <h1>Nueva Cita</h1>
        <p>Cliente</p>
        <input type="text" placeholder="Nombre de la mascota"/>
        <p>Tamaño</p>
        <ul>
                {store.petSize.map((elem: string, index: number) => 
                    <li key={elem}
                        onClick={() => store.onSizeSelected(elem, index)}
                        style={{ color: store.selected === elem ? 'yellow' : 'black' }}
                        >
                        {elem}
                    </li>
                )}
        </ul>
        <p>Encargado</p>
        <ul>
                {store.oncharged.map((elem: string, index: number) => 
                    <li key={elem}
                        onClick={() => store.onChargedSelected(elem, index)}
                        style={{ color: store.chargeSelected === elem ? 'yellow' : 'black' }}
                        >
                        {elem} 
                    </li>
                )}
        </ul>


        <button className="dark">Agendar</button>
      </div>
    );
  
});

export default NewOrder;
