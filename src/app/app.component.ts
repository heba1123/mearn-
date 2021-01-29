import { Component, DoCheck, OnInit } from '@angular/core';
import { Product } from './_model/product';
import { ProductService } from './_services/products.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck{
  productsArray:Product[]=[];
  currentPage: string;
  constructor(private productService: ProductService) { }

  ngDoCheck(){
    this.currentPage= this.productService.currentPage
  }

  addToCartAtHeader(product:Product){
       console.log(product)
       this.productsArray.push(product);
  }
}
