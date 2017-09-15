import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";

import { Observable } from "rxjs/Rx";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class ApiserviceService {
  id: number;
  Name: string;
  Email: string;
  Address:string;
  Company: string;


  UserList : object [] = [];

  constructor(private http:Http) {
    

    this.http.get ('https://jsonplaceholder.typicode.com/users')

    .subscribe(
      result => {
        for (var i = 0; i < result.json().length; i++){
          var user = result.json()[i];
          var UserObject = {
            'Id' : user.id,
            'Name' : user.name,
            'Email' : user.email,
            'Address' : user.address.street,
            'Phone' : user.phone,
            'Company' : user.company.name
            
          };
          this.UserList.push(UserObject);
        }
      },
      error => {
        console.log (error)
      }
    ) }

    AddUser() {  if (this.UserList.length != 0) {
       var lastId = this.UserList[this.UserList.length - 1]["id"];
       var obj : object = { "Id" : lastId + 1,  "Name" : this.Name, "Email" : this.Email, "Address" : this.Address, "Company" : this.Company, "deleted" : false, "completed" : false };
     }
     
     this.UserList.push(obj);
    } 

}