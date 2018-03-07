import {Injectable} from '@angular/core';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthService {

    constructor() {
    }

    getToken(): string {
        return localStorage.getItem('token');
    }

    isAuthenticated(): boolean {
        const token = this.getToken();
        // return tokenNotExpired(null, token);
        return true;
    }

}
