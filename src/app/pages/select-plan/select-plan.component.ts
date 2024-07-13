import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select-plan',
  templateUrl: './select-plan.component.html',
  styleUrls: ['./select-plan.component.css'],
})
export class SelectPlanComponent {
  @Input('currentStep') currentStep!: number;
  @Output() next = new EventEmitter<void>();
  @Output() back = new EventEmitter<void>();
  @Output() planSelected = new EventEmitter<{ plan: string, price: string }>();

  selectedPlan: 'arcade' | 'advanced' | 'pro' | null = null;
  selectedPlanDue: 'monthly' | 'yearly' = 'monthly';

  selectPlan(plan: 'arcade' | 'advanced' | 'pro') {
    this.selectedPlan = plan;
    this.planSelected.emit({ plan, price: this.getPlanPrice(plan) });
  }

  onClickSelectedPlanDue() {
    this.selectedPlanDue === 'monthly'
      ? (this.selectedPlanDue = 'yearly')
      : (this.selectedPlanDue = 'monthly');
  }

  getPlanPrice(plan: 'arcade' | 'advanced' | 'pro'): string {
    const prices = {
      arcade: {
        monthly: '$9/mo',
        yearly: '$90/yr',
      },
      advanced: {
        monthly: '$12/mo',
        yearly: '$120/yr',
      },
      pro: {
        monthly: '$15/mo',
        yearly: '$150/yr',
      },
    };
    return prices[plan][this.selectedPlanDue];
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
