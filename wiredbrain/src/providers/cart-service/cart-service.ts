import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class CartServiceProvider {
  theCart: any[] =[];

  constructor() {}

  getCart(){
    return Promise.resolve(this.theCart);
  }

  addItem(myItem){
    this.theCart.push(myItem);
  }

  removeItem(id,price){
    let tmpId = `${id} - ${price}`;
    let t = this.theCart.map(a => a.orderId).indexOf(tmpId);


    if(t > -1){
      this.theCart.splice(t,1);
    }
  }

  emptyCart(){
    this.theCart = [];
  }

}
