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
  baseApiUrl = environment.baseApiUrl;

  searchTerm: string = '';
  faSearch = faSearch;

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
  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.posts = this.allPosts.filter((post) => {
      return post.title.toLowerCase().includes(value);
    });
  }
}
