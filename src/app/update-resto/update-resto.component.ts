import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UpdateService } from './update.service';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {

  updateResto = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    address: new FormControl()
  })

  constructor(
    private router: ActivatedRoute,
    private service: UpdateService
    ) { }

  ngOnInit(): void {
    // id came from routes in app-routing.module file 
    console.warn();
    this.service.getCurrentResto(this.router.snapshot.params[`id`]).subscribe((result: any)=>{
      console.warn(result);
      this.updateResto = new FormGroup({
        name: new FormControl(result['name']),
        email: new FormControl(result['email']),
        address: new FormControl(result['address'])
      })
    });
  }
  //event on button
  collectData(){
    this.service.updateResto(this.router.snapshot.params[`id`],this.updateResto.value)
      .subscribe((result)=>{
        console.warn(result);
      });
  }
}
