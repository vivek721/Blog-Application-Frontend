import { Component, OnInit } from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";
import { BlogServiceService } from "../blog-service.service";
import { BlogHttpService } from "../blog-http.service";
import { Location } from "@angular/common";

@Component({
  selector: "app-blog-view",
  templateUrl: "./blog-view.component.html",
  styleUrls: ["./blog-view.component.css"],
  providers: [Location]
})
export class BlogViewComponent implements OnInit {
  public currentBlog;
  public currentBlogId;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private blogService: BlogHttpService,
    private location: Location
  ) {}
  ngOnInit() {
    this.currentBlogId = this._route.snapshot.paramMap.get("blogId");
    console.log("OnInit is called with " + this.currentBlogId);
    this.currentBlog = this.blogService
      .getSingleBlogInformation(this.currentBlogId)
      .subscribe(
        data => {
          console.log(data);
          this.currentBlog = data["data"];
        },
        error => {
          console.log("error occured " + error.errorMessage);
        }
      );
    console.log(this.currentBlog);
  }
  deleteThisBlog(): any {
    console.log("this is it " + this.currentBlogId);
    this.currentBlog = this.blogService
      .deleteBlog(this.currentBlogId)
      .subscribe(
        data => {
          console.log(data);
          alert("The Blog Was deleted");
          setTimeout(() => {
            this._router.navigate(["/home"]);
          }, 1000);
        },
        error => {
          console.log("error occured " + error.errorMessage);
        }
      );
  }
  goBackToPreviousPage() {
    this.location.back();
  }
}
