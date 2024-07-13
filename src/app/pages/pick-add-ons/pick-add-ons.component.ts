import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pick-add-ons',
  templateUrl: './pick-add-ons.component.html',
  styleUrls: ['./pick-add-ons.component.css'],
})
export class PickAddOnsComponent {
  @Input('currentStep') currentStep!: number;
  @Output() next = new EventEmitter<void>();
  @Output() back = new EventEmitter<void>();

  addOns = [
    { name: 'Online service', description: 'Access to multiplayer games', price: '+$1/mo', selected: false },
    { name: 'Larger storage', description: 'Extra 1TB of cloud save', price: '+$2/mo', selected: false },
    { name: 'Customizable profile', description: 'Custom theme on your profile', price: '+$2/mo', selected: false }
  ];

  nextStep(event: Event) {
    event.stopPropagation();
    console.log('Selected Add-Ons:', this.addOns.filter(addOn => addOn.selected));
    this.next.emit();
  }

  previousStep(event: Event) {
    event.stopPropagation();
    this.back.emit();
  }

  toggleSelection(index: number) {
    this.addOns[index].selected = !this.addOns[index].selected;
  }
}
