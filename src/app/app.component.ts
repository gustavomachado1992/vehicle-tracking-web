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
import { MatTableModule } from "@angular/material/table";
import { MatCard, MatCardContent } from "@angular/material/card";
import {VehicleTrackingPlace} from "./core/models/vehicles-tracking-place";
import {VehicleTrackingService} from "./core/services/vehicle-tracking.service";


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
  displayedColumns: string[] = ['placa', 'tempo', 'poi'];
  dataSource: VehicleTrackingPlace[] = [];
  form: FormGroup;
  listPlates?: string[] = [];
  isLoading: boolean = false;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private vehicleTrackingService: VehicleTrackingService,
  ) {
    this.form = this.fb.group({
      selectedOption: [null],
      selectedDate: [null]
    });
    this.loadPlates();
    this.listPoiTracking();
  }
  loadPlates(): void {

    this.isLoading = true;
    this.error = null;

    this.vehicleTrackingService.listVehiclesPlate().subscribe({
      next: (data: string[]) => this.listPlates = data || [],
      error: (err) => {
        this.isLoading = false
        console.error('Erro ao carregar Placas', err);
        this.error = 'Falha ao carregar Placas, Por favor tente mais tarde.';
      },
      complete: () => this.isLoading = false
    });
  }

  listPoiTracking() {
    const {selectedOption, selectedDate} = this.form.value;

    this.isLoading = true;
    this.error = null;

    this.vehicleTrackingService.listVehiclesFilter(selectedOption, selectedDate).subscribe({
      next: (data: VehicleTrackingPlace[]) => {
        this.dataSource = data || [];
      },
      error: (err) => {
        this.isLoading = false;
        console.error('Erro ao buscar dados de rastreamento do veículo:', err);
        this.error = 'Falha ao carregar posições do veículo. Tente novamente mais tarde.';
      },
      complete: () => this.isLoading = false
    });
  }

  onSubmit() { this.listPoiTracking() }

  convertToTime(minutes: number) {
    const days = Math.floor(minutes / (24 * 60));
    const hours = Math.floor((minutes % (24 * 60)) / 60);
    const remainingMinutes = minutes % 60;

    let result = days > 0 ? `${days} dia${days > 1 ? 's' : ''}` : '';

    if (hours > 0) {
      if (result) result += ', ';
      result += `${hours} hora${hours > 1 ? 's' : ''}`;
    }
    if (remainingMinutes > 0 || !result) {
      if (result) result += ', ';
      result += `${remainingMinutes} minuto${remainingMinutes > 1 ? 's' : ''}`;
    }

    return result;
  }
}
