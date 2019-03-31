import { Component, OnInit } from "@angular/core";
import { BlogHttpService } from "../blog-http.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  public allBlogs;
  constructor(private blogHttpService: BlogHttpService) {
    console.log("home constructor is called");
  }

  ngOnInit() {
    this.allBlogs = this.blogHttpService.getAllBlogs().subscribe(
      data => {
        console.log("logging data");
        console.log(data);
        this.allBlogs = data["data"];
      },
      error => {
        console.log("error occued");
        console.log(error.errorMessage);
      }
    );
    console.log(this.allBlogs);
  }
}
