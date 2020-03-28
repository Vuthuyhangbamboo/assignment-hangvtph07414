import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { TrangchuComponent } from './trangchu/trangchu.component';
import { IndexComponent } from './index/index.component';
import { ProductListComponent } from './product-list/product-list.component';



const routes: Routes = [
  { path: "", redirectTo: "index", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "trangchu", component: TrangchuComponent },
  { path: "index", component: IndexComponent},
  { path: "productlist", component: ProductListComponent},
  { path: "productlist/:productId", component: ProductListComponent},
  { path: "**", redirectTo: "index", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }