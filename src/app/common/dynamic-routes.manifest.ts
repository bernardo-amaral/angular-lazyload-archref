import { InjectionToken, Type } from '@angular/core';

export const DYNAMIC_COMPONENT_ROUTES = new InjectionToken<any>(
  'DYNAMIC_COMPONENT_ROUTES'
);

export interface IDynamicRoutes {
  componentId: string;
  path: string;
  loadChildren: Promise<any>;
}
