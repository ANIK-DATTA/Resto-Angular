import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
// import { RestoService } from '../resto.service';
import { Router } from '@angular/router';
import { AddService } from './add.service';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {
  areaList = ['Noida', 'Greater Noida', 'Gurgaon', 'Ghaziabad', 'Faridabad', 'Delhi'];
  
  addResto = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    address: new FormControl()
  })

  constructor(
    private addData: AddService,
    // private restoData: RestoService, 
    private router: Router
  ) { }

  //  POST DATA
  collectData(){
    this.addData.postData(this.addResto.value).subscribe((data)=>{
      console.warn(data);
      // ROUTING TO LIST 
      this.router.navigate(["/","list"]);
    });
  }
   list: any = [];
  ngOnInit(): void {
    this.addData.getList().subscribe((result: any)=>{
      console.log(result);
      this.list = result[0].city;
      console.log(this.list);
    })
  }

}
