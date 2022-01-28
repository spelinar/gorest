import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../services/httpService";
import {PostsResponse} from "../../models/responses/postsResponse.interface";
import {Post} from "../../models/post.interface";
import {Comments} from "../../models/comment.interface";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  public comment: Comments[];
  public posts: Post[];
  public id: string | null;

  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute) {
  }


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id)
    });

    this.httpService.getPosts().subscribe((resp: PostsResponse) => {
      this.posts = resp.data;
    });

  }
}
