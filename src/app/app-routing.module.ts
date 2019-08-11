import { UserGuard } from './addmob/user.guard';
import { FriendsComponent } from './dash/friends.component';
import { ProfileComponent } from './dash/profile.component';
import { AddmobComponent } from './addmob/addmob.component';
import { DashComponent } from './dash/dash.component';
import { NfComponent } from './nf/nf.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtpComponent } from './otp/otp.component';

const dashRoutes:Routes=[
  {path:'profile',component:ProfileComponent},
  {path:'friends',component:FriendsComponent}
]
const routes: Routes = [
  {path: '',component:OtpComponent},
{path:'dash/:usId',component:DashComponent,children:dashRoutes},
{path:'dash',redirectTo:'dash/456', pathMatch:'full'},
{path:'addmobile/mob',component:AddmobComponent,canActivate:[UserGuard]},

  { path:'**',component:NfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
