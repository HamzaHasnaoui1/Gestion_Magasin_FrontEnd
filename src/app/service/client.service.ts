import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Client} from "../../models/client.model";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  public getClient() : Observable<any>{
    return this.http.get(environment.apiUrl+'/client/clientList');
  }

  getClientById(id: number): Observable<Client> {
    return this.http.get<Client>(`${environment.apiUrl}/Evenement/getEvenementById/${id}`);
  }
}
