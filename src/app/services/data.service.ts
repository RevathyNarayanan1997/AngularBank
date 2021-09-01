import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
const options={
  withCredentials:true
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  deleteAcc(event: any) {
    throw new Error('Method not implemented.');
  }

  currentUser =" "
  currentAcc =" "

  users:any = {
    1000: {acno: 1000, username: "vishnu" , password: "userone", balance: 2000,transaction:[]},
    1001: {acno: 1001, username: "revathy" , password: "usertwo", balance: 4000,transaction:[]},
    1002: {acno: 1002, username: "renuka" , password: "userthree", balance: 9000,transaction:[]},
    1003: {acno: 1003, username: "lachu" , password: "userfour", balance: 8000,transaction:[]}
  }

  constructor(private http :HttpClient) {
// this.getDetails()
   }

 

  saveDetails(){
    localStorage.setItem("user", JSON.stringify(this.users))
    
    if(this.currentUser){
      localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
    }
    if(this.currentAcc){
      localStorage.setItem("currentAcc",JSON.stringify(this.currentAcc))

    }
  }

  getDetails(){
    if(localStorage.getItem("users")){
   this.users = JSON.parse(localStorage.getItem("user") || '')
    }

    if(localStorage.getItem("currentUser")){
  this.currentUser = JSON.parse(localStorage.getItem("currentUser") || '')
  }
  
  if(localStorage.getItem("currentAcc")){
this.currentAcc = JSON.parse(localStorage.getItem("currentAcc") || '')
  }
  
}

getTransaction(acno:any){
  const data ={
    acno
  }
  return this.http.post("http://localhost:3000/transaction",data,options)

}
  
  register(acno:any,username:any,password:any){
 

const data ={
  acno,
  username,password
}
return this.http.post('http://localhost:3000/register',data)


   // let accDetails = this.users
    
  //  if(acno in accDetails){
     
   //   return false
  //  }
  //  else{
  //    accDetails[acno]={
   //     acno,
  //      username,
  //      password,
  //      balance:0,
  //      transaction:[]
       
  //    }
  //    this.saveDetails()

  //    return true
  //  }
 }
  

  login(acno:any,pswd:any)
  {
const data ={
  acno,
  pswd
}
return this.http.post('http://localhost:3000/login',data,options)


  }
    // let accDetails = this.users

     // if(acno in accDetails){
    //  if(pswd == accDetails[acno]["password"]){
        
    //    this.currentUser =accDetails[acno]["username"]
    //    this.currentAcc = acno
    //    this.saveDetails()
    //    return true
    //  }
    //  else{
    //    alert("invalid password")
    //    return false
    //  }
  //  }
  //  else{
  //    alert("ivalid account number")
  //    return false
  //  }
 // }


  deposit(acno:any,pswd:any,amount:any){

const data ={
  acno,pswd,amount
}
return this.http.post('http://localhost:3000/deposit',data,options)

  }

  //  let accDetails = this.users
  //  var amt = parseInt(amount)
//  if(acno in accDetails){

  //    if(pswd == accDetails[acno]["password"]){

//accDetails[acno]["balance"]+=amt
//accDetails[acno].transaction.push({
  //amount:amt,
  //type:"CREDIT"
//})
//this.saveDetails()
//return accDetails[acno]["balance"]
  //    }
   //   else{
   //     alert("invalid password")
    //    return false
    //  }
    //
   // }
   // else{
    //  alert("invalid Account number")
   //   return false
   // }
 // }



  withdraw(acno:any,pswd:any,amount:any){

    const data ={
      acno,pswd,amount
    }
    return this.http.post('http://localhost:3000/withdraw',data,options)

  }


  delete(acno:any){
    console.log(acno);
    return this.http.delete('http://localhost:3000/deleteAcc'+acno, options)
  }
 
  //  let accDetails = this.users
  //  var amt = parseInt(amount)
  //  if(acno in accDetails){

  //  if(pswd == accDetails[acno]["password"]){

  //    if(accDetails[acno]["balance"] > amt){

  //    accDetails[acno]["balance"]-=amt
  //    accDetails[acno].transaction.push({
       // amount:amt,
  //      type:"DEBIT"
  //    })
  //    this.saveDetails()
  //    return accDetails[acno]["balance"]

    
   //   }
      
  //    else{
  //      alert("insufficient  Balnce")
  //      return false
  //    }
    
 //   }
  //  else{
 //     alert("invalid password")
 //   }
 // }
 //   else{
 //     alert("invalid Account number")
  //    return false
//    }
 // }
}








