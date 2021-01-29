import { paymentType } from "./payment-type";
import { productCategory } from "./product-category";
import { productLang } from "./product-lang";
import { Tag } from "./tag";

export interface Product {
    id?:number;
    data:productLang[];
    price?: number;
    discount?:number;
    imagesUrls?:string[];
    paymentTypes?: paymentType[];
    category?: productCategory;
    tags?: Tag[];
}