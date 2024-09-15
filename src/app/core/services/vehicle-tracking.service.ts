import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {env} from "../../../environments/env";
import {Vehicles} from "../models/vehicles";

@Injectable({
  providedIn: 'root'
})
export class VehicleTrackingService {

  constructor(private http: HttpClient) { }

  listVehiclesPlate() {
    return this.http.get<Vehicles[]>(env.INTEGRATION_URL + '/posicao/placas');
  }

  listVehiclesFilter(plate, date) {
    return this.http.get<Vehicles[]>(env.INTEGRATION_URL + `posicao?placa=${plate}&date=${date}`);
  }
}
