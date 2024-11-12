import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../core/services/data.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';

import { AdminState } from '../../../store/auth.state';
import { adminLogout } from '../../../store/auth.actions';
import { AdminLoginComponent } from '../admlogin/admlogin.component';




@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, AdminLoginComponent, RouterLink, RouterModule],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent implements OnInit {

users: any[] = [];

  constructor( private http: HttpClient, 
                private service: DataService,
                private router : Router,
                private store: Store<AdminState>
  ) {}

  ngOnInit(): void {
    this.fetchUsers()
  }


  fetchUsers() {
      this.service.getUsersData().subscribe({
        next: (response) => {
          // debugger;

            this.users = response.userDetails; 
            console.log(this.users)

          console.log("sucessful")
        },
        error: (error) => { console.error("failed") },
        complete: () => { console.info("Completed") } 
      })
  }


  removeUser(userId: string) {
  
    // this.users = this.users.filter(user => user.userId !== userId); 

    // this.service.deleteUser(userId).subscribe({
    //     next: (response) => {
    //         console.log('User removed successfully:', response);
    //     },
    //     error: (error) => {
    //         console.error('Error removing user:', error);
    //     }
    // });
}

handleImageError(event: Event) {
  const target = event.target as HTMLImageElement;
  target.src = 'assets/images/default-profile.png';
}


admLogout() {

  this.router.navigate(['admin/login'])
  this.store.dispatch(adminLogout());
  
}



}
