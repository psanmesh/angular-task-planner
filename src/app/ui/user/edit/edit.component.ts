import { Component, OnInit } from "@angular/core";
import { UserDetail } from "src/app/shared/model/userDetail.model";
import { NgForm } from "@angular/forms";
import { ApiService } from "src/app/shared/service/api.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"],
})
export class EditComponent implements OnInit {
  userDetail: UserDetail;
  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(userForm: NgForm) {
    this.userDetail = new UserDetail();
    this.userDetail.userName = userForm.value.userName;
    this.userDetail.emailID = userForm.value.emailID;
    this.userDetail.password = userForm.value.password;
    this.userDetail.imagePath = userForm.value.imagePath;
    console.log(this.userDetail);
    this.api.saveUserDetail(this.userDetail).subscribe((response) => {
      this.router.navigate(["/app/user/list"]);
    });
  }
}
