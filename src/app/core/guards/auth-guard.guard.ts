import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

// import { AdminState } from '../../store/auth.state';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const authService = inject(AuthService)

  // const admCheck = Router.data['isAdmin']
  
  if (authService.isLoggedIn()) {
    return true;
  } else {
    router.navigateByUrl('login');
    return false;
  }
};


export const adminAuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  if (localStorage.getItem('isAdmin') === 'true') {
    return true;
  } else {
    router.navigateByUrl('admin/login');
    return false;
  }
};



