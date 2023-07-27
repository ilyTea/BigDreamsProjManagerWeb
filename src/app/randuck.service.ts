import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = "https://cataas.com/cat?json=true"

@Injectable({
  providedIn: 'root'
})
export class RanduckService {

  constructor(private http: HttpClient) { }
  
  get(): Observable<any> {
    return this.http.get(`${baseUrl}`)
  }

}

