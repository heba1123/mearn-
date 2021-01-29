import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { AddProductComponent } from "./products/add-product/add-product.component";
import { ProductDetailsComponent } from "./products/product-details/product-details.component";
import { ProductsListComponent } from "./products/products-list/products-list.component";

const routes: Routes=[
    {path:'', component:ProductsListComponent},
    {path:'home', redirectTo:'', pathMatch:'full'},
    {path:'login',component:LoginComponent },
    {path:'register', component:RegisterComponent},
    {path:'product/add', component:AddProductComponent},
    {path:'product/edit/:id', component:AddProductComponent},
    {path:'product/listing', component:ProductsListComponent},
    {path:'product/details/:id', component:ProductDetailsComponent},
    {path:'**', component:AddProductComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class CustomAppRoutingModule{}