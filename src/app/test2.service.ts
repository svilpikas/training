import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import {AuthService} from './services/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(public authService: AuthService,
                private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.isAuthenticated()) {
            return true;
        } else {
            this.router.navigate(['/']);
        }
    }
}