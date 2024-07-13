import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @Input() currentStep!: number;
  @Input() form!: FormGroup;
  @Output() next = new EventEmitter<void>();

  nextStep(event: Event) {
    event.stopPropagation();
    if (this.form.valid) {
      this.next.emit();
    } else {
      this.form.markAllAsTouched(); // To show validation errors
    }
  }

  get name() {
    return this.form.get('name');
  }
  get email() {
    return this.form.get('email');
  }
  get phoneNumber() {
    return this.form.get('phoneNumber');
  }
}
