import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../pipes/remaining.pipe';
import { MySortPipe } from '../../pipes/my-sort.pipe';
import { OrdinalPipe } from '../../pipes/ordinal.pipe';
import { RomanPipe } from '../../pipes/roman.pipe';
import { AgePipe } from '../../pipes/age.pipe';
import { SalutationPipe } from '../../pipes/salutation.pipe';





@Component({
  selector: 'app-pipes',
  imports: [ CommonModule, FormsModule, MySortPipe,OrdinalPipe,RomanPipe,AgePipe,SalutationPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
OrdinalPipe(arg0: any) {
throw new Error('Method not implemented.');
}
  userName:string='sachin tendulakar' ;
  salary: number= 5000;
  today:Date= new Date();
  user: object={name: 'shiva', age: '25', add: 'knox'};
  numarr: number[]= [10,20,30,80];
  msg:string='';
  num: number=34;
arr=[10,30,20,70,15];
arr2=[10,30,20,70,15];
ordinal: any;
romaninput: any;
age:any;

employees = [
  { name: 'John', gender: 'Male', age: 30 },
  { name: 'Alice', gender: 'Female', age: 25 },
  { name: 'Bob', gender: 'Male', age: 35 },
  { name: 'Emily', gender: 'Female', age: 28 },
];
}
