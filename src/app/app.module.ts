import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MyMaterialModule} from './my-material/my-material.module';
import {LoginComponent} from './login/login.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {HeaderComponent} from './navigation/header/header.component';
import {SidebarComponent} from './navigation/sidebar/sidebar.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AdminComponent} from './admin/admin.component';
import {RegisterComponent} from './register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './shared/auth.interceptor';
import {AuthService} from './auth/auth.service';
import {VoteComponent} from './vote/vote.component';
import {HttpErrorInterceptor} from './shared/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SidebarComponent,
    AdminComponent,
    RegisterComponent,
    VoteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true}
    // {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
