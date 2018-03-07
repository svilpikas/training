import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UsersService {

    constructor(private http: HttpClient) {
    }

    getAllUsers() {
        return this.http.get('https://training.summercamp.lt/admin/users/all');
    }
}
