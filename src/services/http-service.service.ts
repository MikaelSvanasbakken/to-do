import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url = 'http://www.boredapi.com/api/activity/'
  constructor(private http: HttpClient) { }

  fetchActivity() {
    return this.http.get<any>(this.url)
  }
}
