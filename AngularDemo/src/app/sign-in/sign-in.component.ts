import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  imports: [RouterModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  email: string;
  password: string;

  constructor() {
    this.email = '';
    this.password = '';
  }

  onSubmit() {
    // Handle sign-in logic here
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}
