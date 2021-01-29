import { Component, OnInit } from '@angular/core';
import { person } from 'src/app/_model/person';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  person:person={email:'', password:''};
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    
    this.authService.login(this.person).subscribe(
      
      (response)=>{
      localStorage.setItem('token', response['token'])
      console.log(response);
      },
      (err)=>{console.log(err);
      },
      ()=>{}
    )
  }

}
