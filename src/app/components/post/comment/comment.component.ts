import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../../services/httpService";
import {CommentResponse} from "../../../models/responses/commentResponse.interface";
import {Comments} from "../../../models/comment.interface";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  public comment: Comments[];
  constructor(private httpService: HttpService ) { }

  ngOnInit() {
    this.httpService.getComment().subscribe((commresp:CommentResponse)=>{
      this.comment = commresp.data
    });

  }

}
