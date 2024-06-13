import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private nombreUser: any;

  setVariable(nombre: String) {
    console.log("eeeeeeeee")
    console.log(nombre);
    this.nombreUser = nombre;
    console.log(this.nombreUser);
  }

  getVariable() {
   
    return this.nombreUser;
  }
}
