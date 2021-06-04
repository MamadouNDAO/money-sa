import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  apiHost: string = environment.apiHost;
  constructor(private http: HttpClient) { }
  ownerUser(mail: any): Observable<any>{
    return this.http.get(this.apiHost + 'admin/owner/' + mail);
  }
}
