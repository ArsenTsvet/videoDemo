import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Input,
  OnChanges
} from "@angular/core";

@Component({
  selector: "app-timeline",
  templateUrl: "./timeline.component.html"
})
export class TimelineComponent implements AfterViewInit, OnChanges {
  @ViewChild("progress", { static: false }) progress: ElementRef;

  @Input() timeProgress;
  @Input() videoInfo;

  public progressBar;
  public duration;
  public currentTime;

  constructor() {}

  ngAfterViewInit(): void {
    this.progressBar = this.progress.nativeElement;
  }

  ngOnChanges(event): void {
    this.updateTimeElapsed();
    this.initializeVideo();
  }

  public formatTime(timeInSeconds) {
    const result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8);

    return {
      minutes: result.substr(3, 2),
      seconds: result.substr(6, 2)
    };
  }

  public initializeVideo() {
    const videoDuration = Math.round(this.videoInfo);
    this.duration = this.formatTime(videoDuration);
  }

  public updateTimeElapsed() {
    this.currentTime = this.formatTime(Math.round(this.timeProgress));
  }
}
