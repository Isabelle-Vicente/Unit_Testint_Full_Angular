import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAllUsers(){
    return this.http.get("api/users");
  }

  getUsersById(id: number){
    return this.http.get("api/users/" + id);
  }
}
