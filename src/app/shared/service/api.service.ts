import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserDetail } from "../model/userDetail.model";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}

  isLogged: boolean = false;

  validateUser(data: UserDetail) {
    if (data.userName == "admin" && data.password == "a") {
      data.id = "1";
      this.isLogged = true;
      return data;
    } else {
      data.id = "";
      return data;
    }
  }
  saveUserDetail(data: UserDetail) {
    return this.http.post(
      "https://manager-8fb09.firebaseio.com/user.json",
      data
    );
  }

  fetchUserSummary() {
    return this.http.get("https://manager-8fb09.firebaseio.com/user.json").pipe(
      map((responseData) => {
        const UserArry: UserDetail[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            UserArry.push({ ...responseData[key], id: key });
          }
        }
        return UserArry;
      })
    );
  }

  deleteUser(id) {
    return this.http.delete(
      "https://manager-8fb09.firebaseio.com/user/" + id + ".json"
    );
  }
}
