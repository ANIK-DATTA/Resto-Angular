import { Injectable } from '@angular/core';
import { RestoService } from '../resto.service';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private service: RestoService) { }

  getCurrentResto(id: any){
    return this.service.getById(`resturaunt`,id);
  }

  updateResto(id: any, data: any){
    return this.service.put(`resturaunt`,id,data);
  }
}
