import { Injectable } from '@angular/core';
import { RestoService } from '../resto.service';

@Injectable({
  providedIn: 'root'
})
export class DeleteDataService {

  constructor(private restoData: RestoService) { }

  remove(data:any){
    console.log(data);
    return this.restoData.delete(`resturaunt/${data}`);
  } 

}
