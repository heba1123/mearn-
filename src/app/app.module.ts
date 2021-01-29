import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProductItemComponent} from './products/products-item/product-item.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { ProductService } from './_services/products.services';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { RouterModule, ROUTES } from '@angular/router';
import { CustomAppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { PaymentTypeService } from './_services/payment-type.service';
import { ProductCategoryService } from './_services/product-category';
import { StringPipePipe } from './pipes/string-pipe.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    ProductsListComponent,
    FooterComponent,
    HeaderComponent,
    DropdownComponent,
    AddProductComponent,
    ProductDetailsComponent,
    LoginComponent,
    RegisterComponent,
    StringPipePipe,
    // MediaElementAudioSourceNode,
  ],
  imports: [
    BrowserModule,
    CustomAppRoutingModule,
    FormsModule,
    HttpClientModule,
    // RouterModule.forRoot([
    //   {path:'product-listing', component:ProductsListComponent},
    //   {path: 'login', component:LoginComponent}
    // ])
  ],
  providers: [ProductService, PaymentTypeService, ProductCategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
