import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserComponent } from "./user.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { EditComponent } from "./edit/edit.component";

const routes: Routes = [
  {
    path: "",
    component: UserComponent,
    children: [
      {
        path: "list",
        component: UserListComponent,
      },
      {
        path: "details",
        component: UserDetailComponent,
      },
      {
        path: "edit",
        component: EditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
