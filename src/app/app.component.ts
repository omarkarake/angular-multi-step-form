import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentStep = 0; // 0: Home, 1: Select Plan, 2: Pick Add-ons, 3: Finishing Up, 4: Thank You
  homeForm: FormGroup;
  selectedPlan: { plan: string; price: string } | null = null;
  selectedAddOns: [{name: string, description: string, price: string, selected: boolean}] | null = null;
  navDisableState: boolean = false;

  constructor(private fb: FormBuilder) {
    this.homeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      planSelection: null,
      addOns: []
    });
  }

  handlePlanSelected(event: { plan: string; price: string }) {
    this.selectedPlan = event;
    this.homeForm.patchValue({ planSelection: event });
    console.log('Plan selected: ', this.homeForm.value.planSelection);
  }

  handleAddOnsSelected(selectedAddOns: any[]) {
    this.homeForm.patchValue({ addOns: selectedAddOns });
    console.log('Add-ons selected: ', this.homeForm.value.addOns);
    this.selectedAddOns = this.homeForm.value.addOns;
  }

  nextStep() {
    if (this.currentStep < 4) {
      this.currentStep++;
    }
    console.log('next: ', this.homeForm.value);
  }

  previousStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
    console.log('back: ', this.homeForm.value);
  }

  onStepChange(step: number) {
    this.currentStep = step;
  }

  disableNav(){
    this.navDisableState = true;
  }
}
