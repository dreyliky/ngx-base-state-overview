import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { User, UsersResponse } from '../interfaces';

@Injectable({
    providedIn: 'root'
})
export class UsersApi {
    constructor(
        private readonly httpClient: HttpClient
    ) {}

    public getAll(): Observable<User[]> {
        return this.httpClient.get<UsersResponse>(`https://randomuser.me/api/?results=10`)
            .pipe(
                map((response) => response.results)
            );
    }
}
