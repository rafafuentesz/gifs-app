import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { GifsService } from '../../services/gifs.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { GifListComponent } from "../../components/gif-list/gif-list.component";


@Component({
  selector: 'app-gif-history',
  imports: [GifListComponent],
  templateUrl: './gif-history.component.html',
})
export default class GifHistoryComponent {
  gifService = inject(GifsService)

  query = toSignal(
    inject(ActivatedRoute).params.pipe(
      map((params) => params['query'] ?? 'No query')
    )
  );

  gifsByKey = computed(() => this.gifService.getHistoryGifs(this.query()))
}
