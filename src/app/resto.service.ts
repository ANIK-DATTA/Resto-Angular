import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestoService {
  url = "http://localhost:3000/";
  // path = 'resturaunt';
  constructor(private http: HttpClient) { }


  get(path:string){
    return this.http.get(`${this.url}${path}`);
  }

  post(path:string,data:any) {
    return this.http.post(`${this.url}${path}`,data);
}

 delete(path:string){
   return this.http.delete(`${this.url}${path}`);
 }

//  
getById(path:string,id: any){
  return this.http.get(`${this.url}${path}/${id}`);
}

put(path:string, id:any, data: any){
  return this.http.put(`${this.url}${path}/${id}`,data);
}

}
