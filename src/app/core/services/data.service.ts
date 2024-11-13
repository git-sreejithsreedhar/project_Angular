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
  // uploadFile(formData: FormData): Observable<any> {
  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
  //   return this.http.post(`${this.apiUrl}/user/fileData`, formData, { headers })
  //     .pipe(take(1));
  // }
// Method to upload file in service
// uploadFile(formData: FormData): Observable<any> {
//   // const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
//   // return this.http.post(`${this.apiUrl}/user/fileData`, formData, { headers })
//   return this.http.post(`${this.apiUrl}/user/fileData`, formData,)
//     .pipe(take(1));  // Ensures subscription is automatically unsubscribed after the response
// }
  
uploadFile(formData: FormData): Observable<any> {
  const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
  return this.http.post(`${this.apiUrl}/user/fileData`, formData, { headers })
    .pipe(take(1));  // Ensures subscription is automatically unsubscribed after the response
}



// Admin get Users
getUsersData(): Observable<any> {
  const headers = new HttpHeaders().set('authorization', `Bearer ${this.accessToken}`);
return this.http.get(`${this.apiUrl}/users_data`, { headers })
  .pipe(take(1));

}



// Admin Login

admLogin(username: string, password: string) {
  return this.http.post<any>(`${this.apiUrl}/admin/login`, { username, password }).subscribe({
    next: (response) => {
      this.store.dispatch(loginSuccess({ accessToken: response.accesstoken, refreshToken: response.refreshtoken }));
      console.log("Login Success")
    },
    error: (error) => {
      console.error('Login failed', error);
    }
  });
}


// Admin delete user
removeUser(userId: string) {
  const headers = new HttpHeaders().set('Authorization', `Bearer ${this.accessToken}`);
  const options = { headers, body: { userId } }; // Send userId in the body

  return this.http.delete<any>(`${this.apiUrl}/admin/removeUser`, options)
    .pipe(take(1));
}


// Admin Logout
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




 

 