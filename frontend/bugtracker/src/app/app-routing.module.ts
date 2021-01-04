import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ListTicketsComponent } from './list-tickets/list-tickets.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {path: '' , component:LoginComponent},
  {path:'login' , component:LoginComponent},
  {path:'welcome/:name' , component:WelcomeComponent},
  {path:'tickets' , component:ListTicketsComponent},
  {path: '**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
