import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Screen1Component } from '../screen1/screen1.component';
import { Screen2Component } from '../screen2/screen2.component';

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [Screen1Component, Screen2Component],
  templateUrl: './app-main-container.component.html',
  styleUrl: './app-main-container.component.scss',
})
export class AppMainContainerComponent implements OnInit {
  constructor(private viewContainer: ViewContainerRef) {}

  ngOnInit(): void {
    this.loadContent();
  }

  loadContent() {
    this.viewContainer.createComponent(Screen1Component);
  }
}
