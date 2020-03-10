import { Component, OnInit } from "@angular/core";
import { TimelineInfoServiceService } from "../timeline-info-service.service";
import { TimelineInfo } from "../timeline.model";

@Component({
  selector: "app-timeline-video-group",
  templateUrl: "./timeline-video-group.component.html"
})
export class TimelineVideoGroupComponent implements OnInit {
  public timeLinePoints: TimelineInfo[];
  public progressTime = 0;
  public videoInformation = 0;

  constructor(private timelineInfoService: TimelineInfoServiceService) {}

  ngOnInit() {
    this.timelineInfoService.getTimelineData().subscribe(
      response => {
        this.timeLinePoints = response;
      },

      err => {
        console.log(err);
      }
    );
  }

  progressChange(event) {
    this.progressTime = event;
  }

  getVideoProperities(event) {
    this.videoInformation = event;
  }
}
