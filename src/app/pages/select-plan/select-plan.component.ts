import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-plan',
  templateUrl: './select-plan.component.html',
  styleUrls: ['./select-plan.component.css'],
})
export class SelectPlanComponent implements OnInit {
  @Input('currentStep') currentStep!: number;
  @Output() next = new EventEmitter<void>();
  @Output() back = new EventEmitter<void>();
  @Output() planSelected = new EventEmitter<{ plan: string, price: string }>();
  @Output() planSelectedDefault = new EventEmitter<{ plan: string, price: string }>();

  selectedPlan: 'arcade' | 'advanced' | 'pro' = 'arcade'; // Set default to 'arcade'
  selectedPlanDue: 'monthly' | 'yearly' = 'monthly'; // Set default to 'monthly'
  
  selectPlan(plan: 'arcade' | 'advanced' | 'pro') {
    this.selectedPlan = plan;
    this.planSelected.emit({ plan, price: this.getPlanPrice(plan) });
  }

  onClickSelectedPlanDue() {
    this.selectedPlanDue = this.selectedPlanDue === 'monthly' ? 'yearly' : 'monthly';
  }

  prices = {
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
  getPlanPrice(plan: 'arcade' | 'advanced' | 'pro'): string {
    return this.prices[plan][this.selectedPlanDue];
  }

  ngOnInit(): void {
    this.planSelectedDefault.emit({ plan:'arcade', price: this.prices.arcade.monthly });
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
