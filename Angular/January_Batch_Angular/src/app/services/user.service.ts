import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root' // Whole application
})
export class UserService {

  constructor(private _http: HttpClient) { }

  GetUser() {
    // API

    return this._http.get(environment.APIURL + "users")

    //return "Dataa";
  }

  //ng build >> Represent > environment.ts
  //ng build --configuration=production >> Represent > environment.prod.ts


  saveUser(data: any) {
    // API

    return this._http.post("https://jsonplaceholder.typicode.com/users", data)

    //return "Dataa";
  }

}
