import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { Drug, DrugListAPI } from "../../models/data.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getList(): Observable<Drug[]> {
    return this.http.get<DrugListAPI>('assets/dataset.json')
        .pipe(map((data) => data.drugs));
  }
}
