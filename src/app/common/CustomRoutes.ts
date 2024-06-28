import { IDynamicRoutes } from './dynamic-routes.manifest';

export const dynamicRoutes: IDynamicRoutes[] = [
  {
    componentId: 'Screen1Component',
    path: 'Screen1Component',
    loadChildren: import('../components/screen1/screen1.component'),
  },
  {
    componentId: 'Screen2Component',
    path: 'Screen2Component',
    loadChildren: import('../components/screen2/screen2.component'),
  },
  {
    componentId: 'Screen3Component',
    path: 'Screen3Component',
    loadChildren: import('../components/screen3/screen3.component'),
  },
];
