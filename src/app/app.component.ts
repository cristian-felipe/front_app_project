import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginComponent]
})
export class AppComponent {
  title = 'pet_store_front';
  constructor(private loginService:LoginComponent){

  }
  ngOninit(){
    this.loginService.onSubmit()
  }
}
