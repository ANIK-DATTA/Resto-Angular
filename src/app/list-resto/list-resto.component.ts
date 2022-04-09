import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';
import { DeleteDataService } from './delete-data.service';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {

  constructor(
    private restoData: RestoService,
    private restoData2: ListService,
    private deleteItem: DeleteDataService
    ) { }

  collection:any = [];

  ngOnInit(): void {
    this.restoData2.getList().subscribe((result)=>{
      
      this.collection = result;
    });
    
  }
  
  deleteResto(dataListId: any){
    console.warn(dataListId);
    
    //Removing in array
    this.collection.splice(dataListId-1,1);
    
    //delete service
    this.deleteItem.remove(dataListId).subscribe(()=>{

    });
  
  }
}
