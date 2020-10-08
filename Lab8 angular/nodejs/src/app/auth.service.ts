import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(model){
    return this.http.post('http://localhost:3000/login', model);
  }

  register(model){
    return this.http.post('http://localhost:3000/register', model);
  }
}
