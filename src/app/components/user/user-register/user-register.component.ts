import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../../core/services/data.service';

interface User {
  username: string,
  email: string,
  password: string,
}

@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent  {
  
  userObj: User = {
    username:"",
    email: "",
    password: "",
  }

  verifiedObj: User = {
    username: "",
  email: "",
  password: "",
  };

  users : User[] = []
  

  constructor(private router: Router,
              private userService: DataService
  ) {}

    
  usrRegister() {


    const verifiedObj: User = { ...this.userObj }; 
    
    //  this.userService.registerUser(verifiedObj).subscribe(
    //   response => {
    //     console.log('User registered successfully!', response);
    //     this.router.navigate(['/login']);
    //   },
    //   error => {
    //     console.error('Error registering user:', error);
    //   }
    // );

    this.userService.registerUser(verifiedObj).subscribe({
      next: (v) => {
        console.log(v)
        if (v) {
          this.router.navigate(['login']);
        }
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
  })

}




}



