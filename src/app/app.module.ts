import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewRouteComponent } from './components/main/new-route/new-route.component';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthComponent } from './components/auth/auth.component';
import { RegisterComponent } from './components/auth/register/register.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { RouteListComponent } from './components/main/route-list/route-list.component';
import { ProfileSettingsComponent } from './components/main/profile-settings/profile-settings.component';
import { RouteDetailsComponent } from './components/main/route-list/route-details/route-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NewRouteComponent,
    MainComponent,
    LoginComponent,
    AuthComponent,
    RegisterComponent,
    RouteListComponent,
    ProfileSettingsComponent,
    RouteDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
