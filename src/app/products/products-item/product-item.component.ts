import { Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import { Product } from 'src/app/_model/product';
import { ProductService } from 'src/app/_services/products.services';

@Component({
    selector:'app-product-item ',
    templateUrl:'./product-item.component.html',
    styleUrls:['./product-item.component.scss']
})

export class ProductItemComponent implements OnInit , OnChanges {
  @Input() product: Product;
//   @Output() itemAdded = new EventEmitter<Product>();
//   productService: ProductService;

  example :string;
  person:{name,age};

   constructor(private productService: ProductService){
      // if (this.product.price < 500 ){
      //     // this is a backend call
      //    this.product={ 
      //     name:'wow deal',
      //     price:300,
      //     discount:50,
     //     imgUrl:'../../../../assets/img/placeholder.png'}}
   
  };

   
    ngOnInit(): void{}
    ngOnChanges(): void{
    
   }

   getPrice(): number{
       return this.product.discount ?
       this.product.price - this.product.discount 
       : this.product.price;
   }

   addedToCart():void{
    // this.itemAdded.emit(this.product);
    this.productService.productAdded.emit(this.product);
}
}