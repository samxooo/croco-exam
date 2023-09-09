import { User } from '../shared/user.model';
import { HttpService } from './../shared/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  users: any[] = [];

  constructor(private httpService: HttpService) {}


  ngOnInit(): void {
    this.httpService.getUsers().subscribe((items) => {
      this.users = items;
    })
  }
}
