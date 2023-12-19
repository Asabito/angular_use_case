import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { customer } from '../model/customer-model';
import { Injectable } from '@angular/core';

const baseUrl = 'https://6580f9853dfdd1b11c424344.mockapi.io/rakamin/GetAllUsersData';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  delete(id: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  //get all data
  getAll(): Observable<customer[]>{
    return this.http.get<customer[]>(baseUrl);
  }

  //get data by id
  get(id: any): Observable<customer>{
    return this.http.get(`${baseUrl}/${id}`);
  }

  //post data
  post(data: any): Observable<customer>{
    return this.http.post(baseUrl, data);
  }

  //update data
  update(id: any, data: any): Observable<customer>{
    return this.http.put(`${baseUrl}/${id}`, data);
  }
}
