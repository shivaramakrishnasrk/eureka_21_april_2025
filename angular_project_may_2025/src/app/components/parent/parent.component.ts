import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Child1Component } from '../child1/child1.component';
import { Child2Component } from '../child2/child2.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-parent',
  imports: [Child1Component,Child2Component, FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements OnInit{
  a:number;
  address_parent:string='';
  recieveDataFromChild(addressDataFromChild:string){
this.address_parent=addressDataFromChild;
  }
  constructor(private ele:ElementRef){
    console.log(ele)

  }
  @HostListener('mouseenter')
  onMouseEnter()
  {
    this.highlight('yellow','red') ;
  }
  constructor()
  {
    this.a=10;
    console.log("parent constructor") 
  }
  ngOnInit(): void {
    console.log("parent ngoninit")
  }

}
