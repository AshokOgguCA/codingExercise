import { Component } from "@angular/core";
import { RouterModule, RouterOutlet } from "@angular/router";
import { AppModule } from "./app.module";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "ng-job-search";

  constructor() {
    console.log("hey");
  }
}
