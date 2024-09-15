import {Component, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSelectModule} from "@angular/material/select";
import { CommonModule } from '@angular/common';
import {MatNativeDateModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {MatCard, MatCardContent} from "@angular/material/card";

export interface vehicleTracking {
  plate: string;
  time: Number;
  place: string;
}

const VEHICLE: vehicleTracking[] = [
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
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  displayedColumns: string[] = ['plate', 'time', 'place'];
  dataSource = new MatTableDataSource<vehicleTracking>(VEHICLE);

  form: FormGroup;

  options = [
    { value: 'option1' },
    { value: 'option2'},
    { value: 'option3'}
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      selectedOption: [null],
      selectedDate: [null]
    });
  }

  onSubmit() {
    console.log('Form Submitted:', this.form.value);
  }

}
