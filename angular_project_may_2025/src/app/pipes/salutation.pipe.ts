import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation'
})
export class SalutationPipe implements PipeTransform {


    transform(employee: any): string {
      if (employee.gender.toLowerCase() === 'male') {
        return 'Mr. ' + employee.name;
      } else if (employee.gender.toLowerCase() === 'female') {
        return 'Miss. ' + employee.name;
      }
      return employee.name;
    }
  

}
