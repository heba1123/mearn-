import { Component,EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_model/product';
// import {HeaderComponent} from 'src/app/layout/header/header.component'
import { ProductService } from 'src/app/_services/products.services';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  // providers:[ProductService]
})
export class ProductsListComponent implements OnInit {
  products : Product[]=[];
  // @Output() productAdded = new EventEmitter;
  pageNumbers : number[]=[];
  // hamda = new HeaderComponent;
  pageSize=9;
  currentPage=0;
  constructor( private productService : ProductService) { 

    } 
     ngOnInit(): void {     
      this.calculateNumberOfPages();
      // this.products = this.productService.getAllProducts();
    this.productService.getAllProducts().subscribe(
      (response)=>{
        this.products = response['product'],
        this.calculateNumberOfPages(response['numberOfProducts']);

      },
      (err)=>{console.log(err);
      },
      ()=>{}
      );
    //  HeaderComponent.cartArray
    }
    
      calculateNumberOfPages(length){
      this.pageNumbers=[];
      for (let index = 0; index < length / this.pageSize; index++) {
        this.pageNumbers.push(index + 1);
       } 
    }

    // subscribeFunction(object:Product):void{
    //   // this.productAdded.emit(object)
      // this.productService.productAdded.emit(object);
    // }
    getSlicedArrarOfProducts(): Product[]{
      const start = this.currentPage*this.pageSize;
      return this.products.slice(
        start,
        start + this.pageSize
      );
    }
    onSearchHandler(searchInput){
    //   this.products = this.productService.searchByName(searchInput.value);
    //   this.calculateNumberOfPages();
    //   console.log(searchInput.value);
     }
  }