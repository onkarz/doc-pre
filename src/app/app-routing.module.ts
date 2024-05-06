import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompounderComponent } from './pages/compounder/compounder.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:"compounder",
    component:CompounderComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"dashboard",
    component:DashboardComponent
  },
  {
    path:"doctor",
    component:DoctorComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
