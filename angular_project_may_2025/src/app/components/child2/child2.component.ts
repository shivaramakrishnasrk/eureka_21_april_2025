import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  inputs:['achild2','child2_userName'],
  outputs:['addressEvent']
})
export class Child2Component {
  achild2:any;
  child2_userName!:string;
  userAddress:string= 'Bangalore';

  addressEvent= new EventEmitter();
  sendDataToParent()
  {
    this.addressEvent.emit(this.userAddress)
  }

}
