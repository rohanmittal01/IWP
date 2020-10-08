import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  constructor(private route: Router, private authService: AuthService) { }

  login(){
    this.route.navigate(['login']);
  }

  register(){
    this.authService.register(this.model).subscribe((next: any) => {
      console.log(next);
      this.route.navigate(['/welcome']);
    }, error => {
      console.log(error);
      alert('Could not register.');
    });
  }

  ngOnInit(): void {
  }

}
