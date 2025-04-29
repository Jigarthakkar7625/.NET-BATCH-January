import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './Component/user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentComponent } from './Component/parent/parent.component';
import { ChildComponent } from './Component/child/child.component';
import { RegisterComponent } from './Component/register/register.component';
import { LoginComponent } from './Component/login/login.component';
import { HeaderComponent } from './Component/header/header.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';
import { MyDemoDirective } from './directives/my-demo.directive';
import { UserService } from './services/user.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RequestInterceptor } from './services/request.interceptor';
import { ResponseInterceptor } from './services/response.interceptor';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({ // Class decorator
  declarations: [
    AppComponent,
    UserComponent,
    ParentComponent,
    ChildComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    NotFoundComponent,
    MyDemoDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // NgModel
    ReactiveFormsModule, // Form control >> Validation
    HttpClientModule

  ],
  providers: [UserService, AuthGuardService, {
    provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true
  }, {
      provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true
    }],
  bootstrap: [AppComponent] //Starting component (HTML)
})
export class AppModule { }
