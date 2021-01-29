import { Injectable } from '@angular/core';
import { paymentType } from '../_model/payment-type';

@Injectable()
export class PaymentTypeService {
  paymentTypes:paymentType[]=[
    {id:1, name:'Direct BankTransfare'},
    {id:2, name:'Cheque Payment'},
    {id:3, name:'Paypal'},
    {id:4, name:'Visa'},
    {id:5, name:'Mastercard'},
    {id:6, name:'COD'}

    
  ];

  getAllPayments(): paymentType[]{
    return this.paymentTypes;
  }

  constructor() { }
}
