import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MemberComponent } from './member/member.component';
import { WsrComponent } from './wsr/wsr.component';
import { WsrSettingComponent } from './wsr-setting/wsr-setting.component';
import { AddBranchComponent } from './add-branch/add-branch.component';
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'Brach', component: AddBranchComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MemberComponent,
    WsrComponent,
    WsrSettingComponent,
    AddBranchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
