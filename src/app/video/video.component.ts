import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "app-video",
  templateUrl: "./video.component.html"
})
export class VideoComponent implements AfterViewInit {
  @ViewChild("video", { static: false }) video: ElementRef;

  @Output() progress: EventEmitter<number> = new EventEmitter<number>();
  @Output() videoInfo: EventEmitter<HTMLVideoElement> = new EventEmitter<
    HTMLVideoElement
  >();

  public videoPlayer;
  public videoUrl = "assets/video/video.mp4";

  constructor() {}

  ngAfterViewInit(): void {
    this.videoPlayer = this.video.nativeElement;
  }

  togglePlay() {
    if (this.videoPlayer.paused || this.videoPlayer.ended) {
      this.videoPlayer.play();
      this.progressUpdate();
    } else {
      this.videoPlayer.pause();
    }
  }

  progressUpdate() {
    this.videoPlayer.ontimeupdate = () => {
      this.progress.emit(this.videoPlayer.currentTime);
      this.videoInfo.emit(this.videoPlayer.duration);
    };
  }
}
