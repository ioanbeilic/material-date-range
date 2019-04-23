import { NgModule } from "@angular/core";
import { DateRangePickerComponent } from "./date-range-picker.component";
import { MaterialModule } from "src/app/material-module";

@NgModule({
  declarations: [DateRangePickerComponent],
  imports: [MaterialModule],
  exports: [DateRangePickerComponent]
})
export class DateRangePickerModule {}
