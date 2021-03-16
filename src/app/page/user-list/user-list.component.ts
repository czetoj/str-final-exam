import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: Observable<User[]> = this.userService.getAll();
  phrase: string = '';
  filterKey: string = 'name';
  sortKey: string = '';

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
  }

  onDelete(user: User): void {
    if (confirm('Do you want to delete the user?')) {
      this.userService.remove(user).subscribe(
        () => {
          this.users$ = this.userService.getAll();
        }
      );
    }

  }

  onColumnSelect(key: string): void {
    this.sortKey = key;
  }

}
