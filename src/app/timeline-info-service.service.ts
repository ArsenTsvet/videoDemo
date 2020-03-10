import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TimelineInfo } from "./timeline.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TimelineInfoServiceService {
  constructor(private http: HttpClient) {}

  public getTimelineData(): Observable<TimelineInfo[]> {
    return this.http.get<TimelineInfo[]>("./assets/events-mock.json");
  }
}
