import {Component, OnInit} from '@angular/core';
import {Users} from "../../models/user.interface";
import {HttpService} from "../../services/httpService";
import {UsersResponse} from "../../models/responses/usersResponse.interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public user: Users[];

  constructor(private httpService: HttpService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.httpService.getUser().subscribe((usresp: UsersResponse)=>{
    this.user = usresp.data
  });
    this.route.paramMap

    this.route.paramMap.subscribe(params =>{
     let id = params.get('id');
     console.log(id)
      }
    );
  };

}
