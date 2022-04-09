import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { ListRestoComponent } from './list-resto/list-resto.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full",
  },
  { 
    component: AddRestoComponent,
    path: 'add',
    canActivate: [AuthGuard]
  },
  { 
    component: ListRestoComponent,
    path: 'list',
    canActivate: [AuthGuard]
  },
  { 
    component: LoginComponent,
    path: 'login'
  },
  { 
    component: UpdateRestoComponent,
    path: 'update/:id',
    canActivate: [AuthGuard]
  },
  { 
    component: RegisterComponent,
    path: 'register'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
