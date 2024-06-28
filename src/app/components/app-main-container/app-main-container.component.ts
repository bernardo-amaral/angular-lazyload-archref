import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { DynamicLoaderService } from '../../services/DynamicLoaderService';

@Component({
  selector: 'app-main-container',
  standalone: true,
  providers: [DynamicLoaderService],
  templateUrl: './app-main-container.component.html',
  styleUrl: './app-main-container.component.scss',
})
export class AppMainContainerComponent implements OnInit {
  constructor(
    private viewContainer: ViewContainerRef,
    private dynamicLoaderService: DynamicLoaderService
  ) {}

  ngOnInit(): void {
    this.loadContent();
  }

  async loadContent() {
    const dynamicComponent = await this.dynamicLoaderService.loadComponent(
      'Screen1Component'
    );

    this.viewContainer.createComponent(dynamicComponent);
  }
}
