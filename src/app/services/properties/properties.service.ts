import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  API = 'https://api-sabienal.herokuapp.com/properties';

  constructor(private http: HttpClient) { }

  getList(params:any) {
    return this.http.get(`${this.API}/list`, { params: params })
  }
  create (data:any) {
    return this.http.post(`${this.API}/new`, data, { responseType: 'json' })
  }
}
