import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AddBranchComponent } from './add-branch/add-branch.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const appRoutes: Routes = [
    { path: 'users', component: AddUserComponent },
    { path: 'branch', component: AddBranchComponent }
  ];
   
  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      )
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule {}