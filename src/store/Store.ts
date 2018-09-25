import { observable, action, computed } from 'mobx';


class Store{ 

    orders = observable([

    ]);


    @observable petname: string = null;
    @observable orderId: string = null;
    @observable orderInCharge: string = null;
    @observable orderWaste: number = null;
    
    @observable sebOrder: number = 0;
    @observable lauOrder: number =0;
    @observable isaOrder: number = 0;

    @observable shampoo: number = 100;
    @observable talco: number = 150;
    @observable acondicionador: number = 80;

    @observable isaresult: number []

    @observable petSize: string[] = ['Pequeño', 'Mediano', 'Grande', ];
    @observable oncharged: string[] = [ 'Sebastián', 'Laura', 'Isabella']
    @observable selected: string = null;
    @observable chargeSelected: string = null;

    @action handlePetname (petname: string) {
        this.petname = petname;
    }

    @action handleDone (ended: boolean) {
        this.ended = ended;
    }

    @observable handlewaste(waste: number){

    }
    @action handleIncharge (newSelected: string, i: number) {

        this.chargeSelected = newSelected;
        let index = this.oncharged.indexOf(this.chargeSelected);
        this.orderInCharge =  this.oncharged[index];
        let storedArray = JSON.parse(localStorage.getItem('orderArray'));

        this.orders = storedArray;
    }

    @action handleWaste (newSelected: string, i: number) {
        this.selected = newSelected;
    let index = this.petSize.indexOf(this.selected);
    console.log(index);
    this.orderWaste = this.resourceWasted[index];
    let storedArray = JSON.parse(localStorage.getItem('orderArray'));

    this.orders = storedArray;
    }

    @observable resourceWaste: number = 0;
    @observable resourceWasted: number[] = [10, 15, 25 ];  
    @observable ordersbycharge: number[] = new Array(this.oncharged.length).fill(0);

    @observable ended: boolean = false; 

    @action onSizeSelected(newSelected: string, i: number){
    this.selected = newSelected;
    let index = this.petSize.indexOf(this.selected);
    console.log(index);
    this.resourceWasted[i];
    console.log(this.resourceWasted[i]);
    }
   
    @action onChargedSelected(newSelected: string, i: number){
    this.chargeSelected = newSelected;
    let index = this.oncharged.indexOf(this.chargeSelected);
    this.orderInCharge =  this.oncharged[index];
    //this.ordersbycharge[index]++;
    console.log( this.ordersbycharge[index]);
    let storedArray = JSON.parse(localStorage.getItem('orderArray'));

    this.orders = storedArray;
    }

    @action createOrder(e:any){
        e.preventDefault();
        let storedArray = JSON.parse(localStorage.getItem('orderArray'));
        let orderArray = [];

        let generateId = ()  => {
            return '_' + Math.random().toString(26).substr(2, 9);
        }

        this.orderId = generateId();

        let order = {
            orderId: this.orderId,
            petname: this.petname,
            ended: this.ended,
            orderInCharge: this.orderInCharge,
            orderWaste: this.orderWaste
        }

        orderArray.push(order);
       
        let totalOrders = orderArray;

        ((storedArray != null) ? totalOrders = storedArray.concat(orderArray): totalOrders = orderArray)

        localStorage.setItem('orderArray', JSON.stringify(totalOrders));
        storedArray = JSON.parse(localStorage.getItem('orderArray'))

        this.orders = storedArray;
        console.log(this.orders)

        let sebresult = this.orders.filter(elem => "Sebastián");
        this.sebOrder = sebresult.length
        this.orders = storedArray;
        
        let lauresult = this.orders.filter(lau => "Laura");
        this.lauOrder = lauresult.length
        this.orders = storedArray;
        
         this.isaresult = this.orders.filter(isa => "Isabella");
        this.isaOrder = this.isaresult.length
        this.orders = storedArray;
        
        this.selected = null;
        this.chargeSelected = null;



        localStorage.setItem('orderArray', JSON.stringify(totalOrders));
        storedArray = JSON.parse(localStorage.getItem('orderArray'))

        this.orders = storedArray;
    }

    @action orderList() {

        let storedArray = JSON.parse(localStorage.getItem('orderArray'))
            this.orders = storedArray;
            return this.orders;       
    }

    

    
}
export const store = new Store();