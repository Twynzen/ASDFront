import { Component, OnInit } from '@angular/core';
import { Mutant } from '../interfaces/mutant.interface';
import { RequestService } from '../services/request.service';
import { SearchfilterPipe } from '../pipes/searchfilter.pipe';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-searchMutant',
  templateUrl: './searchMutant.component.html',
  styleUrls: ['./searchMutant.component.css']
})
export class SearchMutantComponent implements OnInit {

  mutant !: Mutant;
  mutants : Array<Mutant> = [];
  searchValue!: string;
  formNewMutant: boolean = false;
  formUpdateMutant: boolean = false;
  mutantId !: String | undefined;

  constructor(
    private request: RequestService,
    private formBuilder: FormBuilder

  ) { }

  formMutant = this.formBuilder.group({
    name: ['', Validators.required],
    age: [ ,Validators.required ],
    vehicle: ['', Validators.required],
    isAlive: [,Validators.required],
    insidePrision: [,Validators.required]
  })

  ngOnInit(): void {
    this.getAllMutants();
    console.log(this.mutants);
  }
  getAllMutants(){
    this.request.get('http://localhost:8080/api/v1/mutants').subscribe(
      (res:any) => {
      this.mutants = [];
      try {

        res.forEach((element: Mutant) => {
          let everyMutant = {
            id: element.id,
            name: element.name,
            age: element.age,
            vehicle: element.vehicle,
            isAlive: element.isAlive,
            insidePrision: element.insidePrision
          }
          this.mutants.push(everyMutant);
        });

      } catch (error) {
        console.error(error);
      }


    })
  }
  openFormUpdate(mutant:Mutant){
    console.log(mutant);
    this.mutantId= mutant.id;
    delete mutant.id;
    this.formMutant.setValue(mutant);
    this.formUpdateMutant = true;
  }
  openForm(){
    this.formNewMutant = true;
  }
  createMutant(){
    const data:Mutant = this.formMutant.value;
    if (data.isAlive === null ) data.isAlive = false;
    if (data.insidePrision === null ) data.insidePrision = false;
    this.request.post('http://localhost:8080/api/v1/mutants', data).subscribe(res => {
      console.log("Nuevo mutante", res);
    });
    this.getAllMutants();
    this.formNewMutant = false;
  }
  updateMutant(){
    const data:Mutant = this.formMutant.value;
    this.request.patch(`http://localhost:8080/api/v1/mutants/${this.mutantId}`, data).subscribe(res => {
      console.log("Mutante actualizado", res);
    });
    this.getAllMutants();
    this.formUpdateMutant = false;
  }
  submit(){
    if (this.formNewMutant) {
      this.createMutant();
    }else if (this.formUpdateMutant){
      this.updateMutant();
    }
  }



}
