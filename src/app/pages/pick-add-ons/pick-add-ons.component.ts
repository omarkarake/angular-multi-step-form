import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pick-add-ons',
  templateUrl: './pick-add-ons.component.html',
  styleUrl: './pick-add-ons.component.css',
})
export class PickAddOnsComponent {
  @Input('currentStep') currentStep!: number;
  @Output() next = new EventEmitter<void>();
  @Output() back = new EventEmitter<void>();

  nextStep(event: Event) {
    event.stopPropagation();
    this.next.emit();
  }

  previousStep(event: Event) {
    event.stopPropagation();
    this.back.emit();
  }
}
