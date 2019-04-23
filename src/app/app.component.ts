import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "material-date-range";
  from: any;
  to: any;

  test(e) {
    console.log("test");
    console.log(e);
    console.log(this.from);
    console.log(this.to);
  }
}
