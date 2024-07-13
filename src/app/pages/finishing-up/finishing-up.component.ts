import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
interface AddOn {
  description: string;
  name: string;
  price: string;
  selected: boolean;
}
@Component({
  selector: 'app-finishing-up',
  templateUrl: './finishing-up.component.html',
  styleUrl: './finishing-up.component.css',
})
export class FinishingUpComponent implements OnInit {
  
  @Output() disableNav = new EventEmitter<void>();
  @Output() stepChange = new EventEmitter<number>();
  @Input('currentStep') currentStep!: number;
  @Input() form!: FormGroup;
  @Output() next = new EventEmitter<void>();
  @Output() back = new EventEmitter<void>();
  formValue: any;
  durationString: any;
  price: any = [];
  totalPrice: number = 0;
  ngOnInit(): void {
    this.formValue = this.form.value;
    console.log('initial render on finishing up: ', this.formValue);
    this.price.push(
      Number(this.formValue.planSelection.price.match(/\d+/g).join(''))
    );
    // console.log('selectedPriceAddons: ', this.formValue.addOns);
    this.formValue.addOns.forEach((element: AddOn | any) => {
      this.price.push(Number(element.price.match(/\d+/g).join('')));
    });
    this.totalPrice = this.price.reduce((a:number, b:number) => a + b);

    this.formValue.planSelection.price.slice(-2) === 'mo'
      ? (this.durationString = 'month')
      : (this.durationString = 'year');
  }
  onStepClick(step: number) {
    this.stepChange.emit(step);
  }
  nextStep(event: Event) {
    event.stopPropagation();
    this.disableNav.emit();
    this.next.emit();
  }

  previousStep(event: Event) {
    event.stopPropagation();
    this.back.emit();
  }
}
