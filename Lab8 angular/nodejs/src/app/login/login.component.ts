import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
  passwordPattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d\\W]{8,63}$";
  constructor(private route: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.model);
    this.authService.login(this.model).subscribe((next: any) => {
      console.log(next);
      this.route.navigate(['/welcome']);
    }, error => {
      console.log(error);
      alert('Incorrect Username/Password');
    });
  }

  register(){
    this.route.navigate(['register']);
  }
}
