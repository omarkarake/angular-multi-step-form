import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentStep = 0; // 0: Home, 1: Select Plan, 2: Pick Add-ons, 3: Finishing Up, 4: Thank You
  homeForm: FormGroup;
  selectedPlan: { plan: string; price: string } | null = null;
  selectedAddOns: [{ name: string; description: string; price: string; selected: boolean }] | null = null;
  navDisableState: boolean = false;

  constructor(private fb: FormBuilder) {
    this.homeForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), this.nameValidator]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.minLength(3), this.phoneNumberValidator]],
      planSelection: null,
      addOns: []
    });
  }

  handlePlanSelected(event: { plan: string; price: string }) {
    this.selectedPlan = event;
    this.homeForm.patchValue({ planSelection: event });
  }

  handleAddOnsSelected(selectedAddOns: any[]) {
    this.homeForm.patchValue({ addOns: selectedAddOns });
    this.selectedAddOns = this.homeForm.value.addOns;
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

  disableNav() {
    this.navDisableState = true;
  }

  nameValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const namePattern = /^[A-Za-z\s]+$/; // Only letters and spaces
    if (value && (!namePattern.test(value) || value.length < 3)) {
      return { invalidName: true };
    }
    return null;
  }

  phoneNumberValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const phonePattern = /^[0-9]+$/; // Only numbers
    if (value && (!phonePattern.test(value) || value.length < 3)) {
      return { invalidPhoneNumber: true };
    }
    return null;
  }
}
