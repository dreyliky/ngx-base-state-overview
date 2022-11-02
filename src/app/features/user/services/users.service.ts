import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { UsersApi } from '../api';
import { User, UserGender } from '../interfaces';
import { UsersState } from '../states';

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    public readonly data$ = this.usersState.data$;
    public readonly allEmails$ = this.usersState.allEmails$;

    constructor(
        private readonly usersApi: UsersApi,
        private readonly usersState: UsersState
    ) {}

    public update(): Observable<User[]> {
        return this.usersApi.getAll()
            .pipe(
                tap((users) => this.usersState.set(users))
            );
    }

    public updateIfAbsent(): Observable<User[]> {
        if (!this.usersState.data) {
            return this.update();
        }

        return (this.usersState.data$ as Observable<User[]>);
    }

    public removeAllByGender(gender: UserGender): void {
        this.usersState.removeAllByGender(gender);
    }

    public delete(id: string): void {
        this.usersState.removeItemById(id);
    }
}
