import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  erroSession:boolean=false
  formLogin: FormGroup = new FormGroup({});

  constructor(private authService: AuthService, private cookie: CookieService) {}

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),

      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
      ]),
    });
  }
  sendLogin(): void {
    const { email, password } = this.formLogin.value;
    // TODO: 200<400
    this.authService.sendCredentials(email, password).subscribe(
      (ResponseOk) => {
        // TODO: cuando las credenciales son correctas
        console.log('Session iniciada correcta', ResponseOk);
        const{tokenSession, data}= ResponseOk
        this.cookie.set('token',tokenSession, 4, '/')

      },
      (err) => {
        // TODO: ERROR 400>=
        this.erroSession = true
        console.log('Ocirrio error con tu email o password');
      }
    );
  }
}
