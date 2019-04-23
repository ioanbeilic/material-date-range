import { Component, OnInit } from "@angular/core";

@Component({
  selector: "lib-date-range-picker",
  template: `
    <mat-form-field (click)="picker.open()" class="example-full-width">
      <input matInput [matDatepicker]="picker" placeholder="Choose a date" />
      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-datepicker touchUi #picker></mat-datepicker>
    </mat-form-field>
  `,
  styles: []
})
export class DateRangePickerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
