import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentStep = 0; // 0: Home, 1: Select Plan, 2: Pick Add-ons, 3: Finishing Up, 4: Thank You

  nextStep() {
    if (this.currentStep < 4) {
      this.currentStep++;
      console.log(this.currentStep);
      
    }
  }
  
  previousStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
      console.log(this.currentStep);
    }
  }
}
