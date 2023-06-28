import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) {}

    private getHeaders(): HttpHeaders {
        const headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        };

        return new HttpHeaders(headersConfig);
    }

    get(path: string): Observable<any> {
        return this.http.get(`${environment.baseUrl}${path}`,  {
            headers: this.getHeaders()
        });
    }

    post(path: string, body: Object = {}): Observable<any> {
        return this.http.post(
            `${environment.baseUrl}${path}`, 
            JSON.stringify(body),
            {headers: this.getHeaders()},
        );
    }

    put(path: string, body: Object = {}): Observable<any> {
        return this.http.put(
            `${environment.baseUrl}${path}`, 
            JSON.stringify(body),
            {headers: this.getHeaders()},
        );
    }

    delete(path: string): Observable<any> {
        return this.http.delete(
            `${environment.baseUrl}${path}`, 
            {headers: this.getHeaders()},
        );
    }

}
