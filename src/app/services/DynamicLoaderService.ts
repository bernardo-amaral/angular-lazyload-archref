import { Inject, Injectable, Injector } from '@angular/core';
import {
  DYNAMIC_COMPONENT_ROUTES,
  IDynamicRoutes,
} from '../common/dynamic-routes.manifest';

@Injectable()
export class DynamicLoaderService {
  constructor(
    @Inject(DYNAMIC_COMPONENT_ROUTES)
    private dynamicRoutes: IDynamicRoutes[],
    private injector: Injector
  ) {}

  async loadComponent(componentId: string) {
    const loadedComponent = this.dynamicRoutes.find(
      (component: IDynamicRoutes) => component.componentId === componentId
    );
    if (!loadedComponent) {
      throw new Error(`Component with id ${componentId} not found`);
    }

    const Component = await loadedComponent.loadChildren;

    return Component[componentId];
  }
}
