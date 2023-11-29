import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  signupUsers:any[] =[];
  signupObj:any ={
    userName:'',
    email:'',
    mobileno:'',
    password:''
  };

  loginObj:any ={
  userName:'',
  email:'',
  password:''
  };

  onsignUp(){
this.signupUsers.push(this.signupObj);
localStorage.setItem('signupUsers',JSON.stringify(this.signupUsers));
this.signupObj = {
  userName:'',
  mobileno:'',
  email:'',
  password:''
  
}
alert("Registration successfull");

  }
  onLogin(){
    debugger;
const isUserExist = this.signupUsers.find(m=> m.email == this.loginObj.email && m.password == this.loginObj.password);
if(isUserExist != undefined)
{
  alert("User Login Successfully");
  this.router.navigate(['/booking']);
  }
else{
  alert("Wrong Credentails");
}  
}

constructor(private router:Router){

}
  ngOnInit(): void {
   
   const localData = localStorage.getItem('signupUsers');
   if(localData != null){
    this.signupUsers = JSON.parse(localData);
   }
    
  }

}
