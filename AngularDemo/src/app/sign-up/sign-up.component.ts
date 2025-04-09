import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  username: string;
  password: string;
  email: string;

  constructor() {
    this.username = '';
    this.password = '';
    this.email = '';
  }

  onSubmit() {
    // Handle sign-up logic here
    console.log('User signed up with:', {
      username: this.username,
      email: this.email,
      password: this.password
    });
  }
}
