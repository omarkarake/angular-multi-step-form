import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrl: './thank-you.component.css'
})
export class ThankYouComponent implements OnInit {
  @Output() disableNav = new EventEmitter<void>();
  ngOnInit(): void {
    this.disableNav.emit();
  }
}
