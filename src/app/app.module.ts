import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TimelineVideoGroupComponent } from "./timeline-video-group/timeline-video-group.component";
import { VideoComponent } from "./video/video.component";
import { TimelineComponent } from "./timeline/timeline.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TimelineVideoGroupComponent,
    VideoComponent,
    TimelineComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
