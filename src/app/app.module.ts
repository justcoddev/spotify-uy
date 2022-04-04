import { InjectSessionInterceptor } from './core/intersentors/inject-session.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    // TODO: declaraciones, componentes, directivas, pipes
    AppComponent,
  ],
  imports: [
    // TODO: solo se importan otros modulos
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [CookieService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: InjectSessionInterceptor,
    multi: true
  }],

  bootstrap: [AppComponent],
})
export class AppModule {}
