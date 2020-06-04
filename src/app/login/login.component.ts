import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pageTitle:string='Login Page';
  signInEmail:string;
  signInPassword:string;

  signUpUserName:string;
  signUpEmail:string;
  signUpPassword1:string;
  signUpPassword2:string;

  
  constructor() { }

  ngOnInit(): void {
  }
  
  signInValue():void{
    console.log("Email :"+ this.signInEmail);
    console.log("Password :"+this.signInPassword);
 }

 signUpValue():void{

  console.log('UserName :'+this.signUpUserName);
  
 }
}
