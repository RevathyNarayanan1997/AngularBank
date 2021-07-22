import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  
  aim="welcome to sbl bank"
  acno="Account NUmber please"
 
  pswd=""
  users:any = {
    1000: {acno: 1000, username: "vishnu" , password: "userone", balance: 2000},
    1001: {acno: 1001, username: "revathy" , password: "usertwo", balance: 4000},
    1002: {acno: 1002, username: "renuka" , password: "userthree", balance: 9000},
    1003: {acno: 1003, username: "lachu" , password: "userfour", balance: 8000}
  }

  constructor(private router:Router){}


  ngOnInit(): void {
  }
  /*acNumber(event:any){
    this.acno.target.vlue
  }
  pswChange(event:any){
    this.pswd = event.target.value
  }*/
  login(){
    var acno=this.acno;
    console.log(acno)
    var pswd=this.pswd;
    console.log(pswd)
    

    let accDetails = this.users
     if(acno in accDetails){
       if(pswd == accDetails[acno]["password"]){
         alert("login successful")
         this.router.navigateByUrl("dashboard");
       }
       else{
         alert("invalid password")
       }
     }
     else{
      alert("invalid account number")
    }

  }

}
