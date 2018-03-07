import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/login-service/login.service';

import * as _ from 'lodash';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    loginForm = {
        email: '',
        password: '',
    };

    constructor(private loginService: LoginService, private router: Router) {

    }

    ngOnInit() {
    }

    loginEvent() {
        this.loginService.login(this.loginForm).subscribe(response => {
            localStorage.setItem('token', _.get(response, 'token'));
            if (response) {
                this.router.navigate(['/users']);
            }
            // this.router.navigate(['/users']);
        });
        // this.router.navigate(['/users']);
    }

}
