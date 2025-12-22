import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Server,
    headers: {
      'Cache-Control': 'max-age=3600',
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Server,
  },
];
