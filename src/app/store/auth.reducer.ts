// import { createReducer, on } from "@ngrx/store";
// import { adminLogin, adminLogout } from "./auth.actions";
// import { Router } from "@angular/router";

// // Define the state interface
// export interface AuthState {
//   isAuthenticated: boolean;
//   error: string | null;
// }

// // Initial state
// export const initialState: AuthState = {
//   isAuthenticated: false,
//   error: null
// };

// // Auth reducer
// export const authReducer = createReducer(
//   initialState,
  
//   on(adminLogin, (state, { username, password }) => {
//     if (username === "Admin" && password === "password") {
//       return { ...state, isAuthenticated: true, error: null }; // Successful login
//     } else {
//       return { ...state, isAuthenticated: false, error: "Invalid Credentials" }; // Login failure
//     }
//   }),

//   on(adminLogout, (state) => { 
//     return { ...state, isAuthenticated: false, error: "logged out"}})
// );



import { createReducer, on } from "@ngrx/store";
import { loginSuccess,  refreshToken, adminLogout } from "./auth.actions";

export interface AuthState {
  accessToken : string| null,
  refreshToken: string | null,
  isAuthenticated : boolean,
}

export const initialState: AuthState = {
  accessToken : '',
  refreshToken : '',
  isAuthenticated : false
}

export const loginReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { accessToken, refreshToken }) => ({
    ...state, accessToken, refreshToken, isAuthenticated: true
  })),

  on(adminLogout, (state) => ({
    ...state,
    accessToken:'', refreshToken: '', isAuthenticated: false
  }))
)



