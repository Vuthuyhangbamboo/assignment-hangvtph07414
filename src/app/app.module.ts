import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from './routing.module';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductService } from './product.service';
import { NavComponent } from './nav/nav.component';
import { BannerComponent } from './banner/banner.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { IndexComponent } from './index/index.component';
import { CategoryComponent } from './category/category.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [ AppComponent, HelloComponent, NavComponent, BannerComponent, ProductComponent, FooterComponent, LoginComponent, TrangchuComponent, IndexComponent, CategoryComponent, ProductListComponent, ProductDetailComponent ],
  imports:      [ HttpClientModule, RoutingModule, BrowserModule, FormsModule ],
  providers: [ProductService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
