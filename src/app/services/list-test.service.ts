import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ListTestService {
  private ApiURL = 'assets/db.json';

  constructor(private httpclient: HttpClient) { }

  public getList(): Observable<Product[]> {
    return this.httpclient.get<Product[]>(this.ApiURL);
  }
}
