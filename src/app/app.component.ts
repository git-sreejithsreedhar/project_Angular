import { Component } from '@angular/core';
import { Router, RouterEvent, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
// import { AdmloginComponent } from "./components/admin/admlogin/admlogin.component";
import { LoginComponent } from "./components/user/login/login.component";
import { UserRegisterComponent } from "./components/user/user-register/user-register.component";
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// import { AuthEffects } from './store/auth.effects';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './components/admin/admlogin/admlogin.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterModule, RouterLinkActive, AdminLoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project-login';
}

