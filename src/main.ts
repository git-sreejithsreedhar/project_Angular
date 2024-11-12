
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));





// import { bootstrapApplication } from '@angular/platform-browser';
// import { provideStore } from '@ngrx/store';
// import { provideState } from '@ngrx/store';
// import { AppComponent } from './app/app.component';
// import { authReducer } from './app/store/auth.reducer';

// import { provideStoreDevtools } from '@ngrx/store-devtools';

// const appConfig = {
//   providers: [
//     provideStore({
//       authState: authReducer
//     }),
//     provideStoreDevtools() // Add this line
//   ]
// };

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));



