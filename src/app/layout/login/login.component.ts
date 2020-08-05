import { Component, OnInit } from "@angular/core";
import { UserDetail } from "src/app/shared/model/userDetail.model";
import { NgForm } from "@angular/forms";
import { ApiService } from "src/app/shared/service/api.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  userData: UserDetail;
  isLoading: boolean = false;
  hasError: boolean = false;
  errorMessage: string;
  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {}
  onLogin(form: NgForm) {
    this.isLoading = true;
    this.userData = new UserDetail();
    this.userData.userName = form.value.userName;
    this.userData.password = form.value.password;
    this.api.validateUser(this.userData);
    this.isLoading = false;
    if (this.userData.id != "") {
      this.router.navigate(["/app/dashboard"]);
    } else {
      this.errorMessage = "Invalid data";
      this.hasError = true;
    }
  }

  handleClose() {
    this.hasError = false;
  }
}
