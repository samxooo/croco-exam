import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  posts: any[] = [];
  todos: any[] = [];
  selectedPost: any;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getPosts().subscribe((items) => {
      this.posts = items;
      if (this.posts.length > 0) {
        const randomIndex = Math.floor(Math.random() * this.posts.length);
        this.selectedPost = this.posts[randomIndex];
      }
    });

    this.httpService.getTodos().subscribe((todo) => {
      this.todos = todo;
    });
  }
}
