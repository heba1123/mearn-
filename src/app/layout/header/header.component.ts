import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Product } from 'src/app/_model/product';
import { ProductService as productService } from 'src/app/_services/products.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  cartArray: Product[]=[];
  isOpened=false;
  // productService = new productService();
  constructor(private productService: productService) { }

  ngOnInit(): void {
   this.productService.productAdded.subscribe(
      (res)=>{
        this.cartArray.push(res)
      },
      (err)=>{
        console.log(err);
      },
      (completed)=>{
        console.log('hamada completed');
      }
    )
  }
  ngOnChanges(changes){
    // console.log(this.cartArray)
  }
  changeCurrentPage(dest:string){
    this.productService.currentPage=dest;
  }
  calculateToltalAmount(): number{
     let total=0;
     for (let index = 0; index < this.cartArray.length; index++) {
       const product = this.cartArray[index];
       total += product.discount?
       product.price-product.discount:
       product.price;
     }
     return total;
  }
}
