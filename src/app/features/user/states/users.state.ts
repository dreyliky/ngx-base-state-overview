import { Injectable } from '@angular/core';
import { map, filter, shareReplay } from 'rxjs';
import { ArrayState, NgxState } from 'ngx-base-state';
import { User, UserGender } from '../interfaces';

@NgxState()
@Injectable({
    providedIn: 'root'
})
export class UsersState extends ArrayState<User> {
    public readonly allEmails$ = this.data$
        .pipe(
            filter((users) => !!users),
            map((users) => users!.map((user) => user.email)),
            shareReplay(1)
        );

    public removeAllByGender(gender: UserGender): void {
        const newUsers = this.data!.filter((user) => (user.gender !== gender));

        this.set(newUsers);
    }

    protected override getItemId(user: User): string {
        return user.id.value;
    }
}
