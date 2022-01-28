import {Comments} from "../comment.interface";


export interface CommentResponse{
  data: Comments[];
  meta: any;
}
