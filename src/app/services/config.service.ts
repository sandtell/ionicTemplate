import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public configURL = 'https://www.daijiworld.com/';

  constructor(private http: HttpClient) { }
  
  getData(url): Observable<any> {
    // console.log(this.http.get(url));
    return this.http.get(url);
  }
}
