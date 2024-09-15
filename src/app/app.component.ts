import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSelectModule} from "@angular/material/select";
import { CommonModule } from '@angular/common';
import {MatNativeDateModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
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
    CommonModule,
    RouterOutlet,
    MatButton
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
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
