import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    employeeId: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });
  constructor(private service: LoginService, private router: Router) {  }

  login(){
    this.service.getData(`login?userName=${this.loginForm.value.employeeId}&password=${this.loginForm.value.password}`).subscribe((res:any)=>{
      if(res[0].name === this.loginForm.value.userName){
        window.localStorage['loggedIn'] = true;
        this.router.navigate(['/list']);
      }
    })
  }
ngOnInit(): void {
    window.localStorage.removeItem('loggedIn');
  }


}
