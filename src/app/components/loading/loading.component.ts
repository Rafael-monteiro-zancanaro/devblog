import { Component, computed, OnDestroy, OnInit, signal } from '@angular/core';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';
import { getLoadingMessage } from '../../data/loading-messages';

@Component({
  selector: 'app-loading',
  imports: [],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent implements OnDestroy {

  reticencesNumber = signal<number>(0);
  reticences = computed<string>(() => {
    if (this.reticencesNumber() === 0) return "";
    return ".".repeat(this.reticencesNumber())
  })
  intervalId = signal<any>(setInterval(() => {
    this.reticencesNumber.update((prev) => ++prev % 4);
  }, 1000))
  message = signal<string>(getLoadingMessage());

  ngOnDestroy(): void {
    if (!!this.intervalId()) {
      clearInterval(this.intervalId());
    }
  }
}
