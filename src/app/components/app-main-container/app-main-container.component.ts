import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { DynamicLoaderService } from '../../services/DynamicLoaderService';
import { SharedService } from '../../common/shared.service';

@Component({
  selector: 'app-main-container',
  standalone: true,
  providers: [DynamicLoaderService, SharedService],
  templateUrl: './app-main-container.component.html',
  styleUrl: './app-main-container.component.scss',
})
export class AppMainContainerComponent implements OnInit {
  constructor(
    private viewContainer: ViewContainerRef,
    private dynamicLoaderService: DynamicLoaderService,
    public sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.loadContent();
  }

  async loadContent() {
    this.viewContainer.clear();
    const dynamicComponent = await this.dynamicLoaderService.loadComponent(
      this.sharedService.selectedComponent
    );

    this.viewContainer.createComponent(dynamicComponent);
  }
}
