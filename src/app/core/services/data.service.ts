import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, take } from 'rxjs';

import { Store } from '@ngrx/store';
import { loginSuccess, adminLogout,  } from '../../store/auth.actions';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  token: string | null;
  apiUrl = 'http://localhost:3000';

  accessToken : string | null;

  constructor(private http: HttpClient, private store: Store) { 
    this.token = localStorage.getItem('token')
    this.accessToken = localStorage.getItem('accessToken')
  }


   // Method to send registration data to the backend
  registerUser(userData: { username: string, password: string, email: string }): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' } );
    return this.http.post(`${this.apiUrl}/user/register`, userData, { headers })
      .pipe(take(1));  
  }


 // user Login
userLogin(loginData: { username: string, password: string }): Observable<any> {
  const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
  return this.http.post(`${this.apiUrl}/user/login`, loginData, { headers })
    .pipe(take(1));
}



  // upload file to backend
  uploadFile(formData: FormData): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
    return this.http.post(`${this.apiUrl}/user/fileData`, formData, { headers })
      .pipe(take(1));
  }
  


// Admin get Users
getUsersData(): Observable<any> {
  const headers = new HttpHeaders().set('Authorization', 'Bearer ${this.token}')
  return this.http.get(`${this.apiUrl}/users_data`)
  .pipe(take(1));
}


// Admin Login
// adminLogin(username: string, password: string, loginData: { username: string, password: string }): Observable<any> {
//   const headers = new HttpHeaders().set('content-Type', 'application/json')
//   return this.http.post(`${this.apiUrl}/admin/login'`,loginData, { headers }) .pipe(take(1))
// }


admLogin(username: string, password: string) {
  return this.http.post<any>(`${this.apiUrl}/admin/login`, { username, password }).subscribe({
    next: (response) => {
      // On successful login, dispatch action to save tokens in the state
      this.store.dispatch(loginSuccess({ accessToken: response.accesstoken, refreshToken: response.refreshtoken }));
      console.log("Login Success")
    },
    error: (error) => {
      console.error('Login failed', error);
    }
  });
}


removeUser(userId : string) {
//   return this.http.post<any>(`${this.apiUrl}/user`)
}

logout() {
  // Clear tokens from the state
  this.store.dispatch(adminLogout());
}

// refreshAccessToken(refreshToken: string) {
//   return this.http.post<any>(`${this.apiUrl}/refresh`, { refreshToken }).subscribe({
//     next: (response) => {
//       // Dispatch action to update the access token in the state
//       this.store.dispatch(refreshToken({ accessToken: response.accessToken }));
//     },
//     error: (error) => {
//       console.error('Token refresh failed', error);
//     }
//   });
// }



}




 

 