import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/user/login/login.component';
import { UserRegisterComponent } from './components/user/user-register/user-register.component';
import { UserHomeComponent } from './components/user/user-home/user-home.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { AdminLoginComponent } from './components/admin/admlogin/admlogin.component';
import { UserManagementComponent } from './components/admin/user-management/user-management.component';
import { authGuardGuard, adminAuthGuard } from './core/guards/auth-guard.guard';


export const routes: Routes = [
    { path: '', redirectTo:'login', pathMatch: 'full' },

    { path: 'login', component: LoginComponent },
    { path: 'user/registre', component: UserRegisterComponent },

    { path: 'user/home', component: UserHomeComponent, canActivate: [authGuardGuard] },
    // { path: 'user/profile', component: UserProfileComponent, canActivate: [authGuardGuard]},
    { path: 'user/profile', component: UserProfileComponent, canActivate: [authGuardGuard] },

    { path: 'admin/usermanagement', component: UserManagementComponent, canActivate: [adminAuthGuard] },

    { path: 'admin/login', component: AdminLoginComponent },

    { path: '**', redirectTo: 'login' },
];

