import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSelectModule} from "@angular/material/select";
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from "@angular/material/core";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { MatButton} from "@angular/material/button";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { MatCard, MatCardContent } from "@angular/material/card";
import {vehicleTrackingPlace} from "./core/models/vehicles-tracking-place";
import {VehicleTrackingService} from "./core/services/vehicle-tracking.service";
import {VehiclesPosition} from "./core/models/vehicles";

const VEHICLE: vehicleTrackingPlace[] = [
  { time: 1, plate: 'Alice', place: 'Floripa' },
  { time: 2, plate: 'Bob', place: 'São José' }
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatTableModule,
    CommonModule,
    RouterOutlet,
    MatButton,
    MatCard,
    MatCardContent
  ],
  providers: [VehicleTrackingService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  displayedColumns: string[] = ['plate', 'time', 'place'];
  dataSource = new MatTableDataSource<vehicleTrackingPlace>(VEHICLE);

  form: FormGroup;
  listPlates?: string[] = [];
  listCarsPosition?: VehiclesPosition[];

  constructor(
    private fb: FormBuilder,
    private vehicleTrackingService: VehicleTrackingService,
  ) {
    this.form = this.fb.group({
      selectedOption: [null],
      selectedDate: [null]
    });
    this.loadPlates();
  }
  loadPlates() {
    this.vehicleTrackingService.listVehiclesPlate().subscribe(data => {
      this.listPlates = data;
    });
  }
  filterCar() {
    const {selectedOption, selectedDate } = this.form.value;

    this.vehicleTrackingService.listVehiclesFilter(selectedOption, selectedDate).subscribe(data => {
      this.listCarsPosition = data;
    });
  }
  onSubmit() {
    console.log('Form Submitted:', this.form.value);
    this.filterCar()
  }

}
