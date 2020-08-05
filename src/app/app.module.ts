import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginComponent } from "./layout/login/login.component";
import { HeaderComponent } from "./layout/header/header.component";
import { SideNavComponent } from "./layout/side-nav/side-nav.component";

import { MaterialModule } from "./material.module";
import { HttpClientModule } from "@angular/common/http";
import { LoaderComponent } from "./shared/dynamic/loader/loader.component";
import { AlertComponent } from "./shared/dynamic/alert/alert.component";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SideNavComponent,
    LoaderComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
