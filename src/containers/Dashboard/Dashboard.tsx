import * as React from 'react';
import  Header  from '../../components/Header/Header';
import HeaderNav from '../../components/HeaderNav/HeaderNav';
import './Dashboard.scss'
import NewOrder from '../../components/NewOrder/NewOrder';
import InChargeOrderPanel from '../../components/InChargeOrderPanel/InChargeOrderPanel';
import Today from '../../components/Today/Today';
import ResourcePanel from '../../components/ResourcePanel/ResourcePanel';

class Dashboard extends React.Component  {
 render () {    
     return <section >
     <Header/>
     <HeaderNav/>

    <div className="row-flex">
    <div className="flex-child  add-order-w">
         <div><NewOrder/></div>
     </div>

     <div className="flex-child all-panels-w">
     
     <div className="row-flex">
     <div  className="flex-child panel-w" ><InChargeOrderPanel/></div>
     <div className="flex-child panel-w"><ResourcePanel/></div>

     </div>

    <div>
    <div  className="row-flex">
     <div  className="flex-child panel-w"><Today/></div>
     </div>

        </div>     

     </div>

    
    </div>
    
     </section>
 }
}

export default Dashboard;