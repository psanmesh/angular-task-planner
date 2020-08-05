import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { ApiService } from "./api.service";

@Injectable({ providedIn: "root" })
export class AuthService implements CanActivate {
  constructor(private mgService: ApiService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.mgService.isLogged) {
      return true;
    } else {
      this.router.navigate(["/login"]);
    }
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.mgService.isLogged) {
      return true;
    } else {
      this.router.navigate(["/login"]);
    }
  }
}
