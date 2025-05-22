import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(date: any): unknown {

    const dob = new Date(date);
    const today = new Date();
  
    var tot = today.getFullYear() - dob.getFullYear();
  
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();
  
    // Adjust age if birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      tot--;
    }
  
    return tot;

  
  }

}
