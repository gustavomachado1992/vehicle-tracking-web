import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {env} from "../../../environments/env";
import {format} from "date-fns";
import {VehicleTrackingPlace} from "../models/vehicles-tracking-place";

@Injectable({
  providedIn: 'root'
})
export class VehicleTrackingService {

  constructor(private http: HttpClient) { }

  listVehiclesPlate() {
    return this.http.get<string[]>(env.INTEGRATION_URL + '/posicao/placas');
  }

  listVehiclesFilter(plate: string, date: Date) {
    const formattedDate = date ? format(date, 'MM-dd-yyyy') : date;
    let queryParams = ''
    if (plate) {
      queryParams += `placa=${plate}`
    }
    if (formattedDate) {
      queryParams += queryParams ? `&data=${formattedDate}` : 'data=' + formattedDate;
    }
    return this.http.get<VehicleTrackingPlace[]>(
      `${env.URI}/position${queryParams ? `?${queryParams}` : ''}`
    );
  }
}
