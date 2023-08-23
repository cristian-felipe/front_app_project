import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private http: HttpClient,private router:Router) {     this.form = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });}

  ngOnInit(): void {
    //console.log(this.form.value);
  }
  onSubmit(){
    // aquí puede acceder a los valores del formulario mediante this.form.value
    console.log(this.form.value);
    this.login(this.form.value).subscribe(
      response => {
        console.log(response.access_token)
        if(response.access_token){
          this.principal();
        }
       
      },
      error => {
        console.error(error);
      }
    );
    
  }

  login(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:9091/api/v1/auth', data);
  }

  principal(){

  }

  
}
