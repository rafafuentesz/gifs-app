import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GifsSideMenuComponent } from "../../components/gifs-side-menu/gifs-side-menu.component";

@Component({
  selector: 'app-dashborad-page',
  imports: [RouterOutlet, GifsSideMenuComponent],
  templateUrl: './dashborad-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboradPageComponent { }
