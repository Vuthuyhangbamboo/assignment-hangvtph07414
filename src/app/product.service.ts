import { Injectable } from '@angular/core';
import { Product } from '../product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class ProductService {
  api ="http://5e7c7e0da917d70016683601.mockapi.io/Sanpham";

  constructor(
    private http : HttpClient
  ) { }

   getProduct(): Observable<Product[]> {

    return this.http.get<Product[]>(this.api);
  }

}