import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select-plan',
  templateUrl: './select-plan.component.html',
  styleUrl: './select-plan.component.css',
})
export class SelectPlanComponent {
  @Input('currentStep') currentStep!: number;
  @Output() next = new EventEmitter<void>();
  @Output() back = new EventEmitter<void>();

  selectedPlan: string | null = null;

  selectPlan(plan: string) {
    this.selectedPlan = plan;
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
