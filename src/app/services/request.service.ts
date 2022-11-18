import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mutant } from '../interfaces/mutant.interface';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private Http_client: HttpClient,
  ) { }

  public get(url:string){
    return this.Http_client.get(url);
  }
  public post(url:string, data:Mutant){
    return this.Http_client.post(url,data);
  }
  public patch(url:string, data:Mutant){
    console.log(data);

    return this.Http_client.patch(url,data);
  }


}
