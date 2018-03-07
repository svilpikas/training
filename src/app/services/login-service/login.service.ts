import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class LoginService {

    constructor(private http: HttpClient, private router: Router) {
    }

    login(user: any) {
        return this.http.post('https://training.summercamp.lt/users/login', user);
    }
}
