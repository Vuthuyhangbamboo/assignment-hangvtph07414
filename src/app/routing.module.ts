import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { TrangchuComponent } from './trangchu/trangchu.component';
import { IndexComponent } from './index/index.component';



const routes: Routes = [
  { path: "", redirectTo: "index", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  {path: "index", component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }