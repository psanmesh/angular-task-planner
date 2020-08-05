import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { UserComponent } from "./user.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { EditComponent } from "./edit/edit.component";
import { UserRoutingModule } from "./user-routing.module";
import { MaterialModule } from "src/app/material.module";

@NgModule({
  declarations: [
    UserComponent,
    UserListComponent,
    UserDetailComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    UserRoutingModule,
    MaterialModule,
  ],
})
export class UserModule {}
