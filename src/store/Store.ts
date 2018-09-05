import { observable, action, computed } from 'mobx';


class Store{ 
    @observable petSize: string[] = [
        'Pequeño',
        'Mediano',
        'Grande',
];

@observable oncharged: string[] = [
    'Sebastián',
    'Laura',
    'Isabella'
]
@observable shampooWasted: number[] = [
    10,
    15,
    25
];

@observable selected: string = null;
@observable chargeSelected: string = null;

@observable ordersbycharge: number[] = new Array(this.oncharged.length).fill(0);

@action onSizeSelected(newSelected: string, i: number){
    this.selected = newSelected;
    let index = this.petSize.indexOf(this.selected);
    console.log(index);
   this.shampooWasted[i];
    console.log(this.shampooWasted[i]);
}
   
@action onChargedSelected(newSelected: string, i: number){
    this.chargeSelected = newSelected;
    let index = this.oncharged.indexOf(this.chargeSelected);
    
   this.ordersbycharge[index]++;
   console.log(this.ordersbycharge[index]++);
}
}
export const store = new Store();