// import { createEffect } from "@ngrx/effects";
// import { inject, Injectable } from "@angular/core";
// import { Router } from "@angular/router";
// import { Actions, ofType } from "@ngrx/effects";
// import { tap } from "rxjs";

// import {  adminLogout} from "./auth.actions";

// @Injectable()
// export class AuthEffects {

        
// //   constructor(private actions$: Actions, private router: Router) {
// //   }
//   private actions$ = inject(Actions)
//   private router = inject(Router)

//   adminLogout$ = createEffect(() =>
//     this.actions$.pipe(
//         ofType(adminLogout),
//             tap(()=> {
//                 localStorage.setItem('isAdmin', 'false');
//                 this.router.navigate(['admin/login']);
//             })
//     ),
//     { dispatch: false }
// );
  
  
// }

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { map, tap } from 'rxjs/operators';
// // import * as AuthActions from './auth.actions';
// import { loginSuccess, adminLogout, loadAuthState } from './auth.actions';

// @Injectable()
// export class AuthEffects {

//     constructor(private actions$: Actions) {}

//     loginSuccess$ = createEffect(() =>
//         this.actions$.pipe(
//             ofType(loginSuccess),
//             tap(({ accessToken, refreshToken }) => {
//                 localStorage.setItem('accessToken', accessToken);
//                 localStorage.setItem('refreshToken', refreshToken);
//             })
//         ),
//         { dispatch: false }
//     );

//     // loginSuccess$ = createEffect(
//     //     () =>
//     //       this.actions$.pipe(
//     //         ofType(loginSuccess),
//     //         tap(({ accessToken, refreshToken }) => {
//     //           localStorage.setItem('accessToken', accessToken);
//     //           localStorage.setItem('refreshToken', refreshToken);
//     //         })
//     //       ),
//     //     { dispatch: false }
//     //   );
      

//     logout$ = createEffect(() =>
//         this.actions$.pipe(
//             ofType(adminLogout),
//             tap(() => {
//                 localStorage.removeItem('accessToken');
//                 localStorage.removeItem('refreshToken');
//             })
//         ),
//         { dispatch: false }
//     );

//     loadAuthState$ = createEffect(() =>
//         this.actions$.pipe(
//             ofType(loadAuthState),
//             map(() => {
//                 const accessToken = localStorage.getItem('accessToken');
//                 const refreshToken = localStorage.getItem('refreshToken');
//                 if (accessToken && refreshToken) {
//                     return loginSuccess({ accessToken, refreshToken });
//                 }
//                 return adminLogout();
//             })
//         )
//     );
// }




import { createEffect } from "@ngrx/effects";
import { inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, ofType } from "@ngrx/effects";
import { tap, map } from "rxjs";

// import {  adminLogout} from "./auth.actions";

import { loginSuccess, adminLogout, loadAuthState } from './auth.actions';

@Injectable()
export class AuthEffects {

        
//   constructor(private actions$: Actions, private router: Router) {
//   }
  private actions$ = inject(Actions)
  private router = inject(Router)

//   adminLogout$ = createEffect(() =>
//     this.actions$.pipe(
//         ofType(adminLogout),
//             tap(()=> {
//                 localStorage.setItem('isAdmin', 'false');
//                 this.router.navigate(['admin/login']);
//             })
//     ),
//     { dispatch: false }
// );

    loginSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loginSuccess),
            tap(({ accessToken, refreshToken }) => {
                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('refreshToken', refreshToken);
                console.log(accessToken, refreshToken)
            })
        ),
        { dispatch: false }
    );

//     // loginSuccess$ = createEffect(
//     //     () =>
//     //       this.actions$.pipe(
//     //         ofType(loginSuccess),
//     //         tap(({ accessToken, refreshToken }) => {
//     //           localStorage.setItem('accessToken', accessToken);
//     //           localStorage.setItem('refreshToken', refreshToken);
//     //         })
//     //       ),
//     //     { dispatch: false }
//     //   );
      

    logout$ = createEffect(() =>
        this.actions$.pipe(
            ofType(adminLogout),
            tap(() => {
                console.log("from effect")
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
                localStorage.setItem('isAdmin', 'false');
                this.router.navigate(['admin/login']);
                console.log("from effect ends")
            })
        ),
        { dispatch: false }
    );

//     loadAuthState$ = createEffect(() =>
//         this.actions$.pipe(
//             ofType(loadAuthState),
//             map(() => {
//                 const accessToken = localStorage.getItem('accessToken');
//                 const refreshToken = localStorage.getItem('refreshToken');
//                 if (accessToken && refreshToken) {
//                     return loginSuccess({ accessToken, refreshToken });
//                 }
//                 return adminLogout();
//             })
//         )
//     );
  
  
}