import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Moment } from 'src/app/Moment';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  post?: Moment;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.postService.getPost(id).subscribe((item) => (this.post = item.data));
  }
}
