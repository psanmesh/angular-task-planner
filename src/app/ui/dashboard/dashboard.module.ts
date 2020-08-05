import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { DashboardComponent } from "./dashboard.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { MaterialModule } from "src/app/material.module";

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, RouterModule, DashboardRoutingModule, MaterialModule],
})
export class DashboardModule {}
