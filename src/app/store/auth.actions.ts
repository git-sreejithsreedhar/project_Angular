import { createAction, props } from "@ngrx/store";


// export const adminLogin = createAction('[AdminLoginComponent]Admin Login', props<{ username: string; password: string }>())

// export const adminLogout = createAction('logOut')


export const loginSuccess = createAction('[dataServices] login Success', props<{accessToken: string, refreshToken: string}>())
// export const loginFailed = createAction('[dataServices] login fialed', props<{error: string}>())

export const refreshToken = createAction('[auth] refresh token', props<{ refreshToken : string }>())

export const adminLogout = createAction('[auth] logout');

export const loadAuthState = createAction('[auth] load auth state')