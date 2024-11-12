import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../../core/services/data.service';

interface UsrLogin {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent {

  private router = inject(Router);

  formValue: UsrLogin = {
    username: "",
    password: ""
  };

  showmsg: string = '';

  constructor( private userService : DataService,
               private http : HttpClient,) {}

  user_loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]), 
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  });



  onSignin() {
    if (this.user_loginForm.valid) {
        this.formValue.username = this.user_loginForm.get('username')?.value || '';
        this.formValue.password = this.user_loginForm.get('password')?.value || '';

        this.userService.userLogin(this.formValue).subscribe({
            next: (response) => {
                if (response.token && response.userId) {
                          console.log(response)
                    localStorage.setItem('token', response.token);
                    localStorage.setItem('userToken', response.userId);
                    alert("Login Success");
                    this.router.navigate(['user/home']);
                } else {
                    alert("Login Failed: Token or User ID not found");
                }
            },
            error: (e) => {
                console.error(e);
                alert("An error occurred during login. Please try again.");
            },
            complete: () => console.info('Completed')
        });
  
    }
  }



  newUser() {
    this.router.navigate(['user/registre']);
  }

}
