import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from './routing.module';
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

@NgModule({
  declarations: [ AppComponent, HelloComponent, NavComponent, BannerComponent, ProductComponent, FooterComponent, LoginComponent, TrangchuComponent, IndexComponent ],
  imports:      [ RoutingModule, BrowserModule, FormsModule ],
  providers: [ProductService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
