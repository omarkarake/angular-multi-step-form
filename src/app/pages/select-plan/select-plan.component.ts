import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-plan',
  templateUrl: './select-plan.component.html',
  styleUrls: ['./select-plan.component.css'],
})
export class SelectPlanComponent implements OnInit {
  @Input() currentStep!: number;
  @Input() selectedPlan: { plan: string; price: string } | null = null;
  @Output() next = new EventEmitter<void>();
  @Output() back = new EventEmitter<void>();
  @Output() planSelected = new EventEmitter<{ plan: string; price: string }>();
  
  selectedPlanType: 'arcade' | 'advanced' | 'pro' = 'arcade';
  selectedPlanDue: 'monthly' | 'yearly' = 'monthly';

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

  selectPlan(plan: 'arcade' | 'advanced' | 'pro') {
    this.selectedPlanType = plan;
    this.planSelected.emit({ plan, price: this.getPlanPrice(plan) });
  }

  onClickSelectedPlanDue() {
    this.selectedPlanDue = this.selectedPlanDue === 'monthly' ? 'yearly' : 'monthly';
    this.planSelected.emit({ plan: this.selectedPlanType, price: this.getPlanPrice(this.selectedPlanType) });
  }

  getPlanPrice(plan: 'arcade' | 'advanced' | 'pro'): string {
    return this.prices[plan][this.selectedPlanDue];
  }

  ngOnInit(): void {
    if (this.selectedPlan) {
      this.selectedPlanType = this.selectedPlan.plan as 'arcade' | 'advanced' | 'pro';
      this.selectedPlanDue = this.selectedPlan.price.includes('/yr') ? 'yearly' : 'monthly';
    } else {
      this.planSelected.emit({ plan: this.selectedPlanType, price: this.prices.arcade.monthly });
    }
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
