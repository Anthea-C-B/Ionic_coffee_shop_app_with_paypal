import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import Promise from 'promise-polyfill';

@Injectable()
export class MenuServiceProvider {
  cafe:any[] = [
    {id:'cof',name:'Coffee',description:'The classic standard, our exclusive select blend',
    img:'assets/img/standard.png', small:1.50, medium:2.50, large:3.25},

    {id:'lat',name:'Latte',description:'A blend of espresso, steam milk, and foam',
    img:'assets/img/latte.jpg', small:2.00, medium:3.00, large:3.75},

    {id:'moc',name:'Mocha',description:'Espresso, melted chocolate, and steamed milk',
    img:'assets/img/mocha.jpg', small:2.30, medium:3.15, large:4.00},

    {id:'esp',name:'The George Clooney',description:'The classic espresso, with a touch of Gerorge Clooney.',
    img:'assets/img/espresso.jpg', small:1.75, medium:2.50, large:3.50},

    {id:'cap',name:'Cappuccino',description:'Espresso, steamed milk, and a layer of foam',
    img:'assets/img/cappucciono.jpg', small:1.85, medium:2.75, large:3.65},

    {id:'ame',name:'Americano',description:'Espresso and hot water',
    img:'assets/img/Americano.jpg', small:1.60, medium:2.50, large:3.45},

    {id:'mac',name:'Macchiato',description:'Espresso topped with foam milk',
    img:'assets/img/Macchiato.jpg', small:2.10, medium:3.05, large:3.90}

  ];

  constructor() {
  }

  getCafeDB(){
    return Promise.resolve(this.cafe);
  }

  getOne(search){
    let tmp = this.cafe.map(x => x.id).indexOf(search);
    let single = this.cafe[tmp];
    return Promise.resolve(single);
  }

}
