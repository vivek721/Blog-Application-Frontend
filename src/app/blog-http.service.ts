import { Injectable } from "@angular/core";
// importing http client
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class BlogHttpService {
  public allBlogs;
  public currentBlog;
  public baseUrl = "https://blogapp.edwisor.com/api/v1/blogs";
  public authToken =
    "NDU1MmE4OGU1YmQ5MTU3ODhkNjg2YzZmYjllYzgyMGQwYzgxYjljMmExZDM1YTRkZGZhNzVkYmQzYzIzMTY1ZmMxMzQyOWEwODQ2ZmM3Yzg0OGFhODdiYWUwMTY0YTkzMTlkNzcwZTk4ODllYzk5YzE3M2JmMjQ0ZWJiNGIyNGE2Yw==";

  constructor(private _http: HttpClient) {
    console.log("Blog http service was called");
  }
  public getAllBlogs(): any {
    let myResponse = this._http.get(
      this.baseUrl + "/all?authToken=" + this.authToken
    );
    console.log("this is service observable" + myResponse);
    return myResponse;
  }
  getSingleBlogInformation(currentBlogId: string): any {
    let currentBlog = this._http.get(
      this.baseUrl + "/view/" + currentBlogId + "?authToken=" + this.authToken
    );
    console.log(currentBlog);
    return currentBlog;
  }
  createBlog(blogData): any {
    let myResponse = this._http.post(
      this.baseUrl + "/create?authToken=" + this.authToken,
      blogData
    );
    return myResponse;
  }

  deleteBlog(currentBlogId): any {
    let currentBlog = this._http.post(
      this.baseUrl +
        "/" +
        currentBlogId +
        "/delete?authToken=" +
        this.authToken,
      currentBlogId
    );
    return currentBlog;
  }

  blogEdit(currentBlogId, blogData) {
    let myResponse = this._http.put(
      this.baseUrl + "/" + currentBlogId + "/edit?authToken=" + this.authToken,
      blogData
    );
    return myResponse;
  }
  ngOnInit() {}
}
