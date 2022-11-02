import { Component } from '@angular/core';
import { UsersService } from '@features/user';
import { User, UserGender } from '@features/user/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public readonly users$ = this.usersService.updateIfAbsent();
  public readonly userEmails$ = this.usersService.allEmails$;

  constructor(
    private readonly usersService: UsersService
  ) {}

  public onUserDeleteButtonClick(user: User): void {
    this.usersService.delete(user.id.value);
  }

  public onRemoveAllByGenderButtonClick(gender: UserGender): void {
    this.usersService.removeAllByGender(gender);
  }
}
