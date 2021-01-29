import { EventEmitter, Injectable } from "@angular/core";
import { from } from "rxjs";
import { Product } from "../_model/product";
import {HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable()
export class ProductService{
   private products:Product [] ;
    // [
    //     {
    //        id:1,
    //        data: [{name:'photo camera', description:'hamdaaaaa'}],
    //        price:300,
    //        discount:50,
    //        category:{
    //          id:5, //name:'Eletronics'
    //       },
    //        imagesUrls:['../../../../assets/img/placeholder.png']
    //       },
          
    //       {
    //          id:2,
    //          data: [{name:'camera', description:'hamdaaaaa'}],
    //          price:3000,
    //          discount:50,
    //          imagesUrls:['../../../../assets/img/placeholder.png']
    //       },
  
    //       {
    //          id:3,
    //          data: [{name:'photo camera', description:'hamdaaaaa'}],
    //          price:300,
    //         //  discount:50,
    //         imagesUrls:['../../../../assets/img/placeholder.png']
    //       },
  
    //       {
    //         id:4,
    //         data: [{name:'phone', description:'hamdaaaaa'}],
    //         price:500,
    //         discount:50,
    //         imagesUrls:['../../../../assets/img/placeholder.png']
    //       },
  
    //     {
    //       id:5,
    //       data: [{name:'samsung note 8', description:'hamdaaaaa'}],
    //       price:5000,
    //       // discount:100,
    //       imagesUrls:['../../../../assets/img/placeholder.png']
    //     },
  
    //    {
    //     id:6,
    //     data: [{name:'laptop', description:'hamdaaaaa'}],
    //     price:30000,
    //     discount:5000,
    //     imagesUrls:['../../../../assets/img/placeholder.png']
    //    },
  
    //    {
    //     id:7,
    //     data: [{name:'airpod', description:'hamdaaaaa'}],
    //     price:6000,
    //     discount:1500,
    //     imagesUrls:['../../../../assets/img/placeholder.png']
    //    },
  
    //  {
    //   id:8,
    //   data: [{name:'powerbank', description:'hamdaaaaa'}],
    //   price:1500,
    //  //  discount:50,
    //  imagesUrls:['../../../../assets/img/placeholder.png']
    //  },
  
    //  {
    //   id:9,
    //   data: [{name:'ipad', description:'hamdaaaaa'}],
    //   price:3500,
    //  //  discount:50,
    //  imagesUrls:['../../../../assets/img/placeholder.png']
    //  },
  
    //  {
    //   id:10,
    //   data: [{name:'new item 1', description:'hamdaaaaa'}],
    //   price:1500,
    //  //  discount:50,
    //  imagesUrls:['../../../../assets/img/placeholder.png']
    //  },
  
    //  {
    //   id:11,
    //   data: [{name:'new item 2', description:'hamdaaaaa'}],
    //   price:1500,
    //  //  discount:50,
    //  imagesUrls:['../../../../assets/img/placeholder.png']
    //  },
  
    //  {
    //   id:12,
    //   data: [{name:'new item 3', description:'hamdaaaaa'}],
    //   price:1500,
    //  //  discount:50,
    //  imagesUrls:['../../../../assets/img/placeholder.png']
    //  },
  
    //  {
    //   id:13,
    //   data: [{name:'new item 4', description:'hamdaaaaa'}],
    //   price:1500,
    //  //  discount:50,
    //  imagesUrls:['../../../../assets/img/placeholder.png']
    //  }
      
    // ];

    productAdded = new EventEmitter<Product>();
    currentPage='listing'; 
    baseUrl = 'https://mearn-stack-backend-test.herokuapp.com/';
    constructor(private httpClient: HttpClient){}
    getAllProducts(){
     return this.httpClient.get(`${this.baseUrl}product`)
        // return this.products.slice();
    }

    getProductById(id:number):Product{
        return this.products.find(p=>p.id === id);
    }

    addProduct(product : Product){
      let body ={
        discount: product.discount,
        price:product.price,
        imagesUrls:product.imagesUrls,
        data:product.data,
        categoryId:product.category
      };
      const token = localStorage.getItem('token');
      console.log(token);
      const headers = new HttpHeaders({
        authorization: token,
      });
      return this.httpClient.post(`${this.baseUrl}product/add`,body,{headers});
        // const id = this.products.length;
        // const{
        //   data,
        //   price,
        //   discount,
        //   category,
        //   imagesUrls,
        //   paymentTypes,
        //   tags,
        // }=product;
        // const newProduct:Product = {id , data,
        //    price:product.price,
        //    discount: product.discount,
        //    category: product.category,
        //    paymentTypes: product.paymentTypes,
        //    tags: product.tags 
        //   };
        //   this.products.push(newProduct);
        //   console.log(this.products);

        
          
    }

    updateProduct(product:Product){
        const index = this.products.findIndex(p=>p.id === product.id);
        const newProduct:Product = 
        this.products[index] = {
          id: product.id ,
          data: product.data,
          price:product.price,
          discount: product.discount,
          category: product.category,
          paymentTypes: product.paymentTypes,
          tags: product.tags 
         }; 
    }

    deleteProduct(id:number){
        const index = this.products.findIndex(p=>p.id === id);
        this.products.splice(index,1);
    }

    searchByName(productName:string){
     const prodName = productName.toLowerCase();
     return this.products.filter(p=>p.data[0].name.toLowerCase().includes(prodName));
    }
} 