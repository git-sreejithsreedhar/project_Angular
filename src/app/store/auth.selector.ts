// import { createSelector } from "@ngrx/store";
// import { AdminState } from "./auth.state";

// // Selector to get authState from AdminState
// export const selectAdminState = (state: AdminState) => state.authState;

// // Selector to get isAuthenticated from authState
// export const selectIsAuthenticated = createSelector(
//   selectAdminState,
//   (authState) => authState?.isAuthenticated
// );

// // Selector to get error from authState
// export const selectAuthError = createSelector(
//   selectAdminState,
//   (authState) => authState?.error
// );

import { createSelector, createFeatureSelector, State } from "@ngrx/store";
import { AdminState } from "./auth.state";
import { AuthState } from "./auth.reducer";

// export const authFeature = createFeatureSelector<AdminState>('auth');


// export const selectIsAuthenticated = createSelector(
//   authFeature,
//   // (state) => state.authState.isAuthenticated
//   (auth) => auth.authState?.isAuthenticated
// );

// export const selectAccessToken = createSelector(
//   authFeature,
//   (state) => state.authState.accessToken
// )


export const authFeature = createFeatureSelector<AuthState>('auth');


export const selectIsAuthenticated = createSelector(
  authFeature,
  (state) => state.isAuthenticated
);

export const selectAccessToken = createSelector(
  authFeature,
  (state) => state.accessToken
);



