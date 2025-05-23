import { Component } from '@angular/core';

@Component({
  selector: 'app-child1',
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  inputs: ['a','b']
})
export class Child1Component {
  a: any;
  b: any;
  userName: string = 'Sanjay Samantra';

  constructor() {
    console.log("Child constructor")
  }
  ngOnChanges(changes:any) {
    console.log('Child ngOnChanges');
    console.log(changes)
  }
  ngOnInit() {
    console.log('Child ngOnInit');
  }
}
