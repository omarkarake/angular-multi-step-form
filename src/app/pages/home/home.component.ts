import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @Input('currentStep') currentStep!: number;
  @Output() next = new EventEmitter<void>();

  homeForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.homeForm = fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    });
  }

  nextStep(event: Event) {
    event.stopPropagation();
    this.next.emit();
  }
}
