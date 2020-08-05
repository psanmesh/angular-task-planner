import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/shared/service/api.service";
import { UserDetail } from "src/app/shared/model/userDetail.model";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  userDetail: UserDetail[];
  userCount: number = 0;
  constructor(private api: ApiService) {
    this.fetchUserList();
  }

  ngOnInit(): void {
    this.fetchUserList();
  }

  fetchUserList() {
    this.api.fetchUserSummary().subscribe((response) => {
      this.userDetail = response;
      this.userCount = this.userDetail.length;
    });
  }
}
