import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuOption {
  icon: string;
  label: string;
  route: string;
  subLabel: string;
}

@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './gifs-side-menu-options.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifsSideMenuOptionsComponent {

  menuOptions:MenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      route: '/dashboard/trending',
      subLabel: 'Gifs Populares'
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Buscador',
      route: '/dashboard/search',
      subLabel: 'Buscar Gifs'
    }
  ]

 }
