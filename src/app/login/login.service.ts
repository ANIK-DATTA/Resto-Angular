import { Injectable } from '@angular/core';
import { RestoService } from '../resto.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private service: RestoService) { }
  
  private loggedIn() {
    if (localStorage.getItem("loggedIn") === "true") {
      return true;
    }
    else {
      return false;
    }
  }

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn());
      }, 100);
    });
    return promise;
  }

  getData(path:any){
    return this.service.get(path);
  }

 
}
