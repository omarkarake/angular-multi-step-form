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

  constructor(private fb: FormBuilder) {
    this.homeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
    });
  }
  handlePlanSelected(event: { plan: string, price: string }) {
    console.log(this.homeForm.value.planSelection = event);
    console.log(this.homeForm.value);
    
    // console.log(event); // This will log the selected plan object, e.g., { plan: 'arcade', price: '$9/mo' }
  }
  handlePlanSelectedDefault(event: { plan: string, price: string }) {
    console.log(this.homeForm.value.planSelection = event);
    console.log(this.homeForm.value);
    
    // console.log(event); // This will log the selected plan object, e.g., { plan: 'arcade', price: '$9/mo' }
  }

  nextStep() {
    if (this.currentStep < 4) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  onStepChange(step: number) {
    this.currentStep = step;
  }
}
