import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    debugger

    if (localStorage.getItem("Tokan")) {

      var dbRole = "User";
      var frontEnd = route.data["role"];

      if (frontEnd.includes(dbRole)) {
        return true;
      }
      else {
        this.router.navigate(["/NotFound"])
        return false;

      }
      // User, Admin, SuparAdmin >> Database mathi data get karaya

      return true;
    }

    return false;


    // throw new Error('Method not implemented.');
  }
}
