import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Moment } from 'src/app/Moment';
import { PostService } from 'src/app/services/post.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allPosts: Moment[] = [];
  posts: Moment[] = [];
  baseApiUrel = environment.baseApiUrl;

  //searchbar

  constructor(private PostService: PostService) {}

  ngOnInit(): void {
    this.PostService.getPosts().subscribe((items) => {
      const data = items.data;

      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString(
          'pt-BR'
        );

        this.allPosts = data;
        this.posts = data;
      });
    });
  }
}
