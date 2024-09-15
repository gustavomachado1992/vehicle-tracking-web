import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Vehicles} from "../models/vehicles";
import {env} from "../../../environments/env";

@Injectable({
  providedIn: 'root'
})
export class PointOfInterestService {


  constructor(private http: HttpClient) { }

  listAllPoints() {
    return this.http.get<Vehicles[]>(env.INTEGRATION_URL + '/pois');
  }

  pointFilter(poi) {
    return this.http.get<Vehicles[]>(env.INTEGRATION_URL + `pois/${poi}`);
  }
}
