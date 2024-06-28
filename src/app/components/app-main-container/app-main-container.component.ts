import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { DynamicLoaderService } from '../../services/DynamicLoaderService';
import { SharedService } from '../../common/shared.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-main-container',
  standalone: true,
  providers: [DynamicLoaderService, SharedService],
  imports: [MatProgressSpinnerModule, MatCardModule],
  templateUrl: './app-main-container.component.html',
  styleUrl: './app-main-container.component.scss',
})
export class AppMainContainerComponent implements OnInit {
  loading: boolean = true;

  constructor(
    private viewContainer: ViewContainerRef,
    private dynamicLoaderService: DynamicLoaderService,
    public sharedService: SharedService
  ) {}

  ngOnInit(): void {}

  async loadContent() {
    this.loading = true;
    this.viewContainer.clear();
    const dynamicComponent = await this.dynamicLoaderService.loadComponent(
      this.sharedService.selectedComponent
    );
    setTimeout(() => {
      this.viewContainer.createComponent(dynamicComponent);
      this.loading = false;
    }, 300);
  }
}
