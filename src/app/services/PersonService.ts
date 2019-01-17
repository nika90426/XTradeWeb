import { BaseService } from './BaseService';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserToken } from '../models/UserToken';

@Injectable()
export class PersonService extends BaseService {

    constructor(protected http: HttpClient) { super(http); }

    create(user: UserToken) {
        return this.http.post('${config.apiUrl}/api/persons', user);
    }

    update(user: UserToken) {
        return this.http.put('${config.apiUrl}/api/persons/' + user.userName, user);
    }
}