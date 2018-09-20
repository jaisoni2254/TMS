import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MemberComponent } from './member/member.component';
import { WsrComponent } from './wsr/wsr.component';
import { WsrSettingComponent } from './wsr-setting/wsr-setting.component';
import { AddBranchComponent } from './add-branch/add-branch.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';

import { AppRoutingModule } from './app-routing.module';

const appRoutes: Routes = [
  { path: 'Users', component: AddUserComponent },
  { path: 'Branch', component: AddBranchComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MemberComponent,
    WsrComponent,
    WsrSettingComponent,
    AddBranchComponent,
    AddUserComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
