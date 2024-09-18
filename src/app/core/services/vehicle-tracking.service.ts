import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {env} from "../../../environments/env";
import {VehiclesPosition} from "../models/vehicles";
import {format} from "date-fns";

@Injectable({
  providedIn: 'root'
})
export class VehicleTrackingService {

  constructor(private http: HttpClient) { }

  listVehiclesPlate() {
    return this.http.get<string[]>(env.INTEGRATION_URL + '/posicao/placas');
  }

  listVehiclesFilter(plate: string, date: Date) {
    const formattedDate = this.formatDateForURL(date);

    return this.http.get<any>(
      '/api/posicao?placa=TESTE001&data=12%2F16%2F2018'
    );
  }
  formatDateForURL(date: Date) {
    const formattedDate = format(date, 'MM/dd/yyyy');
    return encodeURIComponent(formattedDate);
  }
}
