import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { NgForm } from '@angular/forms';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  id: number;
  Name: string;
  Email: string;
  Address:string;
  Company: string;
  


  constructor(private api:ApiserviceService) { }

  ngOnInit() {
  }

  AddUser() {
    if(this.api.UserList.length != 0) {
      this.id = 1;
    }
    else {
    this.id = this.api.UserList[this.api.UserList.length-1]['id'] + 1;
    }

    if(this.Name == "" || this.Email == "" || this.Address == "" || this.Company == ""  ) {
      alert("Can Not Be Empty!!!");
    }
    
    else {
     this.api.UserList.push({
      'Id':this.id,
      'name':this.Name,
      'Email':this.Email,
      'Address':this.Address,
      'Company':this.Company
    });
    }
    
  }
}