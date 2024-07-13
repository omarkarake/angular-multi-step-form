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
  selectedPlanDue: string | null = 'monthly';

  selectPlan(plan: string) {
    this.selectedPlan = plan;
  }

  onClickSelectedPlanDue() {
    this.selectedPlanDue === 'monthly'
      ? (this.selectedPlanDue = 'yearly')
      : (this.selectedPlanDue = 'monthly');
      console.log(this.selectedPlanDue);
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
