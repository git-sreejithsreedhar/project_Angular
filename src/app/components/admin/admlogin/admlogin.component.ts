import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// import { adminLogin } from '../../../store/auth.actions';
// import { selectAdminState } from '../../../store/auth.selector';
// import { authReducer } from '../../../store/auth.reducer';
// import { AdminState } from '../../../store/auth.state';
// import { selectIsAuthenticated, selectAuthError } from '../../../store/auth.selector';
// import { AuthState } from '../../../store/auth.reducer';

import { AdminState } from '../../../store/auth.state';
import { selectIsAuthenticated, selectAccessToken} from '../../../store/auth.selector';
import { DataService } from '../../../core/services/data.service';


@Component({
    selector: 'app-admin-login',
    standalone: true,
    imports: [FormsModule,
       CommonModule, 
      
      ],
    templateUrl: './admlogin.component.html',
    styleUrls: ['./admlogin.component.css']
  })
export class AdminLoginComponent implements OnInit, OnDestroy {
  isAuthenticated$?: Observable<boolean>;
  accessToken$?: Observable<string| null>;
  // private destroy$ = new Subject<void>();

  checkAdmin = { username: "", password: "" };

  constructor(private store: Store<AdminState>, private router: Router, private service: DataService) {
    console.log(' from login')
    // this.isAuthenticated$ = this.store.select(selectIsAuthenticated);
    // console.log(this.isAuthenticated$)
  }


  // ngOnInit() {
  //   this.isAuthenticated$.subscribe(isAuthenticated => {
  //     if (isAuthenticated) {
  //       this.router.navigate(['admin/usermanagement']);
  //     }
  //   });

  // }

    ngOnInit(): void {
      // Subscribe to isAuthenticated selector
      this.isAuthenticated$ = this.store.select(selectIsAuthenticated);
      this.isAuthenticated$.subscribe(isAuthenticated => {
          console.log("Is Authenticated:", isAuthenticated);
          if (isAuthenticated) {
            this.router.navigate(['admin/usermanagement']);
            localStorage.setItem('isAdmin', 'true');
          }
         
      });

      // Subscribe to accessToken selector
      this.accessToken$ = this.store.select(selectAccessToken);
      this.accessToken$.subscribe(accessToken => {
          console.log("Access Token:", accessToken);
      });
    }

  ngOnDestroy(): void {
    
  }

  // ngOnInit() {
  //   this.isAuthenticated$.pipe(takeUntil(this.destroy$)).subscribe(isAuthenticated => {
  //     if (isAuthenticated) {
  //       console.log("authenticated")
  //       debugger;
  //       this.router.navigate(['admin/usermanagement']);
  //       localStorage.setItem('isAdmin', 'true');
  //     }
  //   });
  // }

  // ngOnDestroy(): void {
  //   this.destroy$.next();
  //   this.destroy$.complete();
  // }

  onLogin() {
    const { username, password } = this.checkAdmin;
    this.service.admLogin(username, password);
  }
}


