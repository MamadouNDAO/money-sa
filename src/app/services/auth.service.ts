import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiHost: string = environment.apiHost;
  constructor(private http: HttpClient) { }
  connect(data: any): Observable<any> {
    return this.http.post(this.apiHost + 'login_check', data);
  }
}
