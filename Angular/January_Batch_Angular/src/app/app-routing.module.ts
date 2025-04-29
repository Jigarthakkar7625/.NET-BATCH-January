import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { ParentComponent } from './Component/parent/parent.component';
import { ChildComponent } from './Component/child/child.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';
import { UserComponent } from './Component/user/user.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: "", redirectTo: "/login", pathMatch: "full"
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "register", component: RegisterComponent
  },
  {
    path: "register/:id", component: RegisterComponent
  },
  {
    path: "parent", component: ParentComponent
  },
  {
    path: "child", component: ChildComponent
  },
  {
    path: "user", component: UserComponent, canActivate: [AuthGuardService], data:{
      role:"Admin, HR" //>> Only Admin, HR
    }
  },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  {
    path: "**", component: NotFoundComponent
  },
  {
    path: "NotFound", component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
