import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Icon } from '../icon/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'shared-nav',
  imports: [NgOptimizedImage, Icon, RouterLink, RouterLinkActive],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Nav {
  isMenuOpen = signal(false);

  menuItems = signal([
    {
      label: 'Cartelera',
      route: '/',
    },
    {
      label: 'Disponibilidad',
      route: '/availability',
    },
    {
      label: 'Confitería',
      route: '/confectionery',
    },
    {
      label: 'Próximamente',
      route: '/upcoming',
    },
  ]);

  toggleMenu() {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }
}
