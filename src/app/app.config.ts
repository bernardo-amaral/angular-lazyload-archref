import {
  provideClientHydration,
  withHttpTransferCacheOptions,
} from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { routes } from './app.routes';
import { dynamicRoutes } from './common/CustomRoutes';
import { DynamicLoaderService } from './services/DynamicLoaderService';
import { DYNAMIC_COMPONENT_ROUTES } from './common/dynamic-routes.manifest';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(
      withHttpTransferCacheOptions({
        includePostRequests: true,
      })
    ),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    { provide: DYNAMIC_COMPONENT_ROUTES, useValue: dynamicRoutes },
    DynamicLoaderService,
  ],
};
