import { Component, OnInit } from '@angular/core';
import { Mutant } from '../interfaces/mutant.interface';
import { SearchMutantService } from './searchMutant.service';
@Component({
  selector: 'app-searchMutant',
  templateUrl: './searchMutant.component.html',
  styleUrls: ['./searchMutant.component.css']
})
export class SearchMutantComponent implements OnInit {

  mutant !: Mutant;
  mutants !: Array<Mutant>;

  constructor(
    private searchMutant: SearchMutantService
  ) { }

  ngOnInit(): void {
    this.searchMutant.getAllMutants();
  }



}
