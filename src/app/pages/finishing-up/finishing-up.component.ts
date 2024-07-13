import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-finishing-up',
  templateUrl: './finishing-up.component.html',
  styleUrl: './finishing-up.component.css',
})
export class FinishingUpComponent implements OnInit {
  @Input('currentStep') currentStep!: number;
  @Input() form!: FormGroup;
  @Output() next = new EventEmitter<void>();
  @Output() back = new EventEmitter<void>();
  formValue: any;
  durationString: any;
  ngOnInit(): void {
    this.formValue = this.form.value;
    console.log('initial render on finishing up: ', this.formValue);
    this.formValue.planSelection.price.slice(-2) === 'mo'
      ? (this.durationString = 'month')
      : (this.durationString = 'year');
  }
  nextStep(event: Event) {
    event.stopPropagation();
    this.next.emit();
  }

  previousStep(event: Event) {
    event.stopPropagation();
    this.back.emit();
  }
}
