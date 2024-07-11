import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-finishing-up',
  templateUrl: './finishing-up.component.html',
  styleUrl: './finishing-up.component.css'
})
export class FinishingUpComponent {
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
