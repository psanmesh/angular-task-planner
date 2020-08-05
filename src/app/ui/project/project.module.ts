import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ProjectComponent } from "./project.component";
import { ProjectListComponent } from "./project-list/project-list.component";
import { ProjectDetailComponent } from "./project-detail/project-detail.component";
import { FormsModule } from "@angular/forms";
import { ProjectRoutingModule } from "./project-routing.module";
import { MaterialModule } from "src/app/material.module";

@NgModule({
  declarations: [
    ProjectComponent,
    ProjectListComponent,
    ProjectDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ProjectRoutingModule,
    MaterialModule,
  ],
})
export class ProjectModule {}
