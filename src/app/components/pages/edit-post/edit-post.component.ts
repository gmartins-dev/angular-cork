import { PostService } from 'src/app/services/post.service';
import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/Moment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent implements OnInit {
  post!: Moment;
  btnText: string = 'Editar';

  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.postService.getPost(id).subscribe((item) => {
      this.post = item.data;
    });
  }
}
