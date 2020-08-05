import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/shared/service/api.service";
import { UserDetail } from "src/app/shared/model/userDetail.model";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
})
export class UserListComponent implements OnInit {
  userDetailList: UserDetail[];
  isLoading = false;
  constructor(private api: ApiService) {
    this.fetchUserList();
  }
  displayedColumns: string[] = [
    "imagePath",
    "userName",
    "password",
    "emailID",
    "id",
  ];
  dataSource = this.userDetailList;

  ngOnInit(): void {
    this.fetchUserList();
  }

  fetchUserList() {
    this.isLoading = true;
    this.api.fetchUserSummary().subscribe((response) => {
      this.userDetailList = response;
    });
    this.isLoading = false;
  }

  editUser(id: string) {
    console.log(id);
  }

  deleteUser(id: string) {
    this.isLoading = true;

    this.api.deleteUser(id).subscribe((response) => {
      console.log(response);
      this.fetchUserList();
    });
    this.isLoading = false;
  }
}
