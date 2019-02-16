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
import { RegisterComponent } from './register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SidebarComponent,
    AdminComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
