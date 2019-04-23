import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material-module";
import { SgDatepickerModule } from "projects/date-range-picker/src/public_api";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    SgDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
