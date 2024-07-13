import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  @Input() currentStep: number = 0;
  @Input('navDisableState') navDisableState: boolean = false;
  @Output() stepChange = new EventEmitter<number>();

  onStepClick(step: number) {
    this.stepChange.emit(step);
  }
  showState() {
    console.log(this.navDisableState);
  }
  ngOnInit(): void {
    this.showState();
  }
  constructor() {
    this.showState();
  }
}
