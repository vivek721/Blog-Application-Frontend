import { Injectable, OnInit } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class BlogServiceService implements OnInit {
  public currentBlog;
  private allBlogs = [
    {
      blogId: "1",
      lastModified: "2017-10-20",
      created: "2017-10-20",
      tags: [],
      author: "admin",
      category: "comedy",
      isPublished: true,
      view: 0,
      bodyHtml: "this is blog body",
      description: "this is blog description",
      title: "First blog"
    },
    {
      blogId: "2",
      lastModified: "2017-10-20",
      created: "2017-10-20",
      tags: [],
      author: "admin",
      category: "romance",
      isPublished: true,
      view: 0,
      bodyHtml: "this is blog body",
      description: "this is blog description",
      title: "second blog"
    },
    {
      blogId: "3",
      lastModified: "2017-10-20",
      created: "2017-10-20",
      tags: [],
      author: "admin",
      category: "thriller",
      isPublished: true,
      view: 0,
      bodyHtml: "this is blog body",
      description: "this is blog description",
      title: "third blog"
    }
  ];

  constructor() {
    console.log("service constructor is called");
  }
  public getAllBlogs() {
    return this.allBlogs;
  }
  getSingleBlogInformation(currentBlogId: string): any {
    console.log("its fine");
    for (let blog of this.allBlogs) {
      if (blog.blogId == currentBlogId) {
        this.currentBlog = blog;
      }
    }
    return this.currentBlog;
  }
  ngOnInit() {}
}
