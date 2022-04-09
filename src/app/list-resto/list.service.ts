import { Injectable } from '@angular/core';
import { RestoService } from '../resto.service';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private restoData: RestoService) { }

  getList(){
    return this.restoData.get('resturaunt');
  }
}
