import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [RouterLink, RouterModule, RouterLinkActive],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent {

constructor(private http: HttpClient,
            private router: Router
){}


  userLogout(){
    // localStorage.removeItem('userToken');
    localStorage.setItem('userToken','')
    localStorage.removeItem('token');
    this.router.navigate(['login'])
  }

}
