import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../services/users-service/users.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    usersList: any = [];

    constructor(private usersService: UsersService) {
    }

    ngOnInit() {
        this.usersService.getAllUsers().subscribe(response => {
            this.usersList = response;
            console.log(this.usersList);
        });
    }
}