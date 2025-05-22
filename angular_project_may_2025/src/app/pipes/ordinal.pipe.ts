import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal'
})
export class OrdinalPipe implements PipeTransform {

  transform(n: number): unknown {

    const suffixes=["th","st","nd","rd"];
    const v=n%100;
    if(v>11&&v<=13) 
    {
      return+"th";
    }
    switch(n%10)  
    {
      case 1: return +"st" ;
      case 2: return n+"nd";
      case 3: return n+"rd";
      default: return n+"th";
    }
  }

}
