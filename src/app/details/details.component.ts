import { HttpService } from './../shared/http.service';
import { User } from './../shared/user.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  user: User | undefined;

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
    private router: Router
  ) {}
  ngOnInit(): void {
    const userId = Number(this.route.snapshot.paramMap.get('id'));

    this.httpService.getUsersById(userId).subscribe((data) => {
      this.user = data;
    });
  }

  goToUserPosts() {
    this.router.navigate(['/user', this.user?.id, 'posts']);
  }
}
