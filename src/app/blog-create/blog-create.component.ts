import { Component, OnInit } from "@angular/core";
import { BlogHttpService } from "../blog-http.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-blog-create",
  templateUrl: "./blog-create.component.html",
  styleUrls: ["./blog-create.component.css"]
})
export class BlogCreateComponent implements OnInit {
  constructor(
    private httpService: BlogHttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}
  public blogTitle: string;
  public blogBodyHtml: string;
  public blogDescription: string;
  public blogCategory: string;
  public possibleCategories = ["Comedy", "Drama", "Action", "Technology"];

  createBlog(): any {
    let blogData = {
      title: this.blogTitle,
      description: this.blogDescription,
      blogBody: this.blogBodyHtml,
      category: this.blogCategory
    };
    console.log(blogData);
    this.httpService.createBlog(blogData).subscribe(
      data => {
        console.log(data.data.blogId);
        alert("blog was created Successfully");
        setTimeout(() => {
          this._router.navigate(["/blog", data.data.blogId]);
        }, 1000);
      },
      error => {
        console.log("error occured " + error.errorMessage);
      }
    );
  }
  ngOnInit() {}
}
