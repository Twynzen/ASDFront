import { Injectable } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';


@Injectable({
  providedIn: 'root'
})
export class SearchMutantService {

  constructor(
    private request: RequestService
  ) { }

  ngOnInit():void{

  }

  getAllMutants(){
    this.request.get('http://localhost:8080/api/v1/mutants').subscribe(res => {
      console.log(res,"response");
    })
  }
}


