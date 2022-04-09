import { Injectable } from '@angular/core';
import { RestoService } from '../resto.service';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor(private restoData: RestoService) { }

  // path sending
  postData(data: any){
    return this.restoData.post('resturaunt', data);
  }

  getList(){
    return this.restoData.get('area');
  }
}
