import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OtpComponent } from './otp/otp.component';
import { NfComponent } from './nf/nf.component';
import { DashComponent } from './dash/dash.component';
import { AddmobComponent } from './addmob/addmob.component';
import { ProfileComponent } from './dash/profile.component';
import { FriendsComponent } from './dash/friends.component';

@NgModule({
  declarations: [
    AppComponent,
    OtpComponent,
    NfComponent,
    DashComponent,
    AddmobComponent,
    ProfileComponent,
    FriendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
