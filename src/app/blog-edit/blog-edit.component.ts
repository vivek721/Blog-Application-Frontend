import { Component, OnInit } from "@angular/core";
import { BlogHttpService } from "../blog-http.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-blog-edit",
  templateUrl: "./blog-edit.component.html",
  styleUrls: ["./blog-edit.component.css"]
})
export class BlogEditComponent implements OnInit {
  public currentBlog: any;
  public possibleCategories = ["Comedy", "Drama", "Action", "Technology"];
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private blogService: BlogHttpService
  ) {}
  public editThisBlog() {
    this.blogService
      .blogEdit(this.currentBlog.blogId, this.currentBlog)
      .subscribe(data => {
        alert("Blog Eddited Successfully");
        setTimeout(() => {
          this._router.navigate(["/blog", this.currentBlog.blogId]);
        }, 1000);
      });
  }
  ngOnInit() {
    let myBlogId = this._route.snapshot.paramMap.get("blogId");
    this.currentBlog = this.blogService
      .getSingleBlogInformation(myBlogId)
      .subscribe(
        data => {
          console.log(data);
          this.currentBlog = data["data"];
        },
        error => {
          console.log("error occured " + error.errorMessage);
        }
      );
  }
}
