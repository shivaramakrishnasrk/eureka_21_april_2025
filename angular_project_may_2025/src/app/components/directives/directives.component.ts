import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  num: number = 4;
  dayNum: number = 1;
  stateNames = ['Odisha', 'Karnataka', 'Bihar', 'Kerala', 'Tamilnadu', 'Andhra Pradesh']
}
