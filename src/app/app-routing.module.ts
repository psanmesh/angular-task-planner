import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./layout/login/login.component";
import { HeaderComponent } from "./layout/header/header.component";
import { AuthService } from "./shared/service/auth.service";

const appRoutes: Routes = [
  { path: "", redirectTo: "/app", pathMatch: "full" },
  {
    path: "index",
    component: LoginComponent,
  },
  {
    path: "app",
    component: HeaderComponent,
    canActivate: [AuthService],
    children: [
      {
        path: "dashboard",
        loadChildren: () =>
          import("./ui/dashboard/dashboard.module").then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: "project",
        loadChildren: () =>
          import("./ui/project/project.module").then((m) => m.ProjectModule),
      },
      {
        path: "user",
        loadChildren: () =>
          import("./ui/user/user.module").then((m) => m.UserModule),
      },
    ],
  },
  {
    path: "**",
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
