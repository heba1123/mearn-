import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { person } from '../_model/person';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'https://mearn-stack-backend-test.herokuapp.com/';
  constructor(private httpClient:HttpClient) { }
  register(person:person){
   return this.httpClient.post(`${this.baseUrl}user/register` , person);
  }
  login(person:person){
    
    return this.httpClient.post(`${this.baseUrl}user/login` , {email:person.email, password:person.password,repeatedPassword:person.repeatedPassword});
  }
}
