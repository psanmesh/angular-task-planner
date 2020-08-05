import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProjectComponent } from "./project.component";
import { ProjectListComponent } from "./project-list/project-list.component";
import { ProjectDetailComponent } from "./project-detail/project-detail.component";

const routes: Routes = [
  {
    path: "",
    component: ProjectComponent,
    children: [
      {
        path: "list",
        component: ProjectListComponent,
      },
      {
        path: "details",
        component: ProjectDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {}
