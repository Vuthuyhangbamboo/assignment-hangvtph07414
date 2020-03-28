import { Component, OnInit } from '@angular/core';
import {Product} from "../product";
import { ProductService } from '../product.service';
// import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  products: Product[]; 
  // @Input('data') pro = Product;
  constructor(
    private productService : ProductService
    ) { }

  ngOnInit() {
    this.getProduct();
  }
 getProduct(){
  this.productService.getProduct().subscribe(data => {this.products=data;})
  // this.products = this.productService.getProduct();
}
  
}