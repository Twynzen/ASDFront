import { Pipe, PipeTransform } from '@angular/core';
import { Mutant } from '../interfaces/mutant.interface';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(Mutants: Mutant[], searchValue: string): Mutant[] {
    if (!Mutants || !searchValue) {
      return Mutants;
    }
    return Mutants.filter (mutant =>
       mutant.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
