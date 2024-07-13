import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  @Input() currentStep: number = 0;
  @Input('navDisableState') navDisableState:boolean =false;
  @Output() stepChange = new EventEmitter<number>();

  onStepClick(step: number) {
    this.stepChange.emit(step);
  }
}
